'use client'

import React, { useState, FormEvent } from 'react';
import FadeIn from '@/components/ui/FadeIn';
import { Download, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const FORMATIONS = [
  "Anglais",
  "Entrepreneuriat",
  "Informatique",
  "Secrétariat de direction",
  "Développement Web",
  "Hôtesse d'accueil",
  "Ressources humaines",
  "Facturation normalisée DGI"
  
];

export default function Inscription() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.get('fullName'),
          whatsapp: formData.get('whatsapp'),
          formation: formData.get('formation'),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Une erreur est survenue.');
      }

      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de connexion au serveur.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="inscription" className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      {/* Decorative Background */}
      {/* <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute  top-[10%] right-[5%] w-[30%] h-[30%] rounded-full bg-[rgb(210,69,38)]/5 blur-[120px]" />
        <div className="absolute bottom-[20%] -left-[5%] w-[40%] h-[40%] rounded-full bg-[rgb(230,89,58)]/5 blur-[100px]" />
      </div> */}
      <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/Inscription.jpg')] bg-cover bg-center bg-fixed" />
                <div className="absolute inset-0 bg-white/70" />
            </div>

      <div className="container relative z-10 mx-auto px-6 max-w-3xl">
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-xl shadow-none lg:shadow-2xl lg:shadow-primary border-xl border-black/90 overflow-hidden">
            
            {/* Download PDF Section */}
            <div className="bg-gray-100 p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl lg:text-2xl font-black text-primary uppercase">Préinscription</h3>
                <p className="text-xs md:text-sm text-gray-500">Vous pouvez télécharger le formulaire de préinscription ou vous inscrire via le formulaire ci-dessous.</p>
              </div>
              <a 
                href="/documentation/FORMULAIRE D'INSCRIPTION AGANO CENTRE DE FORMATION.pdf" 
                download
                className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors hover:border-[rgb(210,69,38)] hover:text-[rgb(210,69,38)]"
              >
                <Download className="w-5 h-5" />
                <span>Télécharger</span>
              </a>
            </div>

            {/* Form Section */}
            <div className="p-6 md:p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Demande envoyée !</h3>
                  <p className="text-gray-600">Nous vous contacterons très prochainement sur WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom complet */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Nom complet <span className="text-[rgb(210,69,38)] select-none">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      id="fullName"
                      required
                      placeholder="Votre nom"
                      className="w-full px-5 py-4 select-none bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgb(210,69,38)] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Numéro WhatsApp */}
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                      Numéro WhatsApp <span className="text-[rgb(210,69,38)] select-none">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="whatsapp"
                      id="whatsapp"
                      required
                      placeholder="+243..."
                      className="w-full px-5 py-4 bg-gray-50 border select-none border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgb(210,69,38)] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Formation Choisie */}
                  <div className="space-y-2">
                    <label htmlFor="formation" className="block text-sm font-medium text-gray-700">
                      Formation <span className="text-[rgb(210,69,38)] select-none">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        name="formation"
                        id="formation"
                        required
                        defaultValue=""
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgb(210,69,38)] focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Sélectionnez une formation</option>
                        {FORMATIONS.map((formation, idx) => (
                          <option key={idx} value={formation}>{formation}</option>
                        ))}
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Checkbox for PDF terms */}
                  <div className="flex items-start pt-2">
                    <div className="flex items-center h-5">
                      <input 
                        id="terms" 
                        type="checkbox" 
                        required
                        className="w-5 h-5 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-[rgb(210,69,38)]/30 accent-[rgb(210,69,38)] cursor-pointer" 
                      />
                    </div>
                    <label htmlFor="terms" className="ml-3 text-sm text-gray-600 cursor-pointer">
                      Je confirme que les renseignements fournis ci-haut sont exacts et sincères.
                    </label>
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="flex items-center gap-2 p-4 text-sm text-red-700 bg-red-50 rounded-xl">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="group relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-[rgb(210,69,38)] to-[rgb(230,89,58)] text-white font-bold text-lg rounded-xl overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <span className="relative z-10">
                        {isLoading ? 'Envoi en cours...' : 'Envoyer'}
                      </span>
                      <Send className="hidden md:block w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
