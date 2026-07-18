Build a single-page portfolio website for a Data Science / ML Engineer. The visual language should follow the OpenAI product-announcement style (e.g. openai.com model launch pages): confident oversized typography, generous whitespace, restrained color, and purposeful motion rather than decoration for its own sake. It should feel calm, technical, and premium — not flashy or gimmicky.

Tech stack


Next.js (App Router) + TypeScript + Tailwind CSS
Framer Motion for scroll/hover animations (or GSAP + ScrollTrigger if preferred)
lucide-react for icons
Deployable as a static export to GitHub Pages, or via Vercel
No backend needed — content lives in a typed content.ts / projects.ts file so it's easy to edit later


Design language


Typography: one large geometric sans-serif (Inter, Geist, or Söhne-style) for headings with tight tracking; a comfortable reading-weight body font. Headline sizes should feel oversized (clamp() based fluid type).
Palette: near-black (#0A0A0A) and near-white (#FAFAFA) as the base, one accent color used sparingly (pick one: electric blue, warm amber, or emerald), plus a soft gradient used only in the hero and section dividers.
Spacing: generous vertical rhythm between sections (120–200px desktop), tight internal spacing within cards.
Dark mode: default to dark, but support a light/dark toggle.


Motion (the "moving objects" part)

Keep all motion subtle, GPU-cheap (transform/opacity only), and respectful of prefers-reduced-motion:


Hero: 2–3 soft blurred gradient orbs drifting slowly in the background (CSS keyframe translate/scale loop, ~20–30s duration, no JS needed) behind the name/title.
Scroll reveals: sections and cards fade + slide up 20px as they enter viewport (IntersectionObserver / Framer Motion whileInView), staggered by ~80ms per child.
Sticky in-page nav: a slim sticky header, plus an optional left-hand section tracker (dot or line indicator) that highlights the active section as the user scrolls — like OpenAI's "on this page" sidebar.
Project cards: subtle tilt/lift on hover (translateY + shadow), not full 3D tilt.
Skill/tech badges: an infinite horizontal marquee row of tech logos or tags, pausing on hover.
Animated metrics: numbers that count up when scrolled into view (e.g. "1 model, 88% AUC-ROC" style stat callouts).
Cursor-aware accent (optional, desktop only): a small glow that follows the cursor within the hero section only.


Site structure / sections


Sticky nav — name/logo mark, links to sections, GitHub + LinkedIn icons, resume download button.
Hero — name, one-line title ("Data Scientist & ML Engineer — building AI systems for autonomous navigation"), a 2-sentence tagline about current focus (thesis with BMW on AI-driven map matching and path prediction using transformer/GNN architectures and reinforcement learning), primary CTA ("View Projects") + secondary CTA ("Contact Me"), animated gradient background.
About — short bio: MSc Data Science student at TU Dortmund, research assistant, background in Engineering Informatics, interests spanning ML research and applied engineering. Keep it to 3–4 sentences, first person.
Experience / Timeline — vertical timeline component: BMW Group thesis (A-PO Foresight, Ulm), research assistant role, prior internships. Each entry reveals on scroll.
Projects — grid of project cards (3 columns desktop, 1 mobile). Each card: title, one-line description, tech tags, and a link. Suggested projects to seed as placeholders:

AI-driven map matching & path prediction — transformer/GNN architectures with latent-space RL, label-free training on raw GPS fleet data (T-Drive, Porto Taxi, Grab-Posisi-L datasets, OSMnx road networks).
Bird audio species classification — ConvNeXT-based model, AUC-ROC 0.880.
Cosmological parameter inference — Simulation-Based Inference / Amortized Bayesian Inference for cosmology.
KD-tree recommendation system — deployed on AWS, integrated with AR/VR via Firebase.
Causal tree extension — extended causal tree algorithm using a MAD (median absolute deviation) split rule, C backend.
(Leave one card as [+ Add Project] placeholder styled distinctly.)



Skills — grouped by category (Languages, ML/DL, Data & Infra, Tools) as tag pills or the marquee described above.
Writing/Blog (optional) — if not used yet, omit or leave as a stub section.
Contact — short prompt + email, GitHub, LinkedIn links as large tappable rows (not tiny icons), similar to OpenAI's footer link density.
Footer — minimal, one line, copyright + socials.


Content tone

Write all placeholder copy in first person, confident but not boastful, technical without jargon overload — a smart reader with no ML background should still understand what each project does in one sentence, and someone with an ML background should recognize the specific techniques.

Technical requirements


Fully responsive (mobile-first breakpoints)
Accessible: semantic HTML, visible focus states, prefers-reduced-motion fallback that disables all decorative motion, alt text on all images
Lighthouse performance ≥ 90 on mobile (lazy-load images, avoid layout shift, animate only transform/opacity)
Clean component structure (components/Hero.tsx, components/ProjectCard.tsx, etc.) so individual projects can be added by editing one data file
Include a README.md explaining how to run locally, edit content, and deploy to GitHub Pages/Vercel


Deliverable

Generate the full project structure, all components, the content/data file pre-filled with the placeholders above, and the README. Ask me only if something is truly ambiguous — otherwise make reasonable design decisions and proceed.