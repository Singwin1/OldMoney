import SectionReveal from "./SectionReveal";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang].footer;

  return (
    <footer
      id="o-projektu"
      className="border-t border-charcoal/10 bg-navy px-6 py-16 text-ivory sm:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <SectionReveal>
          <span className="font-serif-display text-2xl tracking-[0.18em]">
            OLD&nbsp;MONEY
          </span>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ivory/65">
            {t.tagline}
          </p>
        </SectionReveal>
        <div className="mt-10 h-px w-16 bg-gold/40" />
        <p className="mt-6 text-xs tracking-[0.2em] text-ivory/40">
          OLD MONEY STYLE &middot; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
