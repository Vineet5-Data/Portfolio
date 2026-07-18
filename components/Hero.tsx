"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/content";
import Magnetic from "./Magnetic";

export default function Hero() {
  const reduce = useReducedMotion();
  const glowRef = useRef<HTMLDivElement>(null);
  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce || !glowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    glowRef.current.style.transform = `translate(${e.clientX - rect.left}px, ${
      e.clientY - rect.top
    }px)`;
  }

  return (
    <section
      id="top"
      onMouseMove={onMouseMove}
      className="hero-zone relative flex min-h-screen items-center overflow-hidden"
    >
      {/* drifting gradient orbs + dot grid + cursor glow, all GPU-cheap */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="orb orb-a left-[10%] top-[15%] h-[420px] w-[420px] bg-accent/60" />
        <div className="orb orb-b right-[5%] top-[30%] h-[380px] w-[380px] bg-emerald-300/40 dark:bg-emerald-700/40" />
        <div className="orb orb-c bottom-[5%] left-[35%] h-[340px] w-[340px] bg-teal-400/30" />
        {!reduce && <div ref={glowRef} className="cursor-glow hidden md:block" />}
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pt-14 sm:px-6">
        <motion.p {...fadeUp(0)} className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          {site.name}
        </motion.p>
        <motion.h1
          {...fadeUp(0.08)}
          className="max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-tight"
        >
          {site.title}
          <span className="block text-muted">{site.headline}</span>
        </motion.h1>
        <motion.p {...fadeUp(0.16)} className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {site.tagline}
        </motion.p>
        <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap gap-3">
          <Magnetic>
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="flex items-center rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
