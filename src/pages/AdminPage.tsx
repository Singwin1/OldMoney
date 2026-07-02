import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth, type Tier } from "../context/AuthContext";

type UserRow = { email: string; tier: Tier; registeredAt: number };

const TIER_COLORS: Record<Tier, string> = {
  free: "bg-charcoal/8 text-charcoal/60",
  atelier: "bg-camel/12 text-camel",
  concierge: "bg-navy/10 text-navy",
};

const TIER_ORDER: Tier[] = ["free", "atelier", "concierge"];

export default function AdminPage() {
  const navigate = useNavigate();
  const { user, loading, getAllUsers, setUserTier, deleteUser } = useAuth();
  const [users, setUsers] = useState<UserRow[]>([]);
  const [fetching, setFetching] = useState(true);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && (!user || user.tier !== "concierge")) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  const fetchUsers = useCallback(async () => {
    setFetching(true);
    const all = await getAllUsers();
    setUsers(all.sort((a, b) => b.registeredAt - a.registeredAt));
    setFetching(false);
  }, [getAllUsers]);

  useEffect(() => {
    if (user?.tier === "concierge") fetchUsers();
  }, [user, fetchUsers]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleTierChange = async (email: string, tier: Tier) => {
    await setUserTier(email, tier);
    await fetchUsers();
    showToast(`${email} → ${tier}`);
  };

  const handleDelete = async (email: string) => {
    if (!confirm(`Smazat profil ${email}?`)) return;
    await deleteUser(email);
    await fetchUsers();
    showToast(`${email} smazán`);
  };

  const filtered = users.filter((u) =>
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const counts = {
    total: users.length,
    free: users.filter((u) => u.tier === "free").length,
    atelier: users.filter((u) => u.tier === "atelier").length,
    concierge: users.filter((u) => u.tier === "concierge").length,
  };

  if (loading || !user || user.tier !== "concierge") return null;

  return (
    <div className="min-h-screen bg-ivory px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="mb-3 flex items-center gap-1.5 text-xs tracking-[0.12em] text-charcoal/40 transition-colors hover:text-navy"
            >
              <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              ZPĚT
            </button>
            <h1 className="font-serif-display text-4xl text-navy">Admin panel</h1>
            <p className="mt-1 text-sm text-charcoal/50">Správa uživatelů · {user.email}</p>
          </div>
          <span className="rounded-full bg-navy/8 px-4 py-2 text-xs tracking-[0.12em] text-navy">
            CONCIERGE
          </span>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Celkem", value: counts.total },
            { label: "Capsule (free)", value: counts.free },
            { label: "Atelier", value: counts.atelier },
            { label: "Concierge", value: counts.concierge },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-charcoal/10 bg-cream/50 px-6 py-5">
              <p className="text-xs tracking-[0.1em] text-charcoal/45">{s.label.toUpperCase()}</p>
              <p className="mt-1 font-serif-display text-3xl text-navy">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6 flex items-center gap-3">
          <div className="relative flex-1">
            <svg viewBox="0 0 16 16" fill="none" className="absolute left-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-charcoal/35">
              <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Hledat e-mail…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-charcoal/12 bg-cream/40 py-3 pl-10 pr-4 text-sm text-charcoal outline-none focus:border-camel focus:ring-1 focus:ring-camel/25"
            />
          </div>
          <button
            type="button"
            onClick={fetchUsers}
            className="rounded-xl border border-charcoal/12 bg-cream/40 px-4 py-3 text-xs tracking-[0.1em] text-charcoal/50 transition-colors hover:text-navy"
          >
            ↻
          </button>
          <span className="text-xs text-charcoal/40">{filtered.length} uživatelů</span>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60 shadow-sm">
          {fetching ? (
            <div className="flex items-center justify-center py-16 text-sm text-charcoal/35">
              Načítám…
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-charcoal/8 bg-cream/60">
                  <th className="px-6 py-4 text-left text-[10px] tracking-[0.14em] text-charcoal/45 font-medium">E-MAIL</th>
                  <th className="px-6 py-4 text-left text-[10px] tracking-[0.14em] text-charcoal/45 font-medium">REGISTRACE</th>
                  <th className="px-6 py-4 text-left text-[10px] tracking-[0.14em] text-charcoal/45 font-medium">TIER</th>
                  <th className="px-6 py-4 text-left text-[10px] tracking-[0.14em] text-charcoal/45 font-medium">ZMĚNIT</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filtered.map((u, i) => (
                    <motion.tr
                      key={u.email}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="border-b border-charcoal/6 last:border-0 hover:bg-cream/30 transition-colors"
                    >
                      <td className="px-6 py-4 text-charcoal/80">{u.email}</td>
                      <td className="px-6 py-4 text-charcoal/40 text-xs">
                        {u.registeredAt
                          ? new Date(u.registeredAt).toLocaleDateString("cs-CZ")
                          : "—"}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`rounded-full px-3 py-1 text-xs tracking-[0.08em] ${TIER_COLORS[u.tier]}`}>
                          {u.tier === "free" ? "Capsule" : u.tier.charAt(0).toUpperCase() + u.tier.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {TIER_ORDER.filter((t) => t !== u.tier).map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => handleTierChange(u.email, t)}
                              className="rounded-full border border-charcoal/12 px-3 py-1 text-[10px] tracking-[0.1em] text-charcoal/45 transition-colors hover:border-camel hover:text-navy"
                            >
                              → {t}
                            </button>
                          ))}
                          {u.email !== "kozielmatyas@gmail.com" && (
                            <button
                              type="button"
                              onClick={() => handleDelete(u.email)}
                              className="rounded-full border border-transparent px-2 py-1 text-[10px] text-charcoal/25 transition-colors hover:border-burgundy/30 hover:text-burgundy"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
                {filtered.length === 0 && !fetching && (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-sm text-charcoal/35">
                      Žádní uživatelé
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-navy px-6 py-3 text-xs tracking-[0.1em] text-ivory shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
