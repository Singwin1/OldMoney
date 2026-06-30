import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function ConciergeSection() {
  const { lang } = useLang();
  const t = translations[lang].concierge;

  return (
    <section className="relative overflow-hidden bg-[#0e0d0c] px-6 py-32 sm:px-10">
      {/* subtle grain texture via radial gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left — text */}
          <div>
            <SectionReveal>
              <span className="text-xs tracking-[0.35em] text-[#b08d57]">
                {t.eyebrow}
              </span>
              <h2 className="mt-5 font-serif-display text-5xl leading-[1.08] text-[#faf7f0] sm:text-6xl">
                {t.title}
              </h2>
              <p className="mt-3 text-sm tracking-[0.1em] text-[#a09078] uppercase">
                {t.tagline}
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#faf7f0]/55">
                {t.body}
              </p>
            </SectionReveal>

            <SectionReveal delay={0.12} className="mt-10">
              <ul className="space-y-3.5">
                {t.services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-[#b08d57]/60" />
                    <span className="text-sm text-[#faf7f0]/70">{service}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>

          {/* Right — price + CTA */}
          <SectionReveal delay={0.18}>
            <div className="rounded-2xl border border-[#faf7f0]/8 bg-[#faf7f0]/[0.03] p-10">
              <div className="mb-2 flex items-end gap-2">
                <span className="font-serif-display text-5xl text-[#faf7f0]">
                  {t.price}
                </span>
                <span className="pb-1.5 text-sm text-[#faf7f0]/40">
                  {t.priceSub}
                </span>
              </div>
              <p className="mb-8 text-xs tracking-[0.08em] text-[#a09078]">
                {t.note}
              </p>

              <motion.a
                href="mailto:concierge@oldmoney.style"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block w-full rounded-full border border-[#b08d57]/50 py-4 text-center text-xs tracking-[0.18em] text-[#b08d57] transition-colors hover:border-[#b08d57] hover:bg-[#b08d57]/8 hover:text-[#faf7f0]"
              >
                {t.cta}
              </motion.a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
