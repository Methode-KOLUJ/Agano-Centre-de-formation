"use client";

import React, { useState, useEffect } from 'react';
import FadeIn from '@/components/ui/FadeIn';

const FORMATIONS = [
  { title: "Informatique bureautique", img: "/Informatique.jpg" },
  { title: "Entrepreneuriat", img: "/formations/Entrepreneuriat 2.jpg" },
  { title: "Anglais", img: "/English.jpg" },
  { title: "Secrétariat de direction", img: "/formations/secretariat 2.jfif" },
  { title: "Développement Web", img: "/formations/developpement-web.jpg" },
  { title: "Hôtesse d'accueil", img: "/formations/hotesse 3.jpg" },
  { title: "Ressources humaines", img: "/formations/hr 1.jpg" },

];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play optionnel pour faire défiler les formations automatiquement
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FORMATIONS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="a-propos" className="relative w-full bg-white text-gray-900 py-24 md:py-32 overflow-hidden px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed" />
                <div className="absolute inset-0 bg-white/60" />
            </div>

      <div className="container relative z-10 mx-auto px-2 max-w-7xl">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-16 lg:gap-24 items-center mb-24">
            
            {/* Left Column: Text Content */}
            <FadeIn className="space-y-8">
              <div className="space-y-6 text-lg md:text-xl lg:text-2xl xl:text-[26px] text-gray-600 leading-relaxed font-light">
                <p>
                  <strong className="font-bold text-primary">Agano Centre de Formation</strong> est un centre de formation multidisciplinaire dédié au développement des compétences professionnelles recherchées sur le marché de l'emploi. Notre objectif est d'accompagner les apprenants dans leur parcours de croissance en leur proposant des formations pratiques, modernes et adaptées aux besoins des entreprises.
                </p>
                <p>
                  Grâce à une approche axée sur la pratique, l'innovation et l'excellence, nous préparons nos étudiants à relever les défis du monde professionnel et à construire une carrière durable.
                </p>
              </div>
            </FadeIn>
          </div>
        
        {/* Formations Cards Slider */}
        <FadeIn delay={0.3}>
          <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
            {/* Slider Track */}
            <div 
              className="flex transition-transform duration-700 ease-in-out h-[50vh] md:h-[70vh] lg:h-[85vh]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {FORMATIONS.map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-full flex-shrink-0 relative group cursor-pointer overflow-hidden"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-white/20 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                    style={{ backgroundImage: `url('${item.img}')` }} 
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 transition-colors duration-500 group-hover:bg-black/80" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-80" />
                  
                  {/* Strict Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl uppercase font-black text-white tracking-wide drop-shadow-lg transform transition-transform duration-500 group-hover:scale-105">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 z-20">
              {FORMATIONS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? "bg-primary w-8 shadow-[0_0_10px_rgba(210,69,38,0.8)]" 
                      : "bg-white/50 w-3 hover:bg-white"
                  }`}
                  aria-label={`Aller à la formation ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
        </div>
      </div>
    </section>
  );
}
