import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// TODO: Replace with your actual domain
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : 'https://www.aganocentredeformation.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Agano Centre de Formation',
    template: '%s | Agano Centre de Formation'
  },
  description: 'Votre centre de formation multidisciplinaire pour une acquisition des connaissances pratiques.',
  keywords: ['RDC', 'Formation', 'Anglais', 'Fiscalité', 'Informatique bureautique', 'Comptabilité', 'Entrepreneuriat', 'AGANO'],
  authors: [{ name: 'AGANO Services et Consultances SARL' }],
  creator: 'Agano Centre de Formation',
  publisher: 'Agano Centre de Formation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'AGANO Centre de Formation',
    description: 'Votre centre de formation multidisciplinaire pour une acquisition des connaissances pratiques.',
    url: baseUrl,
    siteName: 'Agano Centre de Formation',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/Agano-logo.jpg',
        width: 1000,
        height: 1000,
        alt: 'Agano Centre de Formation',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-primary selection:text-black font-sans">
        
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
      </body>
    </html>
  );
}
