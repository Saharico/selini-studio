"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiInstagram, FiLinkedin } from "react-icons/fi";
import { SiVimeo } from "react-icons/si";
import { cursorEnter, cursorLeave } from "@/lib/cursor";
import { closingVideo, profile } from "@/lib/data";
import VimeoBackground from "./VimeoBackground";

const socials = [
  { label: "LinkedIn", href: profile.linkedin, Icon: FiLinkedin },
  { label: "Vimeo", href: profile.vimeo, Icon: SiVimeo },
  { label: "Instagram", href: profile.instagram, Icon: FiInstagram },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-line overflow-hidden">
      <div className="absolute inset-0 z-0">
        <VimeoBackground
          vimeoId={closingVideo.vimeoId}
          title="Closing reel"
          buttonClassName="absolute top-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-fg/30 bg-black/40 text-fg backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
        />
        <div className="absolute inset-0 bg-bg/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 font-sans uppercase tracking-[0.3em] text-sm text-emerald-400 mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          {profile.availability}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-8xl leading-[0.95]"
        >
          Let&apos;s create
          <br />
          something visual.
        </motion.h2>

        <motion.a
          href={`mailto:${profile.email}`}
          onMouseEnter={() => cursorEnter("Email")}
          onMouseLeave={cursorLeave}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="group mt-12 inline-flex items-center gap-3 font-sans text-lg sm:text-2xl md:text-3xl border-b border-fg/40 pb-2 transition-colors hover:border-accent hover:text-accent"
        >
          {profile.email}
          <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 flex flex-col items-center gap-1 font-sans text-fg-muted"
        >
          <span>Homebase: {profile.homebase}</span>
          <span>Available: {profile.availableRegion}</span>
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
              className="flex h-14 w-14 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
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
