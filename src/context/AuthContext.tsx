import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { supabase } from "../lib/supabase";

export type Tier = "free" | "atelier" | "concierge";
export type User = { id: string; email: string; tier: Tier };

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<"invalid" | null>;
  register: (email: string, password: string) => Promise<"exists" | "error" | null>;
  logout: () => Promise<void>;
  upgradeToAtelier: () => Promise<void>;
  authOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
  // admin
  getAllUsers: () => Promise<Array<{ email: string; tier: Tier; registeredAt: number }>>;
  setUserTier: (email: string, tier: Tier) => Promise<void>;
  deleteUser: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

async function fetchTier(id: string): Promise<Tier> {
  const { data } = await supabase
    .from("user_profiles")
    .select("tier")
    .eq("id", id)
    .single();
  return (data?.tier as Tier) ?? "free";
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user) {
        const tier = await fetchTier(session.user.id);
        setUser({ id: session.user.id, email: session.user.email!, tier });
      }
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const tier = await fetchTier(session.user.id);
        setUser({ id: session.user.id, email: session.user.email!, tier });
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<"invalid" | null> => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return "invalid";
    return null;
  };

  const register = async (
    email: string,
    password: string
  ): Promise<"exists" | "error" | null> => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      if (
        error.message.toLowerCase().includes("already registered") ||
        error.message.toLowerCase().includes("already exists")
      )
        return "exists";
      return "error";
    }
    return null;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const upgradeToAtelier = async () => {
    if (!user || user.tier !== "free") return;
    await supabase.rpc("upgrade_to_atelier", { user_id: user.id });
    setUser({ ...user, tier: "atelier" });
  };

  const getAllUsers = async () => {
    const { data } = await supabase
      .from("user_profiles")
      .select("email, tier, created_at")
      .order("created_at", { ascending: false });
    return (data ?? []).map((u) => ({
      email: u.email as string,
      tier: u.tier as Tier,
      registeredAt: new Date(u.created_at as string).getTime(),
    }));
  };

  const setUserTier = async (email: string, tier: Tier) => {
    await supabase.from("user_profiles").update({ tier }).eq("email", email);
    if (user?.email === email) setUser({ ...user, tier });
  };

  const deleteUser = async (email: string) => {
    if (email === "kozielmatyas@gmail.com") return;
    await supabase.from("user_profiles").delete().eq("email", email);
  };

  const openAuth = () => setAuthOpen(true);
  const closeAuth = () => setAuthOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
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
