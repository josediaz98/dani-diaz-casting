import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function Marquee({ children, direction = "left", speed = 20, className }: MarqueeProps) {
  return (
    <div className={cn("flex overflow-hidden whitespace-nowrap select-none", className)}>
      <motion.div
        className="flex min-w-full shrink-0 items-center gap-4 py-4"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
        {children}
        {children}
        {children} 
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 items-center gap-4 py-4"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}