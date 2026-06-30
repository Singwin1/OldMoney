import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const tiers = [
  {
    name: "Capsule",
    price: "Zdarma",
    tag: "Ideální na start",
    features: [
      "5 barevných palet",
      "Outfit styler (dámský & pánský)",
      "Rychlý start dle hlavního kusu",
      "Barevné kombinace",
    ],
    highlighted: false,
    ctaLabel: "Začít zdarma",
  },
  {
    name: "Atelier",
    price: "249 Kč",
    priceSub: "/ měsíc",
    tag: "Nejoblíbenější",
    features: [
      "Vše z Capsule",
      "Ukládání oblíbených looků",
      "Rozšířené palety (15+)",
      "Sezónní kolekce (jaro / zima…)",
      "Bez reklam",
    ],
    highlighted: true,
    ctaLabel: "Vyzkoušet Atelier",
  },
  {
    name: "Concierge",
    price: "890 Kč",
    priceSub: "/ měsíc",
    tag: "Osobní servis",
    features: [
      "Vše z Atelier",
      "Osobní stylista (1× měsíčně)",
      "Kurátorovaný nákupní seznam",
      "Prémiová podpora",
      "Early access na nové funkce",
    ],
    highlighted: false,
    ctaLabel: "Kontaktovat Concierge",
  },
];

export default function Membership() {
  return (
    <section id="clenstvi" className="bg-navy px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mb-16 flex flex-col items-center text-center text-ivory">
          <span className="text-xs tracking-[0.35em] text-tan">ATELIER</span>
          <h2 className="mt-4 font-serif-display text-4xl text-ivory sm:text-5xl">
            Zvolte si svou úroveň
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/65">
            Od bezplatného startu až po osobní concierge — každá úroveň
            přináší víc z estetiky starých peněz.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {tiers.map((tier, i) => (
            <SectionReveal key={tier.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex h-full flex-col rounded-2xl p-8 ${
                  tier.highlighted
                    ? "bg-ivory text-charcoal shadow-xl"
                    : "border border-ivory/15 bg-navy-light text-ivory"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-burgundy px-5 py-1.5 text-[10px] tracking-[0.2em] text-ivory">
                    {tier.tag}
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`font-serif-display text-2xl ${
                      tier.highlighted ? "text-navy" : "text-ivory"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="mt-3 flex items-end gap-1">
                    <span
                      className={`font-serif-display text-4xl ${
                        tier.highlighted ? "text-navy" : "text-tan"
                      }`}
                    >
                      {tier.price}
                    </span>
                    {tier.priceSub && (
                      <span
                        className={`pb-1 text-sm ${
                          tier.highlighted ? "text-charcoal/60" : "text-ivory/50"
                        }`}
                      >
                        {tier.priceSub}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className={`flex items-start gap-2.5 text-sm leading-snug ${
                        tier.highlighted ? "text-charcoal/75" : "text-ivory/70"
                      }`}
                    >
                      <svg
                        viewBox="0 0 14 14"
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                          tier.highlighted ? "text-camel" : "text-tan"
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
                    tier.highlighted
                      ? "bg-navy text-ivory hover:bg-navy-light"
                      : "border border-ivory/25 text-ivory hover:border-tan hover:text-tan"
                  }`}
                >
                  {tier.ctaLabel}
                </button>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
