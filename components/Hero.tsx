"use client";

import { motion } from "framer-motion";
import Marquee from "./Marquee";

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 * i },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-40 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 40%, rgba(255,77,28,0.16) 0%, rgba(10,10,10,0) 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans uppercase tracking-[0.3em] text-sm text-fg-muted mb-6"
        >
          Filmmaker — Creative Director
        </motion.p>

        <h1 className="font-display leading-[0.9]">
          {["SAHAR", "MACHLUF ZIV"].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                custom={i}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
                className="block text-[14vw] md:text-[9vw] tracking-tight"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-xl font-sans text-fg-muted text-lg"
        >
          Directing worlds across live action, CGI and AI — from concept to
          final frame.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-16 border-y border-line py-4"
      >
        <Marquee
          items={[
            "Film Direction",
            "Cinematography",
            "CGI",
            "VFX",
            "AI-Driven Workflows",
            "Interactive Media",
          ]}
          className="font-display text-2xl md:text-4xl text-fg-muted"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-fg-muted"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-fg-muted/60 relative overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-3 w-px bg-accent animate-[scrollDown_1.6s_ease-in-out_infinite]" />
        </span>
      </motion.div>
    </section>
  );
}
