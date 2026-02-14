import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { Magnetic } from "@/components/ui/magnetic";
import heroBg from "@/assets/images/hero-bg.jpg";

export function HeroSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
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
      <motion.div
        style={{ opacity }}
        className="relative z-20 container mx-auto px-6 text-center space-y-8"
      >
        <div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white tracking-tight mb-2">
            <TextReveal text={t("hero.title")} />
          </h1>
          <p className="text-xl md:text-2xl uppercase tracking-[0.2em] text-gray-400 font-light mb-6">
            {t("hero.subtitle")}
          </p>
          <p className="text-lg text-gray-300 italic font-serif max-w-2xl mx-auto mb-10">
            <TextReveal
              text={t("hero.tagline")}
              delay={0.5}
              duration={0.6}
              className="text-lg"
            />
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
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-light text-white uppercase tracking-widest text-xs h-12 px-8 rounded-none transition-transform"
              >
                {t("common.viewWork")}
              </Button>
            </Magnetic>
          </Link>
          <Link href="/contact">
            <Magnetic>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white uppercase tracking-widest text-xs h-12 px-8 rounded-none transition-transform"
              >
                {t("common.getInTouch")}
              </Button>
            </Magnetic>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest">{t("common.scroll")}</span>
      </motion.div>
    </section>
  );
}
