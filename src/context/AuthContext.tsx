import { createContext, useContext, useState, type ReactNode } from "react";

export type Tier = "free" | "atelier" | "concierge";
export type User = { email: string; tier: Tier };

type StoredUsers = Record<string, { password: string; tier: Tier }>;

type AuthContextValue = {
  user: User | null;
  login: (email: string, password: string) => "invalid" | null;
  register: (email: string, password: string) => "exists" | null;
  logout: () => void;
  authOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
};

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

const KEY_USERS = "om_users";
const KEY_SESSION = "om_session";

function getUsers(): StoredUsers {
  try {
    return JSON.parse(localStorage.getItem(KEY_USERS) ?? "{}");
  } catch {
    return {};
  }
}

function getSession(): User | null {
  try {
    const raw = localStorage.getItem(KEY_SESSION);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(getSession);
  const [authOpen, setAuthOpen] = useState(false);

  const login = (email: string, password: string): "invalid" | null => {
    const users = getUsers();
    const stored = users[email.toLowerCase()];
    if (!stored || stored.password !== password) return "invalid";
    const session: User = { email: email.toLowerCase(), tier: stored.tier };
    setUser(session);
    localStorage.setItem(KEY_SESSION, JSON.stringify(session));
    return null;
  };

  const register = (email: string, password: string): "exists" | null => {
    const users = getUsers();
    const key = email.toLowerCase();
    if (users[key]) return "exists";
    users[key] = { password, tier: "free" };
    localStorage.setItem(KEY_USERS, JSON.stringify(users));
    const session: User = { email: key, tier: "free" };
    setUser(session);
    localStorage.setItem(KEY_SESSION, JSON.stringify(session));
    return null;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(KEY_SESSION);
  };

  const openAuth = () => setAuthOpen(true);
  const closeAuth = () => setAuthOpen(false);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, authOpen, openAuth, closeAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
