import { palettes } from "../data/palettes";
import PaletteCard from "./PaletteCard";
import SectionReveal from "./SectionReveal";

type PaletteGalleryProps = {
  activePaletteId: string;
  onSelect: (id: string) => void;
};

export default function PaletteGallery({
  activePaletteId,
  onSelect,
}: PaletteGalleryProps) {
  return (
    <section id="palety" className="bg-ivory px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mb-16 max-w-2xl">
          <span className="text-xs tracking-[0.35em] text-camel">
            BAREVNÉ PALETY
          </span>
          <h2 className="mt-4 font-serif-display text-4xl text-navy sm:text-5xl">
            Pět nálad starých peněz
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70">
            Každá paleta vychází z konkrétního prostředí — od letní rezidence
            po knihovnu s krbem. Vyberte tu svou a styler níže ji promítne do
            konkrétního outfitu.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {palettes.map((palette, i) => (
            <SectionReveal key={palette.id} delay={Math.min(i * 0.08, 0.32)}>
              <PaletteCard
                palette={palette}
                active={palette.id === activePaletteId}
                onSelect={onSelect}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
