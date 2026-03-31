import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fresh Cleaning — Nettoyage Professionnel Canapé, Matelas, Fauteuils | Île-de-France",
  description:
    "Fresh Cleaning : spécialiste du nettoyage en profondeur de canapés, matelas, fauteuils et chaises. Service professionnel pour particuliers et entreprises en Île-de-France. Devis gratuit.",
  keywords: "nettoyage canapé, nettoyage matelas, nettoyage fauteuil, Fresh Cleaning, Île-de-France, nettoyage professionnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
