"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionBlobs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start end", "end start"] 
  });
  
  // Différentes vitesses et directions pour le parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div 
        style={{ y: y1 }} 
        className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" 
      />
      <motion.div 
        style={{ y: y2 }} 
        className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" 
      />
    </div>
  );
}
