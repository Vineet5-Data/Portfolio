import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/content/content";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-28 sm:px-6 md:py-40">
      <SectionHeading label="Projects" title="Selected work." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={0.08 * (i % 3)}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
