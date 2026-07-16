"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ImageParallaxProps {
  src: string;
  alt: string;
  className?: string;
  offsetY?: number; 
}

export default function ImageParallax({ 
  src, 
  alt, 
  className = "", 
  offsetY = 150 
}: ImageParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  
  // Translation Y pour le parallax
  const yPos = useTransform(smoothProgress, [0, 1], [-offsetY, offsetY]);

  return (
    <motion.div 
      ref={ref}
      className={`relative ${className}`}
      style={{ y: yPos }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        priority
      />
    </motion.div>
  );
}
