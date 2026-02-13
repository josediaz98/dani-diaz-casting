export type ProjectCategory = 'fiction' | 'ads' | 'music-videos';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  director: string;
  artist?: string; // For music videos
  production?: string;
  year?: number; // NEEDS: Year for all projects
  description: string;
  thumbnail: string; // NEEDS: Hosted image URL
  videoUrl?: string; // NEEDS: Vimeo/YouTube URL
  featured?: boolean;
  order: number;
}

// Fiction Projects
// NOTE: Only 6 will be displayed after curation
export const fictionProjects: Project[] = [
  {
    id: 'el-rebote',
    title: 'El Rebote',
    category: 'fiction',
    director: 'Lukas Lane',
    description: 'After a heart-wrenching divorce, a middle-aged tourist navigates the streets of Barcelona, the city where he proposed to his former love. As night falls, his reality blurs, transforming mind and body in unexpected ways.',
    thumbnail: '/images/fiction/el-rebote.jpg', // NEEDS: Real image
    videoUrl: '', // NEEDS: Vimeo/YouTube URL
    order: 1,
  },
  {
    id: 'incompatible',
    title: 'Incompatible',
    category: 'fiction',
    director: 'Judit Vilarrasa',
    description: 'Dance, adventure and passion converge to tell the story of Bruna, who upon meeting Sam embarks on a journey to Berlin that could change her life.', // NEEDS: English translation review
    thumbnail: '/images/fiction/incompatible.jpg',
    videoUrl: '',
    order: 2,
  },
  {
    id: 'ningu-borda',
    title: 'Ningu Borda',
    category: 'fiction',
    director: 'Julia Coldwell',
    description: "Candela accidentally runs over her nephew's dog and decides not to confess in order to avoid ruining his birthday. She invents a legend about a pilgrimage of dogs and invites the boy to join the search. As they look for the dog, lies gradually begin to consume her.",
    thumbnail: '/images/fiction/ningu-borda.jpg',
    videoUrl: '',
    order: 3,
  },
  {
    id: 'nemesis',
    title: 'Nemesis',
    category: 'fiction',
    director: 'Adam Yadlovskyi',
    description: 'Nadia wakes up in a mysterious bunker. She has one goal in mind: save his little son, who has been kidnapped by the same people who hold her.',
    thumbnail: '/images/fiction/nemesis.jpg',
    videoUrl: '',
    order: 4,
  },
  {
    id: 'frigida',
    title: 'Frí(g)ida',
    category: 'fiction',
    director: 'Fernanda del Miró',
    description: 'A widowed grandmother has her peace interrupted when a mysterious package arrives that is opened by her son, who discovers a vibrator inside and triggers a family crisis.', // NEEDS: English translation review
    thumbnail: '/images/fiction/frigida.jpg',
    videoUrl: '',
    order: 5,
  },
  {
    id: 'la-nina-tatuada',
    title: 'La Niña Tatuada',
    category: 'fiction',
    director: 'Elisa Lanzas',
    description: 'Irene suffers street harassment from a stranger. Frightened, she turns to her beloved father (whom she rarely sees) seeking protection. But far from feeling safer with him, she ends up disappointed by his toxic behavior towards his girlfriend.', // NEEDS: English translation review
    thumbnail: '/images/fiction/la-nina-tatuada.jpg',
    videoUrl: '',
    order: 6,
  },
  {
    id: 'birth',
    title: 'Birth',
    category: 'fiction',
    director: 'Bart Schrijver',
    description: "Birth follows David and Ana during the birth of their first child. From home to hospital, we witness the long and uncertain hours of labor through David's eyes. As time stretches and tension grows, the film captures the intimate transformation of a man becoming a father.",
    thumbnail: '/images/fiction/birth.jpg',
    videoUrl: '',
    order: 7,
  },
  {
    id: 'autorretrato',
    title: 'Autorretrato',
    category: 'fiction',
    director: 'Daniela Goto',
    description: 'A museum security guard faces the photographic self-portrait for the first time, a task that will prove more difficult than planned and will make her observe herself in a different way.', // NEEDS: English translation review
    thumbnail: '/images/fiction/autorretrato.jpg',
    videoUrl: '',
    order: 8,
  },
  {
    id: 'habla-bajo',
    title: 'Habla Bajo',
    category: 'fiction',
    director: 'Benedetta Cuicchi',
    description: 'In a small town in Spain, Laia tries to stop her drunk younger brother, Arnau, from telling their traditionalist mother that he has fallen in love with a foreign boy. Over the course of one tense night, buried fears and unspoken truths begin to surface, forcing Laia to confront the gap between who she is expected to be and who she truly wants to become.',
    thumbnail: '/images/fiction/habla-bajo.jpg',
    videoUrl: '',
    order: 9,
  },
  {
    id: 'coronacion',
    title: 'Coronación',
    category: 'fiction',
    director: 'Ariadna Onofri',
    production: 'Iván Almendros',
    description: 'Although Sol and Rodrigo have everything prepared for the day of delivery, nothing goes as they had wished: she would like to have a natural birth and has visualized it a thousand times. Rodrigo just wants everything to go well and accompany Sol in her wishes. Everything is conjecture, because no one can predict how the hospital will be that day, nor will they be able to predict what kind of creature will come out of Sol\'s womb.', // NEEDS: English translation review
    thumbnail: '/images/fiction/coronacion.jpg',
    videoUrl: '',
    order: 10,
  },
];

