import fictionCover from "@/assets/images/fiction-cover.jpg";
import adsCover from "@/assets/images/ads-cover.jpg";
import musicCover from "@/assets/images/music-cover.jpg";
import heroBg from "@/assets/images/hero-bg.jpg";

export interface Project {
  image: string;
  title: string;
  director: string;
  year?: string;
  description: string;
  category?: string;
  artist?: string;
  producer?: string;
  productionCompany?: string;
  country?: string;
  awards?: string[];
  inProduction?: boolean;
  slug?: string;
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
    title: "El Rebote",
    director: "Lukas Lane",
    year: "2025",
    country: "Spain",
    description:
      "After a heart-wrenching divorce, a middle-aged tourist navigates the streets of Barcelona, the city where he proposed to his former love. As night falls, his reality blurs, transforming mind and body in unexpected ways.",
    image: "/images/projects/fiction/el-rebote.jpg",
    slug: "el-rebote",
    inProduction: true,
  },
  {
    title: "Incompatible",
    director: "Judit Vilarrasa",
    year: "2025",
    country: "Spain / Germany",
    description:
      "Danza, aventura y pasión convergen para contar la historia de Bruna, que al conocer a Sam se lanza en un viaje a Berlín que podría cambiarle la vida.",
    image: heroBg,
    slug: "incompatible",
    inProduction: true,
  },
  {
    title: "Ningu Borda",
    director: "Julia Coldwell",
    year: "2024",
    country: "Spain",
    description:
      "Candela accidentally runs over her nephew's dog and decides not to confess in order to avoid ruining his birthday. She invents a legend about a pilgrimage of dogs and invites the boy to join the search. As they look for the dog, lies gradually begin to consume her.",
    image: fictionCover,
    slug: "ningu-borda",
  },
  {
    title: "Nemesis",
    director: "Adam Yadlovskyi",
    year: "2024",
    country: "Spain / Ukraine",
    description:
      "Nadia wakes up in a mysterious bunker. She has one goal in mind: save his little son, who has been kidnapped by the same people who hold her.",
    image: "/images/projects/fiction/nemesis.jpg",
    slug: "nemesis",
  },
  {
    title: "Frí(g)ida",
    director: "Fernanda del Miró",
    year: "2024",
    country: "Spain",
    description:
      "Una abuela viuda ve interrumpida su paz cuando llega un misterioso paquete que es abierto por su hijo, quien descubre un vibrador en su interior e inicia una crisis familiar.",
    image: fictionCover,
    slug: "frigida",
  },
  {
    title: "La Niña Tatuada",
    director: "Elisa Lanzas",
    year: "2024",
    country: "Spain",
    description:
      "Irene sufre el acoso callejero de un desconocido. Asustada, acude a su querido padre (al que apenas ve) en busca de protección. Pero lejos de sentirse más segura con él, acabará decepcionada ante el comportamiento tóxico de éste con su novia.",
    image: heroBg,
    slug: "la-nina-tatuada",
  },
  {
    title: "Birth",
    director: "Bart Schrijver",
    year: "2024",
    country: "Spain / Netherlands",
    description:
      "Birth follows David and Ana during the birth of their first child. From home to hospital, we witness the long and uncertain hours of labor through David's eyes. As time stretches and tension grows, the film captures the intimate transformation of a man becoming a father.",
    image: "/images/projects/fiction/birth.jpg",
    slug: "birth",
  },
  {
    title: "Autorretrato",
    director: "Daniela Goto",
    year: "2024",
    country: "Spain",
    description:
      "Una vigilante de sala de un museo de arte se enfrenta por primera vez al autorretrato fotográfico, tarea que le resultará más difícil de lo planeado y la hará observarse de una manera distinta.",
    image: "/images/projects/fiction/autorretrato.jpg",
    slug: "autorretrato",
  },
  {
    title: "Habla Bajo",
    director: "Benedetta Cuicchi",
    year: "2024",
    country: "Spain / Italy",
    description:
      "In a small town in Spain, Laia tries to stop her drunk younger brother, Arnau, from telling their traditionalist mother that he has fallen in love with a foreign boy. Over the course of one tense night, buried fears and unspoken truths begin to surface, forcing Laia to confront the gap between who she is expected to be and who she truly wants to become.",
    image: fictionCover,
    slug: "habla-bajo",
  },
  {
    title: "Coronación",
    director: "Ariadna Onofri",
    producer: "Iván Almendros",
    year: "2024",
    country: "Spain",
    description:
      "Aunque Sol y Rodrigo lo tienen todo preparado para el día del parto, nada ocurre como ellos habían deseado: a ella le gustaría tener un parto natural y lo ha visualizado mil veces. Rodrigo sólo quiere que todo salga y acompañar a Sol en sus deseos. Todo son conjeturas, porque nadie puede predecir cómo estará el hospital ese día, cómo tampoco podrán predecir qué tipo de criatura va a salir del útero de Sol.",
    image: "/images/projects/fiction/coronacion.jpg",
    slug: "coronacion",
  },
];

