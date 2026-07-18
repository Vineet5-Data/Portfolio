import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/content/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-28 sm:px-6 md:py-40">
      <SectionHeading label="Experience" title="Where I've worked." />
      <ol className="mt-12 space-y-12 border-l border-line pl-8">
        {experience.map((e, i) => (
          <li key={e.role} className="relative">
            <Reveal delay={0.08 * i}>
              <span
                aria-hidden
                className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
              />
              <p className="text-sm text-muted">
                {e.period}
                {e.location && ` · ${e.location}`}
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">
                {e.role}
              </h3>
              <p className="text-sm font-medium text-accent">{e.org}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {e.summary}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
