"use client";

import React from "react";
import {
  Crown,
  Target,
  Users,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  CheckCircle,
  Award,
  BookOpen,
  BarChart3,
  Lightbulb,
  TrendingUp,
  Building2,
  Sparkles,
  MessageSquareQuote,
  User,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import ImageParallax from "@/components/ui/ImageParallax";
import SectionBlobs from "@/components/ui/SectionBlobs";

const Competences = [
  {
    Modules: "Manager au quotidien",
    Competences: "Déléguer, motiver, gérer les conflits, donner du feedback",
    icon: Users,
  },
  {
    Modules: "Piloter la performance",
    Competences: "Objectifs, indicateurs, revue de performance, reporting",
    icon: BarChart3,
  },
  {
    Modules: "Conduire le changement",
    Competences: "Accompagner ses équipes dans la transformation",
    icon: TrendingUp,
  },
  {
    Modules: "Prise de décision complexe",
    Competences: "Analyser, trancher, éviter les biais",
    icon: Lightbulb,
  },
  {
    Modules: "Leadership transformationnel",
    Competences: "Inspirer, fédérer, incarner la vision",
    icon: Star,
  },
  {
    Modules: "Stratégie & vision",
    Competences: "Feuille de route, alignement d'équipe, innovation",
    icon: Target,
  },
];

const Formules = [
  {
    Formule: "Clarté",
    Duree: "2 jours",
    Contenu: "Management, communication, conflits",
    Tarif: "Nous contacter",
    features: [
      "Management opérationnel",
      "Communication interpersonnelle",
      "Gestion des conflits",
    ],
    highlight: false,
  },
  {
    Formule: "Maîtrise",
    Duree: "4 jours",
    Contenu: "Performance, changement, décision",
    Tarif: "Nous contacter",
    features: [
      "Tout le programme Clarté",
      "Pilotage de la performance",
      "Conduite du changement",
      "Prise de décision",
    ],
    highlight: true,
  },
  {
    Formule: "Vision",
    Duree: "5 jours",
    Contenu: "Leadership stratégique, coaching individuel (option)",
    Tarif: "Nous contacter",
    features: [
      "Tout le programme Maîtrise",
      "Leadership transformationnel",
      "Stratégie & vision",
      "Coaching individuel (option)",
    ],
    highlight: false,
  },
];

const Avantages = [
  {
    title: "Experts internationaux",
    desc: "Intervenants venus spécialement de France et d'Amérique",
    icon: Award,
  },
  {
    title: "100% présentiel",
    desc: "Échanges, réseautage, dynamique de groupe",
    icon: Users,
  },
  {
    title: "Groupes limités",
    desc: "8 à 15 participants — qualité garantie",
    icon: Target,
  },
  {
    title: "Supports inclus",
    desc: "Livret, fiches outils, ressources numériques",
    icon: BookOpen,
  },
  {
    title: "Certificat",
    desc: "Délivré par Agano Centre de Formation",
    icon: Award,
  },
  {
    title: "Suivi post-formation",
    desc: "Bilan à 3 mois avec votre DRH",
    icon: CheckCircle,
  },
];

const OffreEarly = [
  "Test de positionnement offert (en visioconférence)",
  "Tarif early bird : -10 % sur la formule de votre choix",
  "1 place offerte pour votre DRH ou responsable RH",
];

const page = () => {
  return (
    <div className="min-h-screen">
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-secondary pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <FadeIn>
              <div className="inline-flex items-center gap-2 p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-sm mb-6">
              <Crown className="w-10 h-10 text-yellow-600 fill-yellow-500" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Programme Premium
              <br />
              <span className="bg-primary bg-clip-text text-transparent">
                pour Cadres
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-light leading-relaxed mb-4">
              &laquo;&nbsp;Développez le leadership de vos cadres &mdash;
              Transformez votre entreprise&nbsp;&raquo;
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg text-white/60 max-w-2xl">
              Une formation d&rsquo;exception, animée en présentiel en RDC par
              des experts internationaux reconnus.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== POURQUOI ========== */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        {/* GLOBE PARALLAX */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-64 md:-right-40 lg:-right-20 opacity-30 z-0 pointer-events-none">
          <ImageParallax 
            src="/formations/globe.png" 
            alt="Globe terrestre"
            className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]" 
            offsetY={200}
          />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn>
            <h2 className="text-3xl text-center md:text-4xl lg:text-5xl font-black text-secondary mb-8 md:mb-12">
              Pourquoi ce programme est&nbsp;unique&nbsp;?
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left" className="space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Vos cadres sont le moteur de votre entreprise. Pourtant, en RDC,
                les formations en leadership de haut niveau accessibles en
                présentiel sont rares.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                <span className="font-semibold text-primary">
                  Agano Centre de Formation
                </span>{" "}
                fait venir spécialement des formateurs internationaux,
                consultants experts en management exécutif et stratégie
                d&rsquo;entreprise.
              </p>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-xl" />
                <div className="relative bg-white border border-gray-200 rounded-2xl p-10 md:p-12 lg:p-14 xl:p-16 shadow-lg shadow-gray-200/50 space-y-4">
                  <MessageSquareQuote className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary/70" />
                  <p className="text-sm sm:text-lg md:text-xl text-gray-800 italic leading-relaxed">
                    &laquo;&nbsp;Ils interviennent habituellement auprès de
                    comités de direction en Europe, en Amérique. Pour la première
                    fois, certains d&rsquo;entre eux posent leurs valises en RDC
                    pour former vos talents.&nbsp;&raquo;
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== MODULES ========== */}
      <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        <SectionBlobs />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn>
            <h2 className="text-3xl text-center md:text-4xl lg:text-5xl font-black text-secondary mb-8 md:mb-10">
              Ce que vos cadres vont apprendre
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-500 mb-12">
              6 modules intensifs pour transformer vos managers en leaders
              d&rsquo;exception
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-4">
            {Competences.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn
                  key={item.Modules}
                  delay={index * 0.08}
                  className="group"
                >
                  <div className="h-full bg-white rounded-2xl border border-gray-300 p-8 md:p-10 shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/20">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-7 h-7 md:w-10 md:h-10 text-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3" />
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl uppercase font-bold md:font-black text-secondary mb-2">
                      {item.Modules}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                      {item.Competences}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FORMULES ========== */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <SectionBlobs />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 text-center">
              Trois formules pour vous adapter
            </h2>
            <p className="text-lg text-gray-500 mb-16 text-center max-w-xl mx-auto">
              Choisissez le format qui correspond à vos objectifs
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {Formules.map((formule, index) => {
              const isHighlight = formule.highlight;
              return (
                <FadeIn
                  key={formule.Formule}
                  delay={index * 0.1}
                  className={`relative rounded-2xl border-2 px-8 py-12 transition-all duration-300 ${
                    isHighlight
                      ? "border-primary bg-primary/[0.03] shadow-lg shadow-primary/5 scale-105 md:scale-110"
                      : "border-gray-200 bg-white hover:border-gray-200 hover:shadow-md"
                  }`}
                >
                  {isHighlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1.5">
                      Populaire
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-black text-secondary mb-1">
                      {formule.Formule}
                    </h3>
                    <div className="text-primary font-bold text-lg">
                      {formule.Duree}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {formule.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm md:text-md text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <a
                      href="https://wa.me/243811837305"
                      className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 ${
                        isHighlight
                          ? "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5"
                          : "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md"
                      }`}
                    >
                      Demander un devis
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          {/* Tarifs dégressifs */}
          <FadeIn delay={0.4}>
            <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-200 p-10 text-center shadow-lg shadow-gray-200/50">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase font-bold text-secondary mb-4">
                Tarifs dégressifs
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-600">
                <div className="bg-white rounded-xl text-lg md:text-xl lg:text-2xl px-8 py-5 border border-gray-200 shadow-sm">
                  <span className="font-bold text-primary text-lg md:text-xl lg:text-2xl">10 à 15</span>{" "}
                  participants :{" "}
                  <span className="font-semibold text-secondary text-lg md:text-xl lg:text-2xl">-10 %</span>
                </div>
                <div className="bg-white text-lg md:text-xl lg:text-2xl rounded-xl px-8 py-5 border border-gray-200 shadow-sm">
                  <span className="font-bold text-primary text-lg md:text-xl lg:text-2xl">15+</span>{" "}
                  participants :{" "}
                  <span className="font-semibold text-secondary text-lg md:text-xl lg:text-2xl">-20 %</span>{" "}
                  <span className="text-gray-400 text-lg md:text-xl lg:text-2xl">+</span> 1 place offerte
                  formule Clarté
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== AVANTAGES ========== */}
      <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        <SectionBlobs />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 text-center">
              Avantages exclusifs
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mb-16 text-center max-w-xl mx-auto">
              Ce qui fait la différence de notre programme
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-4">
            {Avantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index * 0.07}>
                  <div className="group flex items-start gap-5 bg-white rounded-2xl p-8 md:p-10 lg:p-12 shadow-lg shadow-gray-200/60 border border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20">
                    <div className="w-11 h-11 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary">
                      <Icon className="w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12 text-primary transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-secondary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-lg lg:text-xl text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== INFOS PRATIQUES + PUBLIC ========== */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <SectionBlobs />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-8 flex items-center gap-3">
                <MapPin className="w-7 h-7 text-primary" />
                Lieu &amp; dates
              </h2>
              <ul className="space-y-5" id="LieuEtData">
                <li className="flex items-start gap-4 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  <span> 
                    <strong className="text-secondary">Lieu :</strong>{" "}
                    Kinshasa, Lubumbashi et Kolwezi (hôtel ou centre de
                    formation à préciser)
                  </span>
                </li>
                <li className="flex items-start gap-4 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  <span>
                    <strong className="text-secondary">Dates :</strong> À
                    définir avec votre entreprise (sessions inter et
                    intra-entreprise)
                  </span>
                </li>
                <li className="flex items-start gap-4 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  <span>
                    <strong className="text-secondary">Durée :</strong> 2, 4 ou
                    5 jours selon la formule choisie
                  </span>
                </li>
              </ul>
            </FadeIn>
            <FadeIn direction="right">
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-8 flex items-center gap-3">
                <Users className="w-7 h-7 text-primary" />
                Public concerné
              </h2>
              <ul className="space-y-5" id="publicConcerne">
                {[
                  "Managers intermédiaires et confirmés",
                  "Chefs de service, directeurs",
                  "Comités de direction",
                  "Dirigeants de PME/PMI",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-gray-600"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== FORMATEURS ========== */}
      <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        <SectionBlobs />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4">
              Qui sont nos formateurs internationaux&nbsp;?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 mb-12 max-w-2xl">
              Des experts de haut niveau, sélectionnés pour leur excellence
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeIn direction="left">
              <ul className="space-y-6">
                {[
                  "Consultante et formatrice en leadership et stratégie",
                  "Intervient en France et à l'international auprès de cadres dirigeants",
                  "Pédagogie active : études de cas, mises en situation, outils concrets",
                  "Reconnue pour sa capacité à transformer les postures managériales",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-lg md:text-xl text-gray-600"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            {/* <FadeIn direction="right">
              <div className="relative bg-white rounded-2xl border border-gray-200 p-10 md:p-12 lg:p-14 xl:p-16 shadow-lg shadow-gray-200/50">
                <MessageSquareQuote className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary/70 mb-4" />
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-6">
                  &laquo;&nbsp;Une formation qui change la posture du manager.
                  Applicable dès le lendemain.&nbsp;&raquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm md:text-lg">
                      Directeur RH
                    </p>
                    <p className="text-xs md:text-sm lg:text-lg text-gray-400">
                      Entreprise internationale
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn> */}
          </div>
        </div>
      </section>

      {/* ========== OFFRE SPÉCIALE ========== */}
      <section className="py-16 md:py-20 bg-white/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl bg-secondary/90 backdrop-blur-xl border border-white/10 p-10 md:p-16 shadow-2xl">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
              <div className="relative z-10">
                {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                  Offre spéciale &mdash; Première session
                </div> */}
                <h2 className="text-3xl text-center md:text-4xl lg:text-5xl font-black text-white mb-8 md:mb-12">
                  Prêt à passer à l&rsquo;action&nbsp;?
                </h2>
                {/* <p className="text-white/70 text-lg mb-3">
                  Pour toute inscription avant le 31 septembre 2026
                </p> */}
                <ul className="space-y-3 mb-10">
                  {OffreEarly.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/243811837305"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                  >
                    Réserver un appel découverte
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="mailto:formation@aganocentredeformation.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 active:scale-95"
                  >
                    Demander une brochure
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default page;
