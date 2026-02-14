import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";

interface ProjectCardProps {
  image: string;
  title: string;
  director: string;
  year?: string;
  description: string;
  category?: string;
  artist?: string;
}

export function ProjectCard({ image, title, director, year, description, category, artist }: ProjectCardProps) {
  return (
    <div className="group relative cursor-pointer">
      <TiltCard className="h-full" intensity={10}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="h-full flex flex-col"
        >
          <div className="relative aspect-video overflow-hidden bg-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
            
            {/* Image with zoom effect */}
            <motion.img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Category Tag */}
            {category && (
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-xs uppercase tracking-widest text-white/90 border border-white/10">
                  {category}
                </span>
              </div>
            )}
          </div>

          <div className="mt-4 space-y-1">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-serif text-white group-hover:text-primary-foreground transition-colors">{title}</h3>
              {year && <span className="text-sm text-gray-500 font-mono">{year}</span>}
            </div>
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              {artist && <><span className="text-white">{artist}</span> · </>}
              Dir. {director}
            </p>
            <p className="text-sm text-gray-500 line-clamp-2 mt-2">{description}</p>
          </div>
        </motion.div>
      </TiltCard>
    </div>
  );
}