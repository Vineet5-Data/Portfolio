"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

export default function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  const reduce = useReducedMotion();
  const words = title.split(" ");
  return (
    <Reveal>
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-tight">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden pb-1 align-top"
          >
            <motion.span
              className="inline-block"
              initial={reduce ? false : { y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.06 * i, ease: "easeOut" }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </h2>
    </Reveal>
  );
}
