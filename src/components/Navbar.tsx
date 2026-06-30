import { motion } from "framer-motion";

const links = [
  { href: "#palety", label: "Palety" },
  { href: "#styler", label: "Styler" },
  { href: "#o-projektu", label: "O projektu" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-charcoal/10 bg-ivory/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="font-serif-display text-xl tracking-[0.18em] text-navy"
        >
          OLD&nbsp;MONEY
        </a>
        <ul className="hidden gap-10 text-sm tracking-wide text-charcoal/80 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-colors hover:text-navy after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#styler"
          className="hidden rounded-full border border-navy/30 px-5 py-2 text-xs tracking-[0.14em] text-navy transition-colors hover:bg-navy hover:text-ivory sm:inline-block"
        >
          VYZKOUŠET STYLER
        </a>
      </nav>
    </motion.header>
  );
}
