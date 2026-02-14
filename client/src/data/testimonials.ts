export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  country: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "As a foreign director, Dani's contributions to my project were essential. The people she introduced me to were inspired, talented, and most importantly unique. The performers were authentic and idiosyncratic in the best possible way, and are often cited by audiences as the strongest components of the film.",
    author: "Luke Lane",
    role: "Director",
    country: "USA",
  },
  {
    quote:
      "Su enfoque combina precisión, intuición y una comprensión muy clara de las necesidades narrativas y comerciales del proyecto. Dani sabe crear un espacio de confianza donde el intérprete puede explorar con libertad y mostrar su verdad sin artificios.",
    author: "Moisé Curia",
    role: "Actor/Director",
    country: "Italy",
  },
  {
    quote:
      "Trabajar con ella es un verdadero privilegio. Es una directora de casting tan dulce en el trato como impecable en lo profesional. Tiene una sensibilidad especial para entender cada proyecto y encontrar el talento perfecto.",
    author: "Héctor Aja Pires",
    role: "Producer",
    country: "Spain",
  },
  {
    quote:
      "Dani me puso en un tono y un nivel actoral fantástico que me permitió entender la gama emocional específica que el personaje necesitaba. Fue un casting muy delicioso, ojalá todos los castings contasen con esta magia.",
    author: "Julián Díaz",
    role: "Actor",
    country: "Colombia",
  },
];
