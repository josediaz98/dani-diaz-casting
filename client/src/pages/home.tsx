import { Layout } from "@/components/layout";
import { StatsGrid } from "@/components/stats-grid";
import { Spotlight } from "@/components/ui/spotlight";
import { Marquee } from "@/components/ui/marquee";
import { Clapperboard } from "lucide-react";
import {
  HeroSection,
  CategoriesSection,
  FeaturedWorkSection,
  InProductionSection,
  AboutPreviewSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20 bg-background relative z-10">
        <Spotlight className="absolute inset-0 z-0 pointer-events-none" />
        <div className="relative z-10">
          <StatsGrid />
        </div>
      </section>

      {/* In Production Section */}
      <InProductionSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Featured Work Section */}
      <FeaturedWorkSection />

      {/* About Preview */}
      <AboutPreviewSection />

      {/* Final CTA */}
      <CTASection />

      {/* Marquee Divider */}
      <section className="bg-primary text-white border-y border-white/10 overflow-hidden">
        <Marquee speed={30} className="py-6 bg-purple-900/20 backdrop-blur-sm">
          <span className="text-2xl md:text-4xl font-serif italic mx-8 text-white/50">
            FICTION
          </span>
          <Clapperboard className="w-6 h-6 md:w-8 md:h-8 mx-4 text-purple-400" />
          <span className="text-2xl md:text-4xl font-serif italic mx-8 text-white/50">
            ADVERTISING
          </span>
          <Clapperboard className="w-6 h-6 md:w-8 md:h-8 mx-4 text-purple-400" />
          <span className="text-2xl md:text-4xl font-serif italic mx-8 text-white/50">
            MUSIC VIDEOS
          </span>
          <Clapperboard className="w-6 h-6 md:w-8 md:h-8 mx-4 text-purple-400" />
          <span className="text-2xl md:text-4xl font-serif italic mx-8 text-white/50">
            DOCUMENTARY
          </span>
          <Clapperboard className="w-6 h-6 md:w-8 md:h-8 mx-4 text-purple-400" />
        </Marquee>
      </section>
    </Layout>
  );
}
