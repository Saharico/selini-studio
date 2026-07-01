"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { cursorEnter, cursorLeave } from "@/lib/cursor";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 mix-blend-difference transition-[padding] duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between text-fg">
          <a
            href="#top"
            className="font-display text-2xl tracking-wide"
            onMouseEnter={() => cursorEnter()}
            onMouseLeave={cursorLeave}
          >
            SMZ
          </a>
          <ul className="hidden md:flex items-center gap-10 font-sans text-sm uppercase tracking-[0.15em]">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onMouseEnter={() => cursorEnter()}
                  onMouseLeave={cursorLeave}
                  className="relative inline-block py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-fg after:transition-all after:duration-300 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onMouseEnter={() => cursorEnter("Say Hi")}
            onMouseLeave={cursorLeave}
            className="hidden md:inline-flex font-sans text-sm uppercase tracking-[0.15em] border border-fg rounded-full px-5 py-2"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-fg text-2xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                className="font-display text-4xl"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