// Ads & Fashion Films Projects
// NOTE: Only 6 will be displayed after curation, 4 as featured
export const adsProjects: Project[] = [
  {
    id: 'decathlon-summer',
    title: 'Decathlon - Summer',
    category: 'ads',
    director: 'Jordi Loops',
    production: 'COLMADO TV',
    description: 'Summer campaign for Decathlon featuring diverse talent and authentic energy.',
    thumbnail: '/images/ads/decathlon-summer.jpg',
    videoUrl: '',
    featured: true, // NEEDS: Confirm featured status
    order: 1,
  },
  {
    id: 'koi-vodka',
    title: 'KOI Vodka',
    category: 'ads',
    director: 'Jordi Loops',
    production: 'COLMADO TV',
    description: 'A man who embodies fire. Self-confident, magnetic, unstoppable. His life moves between lights, desire and vertigo. Night after night, he builds a journey where luxury, seduction and mystery coexist.', // NEEDS: English translation review
    thumbnail: '/images/ads/koi-vodka.jpg',
    videoUrl: '',
    featured: true,
    order: 2,
  },
  {
    id: 'see-you',
    title: 'See You',
    category: 'ads',
    director: 'Edu Iova & Miguel Barceló',
    description: 'After a recent breakup, a couple meets for the last time to close what was left pending. He waits for her up high, smoking. When they see each other, they barely say anything. Between columns, they look at each other, she returns the key and they say goodbye with a coldness that says it all.', // NEEDS: English translation review
    thumbnail: '/images/ads/see-you.jpg',
    videoUrl: '',
    order: 3,
  },
  {
    id: 'montana-colors',
    title: 'Montana Colors',
    category: 'ads',
    director: 'David Cuní',
    production: 'COLMADO TV',
    description: 'Three gazes that traverse the city. Three bodies that create, transform and resignify. A man connected to the urban pulse, a woman who makes art her language, a senior woman who inhabits her identity with freedom.', // NEEDS: English translation review
    thumbnail: '/images/ads/montana-colors.jpg',
    videoUrl: '',
    featured: true,
    order: 4,
  },
  {
    id: 'etnia-barcelona',
    title: 'Etnia Barcelona - Fortuneteller',
    category: 'ads',
    director: 'Amparo Bondia & Marta',
    production: 'ESCAC FILMS',
    description: 'A modern fortuneteller reveals the secret behind her gift: thanks to her Etnia glasses, she can see with absolute clarity what others cannot perceive. Far from the archetype of the dark witch, she inhabits a sophisticated, seventies universe, where glamour, color and mystery coexist.', // NEEDS: English translation review
    thumbnail: '/images/ads/etnia-barcelona.jpg',
    videoUrl: '',
    featured: true,
    order: 5,
  },
  {
    id: 'olend',
    title: 'Ölend Is In The Air',
    category: 'ads',
    director: 'Claudia Díaz + Ángela Sanz',
    production: 'ESCAC FILMS',
    description: 'Style, design and innovation merge in a universe that breathes elegance. Precise and atmospheric images shape a sensory experience where body, movement and air dialogue, and each presence adds, each gesture matters, until the individual transforms into collective.', // NEEDS: English translation review
    thumbnail: '/images/ads/olend.jpg',
    videoUrl: '',
    order: 6,
  },
  {
    id: 'el-lobo',
    title: 'El Lobo - Turrón Para Perros',
    category: 'ads',
    director: 'John Araque + Jan Callis',
    description: 'Holiday campaign for El Lobo featuring their unique dog-friendly turrón product.',
    thumbnail: '/images/ads/el-lobo.jpg',
    videoUrl: '',
    order: 7,
  },
  {
    id: 'oxford-generation',
    title: 'Oxford Generation',
    category: 'ads',
    director: 'Noa González',
    production: 'Pau Carceles + Maximilian Kalteis',
    description: 'Campaign showcasing the new generation of Oxford talent.',
    thumbnail: '/images/ads/oxford-generation.jpg',
    videoUrl: '',
    order: 8,
  },
];

