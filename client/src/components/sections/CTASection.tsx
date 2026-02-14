import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="bg-primary/20 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
      <div className="container mx-auto px-6 relative z-20 text-center">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          {t("cta.title")}
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("cta.description")}
        </p>
        <Link href="/contact">
          <Magnetic>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-purple-400 hover:text-white uppercase tracking-widest text-xs h-14 px-10 rounded-none text-lg"
            >
              {t("common.getInTouch")}
            </Button>
          </Magnetic>
        </Link>
      </div>
    </section>
  );
}
