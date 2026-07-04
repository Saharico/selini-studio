"use client";

import { motion } from "framer-motion";
import { philosophy } from "@/lib/data";
import Crescent from "./Crescent";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Philosophy() {
  return (
    <section
      id="studio"
      className="relative bg-ink text-cream py-28 md:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-16 md:gap-8 items-center">
        {/* The crescent, in generous darkness */}
        <div className="md:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Crescent
              variant="mark"
              className="h-48 w-48 md:h-72 md:w-72 text-cream"
            />
          </motion.div>
        </div>

        <div className="md:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="wordmark text-sm text-accent"
          >
            {philosophy.eyebrow}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl mt-4 mb-10 leading-tight"
          >
            {philosophy.headline}
          </motion.h2>

          <div className="space-y-6 max-w-2xl">
            {philosophy.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeUp}
                className="font-sans text-cream-muted text-lg leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="mt-14 grid sm:grid-cols-3 gap-8 border-t border-line-dark pt-10">
            {philosophy.values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="font-display italic text-2xl text-cream">
                  {v.title}
                </h3>
                <p className="mt-2 font-sans text-sm text-cream-muted leading-relaxed">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 font-display italic text-xl text-cream-muted"
          >
            The moon never shouts to be seen. It simply commands the night.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
