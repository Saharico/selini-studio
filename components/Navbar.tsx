"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cursorEnter, cursorLeave } from "@/lib/cursor";
import Crescent from "./Crescent";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
        <Link
          href="/#contact"
          onMouseEnter={() => cursorEnter("Talk")}
          onMouseLeave={cursorLeave}
          className="inline-flex font-sans text-sm uppercase tracking-[0.15em] border border-fg/50 rounded-full px-5 py-2 transition-colors hover:border-accent hover:text-accent"
        >
          Start a Project
        </Link>
      </nav>
    </header>
  );
}
