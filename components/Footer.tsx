import { site } from "@/content/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm text-muted sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="flex gap-4">
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-fg">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
