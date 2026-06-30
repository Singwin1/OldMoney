import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

const tiersMeta = [
  { price: null, highlighted: false },
  { price: "249 Kč", highlighted: true },
  { price: "890 Kč", highlighted: false },
] as const;

export default function Membership() {
  const { lang } = useLang();
  const t = translations[lang].membership;

  return (
    <section id="clenstvi" className="bg-navy px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mb-16 flex flex-col items-center text-center text-ivory">
          <span className="text-xs tracking-[0.35em] text-tan">{t.eyebrow}</span>
          <h2 className="mt-4 font-serif-display text-4xl text-ivory sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/65">
            {t.body}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {tiersMeta.map((meta, i) => {
            const tierT = t.tiers[i];
            const price = meta.price ?? t.free;
            const priceSub = meta.price ? t.month : undefined;

            return (
              <SectionReveal key={tierT.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex h-full flex-col rounded-2xl p-8 ${
                    meta.highlighted
                      ? "bg-ivory text-charcoal shadow-xl"
                      : "border border-ivory/15 bg-navy-light text-ivory"
                  }`}
                >
                  {meta.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-burgundy px-5 py-1.5 text-[10px] tracking-[0.2em] text-ivory">
                      {t.mostPopular}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3
                      className={`font-serif-display text-2xl ${
                        meta.highlighted ? "text-navy" : "text-ivory"
                      }`}
                    >
                      {tierT.name}
                    </h3>
                    <div className="mt-3 flex items-end gap-1">
                      <span
                        className={`font-serif-display text-4xl ${
                          meta.highlighted ? "text-navy" : "text-tan"
                        }`}
                      >
                        {price}
                      </span>
                      {priceSub && (
                        <span
                          className={`pb-1 text-sm ${
                            meta.highlighted ? "text-charcoal/60" : "text-ivory/50"
                          }`}
                        >
                          {priceSub}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {tierT.features.map((feat) => (
                      <li
                        key={feat}
                        className={`flex items-start gap-2.5 text-sm leading-snug ${
                          meta.highlighted ? "text-charcoal/75" : "text-ivory/70"
                        }`}
                      >
                        <svg
                          viewBox="0 0 14 14"
                          className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                            meta.highlighted ? "text-camel" : "text-tan"
                          }`}
                          fill="none"
                        >
                          <path
                            d="M2.5 7l3 3L11.5 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`w-full rounded-full py-3 text-sm tracking-[0.1em] transition-colors duration-300 ${
                      meta.highlighted
                        ? "bg-navy text-ivory hover:bg-navy-light"
                        : "border border-ivory/25 text-ivory hover:border-tan hover:text-tan"
                    }`}
                  >
                    {tierT.cta}
                  </button>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
