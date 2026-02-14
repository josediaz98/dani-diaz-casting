import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Magnetic } from "./ui/magnetic";
import { useState, useEffect } from "react";
import { TIMEZONE, SOCIAL_URLS } from "@/config/constants";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <span className="text-gray-500 uppercase tracking-widest text-xs mb-1">Madrid, Spain</span>
      <span className="text-white font-mono text-sm">
        {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', timeZone: TIMEZONE })} CET
      </span>
    </div>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white w-full h-[400px] md:h-[500px] flex flex-col justify-between py-8 md:py-12 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      
      {/* Background Marquee */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-[0.03] select-none overflow-hidden">
        <motion.div 
          className="whitespace-nowrap font-serif font-bold text-[15vw] leading-none"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          CASTING DIRECTION CASTING DIRECTION CASTING DIRECTION
        </motion.div>
      </div>

      {/* Top Section: CTA */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end pt-8 md:pt-12">
        <div className="space-y-4 max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[0.9] tracking-tight">
            Let's create <br />
            <span className="text-purple-400">something iconic.</span>
          </h2>
        </div>
        
        <div className="mt-8 md:mt-0">
          <Magnetic>
            <Link href="/contact">
              <a className="group flex items-center gap-4 text-lg md:text-xl font-medium border border-white/20 rounded-full px-8 py-4 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white transition-all duration-500">
                Start a Project
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </a>
            </Link>
          </Magnetic>
        </div>
      </div>

      {/* Bottom Section: Info & Links */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 border-t border-white/10 pt-8 md:pt-12 mt-auto">
        
        {/* Brand & Clock */}
        <div className="col-span-2 md:col-span-4 flex flex-col justify-between h-full gap-6">
          <div>
             <h3 className="text-2xl font-serif font-bold mb-2">DANI DÍAZ</h3>
             <LiveClock />
          </div>
        </div>

        {/* Links */}
        <div className="col-span-1 md:col-span-4 flex flex-col md:flex-row gap-8 text-xs md:text-sm uppercase tracking-widest text-gray-400">
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold mb-1">Sitemap</span>
            <Link href="/"><a className="hover:text-purple-400 transition-colors">Home</a></Link>
            <Link href="/work/fiction"><a className="hover:text-purple-400 transition-colors">Work</a></Link>
            <Link href="/about"><a className="hover:text-purple-400 transition-colors">About</a></Link>
          </div>
          <div className="flex flex-col gap-3">
             <span className="text-white font-bold mb-1">Socials</span>
             <a href={SOCIAL_URLS.instagram} className="hover:text-purple-400 transition-colors">Instagram</a>
             <a href={SOCIAL_URLS.linkedin} className="hover:text-purple-400 transition-colors">LinkedIn</a>
             <a href={SOCIAL_URLS.imdb} className="hover:text-purple-400 transition-colors">IMDb</a>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="col-span-1 md:col-span-4 flex flex-col justify-between items-end h-full">
           <Magnetic>
             <button 
               onClick={scrollToTop}
               className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors mb-4 group"
               aria-label="Back to top"
             >
               <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
             </button>
           </Magnetic>
           <p className="text-xs text-gray-600 text-right">
             © {new Date().getFullYear()} Dani Díaz.<br/>All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
}