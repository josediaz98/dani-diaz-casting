import fictionCover from "@/assets/images/fiction-cover.jpg";
import adsCover from "@/assets/images/ads-cover.jpg";
import musicCover from "@/assets/images/music-cover.jpg";
import heroBg from "@/assets/images/hero-bg.jpg";

export interface Project {
  image: string;
  title: string;
  director: string;
  year: string;
  description: string;
  category?: string;
}

export interface CategoryData {
  title: string;
  subtitle: string;
  cover: string;
  projects: Project[];
}

// Fiction Projects
export const fictionProjects: Project[] = [
  {
    title: "The Silent Echo",
    director: "Maria González",
    year: "2024",
    description: "A psychological thriller requiring intense emotional range.",
    image: fictionCover,
  },
  {
    title: "Lost in Translation",
    director: "Sofia Coppola (Homage)",
    year: "2022",
    description: "Recreation project focusing on subtle micro-expressions.",
    image: heroBg,
  },
  {
    title: "Summer Rain",
    director: "Carlos Ruiz",
    year: "2023",
    description: "Coming of age story set in rural Spain.",
    image: fictionCover,
  },
  {
    title: "The Apartment",
    director: "Ana Torres",
    year: "2021",
    description: "Chamber drama with a cast of 3.",
    image: heroBg,
  },
];

// Ads & Fashion Projects
export const adsProjects: Project[] = [
  {
    title: "Urban Pulse",
    director: "Jean-Luc Pierre",
    year: "2023",
    description: "Global sportswear campaign focused on street dancers.",
    image: adsCover,
  },
  {
    title: "Midnight Scent",
    director: "Elena Valli",
    year: "2024",
    description: "Luxury perfume commercial with editorial aesthetic.",
    image: adsCover,
  },
  {
    title: "Tech Future",
    director: "Mark Chen",
    year: "2023",
    description: "Clean, futuristic tech brand launch.",
    image: adsCover,
  },
];

// Music Video Projects
export const musicVideoProjects: Project[] = [
  {
    title: "Neon Nights",
    director: "Sarah Smith",
    year: "2023",
    description: "Music video featuring 50+ background artists.",
    image: musicCover,
  },
  {
    title: "Heartbeat",
    director: "David Wolf",
    year: "2022",
    description: "Narrative driven music video.",
    image: musicCover,
  },
  {
    title: "Dance Floor",
    director: "Lisa Ray",
    year: "2023",
    description: "Choreography heavy production.",
    image: musicCover,
  },
];

// Featured work for homepage (curated selection)
export const featuredWork: Project[] = [
  {
    image: fictionCover,
    title: "The Silent Echo",
    director: "Maria González",
    year: "2024",
    description: "A psychological thriller requiring intense emotional range and authentic local dialect.",
    category: "Fiction",
  },
  {
    image: adsCover,
    title: "Urban Pulse",
    director: "Jean-Luc Pierre",
    year: "2023",
    description: "Global sportswear campaign focused on street dancers and real athletes.",
    category: "Advertising",
  },
  {
    image: musicCover,
    title: "Neon Nights",
    director: "Sarah Smith",
    year: "2023",
    description: "Music video featuring 50+ background artists and 3 lead dancers.",
    category: "Music Video",
  },
  {
    image: heroBg,
    title: "Lost in Translation",
    director: "Sofia Coppola (Homage)",
    year: "2022",
    description: "Recreation project focusing on subtle micro-expressions and chemistry.",
    category: "Fiction",
  },
];

// Categories configuration for work pages
export const categories: Record<string, CategoryData> = {
  fiction: {
    title: "Fiction",
    subtitle: "Feature films and short films with authentic characters",
    cover: fictionCover,
    projects: fictionProjects,
  },
  ads: {
    title: "Ads & Fashion",
    subtitle: "Campaigns that connect with real presence",
    cover: adsCover,
    projects: adsProjects,
  },
  "music-videos": {
    title: "Music Videos",
    subtitle: "Visual storytelling through movement and energy",
    cover: musicCover,
    projects: musicVideoProjects,
  },
};

// Category cards for homepage
export const categoryCards = [
  {
    title: "Fiction",
    count: "60+",
    desc: "Feature films and short films with authentic characters",
    link: "/work/fiction",
    image: fictionCover,
  },
  {
    title: "Ads & Fashion",
    count: "30+",
    desc: "Campaigns that connect with real presence",
    link: "/work/ads",
    image: adsCover,
  },
  {
    title: "Music Videos",
    count: "30+",
    desc: "Visual storytelling through movement and energy",
    link: "/work/music-videos",
    image: musicCover,
  },
];
