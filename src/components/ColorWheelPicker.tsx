import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { palettes, FREE_PALETTE_IDS } from "../data/palettes";
import { colorDistance } from "../utils/color";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { useAuth } from "../context/AuthContext";
import SectionReveal from "./SectionReveal";

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l * 100];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
  else if (max === g) h = ((b - r) / d + 2) * 60;
  else h = ((r - g) / d + 4) * 60;
  return [h, s * 100, l * 100];
}

// Collect unique swatch colors from all palettes, sorted for display
function buildColorGrid() {
  const seen = new Map<string, string>(); // hex -> name
  for (const palette of palettes) {
    for (const sw of palette.swatches) {
      if (!seen.has(sw.hex)) seen.set(sw.hex, sw.name);
    }
  }

  const achromatic: { hex: string; name: string }[] = [];
  const chromatic: { hex: string; name: string }[] = [];

  for (const [hex, name] of seen) {
    const [, s] = hexToHsl(hex);
    if (s < 12) achromatic.push({ hex, name });
    else chromatic.push({ hex, name });
  }

  // Darks → lights for achromatics
  achromatic.sort((a, b) => hexToHsl(a.hex)[2] - hexToHsl(b.hex)[2]);
  // By hue for chromatics
  chromatic.sort((a, b) => hexToHsl(a.hex)[0] - hexToHsl(b.hex)[0]);

  return [...achromatic, ...chromatic];
}

const COLOR_GRID = buildColorGrid();

type Props = {
  activePaletteId: string;
  onSelect: (id: string) => void;
};

