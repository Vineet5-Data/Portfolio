"use client";

import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

// Magnetic wrapper: content is pulled toward the cursor while hovered,
// springs back on leave. Transform-only; inert under reduced motion.
export default function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: "inline-block", willChange: "transform" }}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const dx = e.clientX - r.left - r.width / 2;
        const dy = e.clientY - r.top - r.height / 2;
        ref.current.style.transform = `translate(${dx * strength}px, ${
          dy * strength
        }px)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transition = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";
        el.style.transform = "";
        window.setTimeout(() => {
          el.style.transition = "";
        }, 450);
      }}
    >
      {children}
    </div>
  );
}
