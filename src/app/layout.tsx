import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadayyub.dev"),
  title: "Sharipov Muhammadayyub — Frontend Developer & Creative Developer",
  description:
    "Portfolio of Sharipov Muhammadayyub, a frontend developer based in Tashkent, Uzbekistan. Building modern, responsive and interactive digital experiences with React, Next.js and TypeScript.",
  keywords: [
    "Sharipov Muhammadayyub",
    "Frontend Developer",
    "Creative Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Tashkent",
    "Uzbekistan",
  ],
  authors: [{ name: "Sharipov Muhammadayyub", url: "https://github.com/ayubdevv" }],
  creator: "Sharipov Muhammadayyub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadayyub.dev",
    title: "Sharipov Muhammadayyub — Frontend Developer & Creative Developer",
    description:
      "Building modern, responsive and interactive digital experiences with React, Next.js and TypeScript.",
    siteName: "Sharipov Muhammadayyub Portfolio",
    images: [
      {
        url: "/portrait.jpg",
        width: 1200,
        height: 1200,
        alt: "Sharipov Muhammadayyub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharipov Muhammadayyub — Frontend Developer",
    description:
      "Building modern, responsive and interactive digital experiences with React, Next.js and TypeScript.",
    images: ["/portrait.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-[#050508] text-zinc-100 antialiased selection:bg-blue-600/30 selection:text-blue-200 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

