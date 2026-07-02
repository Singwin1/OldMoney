import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function AuthModal() {
  const { authOpen, closeAuth, login, register } = useAuth();
  const { lang } = useLang();
  const t = translations[lang].auth;

  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const reset = () => {
    setEmail("");
    setPassword("");
    setError(null);
  };

  const handleTab = (next: "login" | "register") => {
    setTab(next);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    if (tab === "login") {
      const err = await login(email, password);
      if (err === "invalid") {
        setError(t.errorInvalid);
      } else {
        reset();
        closeAuth();
      }
    } else {
      const err = await register(email, password);
      if (err === "exists") {
        setError(t.errorExists);
      } else if (err === "error") {
        setError(lang === "cs" ? "Chyba registrace. Zkuste znovu." : "Registration error. Please try again.");
      } else {
        reset();
        closeAuth();
      }
    }
    setSubmitting(false);
  };

  return (
    <AnimatePresence>
      {authOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-navy/60 backdrop-blur-sm"
            onClick={() => { closeAuth(); reset(); }}
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-1/2 z-[70] w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-ivory p-8 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => { closeAuth(); reset(); }}
              className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full text-charcoal/40 transition-colors hover:bg-charcoal/8 hover:text-charcoal"
              aria-label="Close"
            >
              <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div className="mb-8 flex rounded-full border border-charcoal/12 bg-cream/60 p-1">
              {(["login", "register"] as const).map((t_tab) => (
                <button
                  key={t_tab}
                  type="button"
                  onClick={() => handleTab(t_tab)}
                  className={`flex-1 rounded-full py-2 text-xs tracking-[0.12em] transition-colors duration-300 ${
                    tab === t_tab
                      ? "bg-navy text-ivory shadow-sm"
                      : "text-charcoal/55 hover:text-navy"
                  }`}
                >
                  {t_tab === "login" ? t.login.toUpperCase() : t.register.toUpperCase()}
                </button>
              ))}
            </div>

            <h2 className="mb-6 font-serif-display text-2xl text-navy">
              {tab === "login" ? t.loginTitle : t.registerTitle}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-[0.1em] text-charcoal/55">
                  {t.email.toUpperCase()}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl border border-charcoal/15 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-camel focus:ring-1 focus:ring-camel/30"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-[0.1em] text-charcoal/55">
                  {t.password.toUpperCase()}
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-xl border border-charcoal/15 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-camel focus:ring-1 focus:ring-camel/30"
                />
              </div>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-burgundy"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={submitting}
                whileTap={{ scale: 0.97 }}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-navy py-3 text-xs tracking-[0.14em] text-ivory transition-colors hover:bg-navy/85 disabled:opacity-60"
              >
                {submitting ? (
                  <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                ) : null}
                {tab === "login" ? t.loginCta : t.registerCta}
              </motion.button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
