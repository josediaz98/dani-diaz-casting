export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  country: string;
  order: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'luke-lane',
    quote: "As a foreign director, Dani's contributions to my project were essential. The people she introduced me to were inspired, talented, and most importantly unique. The performers were authentic and idiosyncratic in the best possible way, and are often cited by audiences as the strongest components of the film. I couldn't recommend her services more fervently.",
    name: 'Luke Lane',
    role: 'Director',
    country: 'USA',
    order: 1,
  },
  {
    id: 'moise-curia',
    quote: "I had the opportunity to work with Dani Díaz in a casting process and I can highlight her great artistic sensitivity and her deep respect for the actor's work. Her approach combines precision, intuition and a very clear understanding of the narrative and commercial needs of the project. Dani knows how to create a space of trust where the performer can explore freely and show their truth without artifice. Her ability to generate a true synergy between direction, production and cast guarantees a coherent selection aligned with the creative vision. Without a doubt, her work in casting is decisive in elevating the quality and authenticity of any project.",
    name: 'Moisé Curia',
    role: 'Actor/Director',
    country: 'Italy',
    order: 2,
  },
  {
    id: 'hector-aja',
    quote: "Working with her is a true privilege. She is a casting director as sweet in her manner as she is impeccable professionally. She has a special sensitivity to understand each project and find the perfect talent, always with a close and respectful energy that makes everything flow. Without a doubt, someone you would always want on your team.",
    name: 'Héctor Aja Pires',
    role: 'Producer',
    country: 'Spain',
    order: 3,
  },
  {
    id: 'julian-diaz',
    quote: "One day I received a call to audition for a character in a great Colombian production called Canción De Pamela, a wonderful film. When we started the process there was a lot of uncertainty, all auditions are difficult, however, Dani, our casting director along with our director Heny Cuesta guided the casting sessions and led me, as an actor, to very impressive emotional, sensory and of course physical paths. They did everything to generate a magical atmosphere loaded with beauty. The chemistry casting session was in Dani's hands under Heny's supervision and it was great. Dani really put me in a fantastic tone and acting level that allowed me to understand the specific emotional range that the character needed. I am deeply grateful because it was a delicious casting, I wish all castings had this magic.",
    name: 'Julián Díaz',
    role: 'Actor',
    country: 'Colombia',
    order: 4,
  },
];

// Note: Original testimonials in Spanish are preserved in content/about.md
// These are translations for the English version of the site
