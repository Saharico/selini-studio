"use client";

import { motion } from "framer-motion";
import { approach, capabilities } from "@/lib/data";
import Crescent from "./Crescent";

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="wordmark text-sm text-accent"
            >
              What We Make
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl mt-4 leading-tight"
            >
              Start to finish, under one roof.
            </motion.h2>
          </div>
          <p className="font-sans text-fg-muted max-w-xs">
            Three disciplines, one standard of craft. Every production is
            carried from first conversation to final delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 flex items-start gap-4">
            <Crescent variant="mark" className="mt-1 h-6 w-6 shrink-0 text-accent" />
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display italic text-3xl md:text-4xl leading-snug"
            >
              {approach.headline}
            </motion.h3>
          </div>
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-fg-muted text-lg leading-relaxed max-w-2xl"
            >
              {approach.text}
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-2">
              {capabilities.map((cap, i) => (
                <motion.span
                  key={cap}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="font-sans text-xs uppercase tracking-[0.1em] border border-line rounded-full px-3 py-1 text-fg-muted"
                >
                  {cap}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
