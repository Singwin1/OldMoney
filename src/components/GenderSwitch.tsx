import { motion } from "framer-motion";
import type { Gender } from "../data/outfits";

type GenderSwitchProps = {
  value: Gender;
  onChange: (gender: Gender) => void;
};

const options: { id: Gender; label: string }[] = [
  { id: "women", label: "Dámský" },
  { id: "men", label: "Pánský" },
];

export default function GenderSwitch({ value, onChange }: GenderSwitchProps) {
  return (
    <div className="inline-flex rounded-full border border-charcoal/15 bg-cream/50 p-1">
      {options.map((option) => {
        const active = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={`relative rounded-full px-6 py-2.5 text-sm tracking-wide transition-colors duration-300 ${
              active ? "text-ivory" : "text-charcoal/70 hover:text-navy"
            }`}
          >
            {active && (
              <motion.span
                layoutId="gender-pill"
                className="absolute inset-0 rounded-full bg-navy"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
