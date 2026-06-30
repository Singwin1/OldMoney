import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { lang, toggle } = useLang();
  const t = translations[lang];
  const { user, logout, openAuth } = useAuth();

  const links = [
    { href: "#rychly-start", label: t.nav.quickStart },
    { href: "#palety", label: t.nav.palettes },
    { href: "#styler", label: t.nav.styler },
    { href: "#clenstvi", label: t.nav.membership },
  ];

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
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 text-xs tracking-[0.15em] transition-opacity hover:opacity-80"
          >
            <span
              className={`transition-colors ${
                lang === "cs" ? "font-medium text-navy" : "text-charcoal/35"
              }`}
            >
              CS
            </span>
            <span className="select-none text-charcoal/20">|</span>
            <span
              className={`transition-colors ${
                lang === "en" ? "font-medium text-navy" : "text-charcoal/35"
              }`}
            >
              EN
            </span>
          </button>

          {user ? (
            <div className="hidden items-center gap-2 sm:flex">
              <span className="rounded-full bg-navy/8 px-3 py-1.5 text-[10px] tracking-[0.1em] text-navy">
                {t.auth.tier[user.tier].toUpperCase()}
              </span>
              <button
                type="button"
                onClick={logout}
                className="text-xs tracking-wide text-charcoal/50 transition-colors hover:text-navy"
              >
                {t.auth.logoutCta}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={openAuth}
              className="hidden rounded-full border border-navy/30 px-5 py-2 text-xs tracking-[0.14em] text-navy transition-colors hover:bg-navy hover:text-ivory sm:inline-block"
            >
              {t.auth.login.toUpperCase()}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
