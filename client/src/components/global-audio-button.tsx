import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAudio } from "@/contexts/audio-context";
import { useTranslation } from "react-i18next";

interface GlobalAudioButtonProps {
  className?: string;
}

export function GlobalAudioButton({ className }: GlobalAudioButtonProps) {
  const { isPlaying, toggle } = useAudio();
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const label = isPlaying ? t("audio.mute") : t("audio.unmute");

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      onClick={toggle}
      className={cn(
        "fixed z-40 w-12 h-12 rounded-full",
        "bg-black/60 backdrop-blur-md",
        "border border-white/10 hover:border-purple-500/50",
        "flex items-center justify-center",
        "transition-all duration-300",
        "hover:bg-black/80 hover:scale-105",
        "focus:outline-none focus:ring-2 focus:ring-purple-500",
        "cursor-pointer group",
        "bottom-24 right-6 md:bottom-8 md:right-8",
        className
      )}
      aria-label={label}
      aria-pressed={isPlaying}
      title={label}
    >
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="muted"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </motion.div>
        ) : (
          <motion.div
            key="unmuted"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Volume2 className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle pulse animation when playing (respects reduced motion) */}
      {isPlaying && !prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 rounded-full border border-purple-500/30"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: 3,
            ease: "easeOut",
          }}
        />
      )}
    </motion.button>
  );
}
