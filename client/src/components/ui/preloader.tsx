import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [location] = useLocation();
  const [shouldRender, setShouldRender] = useState(false);

  const texts = [
    "CASTING SESSION",
    "CAMERA ROLLING",
    "ACTION"
  ];

  useEffect(() => {
    // Check if we've already shown the preloader in this session
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    // Only show on homepage and if not visited yet
    if (location === "/" && !hasVisited) {
      setShouldRender(true);
      
      const interval = setInterval(() => {
        setTextIndex((prev) => {
          if (prev >= texts.length - 1) {
            clearInterval(interval);
            setTimeout(() => {
              setIsLoading(false);
              sessionStorage.setItem("hasVisited", "true");
            }, 800);
            return prev;
          }
          return prev + 1;
        });
      }, 800);

      return () => clearInterval(interval);
    } else {
      setIsLoading(false);
      setShouldRender(false);
    }
  }, [location]);

  if (!shouldRender) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden font-mono"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Film Grain Overlay for the loader */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay">
            <div 
              className="w-full h-full bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10 w-full max-w-md px-6">
            <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
               <div className="text-xs text-white/50 uppercase tracking-widest">
                  REC ●
               </div>
               <div className="text-xs text-white/50 uppercase tracking-widest">
                  {new Date().toLocaleTimeString()}
               </div>
            </div>

            <div className="h-24 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={textIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-4xl font-bold text-white tracking-widest text-center"
                >
                  {texts[textIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-start border-t border-white/20 pt-4 mt-4">
               <div className="text-xs text-white/50 uppercase tracking-widest">
                  ISO 800
               </div>
               <div className="text-xs text-white/50 uppercase tracking-widest text-right">
                  24 FPS<br/>RAW
               </div>
            </div>
          </div>

          {/* Decorative lines mimicking a camera viewfinder */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-white/30" />
          <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-white/30" />
          <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-white/30" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-white/30" />
          
          {/* Center crosshair */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <div className="w-[1px] h-full bg-white/10" />
            <div className="h-[1px] w-full bg-white/10 absolute" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}