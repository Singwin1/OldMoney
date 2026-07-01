import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

const STRIPE_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK as string | undefined;
const PRICE = "499 Kč";

const features = {
  cs: [
    "Všech 15 exkluzivních barevných palet",
    "Ukládání oblíbených looků (až 50)",
    "Sezónní kolekce — jaro, léto, podzim, zima",
    "Outfit styler pro muže & ženy",
    "Bez reklam",
    "One-time platba — bez měsíčního poplatku",
  ],
  en: [
    "All 15 exclusive color palettes",
    "Save favourite looks (up to 50)",
    "Seasonal collections — spring, summer, autumn, winter",
    "Outfit styler for men & women",
    "Ad-free",
    "One-time payment — no monthly fee",
  ],
};

type Step = "info" | "paying" | "success";

export default function PaymentPage() {
  const navigate = useNavigate();
  const { user, openAuth, upgradeToAtelier } = useAuth();
  const { lang } = useLang();
  const t = translations[lang];
  const feat = features[lang];

  const [step, setStep] = useState<Step>("info");
  const [cardNum, setCardNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  // if already atelier or higher, skip to success
  useEffect(() => {
    if (user && user.tier !== "free") setStep("success");
  }, [user]);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      openAuth();
      return;
    }

    if (STRIPE_LINK) {
      window.location.href = STRIPE_LINK;
      return;
    }

    // Demo: simulate payment → upgrade tier
    setStep("paying");
    setTimeout(() => {
      upgradeToAtelier();
      setStep("success");
    }, 1800);
  };

  const formatCard = (v: string) =>
    v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const formatExpiry = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length >= 3 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-ivory px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Back link */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mb-12 flex items-center gap-2 text-xs tracking-[0.14em] text-charcoal/45 transition-colors hover:text-navy"
        >
          <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
            <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {lang === "cs" ? "Zpět na úvod" : "Back to home"}
        </button>

        <AnimatePresence mode="wait">
          {step === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-20 text-center"
            >
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-camel/12">
                <svg viewBox="0 0 32 32" fill="none" className="h-10 w-10 text-camel">
                  <path d="M6 17l7 7L26 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h1 className="font-serif-display text-4xl text-navy sm:text-5xl">
                {lang === "cs" ? "Vítejte v Atelieru" : "Welcome to Atelier"}
              </h1>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-charcoal/60">
                {lang === "cs"
                  ? "Platba proběhla úspěšně. Máte nyní přístup ke všem 15 paletám a ukládání looků."
                  : "Payment successful. You now have access to all 15 palettes and look saving."}
              </p>
              <motion.button
                type="button"
                onClick={() => navigate("/")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="mt-10 rounded-full bg-navy px-10 py-4 text-sm tracking-[0.14em] text-ivory transition-shadow hover:shadow-lg"
              >
                {lang === "cs" ? "OTEVŘÍT STYLER" : "OPEN STYLER"}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start"
            >
              {/* Left — benefits */}
              <div>
                <span className="text-xs tracking-[0.35em] text-camel">
                  {lang === "cs" ? "ATELIER PŘÍSTUP" : "ATELIER ACCESS"}
                </span>
                <h1 className="mt-4 font-serif-display text-4xl text-navy sm:text-5xl">
                  {lang === "cs" ? "Plný přístup" : "Full access"}
                </h1>
                <p className="mt-3 text-base text-charcoal/60">
                  {lang === "cs"
                    ? "Jednorázová platba. Žádné předplatné, žádné skryté poplatky."
                    : "One-time payment. No subscription, no hidden fees."}
                </p>

                <ul className="mt-8 space-y-4">
                  {feat.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg viewBox="0 0 14 14" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-camel">
                        <path d="M2.5 7l3 3L11.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm leading-snug text-charcoal/75">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex items-end gap-2">
                  <span className="font-serif-display text-5xl text-navy">{PRICE}</span>
                  <span className="mb-1.5 text-sm text-charcoal/45">
                    {lang === "cs" ? "jednorázově" : "one-time"}
                  </span>
                </div>
              </div>

              {/* Right — payment form */}
              <div className="rounded-2xl border border-charcoal/10 bg-white/60 p-8 shadow-sm backdrop-blur-sm">
                {!user && (
                  <div className="mb-6 rounded-xl border border-camel/30 bg-camel/6 px-4 py-3 text-sm text-charcoal/70">
                    {lang === "cs"
                      ? "Pro platbu je nutné být přihlášen."
                      : "You need to be logged in to pay."}{" "}
                    <button
                      type="button"
                      onClick={openAuth}
                      className="font-medium text-navy underline underline-offset-2"
                    >
                      {t.auth.login}
                    </button>
                  </div>
                )}

                <form onSubmit={handlePay} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs tracking-[0.1em] text-charcoal/50">
                      {lang === "cs" ? "JMÉNO NA KARTĚ" : "NAME ON CARD"}
                    </label>
                    <input
                      type="text"
                      placeholder={lang === "cs" ? "Jan Novák" : "John Smith"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="rounded-xl border border-charcoal/15 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-camel focus:ring-1 focus:ring-camel/30"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs tracking-[0.1em] text-charcoal/50">
                      {lang === "cs" ? "ČÍSLO KARTY" : "CARD NUMBER"}
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="1234 5678 9012 3456"
                      value={cardNum}
                      onChange={(e) => setCardNum(formatCard(e.target.value))}
                      required
                      maxLength={19}
                      className="rounded-xl border border-charcoal/15 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-camel focus:ring-1 focus:ring-camel/30"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs tracking-[0.1em] text-charcoal/50">
                        {lang === "cs" ? "PLATNOST" : "EXPIRY"}
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="MM / YY"
                        value={expiry}
                        onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                        required
                        maxLength={7}
                        className="rounded-xl border border-charcoal/15 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-camel focus:ring-1 focus:ring-camel/30"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs tracking-[0.1em] text-charcoal/50">CVV</label>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                        required
                        maxLength={4}
                        className="rounded-xl border border-charcoal/15 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-camel focus:ring-1 focus:ring-camel/30"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={step === "paying"}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: step === "paying" ? 1 : 1.01 }}
                    className="mt-2 flex items-center justify-center gap-3 rounded-full bg-navy py-4 text-sm tracking-[0.14em] text-ivory transition-all hover:shadow-lg disabled:opacity-60"
                  >
                    {step === "paying" ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        {lang === "cs" ? "ZPRACOVÁVÁM..." : "PROCESSING..."}
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                          <rect x="1.5" y="4" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                          <path d="M1.5 7h13" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                        {lang === "cs" ? `ZAPLATIT ${PRICE}` : `PAY ${PRICE}`}
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-[11px] text-charcoal/35">
                    {lang === "cs"
                      ? "Bezpečná platba · SSL šifrování · Žádné opakované platby"
                      : "Secure payment · SSL encryption · No recurring charges"}
                  </p>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
