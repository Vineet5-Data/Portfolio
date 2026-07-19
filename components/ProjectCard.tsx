"use client";

import { FileText, Github } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import type { Project } from "@/content/content";

export default function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();

  return (
    <div
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
      <h3 className="text-base font-semibold tracking-tight sm:text-lg">
        {project.title}
      </h3>
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
      {(project.link || project.report) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Github size={13} />
              Code
            </a>
          )}
          {project.report && (
            <a
              href={project.report}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:border-accent hover:bg-accent/10"
            >
              <FileText size={13} />
              Report (PDF)
            </a>
          )}
        </div>
      )}
    </div>
  );
}
