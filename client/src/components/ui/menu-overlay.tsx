import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { X, ArrowRight } from "lucide-react";
import { Magnetic } from "./magnetic";
import { useState } from "react";

// Images
import heroBg from "@/assets/images/hero-bg.jpg";
import fictionCover from "@/assets/images/fiction-cover.jpg";
import adsCover from "@/assets/images/ads-cover.jpg";
import musicCover from "@/assets/images/music-cover.jpg";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const menuItems = [
    { title: "Home", href: "/", image: heroBg },
    { title: "Fiction", href: "/work/fiction", image: fictionCover },
    { title: "Advertising", href: "/work/ads", image: adsCover },
    { title: "Music Videos", href: "/work/music-videos", image: musicCover },
    { title: "About", href: "/about", image: heroBg }, // Fallback to hero for About
    { title: "Contact", href: "/contact", image: heroBg }, // Fallback to hero for Contact
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: { y: 50, opacity: 0 }
  } as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex overflow-hidden"
        >
          {/* Dynamic Background Image */}
          <div className="absolute inset-0 z-0">
             <AnimatePresence mode="wait">
                {hoveredItem ? (
                   <motion.div 
                     key={hoveredItem}
                     initial={{ opacity: 0, scale: 1.1 }}
                     animate={{ opacity: 0.4, scale: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.7, ease: "easeOut" }}
                     className="absolute inset-0"
                   >
                      <img 
                        src={menuItems.find(i => i.title === hoveredItem)?.image} 
                        className="w-full h-full object-cover grayscale opacity-60"
                        alt=""
                      />
                      <div className="absolute inset-0 bg-black/60" /> 
                   </motion.div>
                ) : (
                  <motion.div 
                     key="default"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="absolute inset-0 bg-neutral-950"
                  />
                )}
             </AnimatePresence>
          </div>

          {/* Close Button */}
          <div className="absolute top-0 right-0 p-6 md:p-12 z-50">
             <Magnetic>
              <button 
                onClick={onClose}
                className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group backdrop-blur-md"
              >
                <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </Magnetic>
          </div>

          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
            <div className="grid md:grid-cols-12 gap-12 h-full items-center">
              
              {/* Menu Links */}
              <div className="md:col-span-7 flex flex-col justify-center h-full">
                <motion.nav 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="flex flex-col space-y-2 md:space-y-4"
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {menuItems.map((link, idx) => (
                    <motion.div key={idx} variants={item} className="overflow-hidden">
                      <Link href={link.href}>
                        <a 
                          onClick={onClose}
                          onMouseEnter={() => setHoveredItem(link.title)}
                          className="group relative flex items-center"
                        >
                          {/* Number */}
                          <span className="text-xs md:text-sm font-sans font-light text-purple-400 absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
                            0{idx + 1}
                          </span>

                          {/* Text */}
                          <span 
                            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold transition-all duration-500 leading-tight group-hover:tracking-wide"
                            style={{ 
                              WebkitTextStroke: hoveredItem === link.title ? "0px" : "1px rgba(255,255,255,0.4)",
                              color: hoveredItem === link.title ? "white" : "transparent"
                            }}
                          >
                            {link.title}
                          </span>
                        </a>
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>

              {/* Info Column */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="hidden md:flex md:col-span-5 flex-col justify-end h-3/4 border-l border-white/10 pl-16 pb-20 space-y-16"
              >
                <div>
                  <h4 className="text-purple-400 uppercase tracking-widest text-xs mb-6 font-semibold">Language</h4>
                  <div className="flex gap-4 text-3xl font-serif">
                    <button 
                      onClick={() => setLanguage('en')}
                      className={`transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-gray-600 hover:text-gray-400'}`}
                    >
                      EN
                    </button>
                    <span className="text-gray-700">/</span>
                    <button 
                      onClick={() => setLanguage('es')}
                      className={`transition-colors duration-300 ${language === 'es' ? 'text-white' : 'text-gray-600 hover:text-gray-400'}`}
                    >
                      ES
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-purple-400 uppercase tracking-widest text-xs mb-6 font-semibold">Contact</h4>
                  <a href="mailto:contact@danidiazcasting.com" className="block text-3xl text-white font-serif hover:text-purple-400 transition-colors">
                    contact@danidiazcasting.com
                  </a>
                  <p className="text-gray-500 mt-4 text-sm uppercase tracking-wider">Based in Spain, working Worldwide</p>
                </div>

                <div>
                   <h4 className="text-purple-400 uppercase tracking-widest text-xs mb-6 font-semibold">Follow</h4>
                   <div className="flex gap-8 text-lg text-gray-400">
                      <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white/50 pb-1">Instagram</a>
                      <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white/50 pb-1">LinkedIn</a>
                      <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white/50 pb-1">IMDb</a>
                   </div>
                </div>

                <div>
                   <Link href="/contact">
                      <a onClick={onClose} className="group inline-flex items-center gap-4 text-white text-xl border border-white/20 rounded-full px-8 py-4 hover:bg-white hover:text-black hover:border-white transition-all duration-500">
                        Let's Work Together 
                        <ArrowRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                      </a>
                   </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}