# Webflow-Gallery Interaction Effects — Design

Date: 2026-07-19
Source ideas: webflow.com/made-in-webflow/interactive-design gallery (GSAP+Lenis
smooth scroll, scroll-driven motion, 3D elements, microinteractions).

## Scope

Three effects, all gated by `prefers-reduced-motion`:

### 1. Lenis smooth inertia scroll
- New dependency: `lenis` (~4KB).
- New `components/SmoothScroll.tsx` ("use client", null render): creates a
  Lenis instance with `anchors: true` in useEffect, drives it from a rAF loop,
  destroys on unmount. Skipped entirely under reduced motion.
- Mounted once in `app/layout.tsx`.
- Remove `html { scroll-behavior: smooth }` from globals.css (conflicts with
  Lenis; Lenis handles anchor gliding).

### 2. Scroll-driven motion
- `SectionHeading.tsx`: split title into words; each word sits in an
  `overflow-hidden` span and slides up (`y: 100% → 0`) staggered ~60ms via
  `whileInView`, once. Reduced motion: static.
- `Hero.tsx`: `useScroll` on the hero section + `useTransform` → sun and orbs
  layer translates slower than content on scroll (parallax depth). Applied to
  the existing background wrapper as a motion.div `style={{ y }}`.

### 3. 3D tilt cards + CTA fill
- `ProjectCard.tsx`: existing onMouseMove also computes
  `rotateX/rotateY` (max ~6°, perspective 800px) + keeps `-4px` lift; written
  as one JS transform so it can't fight Tailwind's hover transform (hover lift
  classes removed). Spring-back transition on mouse leave. Spotlight and
  shadow/border hover unchanged. Tilt inert under reduced motion.
- `.btn-fill` CSS class: accent background swipes up from bottom on hover via
  `::before` `translateY(100%) → 0`, text color swaps. Applied to hero
  "Contact Me" and nav "Resume" buttons.

## Non-goals
Text scramble (user skipped), carousel layout change, WebGL/Lottie, any other
new dependency.

## Verification
Build with GITHUB_PAGES=true; assert output contains lenis chunk, btn-fill,
word-mask markup; ship via ff-merge → push → deploy watcher → live checks.
