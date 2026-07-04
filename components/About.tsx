"use client";

import { motion } from "framer-motion";
import { aboutVideo, bio, profile } from "@/lib/data";
import LocalVideo from "./LocalVideo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-8 items-start">
        <div className="md:col-span-5 md:sticky md:top-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2px] bg-bg-soft"
          >
            <LocalVideo src={aboutVideo.src} title={`${profile.name} — Reel`} />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/60 to-transparent" />

            <div className="absolute top-5 left-5 flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-cream">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              {profile.availability}
            </div>
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
            The Director
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl mt-4 mb-10 leading-tight"
          >
            {bio.headline}
          </motion.h2>

          <div className="space-y-6 max-w-2xl">
            {bio.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeUp}
                className="font-sans text-fg-muted text-lg leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
