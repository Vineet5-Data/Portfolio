import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site, contact } from "@/content/content";

const rows = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Github, label: "GitHub", value: "Vineet5-Data", href: site.github },
  { icon: Linkedin, label: "LinkedIn", value: "vineet-dairashri", href: site.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-28 sm:px-6 md:py-40">
      <SectionHeading label="Contact" title="Let's talk." />
      <Reveal delay={0.08}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {contact.prompt}
        </p>
      </Reveal>
      <div className="mt-12 divide-y divide-line border-y border-line">
        {rows.map((r, i) => (
          <Reveal key={r.label} delay={0.08 * i}>
            <a
              href={r.href}
              target={r.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center justify-between py-6 transition-colors hover:text-accent"
            >
              <span className="flex items-center gap-4">
                <r.icon size={20} className="text-muted transition-colors group-hover:text-accent" />
                <span className="text-lg font-medium sm:text-xl">{r.label}</span>
              </span>
              <span className="flex items-center gap-2 text-sm text-muted sm:text-base">
                {r.value}
                <ArrowUpRight size={16} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
