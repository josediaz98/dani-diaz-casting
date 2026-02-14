import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { Spotlight } from "@/components/ui/spotlight";
import { Magnetic } from "@/components/ui/magnetic";
import { featuredWork } from "@/data/projects";

export function FeaturedWorkSection() {
  return (
    <section className="bg-white/5 py-24 relative overflow-hidden">
      <Spotlight className="absolute inset-0 z-0 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Featured Work
            </h2>
            <p className="text-gray-400 max-w-xl">
              Recent campaigns showcasing authentic talent and creative vision.
            </p>
          </div>
          <Link href="/work/fiction">
            <Magnetic>
              <Button
                variant="link"
                className="text-purple-400 hover:text-white p-0 h-auto mt-4 md:mt-0"
              >
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
  );
}
