import { createContext, useContext, useState, type ReactNode } from "react";

export type Tier = "free" | "atelier" | "concierge";
export type User = { email: string; tier: Tier };

type StoredEntry = { password: string; tier: Tier; registeredAt: number };
type StoredUsers = Record<string, StoredEntry>;

type AuthContextValue = {
  user: User | null;
  login: (email: string, password: string) => "invalid" | null;
  register: (email: string, password: string) => "exists" | null;
  logout: () => void;
  upgradeToAtelier: () => void;
  authOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
  // admin
  getAllUsers: () => Array<{ email: string; tier: Tier; registeredAt: number }>;
  setUserTier: (email: string, tier: Tier) => void;
  deleteUser: (email: string) => void;
};

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

const KEY_USERS = "om_users";
const KEY_SESSION = "om_session";

const DEV_SEEDS: StoredUsers = {
  "kozielmatyas@gmail.com": {
    password: "M4ts0n3k420!!",
    tier: "concierge",
    registeredAt: 1704067200000,
  },
};

function getUsers(): StoredUsers {
  try {
    const stored = JSON.parse(
      localStorage.getItem(KEY_USERS) ?? "{}"
    ) as StoredUsers;
    let changed = false;
    for (const [email, seed] of Object.entries(DEV_SEEDS)) {
      if (!stored[email]) {
        stored[email] = seed;
        changed = true;
      }
    }
    if (changed) localStorage.setItem(KEY_USERS, JSON.stringify(stored));
    return stored;
  } catch {
    localStorage.setItem(KEY_USERS, JSON.stringify(DEV_SEEDS));
    return { ...DEV_SEEDS };
  }
}

function saveUsers(users: StoredUsers) {
  localStorage.setItem(KEY_USERS, JSON.stringify(users));
}

function getSession(): User | null {
  try {
    const raw = localStorage.getItem(KEY_SESSION);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

function saveSession(user: User) {
  localStorage.setItem(KEY_SESSION, JSON.stringify(user));
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
    saveSession(session);
    return null;
  };

  const register = (email: string, password: string): "exists" | null => {
    const users = getUsers();
    const key = email.toLowerCase();
    if (users[key]) return "exists";
    users[key] = { password, tier: "free", registeredAt: Date.now() };
    saveUsers(users);
    const session: User = { email: key, tier: "free" };
    setUser(session);
    saveSession(session);
    return null;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(KEY_SESSION);
  };

  const upgradeToAtelier = () => {
    if (!user) return;
    const users = getUsers();
    const entry = users[user.email];
    if (!entry) return;
    if (entry.tier === "concierge") return;
    entry.tier = "atelier";
    saveUsers(users);
    const session: User = { email: user.email, tier: "atelier" };
    setUser(session);
    saveSession(session);
  };

  const getAllUsers = () => {
    const users = getUsers();
    return Object.entries(users).map(([email, entry]) => ({
      email,
      tier: entry.tier,
      registeredAt: entry.registeredAt ?? 0,
    }));
  };

  const setUserTier = (email: string, tier: Tier) => {
    const users = getUsers();
    if (!users[email]) return;
    users[email].tier = tier;
    saveUsers(users);
    // update current session if it's the same user
    if (user?.email === email) {
      const session: User = { email, tier };
      setUser(session);
      saveSession(session);
    }
  };

  const deleteUser = (email: string) => {
    if (email === "kozielmatyas@gmail.com") return; // protect dev account
    const users = getUsers();
    delete users[email];
    saveUsers(users);
    if (user?.email === email) logout();
  };

  const openAuth = () => setAuthOpen(true);
  const closeAuth = () => setAuthOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        upgradeToAtelier,
        authOpen,
        openAuth,
        closeAuth,
        getAllUsers,
        setUserTier,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
