"use client";

import { motion } from "framer-motion";
import Marquee from "./Marquee";
import { skillTags, tools } from "@/lib/data";

const half = Math.ceil(skillTags.length / 2);
const rowOne = skillTags.slice(0, half);
const rowTwo = skillTags.slice(half);

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-40 border-t border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-16">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans uppercase tracking-[0.3em] text-sm text-accent"
        >
          Skills
        </motion.span>
      </div>

      <div className="space-y-4 md:space-y-6 py-6 border-y border-line">
        <Marquee
          items={rowOne}
          className="font-display text-3xl md:text-6xl"
        />
        <Marquee
          items={rowTwo}
          reverse
          className="font-display text-outline text-3xl md:text-6xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 mt-20">
        <p className="font-sans uppercase tracking-[0.2em] text-sm text-fg-muted mb-8">
          Tools &amp; Software
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group border border-line rounded-[2px] px-5 py-6 font-sans text-sm md:text-base transition-colors hover:border-accent hover:text-accent"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
