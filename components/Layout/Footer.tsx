'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle, Youtube } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'react-toastify';

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        toast.success(data.message || 'Merci de votre inscription !');
        setEmail('');
      } else {
        setStatus('error');
        toast.error(data.error || 'Une erreur est survenue.');
      }
    } catch (error) {
      setStatus('error');
      toast.error('Une erreur réseau est survenue.');
    } finally {
      setStatus('idle');
    }
  };

  if (pathname === '/soumission-projet' || pathname === '/mention-legale' || pathname === '/politique-de-confidentialite' || pathname.startsWith('/admin') || pathname.startsWith('/call-center')) {
    return null;
  }

  // Tableau des liens rapides pour une meilleure organisation
  const quickLinks = [
    { name: 'Retour en haut', href: '/#accueil' },
    { name: 'Formations', href: '/formations' },
    { name: 'Inscription', href: '/#inscription' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Actualités', href: 'https://www.aganoservicesconsultances.com/actualites' },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & Description */}
          <div>
            {/* <h2 className="text-2xl font-bold text-gray-900 mb-6">
              <Image src='/images/Agano-logo.png' alt='logo' width={120} height={120}></Image>
            </h2> */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Nous simplifions votre acquisition des connaissances et compétences dans divers domaines.
            </p>

            {/* Mentions légales */}
            <div className="text-xs text-gray-500 space-y-2 font-mono">
              <p className="font-semibold text-gray-700 mb-3 uppercase tracking-wider text-sm">Mention légale</p>
              <p>RCCM : CD/LSH/RCCM/25-B-02156</p>
              <p>IDNAT : 05-F4300-N86544K</p>
              <p>NIF : A2555658B</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 uppercase tracking-wider">Liens Rapides</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <li key={link.name}>
                    <Link href={link.href} className={`text-sm transition-colors font-medium ${isActive ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-primary" size={18} />
                <span className='text-xs'>Avenue de la Révolution 1035 Q/ Lumumba C/ Lubumbashi, RDC</span>
              </li>
              <li className='flex items-start gap-3'>
                <MapPin className='mt-1 shrink-0 text-primary' size={18}/>
                <span className='text-xs'>Nouvelles Galeries présidentielles, local 10 1 Niveau. Kinshasa / Gombe</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-primary" size={18} />
                <span><Link href="tel:+243811837305" className="hover:text-primary transition-colors">+243 999 005 148</Link></span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="shrink-0 text-primary" size={18} />
                <span><Link href="https://wa.me/243811837305" className="hover:text-primary transition-colors">Ecrire sur WhatsApp</Link></span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-primary" size={18} />
                <span><Link href="mailto:formation@aganocentredeformation.com" className="hover:text-primary transition-colors">formation@aganocentredeformation.com</Link></span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 uppercase tracking-wider">Restez informé</h3>
            <p className="text-sm text-gray-600 mb-6">Abonnez-vous à notre newsletter pour recevoir nos dernières actualités.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-primary hover:bg-primary-dark disabled:opacity-70 text-white font-bold py-3 px-4 rounded-lg transition-all text-sm shadow-md hover:shadow-lg active:scale-[0.98] flex justify-center items-center gap-2"
              >
                {status === 'loading' ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Mail size={18} />
                    S'abonner
                  </>
                )}
              </button>
            </form>


            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGEIigNEKHfyQAAAZ7V1kVQYhZdpP2qkTOxAyDWKS8OiH5OfqlRLVwZtfPPuN9oHcJXj4Ytu-NLDGtlkS_2_fdtpQLTuNQda5USmD1gQG4A7uHmdbFsSEaiNT2XAK51PfAg7Io=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fagano-services-consultances-3b8263417%3Futm_source%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dmember_android" className="text-gray-500 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.facebook.com/aganocentredeformation" className="text-gray-500 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/agano_centre_de_formation?igsh=MWphdzhjZGJ2dmJrZw==" className="text-gray-500 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/@AganoServicesConsultances" className="text-gray-500 hover:text-primary transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Agano Centre de Formation. Tous droits réservés.</p>
          <div className="flex gap-1">
            <p>Développé avec ❤ par</p> <Link href="https://www.kolujdev.tech" className="hover:text-primary transition-colors">KOLUJ DEV</Link>
          </div>
          <div className="flex gap-6">
            <Link href="https://www.aganoservicesconsultances.com/politique-de-confidentialite" className="transition-colors hover:text-primary">Politique de confidentialité</Link>
            <Link href="https://www.aganoservicesconsultances.com/mention-legale" className="hover:text-primary">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}