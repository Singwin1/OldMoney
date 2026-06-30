import { motion } from "framer-motion";
import type { OutfitPiece } from "../data/outfits";
import { categories } from "../data/outfits";
import { useLang } from "../context/LanguageContext";

type OutfitPieceCardProps = {
  piece: OutfitPiece;
};

export default function OutfitPieceCard({ piece }: OutfitPieceCardProps) {
  const { lang } = useLang();
  const cat = categories.find((c) => c.id === piece.category);
  const label = lang === "en" ? cat?.labelEn : cat?.label;
  const name = lang === "en" ? piece.nameEn : piece.name;
  const fabric = lang === "en" ? piece.fabricEn : piece.fabric;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-2xl border border-charcoal/10 bg-cream/30 shadow-sm"
    >
      <div
        className="relative h-32 w-full"
        style={{ backgroundColor: piece.hex }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10" />
        <span className="absolute left-4 top-4 rounded-full bg-ivory/85 px-3 py-1 text-[10px] tracking-[0.14em] text-charcoal/80">
          {label?.toUpperCase()}
        </span>
      </div>
      <div className="p-5">
        <h4 className="font-serif-display text-xl text-navy">{name}</h4>
        <p className="mt-1 text-xs tracking-wide text-charcoal/55">{fabric}</p>
      </div>
    </motion.div>
  );
}
