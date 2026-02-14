export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  country: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "As a foreign director, Dani's contributions to my project were essential. The people she introduced me to were inspired, talented, and most importantly unique...",
    author: "Luke Lane",
    role: "Director",
    country: "USA",
  },
  {
    quote: "Her approach combines precision, intuition and a very clear understanding of the narrative and commercial needs of the project...",
    author: "Moisé Curia",
    role: "Actor/Director",
    country: "Italy",
  },
  {
    quote: "Working with her is a true privilege. She is a casting director as sweet in her manner as she is impeccable professionally...",
    author: "Héctor Aja Pires",
    role: "Producer",
    country: "Spain",
  },
  {
    quote: "Dani really put me in a fantastic tone and acting level that allowed me to understand the specific emotional range that the character needed...",
    author: "Julián Díaz",
    role: "Actor",
    country: "Colombia",
  },
];
