'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import { useState, useEffect } from 'react';

const BACKGROUND_IMAGES = [
  '/hero/Former_1.webp',
  '/hero/Former_2.webp',
  '/hero/Former_3.webp',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center" id='accueil'>
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 bg-black">
        {BACKGROUND_IMAGES.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/80 to-black/50 z-10" />
      </div>

      {/* Content - Centered without box */}
      <div className="container relative z-20 px-6 mx-auto">
        <div className="max-w-5xl mx-auto text-center mt-12">
          <FadeIn delay={0.3}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[140px] font-black leading-tight">
              <span className="font-black bg-linear-to-r from-[rgb(210,69,38)] via-[rgb(230,89,58)] to-[rgb(210,69,38)] bg-clip-text text-transparent">
                AGANO
              </span> <br />
              {/* <span className="text-sm md:text-lg lg:text-xl align-top text-white/95">& </span> */}
              <span className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl align-top font-black text-white/95">CENTRE DE FORMATION</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.5} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/formations"
              className="hidden md:flex group relative px-10 py-5 bg-linear-to-r from-[rgb(210,69,38)] to-[rgb(230,89,58)] text-white font-bold text-lg rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Formations
              </span>
            </Link>

            <Link
              href="https://aganoservicesconsultances.com/actualites"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all hover:border-white/50"
            >
              News
            </Link>

            <Link
              href="#inscription"
              className="group relative px-10 py-5 bg-linear-to-r from-[rgb(210,69,38)] to-[rgb(230,89,58)] text-white font-bold text-lg rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Inscription
              </span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
