import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christopher Dzorkpui — Product Designer & Software Engineer",
  description:
    "I design and build digital products that drive real business growth. Product Designer & Software Engineer helping startups turn ideas into scalable products. Based in Ghana, working globally.",
  keywords: [
    "Product Designer",
    "Software Engineer",
    "UX Design",
    "Full-Stack Development",
    "Startup",
    "MVP",
    "React",
    "Next.js",
    "Figma",
  ],
  authors: [{ name: "Christopher Dzorkpui", url: "https://chrisadamz18.github.io/Personal-Website/" }],
  openGraph: {
    title: "Christopher Dzorkpui — Product Designer & Software Engineer",
    description: "I design and build digital products that drive real business growth.",
    type: "website",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Christopher Dzorkpui",
  "jobTitle": "Product Designer & Software Engineer",
  "url": "https://chrisadamz18.github.io/Personal-Website/",
  "sameAs": [
    "https://github.com/Chrisadamz18",
    "https://www.linkedin.com/in/christopher-dzorkpui-46a69619b/",
    "https://www.behance.net/chris_elikem",
    "https://www.instagram.com/mrr_elikem/"
  ],
  "knowsAbout": [
    "Product Design",
    "UX/UI Design",
    "Full-Stack Development",
    "Mobile App Development",
    "Flutter",
    "React",
    "Next.js"
  ],
  "description": "I design and build digital products that drive real business growth. Product Designer & Software Engineer helping startups turn ideas into scalable products."
};

import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
