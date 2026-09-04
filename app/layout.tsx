import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucía Indo · Psicoterapia online",
  description:
    "Psicoterapia online con perspectiva integrativa e informada por trauma y apego. Un espacio para comprender tu historia, tus emociones y tus vínculos con profundidad y respetando tus tiempos.",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
      },
    ],
    apple: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Lucía Indo · Psicoterapia online",
    description: "Lucía Indo · Psicoterapia online",
    url: "https://luciaindo.com",
    siteName: "Lucía Indo · Psicoterapia online",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 256,
        height: 256,
        alt: "Lucía Indo",
      },
    ],
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f3e7e5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${dmSans.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