// Music Videos Projects
// NOTE: Only 6 will be displayed after curation
export const musicVideoProjects: Project[] = [
  {
    id: 'la-casualidad',
    title: 'La Casualidad',
    category: 'music-videos',
    artist: 'Seye & Álex Ubago',
    director: 'Daniela Cortés',
    description: 'Stories about people who do not know each other yet, but already feel each other. About encounters that could have been and glances that almost happened. About the desire to find someone among thousands of faces and believe that destiny, at some point, will conspire in favor.', // NEEDS: English translation review
    thumbnail: '/images/music-videos/la-casualidad.jpg',
    videoUrl: '',
    order: 1,
  },
  {
    id: 'vamo-echando',
    title: "Vamo' Echando",
    category: 'music-videos',
    artist: 'Nia Correia & Guaynaa',
    director: 'John Araque + Santi Medina',
    description: 'Stories born in movement. Glances that understand each other without words. Bodies that meet before conversations.', // NEEDS: English translation review
    thumbnail: '/images/music-videos/vamo-echando.jpg',
    videoUrl: '',
    order: 2,
  },
  {
    id: 'todo-x-ti',
    title: 'Todo X Ti',
    category: 'music-videos',
    artist: 'Cora Novoa',
    director: 'Una explosión atómica',
    description: 'Stories that imagine possible futures. Worlds where technology coexists with the deep desire for human connection. Characters inhabiting artificial, fragmented and sensory landscapes.', // NEEDS: English translation review
    thumbnail: '/images/music-videos/todo-x-ti.jpg',
    videoUrl: '',
    order: 3,
  },
  {
    id: 'chanel',
    title: 'Chanel',
    category: 'music-videos',
    artist: 'Frei',
    director: 'Ismael Okbye',
    description: 'A visual journey through style, attitude and urban energy.',
    thumbnail: '/images/music-videos/chanel.jpg',
    videoUrl: '',
    order: 4,
  },
  {
    id: 'noti',
    title: 'Noti',
    category: 'music-videos',
    artist: 'La Blackie',
    director: 'John Araque + Santi Medina',
    description: 'Stories of characters who know their strength. Who move forward with determination, magnetism and presence. Who do not believe in luck, but in their own pulse.', // NEEDS: English translation review
    thumbnail: '/images/music-videos/noti.jpg',
    videoUrl: '',
    order: 5,
  },
  {
    id: 'so-cute',
    title: 'So Cute',
    category: 'music-videos',
    artist: 'Mayo',
    director: 'John Araque + Santi Medina',
    description: 'Identities that are built in front of the mirror and under the lights. People who coexist with what they were and what they are becoming. Faces that hold themselves with presence, magnetic gazes that tell their own story and bodies in constant transformation that exist as image and emotion.', // NEEDS: English translation review
    thumbnail: '/images/music-videos/so-cute.jpg',
    videoUrl: '',
    order: 6,
  },
  {
    id: 'paris',
    title: 'París',
    category: 'music-videos',
    artist: 'Ly Raine',
    director: 'John Araque + Santi Medina',
    description: 'Dreams that feel real. Desires that exist even if they only last an instant. Characters who inhabit the night as a space of fantasy, style and projection.', // NEEDS: English translation review
    thumbnail: '/images/music-videos/paris.jpg',
    videoUrl: '',
    order: 7,
  },
  {
    id: 'bonsai',
    title: 'Bonsai',
    category: 'music-videos',
    artist: 'Bores D',
    director: 'Ismael Okbye',
    description: 'Energies that recognize each other in movement. Attractions that are felt in the body before words. Characters who play, provoke and let themselves be carried by the rhythm.', // NEEDS: English translation review
    thumbnail: '/images/music-videos/bonsai.jpg',
    videoUrl: '',
    order: 8,
  },
  {
    id: 'loba',
    title: 'Loba',
    category: 'music-videos',
    artist: 'Sizzay',
    director: 'John Araque',
    description: 'A seductive and wild energy traverses the night: a self-confident woman, guided by desire, rhythm and the game of romance.', // NEEDS: English translation review
    thumbnail: '/images/music-videos/loba.jpg',
    videoUrl: '',
    order: 9,
  },
  {
    id: 'ah-ah',
    title: 'Ah Ah',
    category: 'music-videos',
    artist: 'Paula Koops',
    director: 'John Araque + Jan Callis',
    description: 'After the fall comes liberation. A woman who chooses herself and transforms loss into impulse, wound into light and goodbye into self-esteem. Confident presences, defiant gazes and bodies that celebrate their own transformation shape this awakening.', // NEEDS: English translation review
    thumbnail: '/images/music-videos/ah-ah.jpg',
    videoUrl: '',
    order: 10,
  },
];

// Helper function to get projects by category
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  switch (category) {
    case 'fiction':
      return fictionProjects.sort((a, b) => a.order - b.order);
    case 'ads':
      return adsProjects.sort((a, b) => a.order - b.order);
    case 'music-videos':
      return musicVideoProjects.sort((a, b) => a.order - b.order);
    default:
      return [];
  }
}

// Helper function to get featured projects
export function getFeaturedProjects(): Project[] {
  return adsProjects.filter(p => p.featured).sort((a, b) => a.order - b.order);
}
