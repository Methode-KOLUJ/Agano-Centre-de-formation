import React from 'react';
import Link from 'next/link';

const Documents = [
  {
    Titre: "Pourquoi apprendre l'anglais maintenant ?",
    Description: "Téléchargez ce document qui vous explique clairement en quoi l'apprentissage de l'anglais vous sera utile dans votre business.",
    Lien: "/documentation/POURQUOI APPRENDRE L’ANGLAIS MAINTENANT 2.pdf",
  },
  {
    Titre: "Faire la préinscription",
    Description: "Si vous souhaitez accélérez votre inscription à l'un de nos modules de formations, veuillez télécharger ce document, imprimez-le et passer à notre adresse pour marquer votre préinscription moyennant 5.000 FC.",
    Lien: "/documentation/FORMULAIRE D'INSCRIPTION AGANO CENTRE DE FORMATION.pdf",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen space-y-8 py-32 px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center text-primary mb-12">
        Documentation
      </h1>
      <p className='text-lg text-secondary md:text-xl lg:text-2xl text-center mb-10 px-6 md:px-8 lg:px-10'>
        Cette page est destiné à la documentation concernant Agano Centre de Formation, vous y trouverez des documents téléchargeables
        sur certains modules de formations, des réglémentations et bien plus !
      </p>
      <div className="max-w-6xl mx-auto space-y-6">
        {Documents.map((doc, index) => (
          <div
            key={index}
            className="flex items-stretch border border-primary/20 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="flex-1 p-8 md:p-10 lg:p-20">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase font-black text-secondary mb-6">
                {doc.Titre}
              </h2>

              {doc.Description && (
                <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mt-4 text-foreground/70 leading-relaxed">
                  {doc.Description}
                </p>
              )}
            </div>

            {doc.Lien ? (
              <Link
                href={doc.Lien}
                download
                className="flex items-center justify-center bg-primary text-white px-4 sm:px-6 lg:px-10 font-bold text-sm md:text-lg lg:text-xl hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Télécharger
              </Link>
            ) : (
              <Link
                href={doc.Lien}
                className="flex items-center justify-center bg-primary text-white px-4 sm:px-6 lg:px-10 font-bold text-sm md:text-lg lg:text-xl hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Télécharger
              </Link>
            )}

           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;