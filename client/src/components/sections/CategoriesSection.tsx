import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { categoryCards } from "@/data/projects";
import { useTranslation } from "react-i18next";

export function CategoriesSection() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-6">
        {categoryCards.map((cat, idx) => (
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
                <div className="text-purple-400 font-serif text-3xl mb-1 italic opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {cat.count}
                </div>
                <h3 className="text-3xl font-serif text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity max-w-[90%]">
                  {cat.desc}
                </p>
                <div className="mt-6 flex items-center text-xs uppercase tracking-widest text-white/70 group-hover:text-purple-400 transition-colors">
                  {t("common.explore")} <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