export default function ColorWheelPicker({ activePaletteId, onSelect }: Props) {
  const { lang } = useLang();
  const { user, openAuth } = useAuth();
  const t = translations[lang].colorWheel;

  const [pickedHex, setPickedHex] = useState<string | null>(null);
  const [pickedName, setPickedName] = useState<string | null>(null);

  const isLocked = (id: string) =>
    !FREE_PALETTE_IDS.has(id) && (!user || user.tier === "free");

  const ranked = useMemo(
    () =>
      pickedHex
        ? [...palettes]
            .map((p) => ({
              palette: p,
              score: Math.min(...p.swatches.map((s) => colorDistance(pickedHex, s.hex))),
            }))
            .sort((a, b) => a.score - b.score)
        : palettes.map((p) => ({ palette: p, score: 0 })),
    [pickedHex]
  );

  const clearColor = () => {
    setPickedHex(null);
    setPickedName(null);
  };

  return (
    <section id="palety" className="bg-ivory px-4 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionReveal className="mb-10 text-center">
          <p className="text-xs tracking-[0.35em] text-camel">{t.eyebrow}</p>
          <h2 className="mt-3 font-serif-display text-3xl text-navy sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-charcoal/65 sm:text-base">
            {t.body}
          </p>
        </SectionReveal>

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* ── Color dot grid ──────────────────────────────── */}
          <div className="flex flex-col items-center gap-4 shrink-0">
            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: "repeat(8, 2.25rem)" }}
              role="group"
              aria-label={t.hint.replace("\n", " ")}
            >
              {COLOR_GRID.map(({ hex, name }) => {
                const isSelected = pickedHex === hex;
                const [, , l] = hexToHsl(hex);
                const ringColor = l > 70 ? "rgba(0,0,0,0.20)" : "rgba(255,255,255,0.55)";
                return (
                  <motion.button
                    key={hex}
                    type="button"
                    whileTap={{ scale: 0.85 }}
                    onClick={() => {
                      if (isSelected) clearColor();
                      else {
                        setPickedHex(hex);
                        setPickedName(name);
                      }
                    }}
                    title={name}
                    aria-label={name}
                    aria-pressed={isSelected}
                    className="h-9 w-9 rounded-full transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-camel"
                    style={{
                      backgroundColor: hex,
                      boxShadow: isSelected
                        ? `0 0 0 2.5px white, 0 0 0 4.5px ${hex}, 0 2px 10px rgba(0,0,0,0.2)`
                        : `0 0 0 1px ${ringColor}, 0 1px 3px rgba(0,0,0,0.08)`,
                    }}
                  />
                );
              })}
            </div>

            {/* Selected color chip / hint */}
            <AnimatePresence mode="wait">
              {pickedHex ? (
                <motion.div
                  key="chip"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2.5 rounded-full border border-charcoal/10 bg-white/70 px-4 py-1.5 shadow-sm"
                >
                  <span
                    className="h-4 w-4 rounded-full border border-charcoal/15 shadow-inner"
                    style={{ backgroundColor: pickedHex }}
                  />
                  <span className="text-[11px] text-charcoal/60">{pickedName}</span>
                  <span className="font-mono text-[10px] tracking-widest text-charcoal/35">
                    {pickedHex.toUpperCase()}
                  </span>
                  <button
                    type="button"
                    onClick={clearColor}
                    aria-label="Zrušit výběr barvy"
                    className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full text-charcoal/30 hover:bg-charcoal/8 hover:text-charcoal/70 transition-colors"
                  >
                    <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5">
                      <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </button>
                </motion.div>
              ) : (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[10px] tracking-[0.2em] text-charcoal/30"
                >
                  {t.allPalettes}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* ── Palette list ────────────────────────────── */}
          <div className="w-full min-w-0 flex-1">
            <AnimatePresence>
              {pickedHex && (
                <motion.p
                  key="label"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-4 text-[10px] tracking-[0.22em] text-camel"
                >
                  {t.sortedBy}
                </motion.p>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {ranked.map(({ palette, score: _score }, idx) => {
                const locked = isLocked(palette.id);
                const active = palette.id === activePaletteId;
                const tagline = lang === "en" ? palette.taglineEn : palette.tagline;
                const isTop = pickedHex && idx < 3;

                return (
                  <motion.button
                    key={palette.id}
                    layout
                    type="button"
                    onClick={() => {
                      if (locked) openAuth();
                      else onSelect(palette.id);
                    }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ layout: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } }}
                    className={`group relative flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors duration-200 ${
                      active
                        ? "border-camel bg-cream/80 shadow-sm"
                        : locked
                        ? "border-charcoal/8 bg-cream/20 opacity-55 hover:opacity-85"
                        : isTop
                        ? "border-camel/30 bg-cream/50 hover:border-camel/60 hover:bg-cream/70"
                        : "border-charcoal/10 bg-cream/20 hover:border-camel/35 hover:bg-cream/40"
                    }`}
                  >
                    {/* Swatch bar */}
                    <div className="flex h-10 w-14 shrink-0 overflow-hidden rounded-lg">
                      {palette.swatches.map((sw) => (
                        <div
                          key={sw.hex}
                          className="h-full flex-1"
                          style={{ backgroundColor: sw.hex }}
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif-display text-[15px] leading-tight text-navy">
                        {palette.name}
                      </p>
                      <p className="truncate text-[10px] tracking-wide text-charcoal/45 mt-0.5">
                        {tagline}
                      </p>
                    </div>

                    {/* Right badges */}
                    <div className="flex shrink-0 items-center gap-1.5">
                      {pickedHex && idx === 0 && (
                        <span className="hidden rounded-full bg-camel/15 px-2 py-0.5 text-[9px] tracking-[0.12em] text-camel sm:inline-block">
                          {t.bestMatch}
                        </span>
                      )}
                      {locked ? (
                        <svg viewBox="0 0 12 12" fill="none" className="h-3.5 w-3.5 text-charcoal/30">
                          <rect x="2" y="5.5" width="8" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M4 5.5V3.5a2 2 0 014 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      ) : active ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-navy">
                          <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                            <path d="M3 8.5L6.2 11.5L13 4.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      ) : (
                        <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-charcoal/20 transition-colors group-hover:text-camel/60">
                          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
