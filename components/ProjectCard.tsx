"use client";

import { ArrowUpRight, FileText, Plus } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import type { Project } from "@/content/content";

export default function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  if (project.placeholder) {
    return (
      <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-line p-6 text-muted">
        <Plus size={22} />
        <p className="text-sm font-medium">[+ Add Project]</p>
        <p className="text-xs">{project.description}</p>
      </div>
    );
  }

  return (
    <div
      data-cursor="view"
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        const px = e.clientX - r.left;
        const py = e.clientY - r.top;
        el.style.setProperty("--mx", `${px}px`);
        el.style.setProperty("--my", `${py}px`);
        if (reduce) return;
        // 3D tilt toward the cursor, max ~6deg
        const rx = (py / r.height - 0.5) * -6;
        const ry = (px / r.width - 0.5) * 6;
        el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
        el.style.transform = "";
        window.setTimeout(() => {
          el.style.transition = "";
        }, 500);
      }}
      className="spotlight group relative flex min-h-[220px] flex-col rounded-xl border border-line bg-card p-6 transition-[box-shadow,border-color] duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/40"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight sm:text-lg">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.title}
          </a>
        </h3>
        <ArrowUpRight
          size={18}
          className="shrink-0 text-muted transition-colors group-hover:text-accent"
        />
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
          >
            {t}
          </li>
        ))}
      </ul>
      {project.report && (
        <a
          href={project.report}
          target="_blank"
          rel="noreferrer"
          className="relative z-10 mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-accent hover:underline"
        >
          <FileText size={13} />
          Report (PDF)
        </a>
      )}
    </div>
  );
}
