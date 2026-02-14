import { motion } from "framer-motion";
import { Clapperboard, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { ProjectCard } from "@/components/project-card";
import { projectsInProduction } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { staggerContainer, staggerItem, fadeInUp } from "@/config/animations";
import { useTranslation } from "react-i18next";

export function InProductionSection() {
  const { t } = useTranslation();

  if (projectsInProduction.length === 0) {
    return null;
  }

  return (
    <section className="bg-gradient-to-b from-purple-950/20 to-black py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
          {...fadeInUp}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Clapperboard className="w-8 h-8 text-purple-400" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <span className="text-purple-400 uppercase text-sm tracking-widest font-semibold">
                {t("inProduction.label")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              {t("inProduction.title")}
            </h2>
            <p className="text-gray-400 max-w-xl">
              {t("inProduction.description")}
            </p>
          </div>
          <Link href="/work/fiction">
            <Magnetic>
              <Button
                variant="link"
                className="text-purple-400 hover:text-white p-0 h-auto mt-4 md:mt-0"
              >
                {t("inProduction.viewAll")} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Magnetic>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projectsInProduction.slice(0, 4).map((project, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
