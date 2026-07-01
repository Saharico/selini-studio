"use client";

import { useEffect, useRef } from "react";
import type { CursorMode } from "@/lib/cursor";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const mouse = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`;
    };

    const onMode = (e: Event) => {
      const detail = (e as CustomEvent<CursorMode>).detail;
      if (detail?.active) {
        ring.style.width = "88px";
        ring.style.height = "88px";
        ring.style.backgroundColor = "var(--color-accent)";
        ring.style.borderColor = "var(--color-accent)";
        if (labelRef.current) labelRef.current.textContent = detail.label ?? "";
      } else {
        ring.style.width = "44px";
        ring.style.height = "44px";
        ring.style.backgroundColor = "transparent";
        ring.style.borderColor = "var(--color-fg)";
        if (labelRef.current) labelRef.current.textContent = "";
      }
    };

    let raf = 0;
    const loop = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.18;
      ringPos.y += (mouse.y - ringPos.y) * 0.18;
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("cursor:mode", onMode);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("cursor:mode", onMode);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring">
        <span ref={labelRef} />
      </div>
    </>
  );
}
