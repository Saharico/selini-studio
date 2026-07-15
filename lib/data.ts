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

/* ---------- Work ---------- */

export type Project = {
  slug: string;
  title: string;
  studio: string;
  description: string;
  videoSrc: string;
  // Optional second film — rendered side by side with the first one.
  videoSrc2?: string;
};

export const projects: Project[] = [
  {
    slug: "google-cloud-johannesburg",
    title: "Google Cloud — Johannesburg",
    studio: "Penguin Agency",
    description:
      "End-to-end AI-generated opening film for the Google Cloud summit in Johannesburg.",
    videoSrc: "/videos/google-cloud-johannesburg.mp4",
  },
  {
    slug: "google-cloud-london",
    title: "Google Cloud — London",
    studio: "Penguin Agency",
    description:
      "End-to-end AI-generated promo film for the Google Cloud summit in London.",
    videoSrc: "/videos/google-cloud-london.mp4",
  },
  {
    slug: "google-cloud-tel-aviv",
    title: "Google Cloud — Tel Aviv",
    studio: "Penguin Agency",
    description:
      "End-to-end AI-generated promo film for the Google Cloud summit in Tel Aviv.",
    videoSrc: "/videos/google-cloud-tel-aviv.mp4",
  },
  {
    slug: "quick-hit-slots",
    title: "Quick Hit Slots",
    studio: "Screen Post Production",
    description:
      "Full 3D build of a casino city environment, with character compositing.",
    videoSrc: "/videos/quick-hit-slots.mp4",
  },
  {
    slug: "the-stronghold",
    title: "The Stronghold",
    studio: "Shortcut Playground",
    description:
      "Compositing and visual effects for a feature-length film.",
    videoSrc: "/videos/the-stronghold.mp4",
  },
  {
    slug: "hp-barcelona",
    title: "HP Barcelona",
    studio: "Penguin Agency",
    description:
      "End-to-end AI-generated promo film for the HP summit in Barcelona.",
    videoSrc: "/videos/hp-barcelona.mp4",
  },
  {
    slug: "harmony",
    title: "Harmony",
    studio: "Penguin Agency",
    description:
      "End-to-end AI-generated short video for social media.",
    videoSrc: "/videos/harmony.mp4",
  },
  {
    slug: "customer-stories",
    title: "Customer Stories",
    studio: "",
    description:
      "Filming and editing customer videos for leading high-tech companies.",
    videoSrc: "/videos/customer-stories-bitdam.mp4",
    videoSrc2: "/videos/customer-stories-tapingo.mp4",
  },
  {
    slug: "israeli-ministry-of-education",
    title: "Israeli Ministry of Education",
    studio: "",
    description:
      "End-to-end AI-generated information film for the Israeli Ministry of Education.",
    videoSrc: "/videos/ministry-of-education-accessibility.mp4",
    videoSrc2: "/videos/ministry-of-education-attendance.mp4",
  },
];
