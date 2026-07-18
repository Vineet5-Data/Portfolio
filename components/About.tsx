import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Counter from "./Counter";
import { about, stats } from "@/content/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-28 sm:px-6 md:py-40">
      <SectionHeading label="About" title="Research-minded, production-tested." />
      <div className="mt-8 max-w-2xl space-y-5">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={0.08 * (i + 1)}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.08 * i}>
            <div className="border-l-2 border-accent pl-5">
              <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
                <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
