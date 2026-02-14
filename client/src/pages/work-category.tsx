import { Layout } from "@/components/layout";
import { ProjectCard } from "@/components/project-card";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Mock data
import fictionCover from "@/assets/images/fiction-cover.jpg";
import adsCover from "@/assets/images/ads-cover.jpg";
import musicCover from "@/assets/images/music-cover.jpg";
import heroBg from "@/assets/images/hero-bg.jpg";

const categories = {
  fiction: {
    title: "Fiction",
    subtitle: "Feature films and short films with authentic characters",
    cover: fictionCover,
    projects: [
      {
        title: "The Silent Echo",
        director: "Maria González",
        year: "2024",
        description: "A psychological thriller requiring intense emotional range.",
        image: fictionCover
      },
      {
        title: "Lost in Translation",
        director: "Sofia Coppola (Homage)",
        year: "2022",
        description: "Recreation project focusing on subtle micro-expressions.",
        image: heroBg
      },
      {
        title: "Summer Rain",
        director: "Carlos Ruiz",
        year: "2023",
        description: "Coming of age story set in rural Spain.",
        image: fictionCover // Reusing for mock
      },
      {
        title: "The Apartment",
        director: "Ana Torres",
        year: "2021",
        description: "Chamber drama with a cast of 3.",
        image: heroBg // Reusing
      }
    ]
  },
  ads: {
    title: "Ads & Fashion",
    subtitle: "Campaigns that connect with real presence",
    cover: adsCover,
    projects: [
      {
        title: "Urban Pulse",
        director: "Jean-Luc Pierre",
        year: "2023",
        description: "Global sportswear campaign focused on street dancers.",
        image: adsCover
      },
      {
        title: "Midnight Scent",
        director: "Elena Valli",
        year: "2024",
        description: "Luxury perfume commercial with editorial aesthetic.",
        image: adsCover // Reusing
      },
      {
        title: "Tech Future",
        director: "Mark Chen",
        year: "2023",
        description: "Clean, futuristic tech brand launch.",
        image: adsCover // Reusing
      }
    ]
  },
  "music-videos": {
    title: "Music Videos",
    subtitle: "Visual storytelling through movement and energy",
    cover: musicCover,
    projects: [
      {
        title: "Neon Nights",
        director: "Sarah Smith",
        year: "2023",
        description: "Music video featuring 50+ background artists.",
        image: musicCover
      },
      {
        title: "Heartbeat",
        director: "David Wolf",
        year: "2022",
        description: "Narrative driven music video.",
        image: musicCover // Reusing
      },
      {
        title: "Dance Floor",
        director: "Lisa Ray",
        year: "2023",
        description: "Choreography heavy production.",
        image: musicCover // Reusing
      }
    ]
  }
};

export default function WorkCategory() {
  const [match, params] = useRoute("/work/:category");
  const categoryKey = params?.category as keyof typeof categories;
  const categoryData = categories[categoryKey];

  if (!categoryData) {
    return (
      <Layout>
        <div className="pt-32 text-center">
          <h1 className="text-4xl text-white">Category Not Found</h1>
          <Button asChild className="mt-4 bg-white text-black hover:bg-gray-200">
            <a href="/">Go Home</a>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20">
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img 
                src={categoryData.cover} 
                alt={categoryData.title} 
                className="w-full h-full object-cover"
              />
           </div>
           
           <div className="relative z-20 text-center space-y-4 px-6">
             <motion.h1 
               className="text-6xl md:text-8xl font-serif text-white font-bold"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
             >
               {categoryData.title}
             </motion.h1>
             <motion.p 
               className="text-xl text-gray-200 font-light"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
             >
               {categoryData.subtitle}
             </motion.p>
           </div>
        </section>

        <section className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} category={categoryData.title} />
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-white/5 text-center">
          <h2 className="text-3xl font-serif text-white mb-6">Start Your Next Project</h2>
          <Button asChild size="lg" className="bg-white text-black hover:bg-purple-400 hover:text-white uppercase tracking-widest px-10 rounded-none h-14">
            <a href="/contact">Get In Touch</a>
          </Button>
        </section>
      </div>
    </Layout>
  );
}