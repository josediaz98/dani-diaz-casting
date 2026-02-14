import { Link } from "wouter";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

export function AboutPreviewSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <Quote className="w-16 h-16 text-purple-500/40 mx-auto mb-10" />

        <h2 className="text-3xl md:text-5xl font-serif leading-tight text-gray-200 mb-12">
          "{t("about.quote")}"
        </h2>

        <Link href="/about">
          <Magnetic>
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white hover:text-black uppercase tracking-widest text-sm h-14 px-10 rounded-none transition-all duration-300"
            >
              {t("common.learnMore")}
            </Button>
          </Magnetic>
        </Link>
      </div>
    </section>
  );
}
