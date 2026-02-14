import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function StatsGrid() {
  const { t } = useTranslation();

  const stats = [
    { value: "100+", label: t("stats.castings") },
    { value: "12+", label: t("stats.years") },
    { value: "3", label: t("stats.languages") },
    { value: "2", label: t("stats.continents") },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 border-y border-white/5">
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="text-4xl md:text-5xl font-serif text-purple-400/90">{stat.value}</div>
          <div className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}