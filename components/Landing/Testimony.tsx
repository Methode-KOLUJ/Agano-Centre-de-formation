'use client'

import React, { useState, useEffect } from 'react';
import FadeIn from '@/components/ui/FadeIn';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIES = [
  {
    id: 1,
    name: "Gracia Mujinga",
    formation: "Secrétariat de Direction",
    content:
      "La formation en Secrétariat de Direction à Agano Centre de Formation a été une véritable opportunité pour moi. J'y ai acquis des compétences pratiques en gestion administrative, rédaction professionnelle et organisation du travail. Aujourd'hui, je me sens beaucoup plus confiante et prête à évoluer dans un environnement professionnel exigeant.",
    img: "/Testimony/Gracia.jpeg"
  },
  {
    id: 2,
    name: "Ben Kazadi",
    formation: "Entrepreneuriat",
    content:
      "Agano Centre de Formation m'a donné les outils nécessaires pour lancer et gérer mon entreprise avec professionnalisme. Les modules étaient pratiques, les échanges enrichissants et l'accompagnement m'a aidé à éviter plusieurs erreurs de débutant. Je recommande cette formation à tous les futurs entrepreneurs.",
    img: "/Testimony/Ben.jpeg"
  },
  {
    id: 3,
    name: "Dorcas Kalaba",
    formation: "Entrepreneuriat",
    content:
      "Cette formation m'a permis de transformer une simple idée en un véritable projet d'entreprise. Les formateurs partageaient des conseils concrets, basés sur les réalités du terrain. Aujourd'hui, je gère mon activité avec plus de confiance et une vision claire de son développement.",
    img: "/Testimony/Dorcas.jpeg"
  },
  {
    id: 4,
    name: "Sarah KINKUNKA",
    formation: "Informatique",
    content:
      "Avant de rejoindre Agano Centre de Formation, j'avais peu de connaissances en informatique. Aujourd'hui, je maîtrise les outils bureautiques essentiels et plusieurs techniques numériques utiles dans le monde professionnel. La qualité de l'encadrement et les exercices pratiques ont fait toute la différence.",
    img: "/Testimony/Sarah.jpeg"
  }
];

export default function Testimony() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimony = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIES.length);
  };

  const prevTestimony = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIES.length) % TESTIMONIES.length);
  };

  return (
    <section className="relative w-full bg-gray-50 py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
            Ce qu'ils disent de <span className="bg-linear-to-r from-[rgb(210,69,38)] to-[rgb(230,89,58)] bg-clip-text text-transparent">Nous</span>
          </h2>
          <p className="text-md md:text-lg lg:text-xl text-gray-600">
            Découvrez les retours de nos anciens apprenants.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="relative">
          {/* Main Carousel Container */}
          <div className="relative bg-white rounded-2xl p-8 md:p-16 shadow-lg border border-gray-300 min-h-[350px] flex items-center justify-center">
            
            {/* Background Quote Icon */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 opacity-5">
              <Quote className="w-24 h-24 text-[rgb(210,69,38)] rotate-180" />
            </div>

            {/* Testimonies Wrapper */}
            <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center text-center z-10">
              
              <Quote className="w-10 h-10 text-[rgb(210,69,38)] mb-6 mx-auto opacity-80 rotate-180" />
              
              {/* Content */}
              <div className="relative h-32 md:h-24 w-full flex items-center justify-center mb-10">
                {TESTIMONIES.map((testimony, idx) => (
                  <p 
                    key={testimony.id}
                    className={`absolute w-full text-xs sm:text-sm md:text-lg italic text-gray-700 font-medium leading-relaxed transition-all duration-700 ease-in-out
                      ${idx === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}
                    `}
                  >
                    {testimony.content}
                  </p>
                ))}
              </div>

              {/* Author Info */}
              <div className="relative h-16 w-full flex justify-center items-center">
                {TESTIMONIES.map((testimony, idx) => (
                  <div 
                    key={testimony.id}
                    className={`absolute flex items-center gap-4 transition-all duration-700 ease-in-out
                      ${idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                    `}
                  >
                    <img 
                      src={testimony.img} 
                      alt={testimony.name} 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[rgb(210,69,38)]/20 shadow-md"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-lg md:text-xl leading-tight">{testimony.name}</h4>
                      <p className="text-sm md:text-lg text-gray-500 font-medium">{testimony.formation}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Navigation Arrows */}
            {/* <button 
              onClick={prevTestimony}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[rgb(210,69,38)] hover:shadow-lg transition-all z-20 focus:outline-none"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimony}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[rgb(210,69,38)] hover:shadow-lg transition-all z-20 focus:outline-none"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button> */}
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Aller au témoignage ${idx + 1}`}
                className={`transition-all duration-300 rounded-full h-2 ${
                  idx === currentIndex 
                    ? 'w-8 bg-linear-to-r from-[rgb(210,69,38)] to-[rgb(230,89,58)]' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