// Ads & Fashion Projects
export const adsProjects: Project[] = [
  {
    title: "Decathlon Summer",
    director: "Jordi Loops",
    productionCompany: "COLMADO TV",
    year: "2025",
    country: "Spain",
    description:
      "Summer campaign for Decathlon showcasing real athletes and everyday sports enthusiasts in dynamic, authentic moments.",
    image: adsCover,
    slug: "decathlon-summer",
    inProduction: true,
  },
  {
    title: "KOI Vodka",
    director: "Jordi Loops",
    productionCompany: "COLMADO TV",
    year: "2024",
    country: "Spain",
    description:
      "Un hombre que encarna el fuego. Seguro de sí mismo, magnético, imparable. Su vida avanza entre luces, deseo y vértigo. Noche tras noche, construye un recorrido donde el lujo, la seducción y el misterio conviven.",
    image: adsCover,
    slug: "koi-vodka",
  },
  {
    title: "See You",
    director: "Edu Iova & Miguel Barceló",
    year: "2024",
    country: "Spain",
    description:
      "Tras una ruptura reciente, una pareja se encuentra por última vez para cerrar lo que quedó pendiente. Él la espera en las alturas, fumando. Cuando se ven, apenas se dicen nada. Entre columnas, se miran, ella le devuelve la llave y se despiden con una frialdad que lo dice todo.",
    image: "/images/projects/ads/see-you.jpg",
    slug: "see-you",
  },
  {
    title: "Montana Colors",
    director: "David Cuní",
    productionCompany: "COLMADO TV",
    year: "2024",
    country: "Spain",
    description:
      "Tres miradas que recorren la ciudad. Tres cuerpos que crean, transforman y resignifican. Un hombre conectado al pulso urbano, una mujer que hace del arte su lenguaje, una mujer senior que habita su identidad con libertad.",
    image: adsCover,
    slug: "montana-colors",
  },
  {
    title: "Etnia Barcelona",
    director: "Amparo Bondia & Marta",
    productionCompany: "ESCAC FILMS",
    year: "2024",
    country: "Spain",
    description:
      "Una fortuneteller moderna revela el secreto detrás de su don: gracias a sus gafas Etnia, puede ver con absoluta claridad aquello que los demás no perciben. Lejos del arquetipo de la bruja oscura, habita un universo sofisticado y setentero, donde el glamour, el color y el misterio conviven. Entre visiones y consultas, la pitonisa demuestra que su poder no es magia, sino una nueva forma de mirar. Porque cuando lo ves claro, siempre aciertas.",
    image: "/images/projects/ads/etnia-barcelona.jpg",
    slug: "etnia-barcelona",
  },
  {
    title: "Ölend Is In The Air",
    director: "Claudia Díaz & Ángela Sanz",
    productionCompany: "ESCAC FILMS",
    year: "2024",
    country: "Spain",
    description:
      "El estilo, diseño e innovación se funden en un universo que respira elegancia. Imágenes precisas y atmosféricas dan forma a una experiencia sensorial donde el cuerpo, el movimiento y el aire dialogan, y cada presencia suma, cada gesto importa, hasta que lo individual se transforma en colectivo. Ölend is in the air.",
    image: adsCover,
    slug: "olend-is-in-the-air",
  },
  {
    title: "El Lobo",
    director: "John Araque & Jan Callis",
    year: "2024",
    country: "Spain",
    description:
      "Turrón para perros campaign featuring authentic family moments and playful pet interactions during the holiday season.",
    image: "/images/projects/ads/el-lobo.jpg",
    slug: "el-lobo",
  },
  {
    title: "Oxford Generation",
    director: "Noa González",
    producer: "Pau Carceles & Maximilian Kalteis",
    year: "2024",
    country: "Spain",
    description:
      "Young talent campaign capturing the energy and authenticity of a new generation through street casting and natural performances.",
    image: adsCover,
    slug: "oxford-generation",
  },
];

