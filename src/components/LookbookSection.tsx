import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { lookbook, lookbookImgUrl } from "../data/lookbook";
import { FREE_PALETTE_IDS } from "../data/palettes";

// A fixed set of preview photos shown on palettes without their own lookbook
const PREVIEW_IDS = [
  "1602792474659-274fd5a2b784",
  "1614822180018-0620b4250ed1",
  "1573570076683-b3b495f6b339",
];

type Props = {
  activePaletteId: string;
  onUnlock: () => void;
};

export default function LookbookSection({ activePaletteId, onUnlock }: Props) {
  const { user } = useAuth();
  const { lang } = useLang();
  const navigate = useNavigate();
  const t = translations[lang].lookbook;

  const [lightbox, setLightbox] = useState<string | null>(null);

  const palettePhotos = lookbook[activePaletteId];
  const hasOwnPhotos = Boolean(palettePhotos && palettePhotos.length > 0);

  // For palettes without dedicated photos, show preview (blurred) as upsell
  const photos = hasOwnPhotos
    ? palettePhotos!
    : PREVIEW_IDS.map((id) => ({ photoId: id, unsplashPageId: "" }));

  const isLocked =
    !FREE_PALETTE_IDS.has(activePaletteId) &&
    (!user || user.tier === "free");

  // Show locked/teaser UI: either palette is locked OR has no own photos yet
  const showTeaser = isLocked || !hasOwnPhotos;

  return (
    <section id="lookbook" className="bg-cream/30 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.35em] text-camel">{t.eyebrow}</p>
          <h2 className="mt-2 font-serif-display text-3xl text-navy sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/60">
            {t.body}
          </p>
        </div>

        {showTeaser ? (
          /* Blurred teaser + CTA */
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="grid grid-cols-3 gap-3 blur-sm select-none pointer-events-none"
              aria-hidden="true"
            >
              {photos.map((p, i) => (
                <div
                  key={p.photoId + i}
                  className="aspect-[3/4] overflow-hidden rounded-xl bg-charcoal/10"
                >
                  <img
                    src={lookbookImgUrl(p.photoId)}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-ivory/80 backdrop-blur-[2px]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-camel/12">
                <svg viewBox="0 0 20 20" fill="none" className="h-7 w-7 text-camel">
                  <rect x="3" y="9" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6.5 9V6.5a3.5 3.5 0 017 0V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="max-w-xs text-center text-sm leading-relaxed text-charcoal/65">
                {t.locked}
              </p>
              <motion.button
                type="button"
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  if (!user) {
                    onUnlock();
                  } else if (user.tier === "free") {
                    navigate("/platba");
                  }
                }}
                className="mt-6 rounded-full bg-navy px-8 py-3 text-xs tracking-[0.14em] text-ivory transition-colors hover:bg-navy/85"
              >
                {t.unlockCta}
              </motion.button>
            </div>
          </div>
        ) : (
          <>
            {/* Photo grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {photos.map((p, i) => (
                <motion.button
                  key={p.photoId}
                  type="button"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group aspect-[3/4] overflow-hidden rounded-xl bg-charcoal/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-camel"
                  onClick={() =>
                    setLightbox(lookbookImgUrl(p.photoId, 1200, 1600))
                  }
                  aria-label={`Otevřít foto ${i + 1}`}
                >
                  <img
                    src={lookbookImgUrl(p.photoId)}
                    alt={`Outfit inspirace ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.button>
              ))}
            </div>

            {/* Attribution */}
            <p className="mt-4 text-right text-[11px] text-charcoal/30">
              {t.credit} ·{" "}
              {photos.map((p, i) => (
                <span key={p.photoId}>
                  {p.unsplashPageId ? (
                    <a
                      href={`https://unsplash.com/photos/${p.unsplashPageId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-charcoal/55"
                    >
                      {i + 1}
                    </a>
                  ) : (
                    <span>{i + 1}</span>
                  )}
                  {i < photos.length - 1 && ", "}
                </span>
              ))}
            </p>
          </>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <>
            <motion.div
              key="lb-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[80] bg-charcoal/90"
              onClick={() => setLightbox(null)}
            />
            <motion.div
              key="lb-img"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[90] flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <img
                src={lightbox}
                alt="Outfit inspirace"
                className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/15 text-ivory transition-colors hover:bg-ivory/30"
                aria-label="Zavřít"
              >
                <svg viewBox="0 0 14 14" fill="none" className="h-4 w-4">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
