export const profile = {
  name: "Sahar Machluf Ziv",
  role: "Filmmaker & Creative Director",
  email: "sahar.machluf@gmail.com",
  homebase: "Tel Aviv",
  availableRegion: "WORLDWIDE",
  // TODO: replace with real profile links
  linkedin: "https://linkedin.com/in/REPLACE_ME",
  vimeo: "https://vimeo.com/REPLACE_ME",
  instagram: "https://instagram.com/REPLACE_ME",
  availability: "Available — H2 2026",
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

