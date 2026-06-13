import "./globals.css";

export const metadata = {
  title: "Agano Centre de Formation",
  description: "Site en maintenance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}