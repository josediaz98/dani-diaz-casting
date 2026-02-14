import { Layout } from "@/components/layout";
import { ProjectCard } from "@/components/project-card";
import { StatsGrid } from "@/components/stats-grid";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Quote, Clapperboard } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { Spotlight } from "@/components/ui/spotlight";
import { Marquee } from "@/components/ui/marquee";

// Mock data
import heroBg from "@/assets/images/hero-bg.jpg";
import fictionCover from "@/assets/images/fiction-cover.jpg";
import adsCover from "@/assets/images/ads-cover.jpg";
import musicCover from "@/assets/images/music-cover.jpg";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const featuredWork = [
    {
      image: fictionCover,
      title: "The Silent Echo",
      director: "Maria González",
      year: "2024",
      description: "A psychological thriller requiring intense emotional range and authentic local dialect.",
      category: "Fiction"
    },
    {
      image: adsCover,
      title: "Urban Pulse",
      director: "Jean-Luc Pierre",
      year: "2023",
      description: "Global sportswear campaign focused on street dancers and real athletes.",
      category: "Advertising"
    },
    {
      image: musicCover,
      title: "Neon Nights",
      director: "Sarah Smith",
      year: "2023",
      description: "Music video featuring 50+ background artists and 3 lead dancers.",
      category: "Music Video"
    },
    {
      image: heroBg,
      title: "Lost in Translation",
      director: "Sofia Coppola (Homage)",
      year: "2022",
      description: "Recreation project focusing on subtle micro-expressions and chemistry.",
      category: "Fiction"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-10" />
          <img 
            src={heroBg} 
            alt="Film Set" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div style={{ opacity }} className="relative z-20 container mx-auto px-6 text-center space-y-8">
          <div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white tracking-tight mb-2">
              <TextReveal text="DANI DÍAZ" />
            </h1>
            <p className="text-xl md:text-2xl uppercase tracking-[0.2em] text-gray-400 font-light mb-6">
              International Casting Director
            </p>
            <p className="text-lg text-gray-300 italic font-serif max-w-2xl mx-auto mb-10">
              <TextReveal text="Find the faces your story needs." delay={0.5} duration={0.6} className="text-lg" />
            </p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link href="/work/fiction">
              <Magnetic>
                <Button size="lg" className="bg-primary hover:bg-primary-light text-white uppercase tracking-widest text-xs h-12 px-8 rounded-none transition-transform">
                  View My Work
                </Button>
              </Magnetic>
            </Link>
            <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer">
              <Magnetic>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white uppercase tracking-widest text-xs h-12 px-8 rounded-none transition-transform">
                  Join Talent Pool
                </Button>
              </Magnetic>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>


      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20 bg-background relative z-10">
        <Spotlight className="absolute inset-0 z-0 pointer-events-none" />
        <div className="relative z-10">
           <StatsGrid />
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Fiction", 
              count: "60+", 
              desc: "Feature films and short films with authentic characters", 
              link: "/work/fiction",
              image: fictionCover
            },
            { 
              title: "Ads & Fashion", 
              count: "30+", 
              desc: "Campaigns that connect with real presence", 
              link: "/work/ads",
              image: adsCover
            },
            { 
              title: "Music Videos", 
              count: "30+", 
              desc: "Visual storytelling through movement and energy", 
              link: "/work/music-videos",
              image: musicCover
            }
          ].map((cat, idx) => (
            <Link key={idx} href={cat.link}>
              <motion.div 
                className="group relative h-[400px] overflow-hidden cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="text-purple-400 font-serif text-3xl mb-1 italic opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">{cat.count}</div>
                  <h3 className="text-3xl font-serif text-white mb-2">{cat.title}</h3>
                  <p className="text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity max-w-[90%]">{cat.desc}</p>
                  <div className="mt-6 flex items-center text-xs uppercase tracking-widest text-white/70 group-hover:text-purple-400 transition-colors">
                    Explore <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="bg-white/5 py-24 relative overflow-hidden">
        <Spotlight className="absolute inset-0 z-0 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Featured Work</h2>
              <p className="text-gray-400 max-w-xl">Recent campaigns showcasing authentic talent and creative vision.</p>
            </div>
            <Link href="/work/fiction">
              <Magnetic>
                 <Button variant="link" className="text-purple-400 hover:text-white p-0 h-auto mt-4 md:mt-0">
                   View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
              </Magnetic>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWork.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <Quote className="w-16 h-16 text-purple-500/40 mx-auto mb-10" />
          
          <h2 className="text-3xl md:text-5xl font-serif leading-tight text-gray-200 mb-12">
            "I am a Peruvian Casting Director with more than 12 years of experience leading projects across Latin America and Europe. I specialize in discovering authentic talent and creating inclusive, human-centered casting methodologies."
          </h2>
          
          <Link href="/about">
            <Magnetic>
              <Button variant="outline" className="border-white/20 hover:bg-white hover:text-black uppercase tracking-widest text-sm h-14 px-10 rounded-none transition-all duration-300">
                Learn More About Me
              </Button>
            </Magnetic>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary/20 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Let's Cast It</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            International casting with a human approach—authentic talent, strong on-camera presence, and a seamless process from brief to final selection.
          </p>
          <Link href="/contact">
            <Magnetic>
              <Button size="lg" className="bg-white text-black hover:bg-purple-400 hover:text-white uppercase tracking-widest text-xs h-14 px-10 rounded-none text-lg">
                Get In Touch
              </Button>
            </Magnetic>
          </Link>
        </div>
      </section>

      {/* Marquee Divider */}
      <section className="bg-primary text-white border-y border-white/10 overflow-hidden">
        <Marquee speed={30} className="py-6 bg-purple-900/20 backdrop-blur-sm">
          <span className="text-2xl md:text-4xl font-serif italic mx-8 text-white/50">FICTION</span>
          <Clapperboard className="w-6 h-6 md:w-8 md:h-8 mx-4 text-purple-400" />
          <span className="text-2xl md:text-4xl font-serif italic mx-8 text-white/50">ADVERTISING</span>
          <Clapperboard className="w-6 h-6 md:w-8 md:h-8 mx-4 text-purple-400" />
          <span className="text-2xl md:text-4xl font-serif italic mx-8 text-white/50">MUSIC VIDEOS</span>
          <Clapperboard className="w-6 h-6 md:w-8 md:h-8 mx-4 text-purple-400" />
          <span className="text-2xl md:text-4xl font-serif italic mx-8 text-white/50">DOCUMENTARY</span>
          <Clapperboard className="w-6 h-6 md:w-8 md:h-8 mx-4 text-purple-400" />
        </Marquee>
      </section>
    </Layout>
  );
}