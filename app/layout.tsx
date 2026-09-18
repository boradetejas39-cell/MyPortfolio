import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tejas Borade - Full Stack Developer (MERN Stack)",
  description: "Full Stack Developer skilled in the MERN stack with experience working closely with clients to deliver scalable, visually appealing, and responsive web applications.",
  keywords: [
    "Tejas Borade",
    "Tejas Munjabhau Borade",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "Python",
    "Damsole Technologies",
    "Portfolio",
  ],
  authors: [{ name: "Tejas Borade" }],
  creator: "Tejas Borade",
  publisher: "Tejas Borade",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tejasborade.dev",
    title: "Tejas Borade - Full Stack Developer (MERN Stack)",
    description: "Full Stack Developer skilled in the MERN stack, delivering scalable and responsive web applications.",
    siteName: "Tejas Borade Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Borade - Full Stack Developer (MERN Stack)",
    description: "Full Stack Developer skilled in the MERN stack, delivering scalable and responsive web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://tejasborade.dev" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
