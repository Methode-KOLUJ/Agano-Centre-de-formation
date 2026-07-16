"use client";

import Image from "next/image";

const equipe = [
  {
    nom: "Michael KAZADI",
    role: "CEO d'Agano & Formateur d'Entrepreneuriat",
    image: "/Team/Michael.jpeg",
  },
  {
    nom: "Mechack Mwanandeba",
    role: "Formateur d'Anglais",
    image: "/Team/Meschack.jpeg",
  },
  {
    nom: "Benjamin Bitangalo",
    role: "Formateur d'Informatique",
    image: "/Team/Benjamin.jpeg",
  },
  {
    nom: "Jean-Claude LULU",
    role: "Formateur en Développement Web",
    image: "/Team/Jean-Claude.jpeg",
  }
];

export default function Team() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 md:px-2">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {equipe.map((membre, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-gray-100 shadow-md shadow-gray-400 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-80 md:h-100 overflow-hidden">
                <Image
                  src={membre.image}
                  alt={membre.nom}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-102"
                />
              </div>

              <div className="p-2 md:p-4 text-center">
                <h3 className=" text-lg md:text-xl font-black text-gray-900">
                  {membre.nom}
                </h3>

                <p className="text-sm md:text-base mt-1 font-medium text-primary">
                  {membre.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}