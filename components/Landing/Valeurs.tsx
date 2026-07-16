"use client";

import { useState } from "react";

const valeurs = [
  {
    title: "Qualité",
    description:
      "Nous nous engageons à offrir des formations répondant aux standards les plus élevés grâce à des contenus actualisés, des formateurs qualifiés et une pédagogie orientée vers les résultats.",
  },
  {
    title: "Innovation",
    description:
      "Nous encourageons l'apprentissage des technologies, des méthodes et des pratiques les plus récentes afin de préparer nos apprenants aux évolutions constantes du monde professionnel.",
  },
  {
    title: "Proximité",
    description:
      "Nous plaçons l'apprenant au cœur de notre démarche en privilégiant l'écoute, l'accompagnement personnalisé et une relation de confiance tout au long de son parcours de formation.",
  },
];

export default function Valeur() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden px-4 py-16 md:px-2 md:py-24 lg:px-0 lg:py-32">
      {/* Arrière-plan */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/Value.webp')] bg-cover bg-center md:bg-fixed" />
        <div className="absolute inset-0 bg-white/60" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-6xl xl:max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {valeurs.map((item, index) => (
            <div
              key={item.title}
              onClick={() => setActive(active === index ? null : index)}
              className="group relative h-70 cursor-pointer overflow-hidden rounded-2xl bg-primary-dark p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:h-80"
            >
              {/* Titre */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  active === index
                    ? "-translate-y-full opacity-0"
                    : "translate-y-0 opacity-100 group-hover:-translate-y-full group-hover:opacity-0"
                }`}
              >
                <h3 className="text-center text-3xl font-black uppercase md:text-4xl lg:text-5xl xl:text-6xl">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div
                className={`absolute inset-0 flex items-center justify-center p-8 text-center transition-all duration-500 ${
                  active === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                }`}
              >
                <p className="text-lg leading-relaxed text-white/90 lg:text-xl xl:text-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}