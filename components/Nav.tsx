"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Moon, Sun, Download } from "lucide-react";
import { site, sections } from "@/content/content";

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.theme = next ? "dark" : "light";
    } catch {}
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {site.logoMark}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                data-active={active === s.id}
                className={`nav-link text-sm transition-colors hover:text-fg ${
                  active === s.id ? "text-fg" : "text-muted"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-muted transition-colors hover:text-fg"
          >
            <Github size={17} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-muted transition-colors hover:text-fg"
          >
            <Linkedin size={17} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-md p-2 text-muted transition-colors hover:text-fg"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href={site.resumeHref}
            download
            className="ml-2 hidden items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent sm:flex"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
