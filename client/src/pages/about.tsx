import { Layout } from "@/components/layout";
import { TestimonialCard } from "@/components/testimonial-card";
import portraitDani from "@/assets/images/portrait-dani.jpg";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { fadeInLeft, scaleIn, withDelay } from "@/config/animations";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeInLeft}>
              <span className="text-purple-400 uppercase tracking-widest text-sm font-bold mb-4 block">
                {t("about.sectionLabel")}
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
                {t("about.title")}
              </h1>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>{t("about.bio.paragraph1")}</p>
                <p>{t("about.bio.paragraph2")}</p>
                <p>{t("about.bio.paragraph3")}</p>
              </div>
            </motion.div>

            <motion.div className="relative" {...withDelay(scaleIn, 0.2)}>
              <div className="aspect-[3/4] bg-white/5 relative z-10 overflow-hidden">
                <img
                  src={portraitDani}
                  alt="Dani Díaz"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-purple-500/30 z-0" />
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-white/5 py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-serif text-white mb-6">
                {t("about.philosophy.title")}
              </h2>
              <p className="text-gray-400 text-lg">
                {t("about.philosophy.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: t("about.philosophy.humanApproach.title"),
                  desc: t("about.philosophy.humanApproach.description"),
                },
                {
                  title: t("about.philosophy.authenticityFirst.title"),
                  desc: t("about.philosophy.authenticityFirst.description"),
                },
                {
                  title: t("about.philosophy.diversityAsNature.title"),
                  desc: t("about.philosophy.diversityAsNature.description"),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-black/40 p-8 border border-white/5 hover:border-purple-500/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-serif text-purple-400 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-serif text-white mb-12 text-center">
            {t("about.testimonials.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
