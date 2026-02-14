import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TextReveal({ text, className, delay = 0, duration = 0.8 }: TextRevealProps) {
  // Split text into words
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "inline-block" }} // Clip overflowing content during animation
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} style={{ display: "inline-block", marginRight: "0.25em" }}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${index}-${charIndex}`}
              variants={child}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}