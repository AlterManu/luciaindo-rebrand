import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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

type RootLayoutType = { children: React.ReactNode };

export default function RootLayout({ children }: Readonly<RootLayoutType>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {children}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="88fa86d7-c16f-4506-b7b8-a66bb46e7287"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
