import Reveal from "./Reveal";

export default function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <Reveal>
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-tight">
        {title}
      </h2>
    </Reveal>
  );
}
