import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { palettes, FREE_PALETTE_IDS } from "../data/palettes";
import { colorDistance } from "../utils/color";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { useAuth } from "../context/AuthContext";
import SectionReveal from "./SectionReveal";

// Convert HSL to hex
function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const c = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * c)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

type Props = {
  activePaletteId: string;
  onSelect: (id: string) => void;
};

export default function ColorWheelPicker({ activePaletteId, onSelect }: Props) {
  const { lang } = useLang();
  const { user, openAuth } = useAuth();
  const t = translations[lang].colorWheel;

  const [pickedHex, setPickedHex] = useState<string | null>(null);
  const [selectorPos, setSelectorPos] = useState<{ x: number; y: number } | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const isLocked = (id: string) =>
    !FREE_PALETTE_IDS.has(id) && (!user || user.tier === "free");

  const extractColor = useCallback((clientX: number, clientY: number) => {
    const el = wheelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = clientX - rect.left - cx;
    const dy = clientY - rect.top - cy;
    const radius = rect.width / 2 - 2;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > radius) return;

    // angle: 0° = top, clockwise — matches CSS conic-gradient
    const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
    const hue = ((angleDeg + 90) + 360) % 360;
    const sat = (dist / radius) * 80 + 10; // 10–90 %
    const lit = 55 - (dist / radius) * 15; // 55–40 %
    const hex = hslToHex(hue, sat, lit);
    setPickedHex(hex);
    setSelectorPos({ x: dx + cx, y: dy + cy });
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    extractColor(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    extractColor(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const ranked = pickedHex
    ? [...palettes]
        .map((p) => ({
          palette: p,
          score: Math.min(...p.swatches.map((s) => colorDistance(pickedHex, s.hex))),
        }))
        .sort((a, b) => a.score - b.score)
    : palettes.map((p) => ({ palette: p, score: 0 }));

  const clearColor = () => {
    setPickedHex(null);
    setSelectorPos(null);
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
          {/* ── Color wheel ─────────────────────────────── */}
          <div className="flex flex-col items-center gap-4 shrink-0">
            <div className="relative">
              <div
                ref={wheelRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="h-[260px] w-[260px] cursor-crosshair touch-none select-none rounded-full sm:h-[300px] sm:w-[300px]"
                style={{
                  background: `
                    radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 28%, transparent 62%),
                    conic-gradient(
                      hsl(0,80%,55%) 0deg,
                      hsl(30,80%,55%) 30deg,
                      hsl(60,80%,55%) 60deg,
                      hsl(90,80%,55%) 90deg,
                      hsl(120,80%,55%) 120deg,
                      hsl(150,80%,55%) 150deg,
                      hsl(180,80%,55%) 180deg,
                      hsl(210,80%,55%) 210deg,
                      hsl(240,80%,55%) 240deg,
                      hsl(270,80%,55%) 270deg,
                      hsl(300,80%,55%) 300deg,
                      hsl(330,80%,55%) 330deg,
                      hsl(360,80%,55%) 360deg
                    )
                  `,
                  boxShadow:
                    "0 4px 32px rgba(27,42,61,0.12), inset 0 0 0 1px rgba(27,42,61,0.06)",
                }}
                role="slider"
                aria-label={t.hint.replace("\n", " ")}
              >
                {/* Selector dot */}
                <AnimatePresence>
                  {selectorPos && (
                    <motion.div
                      key="dot"
                      className="pointer-events-none absolute rounded-full border-2 border-white"
                      style={{
                        width: 22,
                        height: 22,
                        left: selectorPos.x - 11,
                        top: selectorPos.y - 11,
                        backgroundColor: pickedHex ?? "transparent",
                        boxShadow:
                          "0 0 0 1.5px rgba(0,0,0,0.18), 0 2px 10px rgba(0,0,0,0.25)",
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 480, damping: 26 }}
                    />
                  )}
                </AnimatePresence>

                {/* Centre hint */}
                {!pickedHex && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <p className="max-w-[110px] whitespace-pre-line text-center text-[11px] leading-relaxed text-charcoal/35">
                      {t.hint}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Picked color chip */}
            <AnimatePresence>
              {pickedHex && (
                <motion.div
                  key="chip"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-2.5 rounded-full border border-charcoal/10 bg-white/70 px-4 py-1.5 shadow-sm"
                >
                  <span
                    className="h-4 w-4 rounded-full border border-charcoal/15 shadow-inner"
                    style={{ backgroundColor: pickedHex }}
                  />
                  <span className="font-mono text-[11px] tracking-widest text-charcoal/55">
                    {pickedHex.toUpperCase()}
                  </span>
                  <button
                    type="button"
                    onClick={clearColor}
                    aria-label="Zrušit výběr barvy"
                    className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full text-charcoal/30 hover:bg-charcoal/8 hover:text-charcoal/70 transition-colors"
                  >
                    <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5">
                      <path
                        d="M2 2l6 6M8 2l-6 6"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Static label when no color */}
            {!pickedHex && (
              <p className="text-[10px] tracking-[0.2em] text-charcoal/30">
                {t.allPalettes}
              </p>
            )}
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

                    {/* Right side badges */}
                    <div className="flex shrink-0 items-center gap-1.5">
                      {pickedHex && idx === 0 && (
                        <span className="hidden rounded-full bg-camel/15 px-2 py-0.5 text-[9px] tracking-[0.12em] text-camel sm:inline-block">
                          {t.bestMatch}
                        </span>
                      )}
                      {locked ? (
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          className="h-3.5 w-3.5 text-charcoal/30"
                        >
                          <rect
                            x="2"
                            y="5.5"
                            width="8"
                            height="5.5"
                            rx="1.5"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                          <path
                            d="M4 5.5V3.5a2 2 0 014 0v2"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : active ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-navy">
                          <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                            <path
                              d="M3 8.5L6.2 11.5L13 4.5"
                              stroke="white"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ) : (
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          className="h-3.5 w-3.5 text-charcoal/20 transition-colors group-hover:text-camel/60"
                        >
                          <path
                            d="M6 3l5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
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
