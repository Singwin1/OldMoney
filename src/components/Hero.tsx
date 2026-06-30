import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ivory px-6 pt-24"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border border-camel/20"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[42vmax] w-[42vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,136,79,0.08),transparent_60%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 text-xs tracking-[0.4em] text-camel"
        >
          QUIET LUXURY &middot; PRO MUŽE I ŽENY
        </motion.span>

        <motion.h1
          variants={item}
          className="font-serif-display text-5xl leading-[1.05] text-navy sm:text-6xl md:text-7xl"
        >
          Styling v duchu
          <br />
          <span className="italic text-burgundy">starých peněz</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-balance text-base leading-relaxed text-charcoal/70 sm:text-lg"
        >
          Najděte svou barevnou paletu a sestavte si nadčasový old money
          outfit — minimalisticky, elegantně, bez zbytečného křiku.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#styler"
            className="rounded-full bg-navy px-8 py-3.5 text-sm tracking-[0.12em] text-ivory shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            SESTAVIT OUTFIT
          </a>
          <a
            href="#palety"
            className="rounded-full border border-charcoal/20 px-8 py-3.5 text-sm tracking-[0.12em] text-charcoal transition-colors duration-300 hover:border-camel hover:text-camel"
          >
            PROHLÉDNOUT PALETY
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-camel/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