// Music Video Projects
export const musicVideoProjects: Project[] = [
  {
    title: "La Casualidad",
    artist: "Seye & Álex Ubago",
    director: "Daniela Cortés",
    year: "2024",
    country: "Spain",
    description:
      "Historias sobre personas que aún no se conocen, pero ya se sienten. Sobre encuentros que pudieron ser y miradas que casi suceden. Sobre el deseo de encontrar a alguien entre miles de rostros y creer que el destino, en algún momento, va a conspirar a favor.",
    image: "/images/projects/music-videos/la-casualidad.jpg",
    slug: "la-casualidad",
  },
  {
    title: "Vamo' Echando",
    artist: "Nia Correia & Guaynaa",
    director: "John Araque & Santi Medina",
    year: "2024",
    country: "Spain",
    description:
      "Historias que nacen en el movimiento. Miradas que se entienden sin palabras. Cuerpos que se encuentran antes que las conversaciones.",
    image: "/images/projects/music-videos/vamo-echando.jpg",
    slug: "vamo-echando",
  },
  {
    title: "Todo X Ti",
    artist: "Cora Novoa",
    director: "Una explosión atómica",
    year: "2024",
    country: "Spain",
    description:
      "Historias que imaginan futuros posibles. Mundos donde la tecnología convive con el deseo profundo de conexión humana. Personajes que habitan paisajes artificiales, fragmentados y sensoriales.",
    image: "/images/projects/music-videos/todo-x-ti.jpg",
    slug: "todo-x-ti",
  },
  {
    title: "Chanel",
    artist: "Frei",
    director: "Ismael Okbye",
    year: "2024",
    country: "Spain",
    description:
      "Visual narrative exploring identity and style through bold imagery and magnetic on-screen presence.",
    image: "/images/projects/music-videos/chanel.jpg",
    slug: "chanel",
  },
  {
    title: "Noti",
    artist: "La Blackie",
    director: "John Araque & Santi Medina",
    year: "2024",
    country: "Spain",
    description:
      "Relatos de personajes que conocen su fuerza. Que avanzan con determinación, magnetismo y presencia. Que no creen en la suerte, sino en su propio pulso.",
    image: "/images/projects/music-videos/noti.jpg",
    slug: "noti",
    inProduction: true,
  },
  {
    title: "So Cute",
    artist: "Mayo",
    director: "John Araque & Santi Medina",
    year: "2024",
    country: "Spain",
    description:
      "Identidades que se construyen frente al espejo y bajo las luces. Personas que conviven con lo que fueron y lo que están llegando a ser. Rostros que se sostienen con presencia, miradas magnéticas que cuentan su propia historia y cuerpos en constante transformación que existen como imagen y como emoción.",
    image: musicCover,
    slug: "so-cute",
  },
  {
    title: "París",
    artist: "Ly Raine",
    director: "John Araque & Santi Medina",
    year: "2024",
    country: "Spain",
    description:
      "Sueños que se sienten reales. Deseos que existen aunque solo duren un instante. Personajes que habitan la noche como un espacio de fantasía, estilo y proyección.",
    image: "/images/projects/music-videos/paris.jpg",
    slug: "paris",
  },
  {
    title: "Bonsai",
    artist: "Bores D",
    director: "Ismael Okbye",
    year: "2024",
    country: "Spain",
    description:
      "Energías que se reconocen en el movimiento. Atracciones que se sienten en el cuerpo antes que en las palabras. Personajes que juegan, provocan y se dejan llevar por el ritmo.",
    image: "/images/projects/music-videos/bonsai.jpg",
    slug: "bonsai",
  },
  {
    title: "Loba",
    artist: "Sizzay",
    director: "John Araque",
    year: "2024",
    country: "Spain",
    description:
      "Una energía seductora y salvaje atraviesa la noche: una mujer segura de sí misma, guiada por el deseo, el ritmo y el juego del romance.",
    image: musicCover,
    slug: "loba",
  },
  {
    title: "Ah Ah",
    artist: "Paula Koops",
    director: "John Araque & Jan Callis",
    year: "2024",
    country: "Spain",
    description:
      "Después de la caída llega la liberación. Una mujer que se elige y transforma la pérdida en impulso, la herida en luz y el adiós en autoestima. Presencias seguras, miradas desafiantes y cuerpos que celebran su propia transformación dan forma a este despertar.",
    image: "/images/projects/music-videos/ah-ah.jpg",
    slug: "ah-ah",
  },
];

