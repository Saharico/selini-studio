"use client";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { cursorEnter, cursorLeave } from "@/lib/cursor";
import { studio } from "@/lib/data";
import Crescent from "./Crescent";

const lineVariants = {
  hidden: { y: "150%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 * i },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] flex flex-col justify-center overflow-hidden pt-40 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 72% 36%, rgba(168,107,69,0.14) 0%, rgba(236,232,220,0) 70%)",
        }}
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -z-10 hidden lg:block lg:right-[7%] top-[38%] -translate-y-1/2"
      >
        <Crescent className="h-64 w-64 xl:h-80 xl:w-80 opacity-90" />
      </motion.div>

      <div className="relative w-full px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 md:hidden"
        >
          <Crescent className="h-14 w-14" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="wordmark text-sm text-accent mb-6 hidden md:block"
        >
          {studio.disciplines.join("  ·  ")}
        </motion.p>

        <h1 className="font-display leading-[1.02]">
          {["We turn ideas into films", "that feel inevitable."].map((line, i) => (
            <span
              key={line}
              className="block overflow-hidden text-[10.5vw] md:text-[6.5vw] tracking-tight pt-[0.1em] -mt-[0.1em] pb-[0.22em] -mb-[0.22em]"
            >
              <motion.span
                custom={i}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
                className={`block ${i === 1 ? "italic text-accent" : ""}`}
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
          className="mt-8 max-w-2xl font-sans text-fg-muted text-lg"
        >
          A full creative studio — development, direction, production and post
          under one roof. New technology, shaped by film grammar and human
          craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col items-start gap-6 md:flex-row md:flex-wrap md:items-center"
        >
          <a
            href="#contact"
            onMouseEnter={() => cursorEnter("Talk")}
            onMouseLeave={cursorLeave}
            className="rounded-full bg-accent px-8 py-3.5 font-sans text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-fg"
          >
            Start a Project
          </a>
          <a
            href="#work"
            onMouseEnter={() => cursorEnter("Watch")}
            onMouseLeave={cursorLeave}
            className="group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.2em] border-b border-fg/40 pb-1 transition-colors hover:border-accent hover:text-accent"
          >
            See the Work
            <FiArrowDown className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-fg-muted"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-fg-muted/60 relative overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-3 w-px bg-accent animate-[scrollDown_1.6s_ease-in-out_infinite]" />
        </span>
      </motion.div>
    </section>
  );
}
