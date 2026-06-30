import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainItems } from "../data/items";
import type { ItemId } from "../data/items";
import { palettes } from "../data/palettes";
import type { Swatch } from "../data/palettes";
import { colorDistance } from "../utils/color";
import ItemIcon from "./ItemIcon";
import SectionReveal from "./SectionReveal";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

const uniqueColors: Swatch[] = Array.from(
  new Map(
    palettes.flatMap((p) => p.swatches).map((s) => [s.hex, s])
  ).values()
);

export default function QuickBuilder() {
  const [itemId, setItemId] = useState<ItemId | null>(null);
  const [color, setColor] = useState<Swatch | null>(null);

  const { lang } = useLang();
  const t = translations[lang].quickBuilder;

  const selectedItem = mainItems.find((i) => i.id === itemId);
  const selectedItemLabel = lang === "en" ? selectedItem?.labelEn : selectedItem?.label;

  const ranked = useMemo(() => {
    if (!color) return [];
    return palettes
      .map((palette) => {
        let closest = palette.swatches[0];
        let minDist = Infinity;
        for (const swatch of palette.swatches) {
          const dist = colorDistance(color.hex, swatch.hex);
          if (dist < minDist) {
            minDist = dist;
            closest = swatch;
          }
        }
        return { palette, closest, minDist };
      })
      .sort((a, b) => a.minDist - b.minDist)
      .slice(0, 5);
  }, [color]);

  const handleSelectItem = (id: ItemId) => {
    setItemId(id);
    setColor(null);
  };

  const handleReset = () => {
    setItemId(null);
    setColor(null);
  };

  return (
    <section
      id="rychly-start"
      className="bg-ivory px-6 py-28 sm:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <SectionReveal className="mb-14 flex flex-col items-center text-center">
          <span className="text-xs tracking-[0.35em] text-camel">
            {t.eyebrow}
          </span>
          <h2 className="mt-4 font-serif-display text-4xl text-navy sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/70">
            {t.body}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-10 sm:gap-x-10">
            {mainItems.map((item, i) => {
              const active = item.id === itemId;
              const label = lang === "en" ? item.labelEn : item.label;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectItem(item.id)}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex w-20 flex-col items-center gap-3 bg-transparent"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3 + (i % 3) * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15,
                    }}
                    className={`flex h-20 w-20 items-center justify-center rounded-full shadow-md transition-shadow duration-300 ${
                      active ? "ring-2 ring-camel ring-offset-2 ring-offset-ivory shadow-lg" : ""
                    }`}
                    style={{
                      background: active
                        ? "linear-gradient(145deg, #5e2129, #2a2724)"
                        : "linear-gradient(145deg, #2c4258, #1b2a3d)",
                    }}
                  >
                    <ItemIcon id={item.id} className="h-8 w-8 text-ivory" />
                  </motion.div>
                  <span
                    className={`text-xs tracking-wide ${
                      active ? "text-navy font-medium" : "text-charcoal/60"
                    }`}
                  >
                    {label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </SectionReveal>

        <AnimatePresence mode="wait">
          {itemId && (
            <motion.div
              key="color-step"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-14 overflow-hidden"
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-sm tracking-wide text-charcoal/70">
                  {t.colorQuestion}{" "}
                  <span className="text-navy">
                    {lang === "cs"
                      ? selectedItemLabel?.toLowerCase()
                      : selectedItemLabel}
                  </span>
                  {lang === "cs" ? "?" : " be?"}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  {uniqueColors.map((swatch) => {
                    const active = color?.hex === swatch.hex;
                    return (
                      <motion.button
                        key={swatch.hex}
                        type="button"
                        onClick={() => setColor(swatch)}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.92 }}
                        title={swatch.name}
                        className={`h-11 w-11 rounded-full border border-charcoal/10 shadow-sm transition-shadow ${
                          active
                            ? "ring-2 ring-navy ring-offset-2 ring-offset-ivory"
                            : ""
                        }`}
                        style={{ backgroundColor: swatch.hex }}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {color && ranked.length > 0 && (
            <motion.div
              key="result-step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16"
            >
              <div className="mb-8 flex flex-col items-center gap-3 text-center">
                <span className="text-xs tracking-[0.3em] text-camel">
                  {t.topLabel}
                </span>
                <h3 className="font-serif-display text-2xl text-navy sm:text-3xl">
                  {t.topTitle}
                </h3>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-1 text-xs tracking-wide text-charcoal/50 underline-offset-4 hover:text-burgundy hover:underline"
                >
                  {t.reset}
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {ranked.map(({ palette, closest }, index) => {
                  const description =
                    lang === "en" ? palette.descriptionEn : palette.description;
                  return (
                    <motion.div
                      key={palette.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className="overflow-hidden rounded-2xl border border-charcoal/10 bg-cream/40 p-6 shadow-sm"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-[10px] tracking-[0.16em] text-camel">
                          {index === 0 ? t.bestMatch : `#${index + 1}`}
                        </span>
                      </div>
                      <div className="mb-5 flex h-12 overflow-hidden rounded-lg">
                        {palette.swatches.map((swatch) => {
                          const isMatch = swatch.hex === closest.hex;
                          return (
                            <div
                              key={swatch.name}
                              className="relative h-full flex-1"
                              style={{
                                backgroundColor: isMatch ? color.hex : swatch.hex,
                              }}
                            >
                              {isMatch && (
                                <span className="absolute inset-x-0 bottom-0 bg-navy/80 py-0.5 text-center text-[8px] tracking-wide text-ivory">
                                  {t.yourColor}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <h4 className="font-serif-display text-xl text-navy">
                        {palette.name}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal/65">
                        {description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
