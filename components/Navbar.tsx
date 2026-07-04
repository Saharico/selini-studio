"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { cursorEnter, cursorLeave } from "@/lib/cursor";
import Crescent from "./Crescent";

const links = [
  { href: "/#studio", label: "Studio" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/director", label: "Director" },
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-bg/85 backdrop-blur-sm border-b border-line"
            : "py-6 border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between text-fg">
          <Link
            href="/"
            className="flex items-center gap-3"
            onMouseEnter={() => cursorEnter()}
            onMouseLeave={cursorLeave}
          >
            <Crescent className="h-7 w-7" />
            <span className="wordmark text-sm">Selini</span>
          </Link>
          <ul className="hidden md:flex items-center gap-10 font-sans text-sm uppercase tracking-[0.15em]">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onMouseEnter={() => cursorEnter()}
                  onMouseLeave={cursorLeave}
                  className="relative inline-block py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            onMouseEnter={() => cursorEnter("Talk")}
            onMouseLeave={cursorLeave}
            className="hidden md:inline-flex font-sans text-sm uppercase tracking-[0.15em] border border-fg/50 rounded-full px-5 py-2 transition-colors hover:border-accent hover:text-accent"
          >
            Start a Project
          </Link>
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
            {[...links, { href: "/#contact", label: "Contact" }].map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <Crescent className="mt-6 h-10 w-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
