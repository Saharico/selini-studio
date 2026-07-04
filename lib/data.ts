/* ---------- Studio ---------- */

export const studio = {
  name: "Selíni",
  wordmark: "SELINI",
  descriptor: "Creative Studio",
  tagline: "The brand, by its own light.",
  disciplines: ["Films", "Ads", "Music Videos"],
  email: "sahar.machluf@gmail.com",
  homebase: "Tel Aviv",
  availableRegion: "Worldwide",
  availability: "Taking productions — H2 2026",
  // TODO: replace with real profile links
  linkedin: "https://linkedin.com/in/REPLACE_ME",
  vimeo: "https://vimeo.com/REPLACE_ME",
  instagram: "https://www.instagram.com/selini_creative/",
};

export const philosophy = {
  eyebrow: "The Name",
  headline: "Selíni is the Greek word for moon.",
  paragraphs: [
    "Raw technology is like a blinding sun — powerful and untamed, it burns and bleaches the frame. Our work is to be the moon. We take that explosive digital energy and, through film grammar and precise craft, give it shape, depth and a narrative.",
    "We turn raw intent and technological chaos into films, ads and music videos that feel calm, deliberate and entirely human. We do not chase the digital noise; we are the architects who shape it.",
  ],
  values: [
    {
      title: "Calm",
      text: "Considered, never loud. We let the work hold the attention.",
    },
    {
      title: "Reflective",
      text: "We shape light from elsewhere — craft over spectacle.",
    },
    {
      title: "Luminous",
      text: "Warm, earthen, and quietly bright. A glow, not a glare.",
    },
  ],
};

export type Service = {
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    title: "Films",
    description:
      "Brand films, opening films and documentary work — developed, directed and delivered as one continuous piece of craft.",
    tags: ["Development", "Direction", "Production", "Post"],
  },
  {
    title: "Ads",
    description:
      "Commercials that hold attention without raising their voice. Live action, CGI and AI-driven production, shaped by film grammar.",
    tags: ["Concept", "Live Action", "CGI", "AI Production"],
  },
  {
    title: "Music Videos",
    description:
      "Worlds built around a track — from treatment to final grade, with the visual language the music actually asks for.",
    tags: ["Treatment", "Direction", "VFX", "Color"],
  },
];

export const approach = {
  headline: "One studio, the whole production.",
  text: "Selíni takes full ownership — development, direction, production and post live under one roof. New technology runs through everything we make, but it never leads; the story does.",
};

export const capabilities = [
  "Direction",
  "Creative Direction",
  "AI-Driven Production",
  "CGI & VFX",
  "Live Action",
  "Edit & Color",
];

/* ---------- The Director ---------- */

export const profile = {
  name: "Sahar Machluf Ziv",
  role: "Director & Founder",
  email: "sahar.machluf@gmail.com",
  homebase: "Tel Aviv",
  availableRegion: "Worldwide",
  // TODO: replace with real profile links
  linkedin: "https://linkedin.com/in/REPLACE_ME",
  vimeo: "https://vimeo.com/REPLACE_ME",
  instagram: "https://www.instagram.com/selini_creative/",
  availability: "Available — H2 2026",
};

export const directorTeaser = {
  eyebrow: "The Director",
  headline: "Every Selíni production has one pair of eyes on the frame.",
  text: "Selíni is led by Sahar Machluf Ziv — filmmaker and creative director working across live action, CGI and AI-driven filmmaking. Hire the studio for a full production, or Sahar as director for yours.",
  cta: "Meet the director",
};

export const aboutVideo = {
  src: "/videos/about.mov",
};

export const closingVideo = {
  src: "/videos/closing.mov",
};

export const bio = {
  headline: "Directing worlds, one frame at a time.",
  paragraphs: [
    "Filmmaker and Creative Director working at the intersection of cinematic storytelling, emerging technology and visual innovation.",
    "Experienced in leading multidisciplinary productions from concept to final execution, combining live action, CGI and AI-driven workflows to create distinctive visual experiences.",
    "Brings a strong foundation in directing, visual language and creative leadership across commercial, cultural and technology-focused projects.",
  ],
};

export const skillTags = [
  "Film Direction",
  "Creative Direction",
  "Art Direction",
  "Cinematography",
  "CGI",
  "VFX",
  "AI-Driven Workflows",
];

export const tools = [
  "Adobe CC",
  "DaVinci Resolve",
  "Houdini",
  "Unreal Engine",
  "Blender",
  "AI Generative Tools",
];

/* ---------- Work ---------- */

export type Project = {
  slug: string;
  title: string;
  category: string;
  studio: string;
  description: string;
  videoSrc: string;
};

export const projects: Project[] = [
  {
    slug: "google-cloud-johannesburg",
    title: "Google Cloud — Johannesburg",
    category: "AI Filmmaking · Opening Film",
    studio: "Penguin Agency",
    description:
      "End-to-end AI-generated opening film for the Google Cloud summit in Johannesburg.",
    videoSrc: "/videos/google-cloud-johannesburg.mp4",
  },
  {
    slug: "google-cloud-london",
    title: "Google Cloud — London",
    category: "AI Filmmaking · Promo",
    studio: "Penguin Agency",
    description:
      "End-to-end AI-generated promo film for the Google Cloud summit in London.",
    videoSrc: "/videos/google-cloud-london.mp4",
  },
  {
    slug: "google-cloud-tel-aviv",
    title: "Google Cloud — Tel Aviv",
    category: "AI Filmmaking · Promo",
    studio: "Penguin Agency",
    description:
      "End-to-end AI-generated promo film for the Google Cloud summit in Tel Aviv.",
    videoSrc: "/videos/google-cloud-tel-aviv.mp4",
  },
  {
    slug: "quick-hit-slots",
    title: "Quick Hit Slots",
    category: "3D Environment · Compositing",
    studio: "Screen Post Production",
    description:
      "Full 3D build of a casino city environment, with character compositing.",
    videoSrc: "/videos/quick-hit-slots.mp4",
  },
  {
    slug: "the-stronghold",
    title: "The Stronghold",
    category: "Film VFX · Compositing",
    studio: "Shortcut Playground",
    description:
      "Compositing and visual effects for a feature-length film.",
    videoSrc: "/videos/the-stronghold.mp4",
  },
];
