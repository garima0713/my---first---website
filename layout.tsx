import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const sans = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Garima Paliwal | Front-end Developer & Computer Science Student",
  description: "Portfolio of Garima Paliwal, a B.Sc. Computer Science student and front-end developer building responsive web apps with HTML, CSS and JavaScript.",
  openGraph: { title: "Garima Paliwal | Front-end Developer", description: "Projects, skills and background of Garima Paliwal.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
