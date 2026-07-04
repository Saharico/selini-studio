"use client";

import { motion } from "framer-motion";
import { approach, capabilities, services } from "@/lib/data";
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

        <div>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group grid md:grid-cols-12 gap-4 md:gap-10 items-baseline border-b border-line py-10 md:py-12"
            >
              <div className="md:col-span-1 font-sans text-fg-muted text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="md:col-span-4 font-display text-4xl md:text-6xl leading-tight transition-colors group-hover:text-accent">
                {service.title}
              </h3>
              <div className="md:col-span-7">
                <p className="max-w-lg font-sans text-fg-muted">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs uppercase tracking-[0.1em] border border-line rounded-full px-3 py-1 text-fg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-12 gap-8 items-start">
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
