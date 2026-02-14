import { motion } from "framer-motion";
import { useLocation } from "wouter";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <>
      <motion.div
        key={location}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-black z-[100] origin-top pointer-events-none"
      />
      <motion.div
        key={`${location}-exit`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-black z-[100] origin-bottom pointer-events-none"
      />
      {children}
    </>
  );
}