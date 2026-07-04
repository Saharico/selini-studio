"use client";

import { motion } from "framer-motion";
import { profile, studio } from "@/lib/data";

const lineVariants = {
  hidden: { y: "150%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 * i },
  }),
};

export default function DirectorHero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[90svh] flex flex-col justify-center overflow-hidden pt-40 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 40%, rgba(168,107,69,0.12) 0%, rgba(236,232,220,0) 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="wordmark text-sm text-accent mb-6"
        >
          {studio.name} — {profile.role}
        </motion.p>

        <h1 className="font-display leading-[1.02]">
          {["Sahar", "Machluf Ziv"].map((line, i) => (
            <span
              key={line}
              className="block overflow-hidden text-[13vw] md:text-[8.5vw] tracking-tight pt-[0.1em] -mt-[0.1em] pb-[0.22em] -mb-[0.22em]"
            >
              <motion.span
                custom={i}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
                className={`block ${i === 1 ? "italic" : ""}`}
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
