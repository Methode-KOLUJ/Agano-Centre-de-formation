import React from 'react';
import FadeIn from '@/components/ui/FadeIn';


export default function Mission() {
  return (
    <section id="a-propos" className="relative w-full bg-gray-50 text-gray-900 py-24 md:py-28 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[rgb(210,69,38)]/5 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[rgb(230,89,58)]/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">

             {/* Right Column: Visual or Abstract Graphic (Optional placeholder for balance) */}
          <FadeIn delay={0.2} className="relative h-full min-h-[380px] md:min-h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/Mission.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-linear-to-tr from-[rgb(210,69,38)]/20 to-[rgb(230,89,58)]/10 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="border border-white/30 py-6 px-16 backdrop-blur-md bg-white/10 rounded-lg">
                <h3 className="uppercase text-3xl md:text-5xl lg:text-7xl font-black text-primary text-center leading-snug">
                  Mission
                </h3>
              </div>
            </div>
          </FadeIn>
          
          {/* Left Column: Text Content */}
          <FadeIn className="space-y-8">
            <div className="space-y-6 text-lg md:text-xl lg:text-[26px] text-gray-600 leading-relaxed font-light">
              <p>
                <strong className='font-bold text-primary'>Notre mission</strong> est de former les professionnels compétents de demain en mettant à leur disposition un enseignement de qualité, des outils modernes et un accompagnement personnalisé.
                {/* <strong className="font-bold text-gray-900">Agano Centre de Formation</strong> est un centre de formation multidisciplinaire dédié au développement des compétences professionnelles recherchées sur le marché de l'emploi. Notre objectif est d'accompagner les apprenants dans leur parcours de croissance en leur proposant des formations pratiques, modernes et adaptées aux besoins des entreprises. */}
              </p>
              <p>
                Nous souhaitons contribuer au développement de la société en préparant des femmes et des hommes capables d'innover, de résoudre des problèmes concrets et de répondre efficacement aux exigences du marché de l'emploi.
              </p>
            </div>
          </FadeIn>

         
        </div>
        
      </div>
    </section>
  );
}
