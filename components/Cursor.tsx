"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Custom cursor: instant dot + lagging ring. Ring grows over links/buttons
// and becomes a "View" badge over elements marked data-cursor="view".
// Desktop fine-pointers only; disabled under prefers-reduced-motion.
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("has-cursor");
    let x = -100,
      y = -100,
      rx = -100,
      ry = -100,
      state = 0; // 0 default, 1 link, 2 view

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target as Element | null;
      state = t?.closest?.('[data-cursor="view"]')
        ? 2
        : t?.closest?.("a,button")
          ? 1
          : 0;
    };

    let raf = 0;
    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      dot.style.transform = `translate(${x}px, ${y}px)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) scale(${
        state === 2 ? 3 : state === 1 ? 1.7 : 1
      })`;
      ring.dataset.state = state === 2 ? "view" : "";
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [reduce]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden>
        <span>View</span>
      </div>
    </>
  );
}
