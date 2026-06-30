import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, outfitPieces } from "../data/outfits";
import type { Category, Gender, Season } from "../data/outfits";
import { palettes, FREE_PALETTE_IDS } from "../data/palettes";
import GenderSwitch from "./GenderSwitch";
import OutfitPieceCard from "./OutfitPieceCard";
import SectionReveal from "./SectionReveal";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { useAuth } from "../context/AuthContext";

type OutfitStylerProps = {
  activePaletteId: string;
  onSelectPalette: (id: string) => void;
};

function getCurrentSeason(): Season {
  const m = new Date().getMonth();
  if (m >= 2 && m <= 4) return "spring";
  if (m >= 5 && m <= 8) return "summer";
  if (m >= 9 && m <= 10) return "autumn";
  return "winter";
}

const seasonOrder: Season[] = ["spring", "summer", "autumn", "winter"];

function pickRandom<T>(items: T[], exclude?: T): T {
  if (items.length === 1) return items[0];
  const pool = exclude ? items.filter((i) => i !== exclude) : items;
  return pool[Math.floor(Math.random() * pool.length)] ?? items[0];
}

type SavedLook = {
  id: string;
  gender: Gender;
  season: Season;
  paletteId: string;
  selection: Record<Category, string>;
  savedAt: number;
};

const SAVED_LOOKS_KEY = "om_saved_looks";

function getSavedLooks(): SavedLook[] {
  try {
    return JSON.parse(localStorage.getItem(SAVED_LOOKS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export default function OutfitStyler({
  activePaletteId,
  onSelectPalette,
}: OutfitStylerProps) {
  const [gender, setGender] = useState<Gender>("women");
  const [season, setSeason] = useState<Season>(getCurrentSeason);
  const [selection, setSelection] = useState<Record<Category, string>>(
    {} as Record<Category, string>
  );
  const [justSaved, setJustSaved] = useState(false);

  const { lang } = useLang();
  const t = translations[lang];
  const { user, openAuth } = useAuth();

  const isLocked = (paletteId: string) => {
    if (FREE_PALETTE_IDS.has(paletteId)) return false;
    return !user || user.tier === "free";
  };

  const canSave = user && user.tier !== "free";

  const grouped = useMemo(() => {
    const map = {} as Record<Category, typeof outfitPieces>;
    for (const category of categories) {
      map[category.id] = outfitPieces.filter(
        (p) =>
          p.gender === gender &&
          p.category === category.id &&
          p.paletteIds.includes(activePaletteId) &&
          p.seasons.includes(season)
      );
    }
    return map;
  }, [gender, activePaletteId, season]);

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

  const handleSave = () => {
    if (!canSave) {
      openAuth();
      return;
    }
    const looks = getSavedLooks();
    const newLook: SavedLook = {
      id: `${Date.now()}`,
      gender,
      season,
      paletteId: activePaletteId,
      selection: { ...selection },
      savedAt: Date.now(),
    };
    looks.unshift(newLook);
    localStorage.setItem(SAVED_LOOKS_KEY, JSON.stringify(looks.slice(0, 50)));
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2200);
  };

  const hasAnyPieces = categories.some((c) => grouped[c.id]?.length > 0);

  return (
    <section
      id="styler"
      className="bg-gradient-to-b from-cream/60 to-ivory px-6 py-28 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mb-12 flex flex-col items-center text-center">
          <span className="text-xs tracking-[0.35em] text-camel">
            {t.styler.eyebrow}
          </span>
          <h2 className="mt-4 font-serif-display text-4xl text-navy sm:text-5xl">
            {t.styler.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/70">
            {t.styler.body}
          </p>
        </SectionReveal>

        <SectionReveal
          delay={0.1}
          className="mb-12 flex flex-col items-center gap-6"
        >
          <GenderSwitch value={gender} onChange={setGender} />

          {/* Season selector */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {seasonOrder.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSeason(s)}
                className={`rounded-full border px-5 py-1.5 text-xs tracking-[0.12em] transition-colors duration-300 ${
                  season === s
                    ? "border-camel bg-camel/10 text-navy font-medium"
                    : "border-charcoal/15 text-charcoal/60 hover:border-camel/50 hover:text-navy"
                }`}
              >
                {t.seasons[s]}
              </button>
            ))}
          </div>

          {/* Palette chips */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {palettes.map((palette) => {
              const locked = isLocked(palette.id);
              return (
                <button
                  key={palette.id}
                  type="button"
                  onClick={() => {
                    if (locked) {
                      openAuth();
                    } else {
                      onSelectPalette(palette.id);
                    }
                  }}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs tracking-wide transition-colors duration-300 ${
                    palette.id === activePaletteId
                      ? "border-navy bg-navy text-ivory"
                      : locked
                      ? "border-charcoal/10 text-charcoal/35"
                      : "border-charcoal/15 text-charcoal/70 hover:border-camel hover:text-navy"
                  }`}
                >
                  <span className={`flex h-3.5 w-7 overflow-hidden rounded-full ${locked ? "saturate-0 opacity-50" : ""}`}>
                    {palette.swatches.slice(0, 3).map((s) => (
                      <span
                        key={s.name}
                        className="h-full flex-1"
                        style={{ backgroundColor: s.hex }}
                      />
                    ))}
                  </span>
                  {locked ? (
                    <svg viewBox="0 0 10 12" fill="none" className="h-2.5 w-2.5 text-charcoal/35">
                      <rect x="1" y="5" width="8" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M3 5V3.5a2 2 0 014 0V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    palette.name
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              onClick={handleShuffle}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              disabled={!hasAnyPieces}
              className="group mt-2 inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3 text-sm tracking-[0.12em] text-ivory shadow-sm transition-shadow hover:shadow-lg disabled:opacity-40"
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
              {t.styler.generate}
            </motion.button>

            <motion.button
              type="button"
              onClick={handleSave}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              disabled={!hasAnyPieces}
              className={`mt-2 inline-flex items-center gap-2 rounded-full border px-7 py-3 text-sm tracking-[0.12em] shadow-sm transition-all disabled:opacity-40 ${
                justSaved
                  ? "border-camel bg-camel/10 text-camel"
                  : "border-charcoal/20 text-charcoal/60 hover:border-camel hover:text-navy"
              }`}
            >
              <svg viewBox="0 0 16 16" fill={justSaved ? "currentColor" : "none"} className="h-4 w-4">
                <path
                  d="M8 13.5S2 9.5 2 5.5A3.5 3.5 0 018 3.6 3.5 3.5 0 0114 5.5c0 4-6 8-6 8z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {justSaved ? t.styler.lookSaved : t.styler.saveLook}
            </motion.button>
          </div>
        </SectionReveal>

        {activePalette && (
          <AnimatePresence mode="wait">
            {hasAnyPieces ? (
              <motion.div
                key={`${gender}-${activePaletteId}-${season}`}
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
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-3 py-16 text-center"
              >
                <p className="font-serif-display text-2xl text-navy">
                  {t.seasons.emptyTitle}
                </p>
                <p className="text-sm text-charcoal/55">{t.seasons.emptyBody}</p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