// Featured work for homepage (curated selection)
export const featuredWork: Project[] = [
  {
    image: "/images/projects/fiction/el-rebote.jpg",
    title: "El Rebote",
    director: "Lukas Lane",
    description:
      "After a heart-wrenching divorce, a middle-aged tourist navigates the streets of Barcelona, the city where he proposed to his former love.",
    category: "Fiction",
  },
  {
    image: adsCover,
    title: "Decathlon Summer",
    director: "Jordi Loops",
    description:
      "Summer campaign for Decathlon showcasing real athletes and everyday sports enthusiasts in dynamic, authentic moments.",
    category: "Advertising",
  },
  {
    image: "/images/projects/music-videos/la-casualidad.jpg",
    title: "La Casualidad",
    artist: "Seye & Álex Ubago",
    director: "Daniela Cortés",
    description:
      "Historias sobre personas que aún no se conocen, pero ya se sienten. Sobre encuentros que pudieron ser y miradas que casi suceden.",
    category: "Music Video",
  },
  {
    image: "/images/projects/fiction/birth.jpg",
    title: "Birth",
    director: "Bart Schrijver",
    description:
      "Birth follows David and Ana during the birth of their first child. The film captures the intimate transformation of a man becoming a father.",
    category: "Fiction",
  },
];

// Categories configuration for work pages
export const categories: Record<string, CategoryData> = {
  fiction: {
    title: "Fiction",
    subtitle:
      "60+ casting processes for feature films and short films, working with directors from around the world",
    cover: fictionCover,
    projects: fictionProjects,
  },
  ads: {
    title: "Ads & Fashion",
    subtitle:
      "Advertising projects across Europe and Latin America, finding talent with presence and on-camera credibility",
    cover: adsCover,
    projects: adsProjects,
  },
  "music-videos": {
    title: "Music Videos",
    subtitle:
      "30+ projects across different genres, creating castings that elevate the energy and aesthetic of each piece",
    cover: musicCover,
    projects: musicVideoProjects,
  },
};

// Category cards for homepage
export const categoryCards = [
  {
    title: "Fiction",
    count: "60+",
    desc: "Feature films and short films with directors from around the world",
    link: "/work/fiction",
    image: fictionCover,
  },
  {
    title: "Ads & Fashion",
    count: "30+",
    desc: "Finding talent with presence, attitude, and on-camera credibility",
    link: "/work/ads",
    image: adsCover,
  },
  {
    title: "Music Videos",
    count: "30+",
    desc: "Castings that elevate the energy and aesthetic of each piece",
    link: "/work/music-videos",
    image: musicCover,
  },
];

// Projects currently in production
export const projectsInProduction: Project[] = [
  ...fictionProjects.filter((p) => p.inProduction),
  ...adsProjects.filter((p) => p.inProduction),
  ...musicVideoProjects.filter((p) => p.inProduction),
];
