import { motion } from "framer-motion";
import type { Palette } from "../data/palettes";
import { useLang } from "../context/LanguageContext";

type PaletteCardProps = {
  palette: Palette;
  active: boolean;
  onSelect: (id: string) => void;
};

export default function PaletteCard({
  palette,
  active,
  onSelect,
}: PaletteCardProps) {
  const { lang } = useLang();
  const tagline = lang === "en" ? palette.taglineEn : palette.tagline;
  const description = lang === "en" ? palette.descriptionEn : palette.description;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(palette.id)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border bg-cream/40 p-6 text-left shadow-sm transition-colors duration-300 ${
        active
          ? "border-camel shadow-md ring-1 ring-camel"
          : "border-charcoal/10 hover:border-camel/50"
      }`}
    >
      <div className="mb-5 flex h-16 overflow-hidden rounded-xl">
        {palette.swatches.map((swatch) => (
          <div
            key={swatch.name}
            className="h-full flex-1 transition-transform duration-300 group-hover:scale-y-105"
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

      {active && (
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
