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
  vimeoId: "1206149502",
  hash: "be2ceeb3d2",
};

export const closingVideo = {
  vimeoId: "1206168251",
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
  "VFX Compositing",
  "AI-Driven Workflows",
  "Prompt Engineering",
  "3D Animation",
  "Real-Time Rendering",
  "Interactive Design",
  "Visual Storytelling",
  "Motion Design",
  "Typography",
];

export const tools = [
  "Film Direction",
  "Real-Time Render / Game Engines",
  "3D & CGI Software",
  "Adobe Creative Cloud",
  "AI Generative Tools",
  "Editing & Color Grading",
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  studio: string;
  description: string;
  vimeoId: string;
};

export const projects: Project[] = [
  {
    slug: "google-cloud-johannesburg",
    title: "Google Cloud — Johannesburg",
    category: "AI Filmmaking · Opening Film",
    studio: "Penguin Agency",
    description:
      "End-to-end AI-generated opening film for the Google Cloud summit in Johannesburg.",
    vimeoId: "1205813934",
  },
  {
    slug: "google-cloud-london",
    title: "Google Cloud — London",
    category: "AI Filmmaking · Promo",
    studio: "Penguin Agency",
    description:
      "End-to-end AI-generated promo film for the Google Cloud summit in London.",
    vimeoId: "1202561222",
  },
  {
    slug: "google-cloud-tel-aviv",
    title: "Google Cloud — Tel Aviv",
    category: "AI Filmmaking · Promo",
    studio: "Penguin Agency",
    description:
      "End-to-end AI-generated promo film for the Google Cloud summit in Tel Aviv.",
    vimeoId: "1200193482",
  },
  {
    slug: "quick-hit-slots",
    title: "Quick Hit Slots",
    category: "3D Environment · Compositing",
    studio: "Screen Post Production",
    description:
      "Full 3D build of a casino city environment, with character compositing.",
    vimeoId: "1145653136",
  },
  {
    slug: "the-stronghold",
    title: "The Stronghold",
    category: "Film VFX · Compositing",
    studio: "Shortcut Playground",
    description:
      "Compositing and visual effects for a feature-length film.",
    vimeoId: "1145650119",
  },
];

