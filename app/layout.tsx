import type { Metadata } from "next";
import { Chivo, Hanken_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["100", "400", "700", "800", "900"],
  variable: "--font-chivo",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "NTB Satu News - Jurnal Digital Kinetik Kontras Tinggi",
  description: "Era Baru Jurnalisme. Berita global dengan presisi lokal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${chivo.variable} ${hankenGrotesk.variable} ${newsreader.variable} bg-[#131318] text-[#e4e1e9] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
