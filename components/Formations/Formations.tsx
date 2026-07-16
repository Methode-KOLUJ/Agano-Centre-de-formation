"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const FormationContents = [
  {
    title: "Informatique bureautique",
    description:
      "Nous vous formons aux outils informatiques bureautiques qui vous permettront d'écrire des rapports, agréger des données statistiques et créer des présentations visuelles pour tous vos rapports.",
    image: [
      "/formations/Excel.jpg",
      "/formations/Powerpoint.jpg",
      "/formations/Word.jpg",
    ],
  },
  {
    title: "Anglais",
    description:
      "Avec la formation d'anglais, vous serez capable de vous exprimer et d'écrire en anglais afin d'accéder à des marchés anglophones dans vos activités professionnelles.",
    image: [
      "/formations/Anglais 1.jpg",
      "/formations/Anglais 2.jpg",
      "/formations/Anglais 3.jpg",
    ],
  },
  {
    title: "Entrepreneuriat",
    description:
      "Nous vous initions à l'entrepreneuriat afin de vous rendre capable de rédiger des projets finançables, développer vos initiatives et réussir dans l'univers entrepreneurial.",
    image: [
      "/formations/Entrepreneuriat 1.jpg",
      "/formations/Entrepreneuriat 2.jpg",
      "/formations/Entrepreneuriat 3.jpg",
    ],
  },
  {
    title: "Secrétariat de direction",
    description: "Nous vous formons au secrétariat de direction et vous donnons les capacités à pouvoir assister la direction entreprises et devenir le bras droit du dirigeant.",
    image : ["/formations/secretariat 1.jfif","/formations/secretariat 2.jfif","/formations/secretariat 3.jpg"],
  },
   {
    title: "Développement web",
    description: "Avec la formation en développement web, nous vous formons à pouvoir créer des sites et applications web dynamiques, sécurisées et répondant aux normes modernes du web",
    image : ["/formations/html.jpg","/formations/css.jpg","/formations/javascript.jpg", "/formations/react.jpg"],
  },
  {
    title: "hôtesse d'accueil",
    description: "Cette formation vous permettra de pouvoir représenter votre structure en tant que personne principale qui gère l'image de toute une entreprise, accueille et oriente les visiteurs.",
    image : ["/formations/hotesse 3.jpg","/formations/hotesse 1.jpg","/formations/hotesse 2.jpg"],
  },
  {
    title: "ressources humaines",
    description: "La formation en ressources humaines vous donnera les compétences pour pouvoir gérer efficacement le capital humain des entreprises tout en assurant le bien-être et l'épanouissement des salariés.",
    image : ["/formations/hr 1.jpg","/formations/hr 2.jpg","/formations/hr 3.jpg"],
  }
];

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (images.length === 2) {
          return prevIndex === 0 ? 1 : 0;
        }

        let nextIndex;

        do {
          nextIndex = Math.floor(Math.random() * images.length);
        } while (nextIndex === prevIndex);

        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-80 md:h-[600px] overflow-hidden rounded-xl shadow-xl">
      {images.map((img, index) => (
        <img
          key={`${img}-${index}`}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          
        />
      ))}
        <div className="absolute inset-0 bg-linear-to-br from-black/10 via-black/20 to-black/10 z-10" />
    </div>
  );
};

const Formations = () => {
  return (
    <div>
      {FormationContents.map((formation, idx) => (
        <section
          key={formation.title}
          className={`py-24 md:py-32 xl:py-36 ${
            idx % 2 === 0 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <div
            className={`max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="uppercase text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                {formation.title}
              </h3>

              <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed">
                {formation.description}
              </p>

              <div className="pt-4">
                <Link
                  href="https://wa.me/243811837305"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-300 bg-primary rounded-lg hover:bg-primary-dark hover:shadow-lg hover:-translate-y-1"
                >
                  Intéressé(e)
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <ImageSlider images={formation.image} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Formations;
