// All site copy lives here. Edit this file to update the site — no component
// changes needed for new projects, skills, or experience entries.

export type Project = {
  title: string;
  description: string;
  tags: string[];
  // repo URL — leave "" until the real repo link exists; the Code button
  // only renders when this is set, so no link ever points at the profile
  link?: string;
  report?: string;
};

// static-export inlines this at build time; needed on every plain <a> asset href
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type ExperienceEntry = {
  role: string;
  org: string;
  location: string;
  period: string;
  summary: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

export const site = {
  name: "Vineet Dairashri",
  logoMark: "VD",
  title: "Data Scientist & ML Engineer",
  headline: "Building AI systems for autonomous navigation.",
  tagline:
    "I'm building AI-driven map matching and path prediction as a personal project, combining transformer and GNN architectures with reinforcement learning. Before that: bird song classifiers, cosmological inference, and recommendation systems in production.",
  email: "vineetdairashri5@gmail.com",
  github: "https://github.com/Vineet5-Data",
  linkedin: "https://www.linkedin.com/in/vineet-dairashri",
  resumeHref: `${BASE}/resume.pdf`,
};

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I'm an MSc Data Science student at TU Dortmund and a research assistant, with a background in Engineering Informatics. My work sits where ML research meets applied engineering: I like taking an idea from a paper and turning it into a system that runs on real, messy data.",
    "Right now that means my main personal project — teaching models to understand where a vehicle is and where it's going, without hand-labeled data. Outside of that I've worked on audio classification, simulation-based inference for cosmology, and recommendation systems deployed to production.",
  ],
};

export const stats: Stat[] = [
  { value: 88, suffix: "%", label: "AUC-ROC, bird species classifier" },
  { value: 3, label: "GPS fleet datasets, label-free training" },
  { value: 6, suffix: "+", label: "projects from research to production" },
];

export const experience: ExperienceEntry[] = [
  {
    role: "AI-Driven Map Matching & Path Prediction",
    org: "Personal project",
    location: "",
    period: "2025 — present",
    summary:
      "Transformer and GNN architectures with latent-space reinforcement learning for map matching and path prediction, trained label-free on raw GPS fleet data.",
  },
  {
    role: "Research Assistant",
    org: "TU Dortmund",
    location: "Dortmund, Germany",
    period: "2024 — present",
    summary:
      "Supporting ML research projects: experiment pipelines, model training, and evaluation tooling.",
  },
  {
    role: "Engineering Informatics — Prior Internships",
    org: "Various",
    location: "",
    period: "before 2024",
    summary:
      "Applied software and data engineering internships bridging mechanical engineering and informatics.",
  },
];

export const projects: Project[] = [
  {
    title: "AI-driven map matching & path prediction",
    description:
      "A two-stage system for vehicles: first snapping noisy GPS traces onto the road graph, then predicting the road segments ahead. Transformer and GNN encoders over OSMnx road networks with latent-space reinforcement learning, trained label-free on raw fleet data (T-Drive, Porto Taxi, Grab-Posisi-L) and evaluated on road-level Hit@1.",
    tags: ["Transformers", "GNN", "RL", "OSMnx", "PyTorch"],
  },
  {
    title: "Bird audio species classification",
    description:
      "Identifies bird species from field recordings — a ConvNeXT-based audio model reaching 0.880 AUC-ROC on multi-label soundscapes.",
    tags: ["ConvNeXT", "Audio ML", "PyTorch", "Kaggle"],
    report: `${BASE}/reports/bird-classification-case-study.pdf`,
  },
  {
    title: "Cosmological parameter inference",
    description:
      "Estimates the parameters that shape the universe — H₀, Ωₘ, nₛ — from the galaxy power spectrum, using amortized neural posterior estimation with BayesFlow.",
    tags: ["SBI", "BayesFlow", "Bayesian Inference", "Deep Learning"],
    report: `${BASE}/reports/sbi-cosmology-report.pdf`,
  },
  {
    title: "KD-tree recommendation system",
    description:
      "My bachelor thesis: a KD-tree nearest-neighbour engine that recommends tiles from user preferences — Python service hosted on AWS, feeding an AR/VR showroom app through Firebase. Cut recommendation latency ~20% and lifted user engagement ~15% after deployment.",
    tags: ["Bachelor Thesis", "AWS", "Firebase", "AR/VR", "Python"],
    report: `${BASE}/reports/kdtree-bachelor-thesis.pdf`,
  },
  {
    title: "Causal tree extension",
    description:
      "Extends the causal tree algorithm with a MAD (median absolute deviation) split rule for robust treatment-effect estimation, with a C backend.",
    tags: ["Causal Inference", "C", "R", "Statistics"],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "C", "R", "SQL"],
  },
  {
    category: "ML / DL",
    items: [
      "PyTorch",
      "Transformers",
      "Graph Neural Networks",
      "Reinforcement Learning",
      "Bayesian Inference",
      "scikit-learn",
    ],
  },
  {
    category: "Data & Infra",
    items: ["AWS", "Firebase", "Docker", "Pandas", "OSMnx", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Linux", "Weights & Biases", "Jupyter", "LaTeX"],
  },
];

export const marquee = [
  "PyTorch",
  "Transformers",
  "GNNs",
  "Reinforcement Learning",
  "Python",
  "AWS",
  "Docker",
  "OSMnx",
  "scikit-learn",
  "Bayesian Inference",
  "TypeScript",
  "SQL",
];

export const contact = {
  prompt:
    "I'm open to conversations about ML engineering roles, research collaborations, or anything involving maps, models, and motion.",
};
