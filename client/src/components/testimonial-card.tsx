import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  country: string;
}

export function TestimonialCard({ quote, author, role, country }: TestimonialProps) {
  return (
    <motion.div 
      className="p-8 bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Quote className="w-8 h-8 text-purple-500/50 mb-6 group-hover:text-purple-400 transition-colors" />
      <p className="text-lg md:text-xl font-serif italic text-gray-300 mb-8 leading-relaxed">"{quote}"</p>
      <div>
        <h4 className="font-bold text-white tracking-wide">{author}</h4>
        <p className="text-sm text-purple-400/80 uppercase tracking-wider text-xs mt-1">{role} — {country}</p>
      </div>
    </motion.div>
  );
}