import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, outfitPieces } from "../data/outfits";
import type { Category, Gender } from "../data/outfits";
import { palettes } from "../data/palettes";
import GenderSwitch from "./GenderSwitch";
import OutfitPieceCard from "./OutfitPieceCard";
import SectionReveal from "./SectionReveal";

type OutfitStylerProps = {
  activePaletteId: string;
  onSelectPalette: (id: string) => void;
};

function pickRandom<T>(items: T[], exclude?: T): T {
  if (items.length === 1) return items[0];
  const pool = exclude ? items.filter((i) => i !== exclude) : items;
  return pool[Math.floor(Math.random() * pool.length)] ?? items[0];
}

export default function OutfitStyler({
  activePaletteId,
  onSelectPalette,
}: OutfitStylerProps) {
  const [gender, setGender] = useState<Gender>("women");
  const [selection, setSelection] = useState<Record<Category, string>>(
    {} as Record<Category, string>
  );

  const grouped = useMemo(() => {
    const map = {} as Record<Category, typeof outfitPieces>;
    for (const category of categories) {
      map[category.id] = outfitPieces.filter(
        (p) =>
          p.gender === gender &&
          p.category === category.id &&
          p.paletteIds.includes(activePaletteId)
      );
    }
    return map;
  }, [gender, activePaletteId]);

  useEffect(() => {
    setSelection((prev) => {
      const next = { ...prev };
      for (const category of categories) {
        const options = grouped[category.id];
        if (!options.length) continue;
        const current = options.find((o) => o.id === prev[category.id]);
        next[category.id] = current ? current.id : options[0].id;
      }
      return next;
    });
  }, [grouped]);

  const activePalette = palettes.find((p) => p.id === activePaletteId);

  const handleShuffle = () => {
    setSelection((prev) => {
      const next = { ...prev };
      for (const category of categories) {
        const options = grouped[category.id];
        if (!options.length) continue;
        const currentPiece = options.find((o) => o.id === prev[category.id]);
        next[category.id] = pickRandom(options, currentPiece).id;
      }
      return next;
    });
  };

  return (
    <section
      id="styler"
      className="bg-gradient-to-b from-cream/60 to-ivory px-6 py-28 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mb-12 flex flex-col items-center text-center">
          <span className="text-xs tracking-[0.35em] text-camel">
            OUTFIT STYLER
          </span>
          <h2 className="mt-4 font-serif-display text-4xl text-navy sm:text-5xl">
            Sestavte si svůj look
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/70">
            Zvolte pohlaví a paletu — styler navrhne kompletní look po
            kategoriích. Tlačítkem níže vygenerujete novou variantu.
          </p>
        </SectionReveal>

        <SectionReveal
          delay={0.1}
          className="mb-12 flex flex-col items-center gap-6"
        >
          <GenderSwitch value={gender} onChange={setGender} />

          <div className="flex flex-wrap items-center justify-center gap-3">
            {palettes.map((palette) => (
              <button
                key={palette.id}
                type="button"
                onClick={() => onSelectPalette(palette.id)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs tracking-wide transition-colors duration-300 ${
                  palette.id === activePaletteId
                    ? "border-navy bg-navy text-ivory"
                    : "border-charcoal/15 text-charcoal/70 hover:border-camel hover:text-navy"
                }`}
              >
                <span className="flex h-3.5 w-7 overflow-hidden rounded-full">
                  {palette.swatches.slice(0, 3).map((s) => (
                    <span
                      key={s.name}
                      className="h-full flex-1"
                      style={{ backgroundColor: s.hex }}
                    />
                  ))}
                </span>
                {palette.name}
              </button>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={handleShuffle}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="group mt-2 inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3 text-sm tracking-[0.12em] text-ivory shadow-sm transition-shadow hover:shadow-lg"
          >
            <motion.svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-4 w-4"
              animate={{ rotate: 0 }}
              whileTap={{ rotate: 180 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <path
                d="M2 5.5h3.2l1.6-2h2.4l1.6 2H14M2 10.5h3.2l1.6 2h2.4l1.6-2H14"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 3.5 14 5.5l-2.5 2M11.5 12.5 14 10.5l-2.5-2"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
            GENEROVAT LOOK
          </motion.button>
        </SectionReveal>

        {activePalette && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${gender}-${activePaletteId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
            >
              <AnimatePresence mode="popLayout">
                {categories.map((category) => {
                  const pieceId = selection[category.id];
                  const piece = grouped[category.id]?.find(
                    (p) => p.id === pieceId
                  );
                  if (!piece) return null;
                  return <OutfitPieceCard key={piece.id} piece={piece} />;
                })}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
