import { Layout } from "@/components/layout";
import { ProjectCard } from "@/components/project-card";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/projects";
import { heroTextReveal, fadeIn } from "@/config/animations";
import { useTranslation } from "react-i18next";

export default function WorkCategory() {
  const [, params] = useRoute("/work/:category");
  const categoryKey = params?.category as keyof typeof categories;
  const categoryData = categories[categoryKey];
  const { t } = useTranslation();

  if (!categoryData) {
    return (
      <Layout>
        <div className="pt-32 text-center">
          <h1 className="text-4xl text-white">{t("work.categoryNotFound")}</h1>
          <Button
            asChild
            className="mt-4 bg-white text-black hover:bg-gray-200"
          >
            <a href="/">{t("work.goHome")}</a>
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
              {...heroTextReveal}
            >
              {categoryData.title}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 font-light"
              {...fadeIn}
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
          <h2 className="text-3xl font-serif text-white mb-6">
            {t("work.startProject")}
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-purple-400 hover:text-white uppercase tracking-widest px-10 rounded-none h-14"
          >
            <a href="/contact">{t("common.getInTouch")}</a>
          </Button>
        </section>
      </div>
    </Layout>
  );
}
