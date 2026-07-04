"use client";

import { motion } from "framer-motion";
import Marquee from "./Marquee";
import { skillTags, tools } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-40 border-t border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-16">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="wordmark text-sm text-accent"
        >
          Skills
        </motion.span>
      </div>

      <div className="py-6 border-y border-line">
        <Marquee items={skillTags} className="font-display text-3xl md:text-6xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 mt-20">
        <p className="font-sans uppercase tracking-[0.2em] text-sm text-fg-muted mb-8">
          Tools &amp; Software
        </p>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-3">
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-baseline"
            >
              <span className="font-display text-2xl md:text-3xl text-fg-muted transition-colors hover:text-accent">
                {tool}
              </span>
              {i < tools.length - 1 && (
                <span className="mx-3 font-display text-2xl md:text-3xl text-accent">/</span>
              )}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
