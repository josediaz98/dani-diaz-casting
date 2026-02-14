import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageSelector({ className }: { className?: string }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.startsWith("es") ? "es" : "en";

  const toggleLanguage = () => {
    const newLang = currentLang === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-purple-400 transition-colors cursor-hover",
        className
      )}
      aria-label={`Switch to ${currentLang === "es" ? "English" : "Spanish"}`}
    >
      <Globe className="w-4 h-4" />
      <span>{currentLang === "es" ? "EN" : "ES"}</span>
    </button>
  );
}
