import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills, marquee } from "@/content/content";

export default function Skills() {
  // track duplicated once so the -50% translateX loop is seamless
  const track = [...marquee, ...marquee];
  return (
    <section id="skills" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label="Skills" title="Tools I reach for." />
      </div>

      <Reveal className="marquee mt-12 overflow-hidden" delay={0.1}>
        <div className="marquee-track flex w-max gap-3 pr-3">
          {track.map((item, i) => (
            <span
              key={`${item}-${i}`}
              aria-hidden={i >= marquee.length}
              className="whitespace-nowrap rounded-full border border-line bg-card px-4 py-2 text-sm text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {skills.map((g, i) => (
          <Reveal key={g.category} delay={0.08 * i}>
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted">
              {g.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1.5 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
