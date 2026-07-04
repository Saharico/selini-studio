"use client";

import { cursorEnter, cursorLeave } from "@/lib/cursor";
import { studio } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs uppercase tracking-[0.15em] text-fg-muted">
        <span>
          © {new Date().getFullYear()} {studio.name} — Creative Studio
        </span>
        <span className="hidden sm:block normal-case tracking-normal font-display italic text-sm">
          The brand, by its own light.
        </span>
        <a
          href="#top"
          onMouseEnter={() => cursorEnter()}
          onMouseLeave={cursorLeave}
          className="hover:text-accent transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
