"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiInstagram, FiLinkedin } from "react-icons/fi";
import { SiVimeo } from "react-icons/si";
import { cursorEnter, cursorLeave } from "@/lib/cursor";
import { studio } from "@/lib/data";
import Crescent from "./Crescent";

const socials = [
  { label: "LinkedIn", href: studio.linkedin, Icon: FiLinkedin },
  { label: "Vimeo", href: studio.vimeo, Icon: SiVimeo },
  { label: "Instagram", href: studio.instagram, Icon: FiInstagram },
].filter((s) => !s.href.includes("REPLACE_ME"));

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ink text-cream py-28 md:py-40 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-col items-center gap-5"
        >
          <Crescent className="h-20 w-20 md:h-24 md:w-24" />
          <span className="wordmark text-sm text-cream">
            {studio.wordmark}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 wordmark text-sm text-accent mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          {studio.availability}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-8xl leading-[1.02]"
        >
          Films that feel
          <br />
          <span className="italic text-accent">inevitable.</span>
        </motion.h2>

        <motion.a
          href={`mailto:${studio.email}`}
          onMouseEnter={() => cursorEnter("Email")}
          onMouseLeave={cursorLeave}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 font-sans text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-cream hover:text-ink"
        >
          Send a Message
          <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-1 font-sans text-cream-muted"
        >
          <span>Homebase: {studio.homebase}</span>
          <span>Working: {studio.availableRegion}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => cursorEnter(label)}
              onMouseLeave={cursorLeave}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-line-dark transition-colors hover:border-accent hover:text-accent"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
