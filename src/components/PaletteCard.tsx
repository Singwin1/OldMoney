import { motion } from "framer-motion";
import type { Palette } from "../data/palettes";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

type PaletteCardProps = {
  palette: Palette;
  active: boolean;
  locked: boolean;
  onSelect: (id: string) => void;
  onUnlock: () => void;
};

export default function PaletteCard({
  palette,
  active,
  locked,
  onSelect,
  onUnlock,
}: PaletteCardProps) {
  const { lang } = useLang();
  const tagline = lang === "en" ? palette.taglineEn : palette.tagline;
  const description = lang === "en" ? palette.descriptionEn : palette.description;
  const t = translations[lang].auth;

  const handleClick = () => {
    if (locked) {
      onUnlock();
    } else {
      onSelect(palette.id);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border bg-cream/40 p-6 text-left shadow-sm transition-colors duration-300 ${
        active
          ? "border-camel shadow-md ring-1 ring-camel"
          : locked
          ? "border-charcoal/8 opacity-70 hover:opacity-100 hover:border-camel/40"
          : "border-charcoal/10 hover:border-camel/50"
      }`}
    >
      <div className="mb-5 flex h-16 overflow-hidden rounded-xl">
        {palette.swatches.map((swatch) => (
          <div
            key={swatch.name}
            className={`h-full flex-1 transition-transform duration-300 group-hover:scale-y-105 ${locked ? "saturate-50" : ""}`}
            style={{ backgroundColor: swatch.hex }}
            title={swatch.name}
          />
        ))}
      </div>

      <h3 className="font-serif-display text-2xl text-navy">
        {palette.name}
      </h3>
      <p className="mt-1 text-xs tracking-[0.12em] text-camel uppercase">
        {tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
        {description}
      </p>

      {locked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-ivory/80 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-6 w-6 text-navy">
            <rect x="4" y="9" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 9V6a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[10px] tracking-[0.2em] text-navy">{t.unlock}</span>
        </motion.div>
      )}

      {locked && (
        <div className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal/10">
          <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3 text-charcoal/50">
            <rect x="2" y="5.5" width="8" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M4 5.5V3.5a2 2 0 014 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      )}

      {active && !locked && (
        <motion.div
          layoutId="palette-active-badge"
          className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-navy text-ivory"
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path
              d="M3 8.5L6.2 11.5L13 4.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
}
