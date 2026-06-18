import type { Metadata } from "next";
import { Geist, Geist_Mono, Kaisei_Decol } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kaiseiDecol = Kaisei_Decol({
  weight: "700",
  variable: "--font-kaisei-decol",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daily Dose Japanese",
  description: "Learn to actually speak Japanese with native teachers — personalized online lessons tailored to your goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kaiseiDecol.variable} antialiased`}
      >
        {children}
        <Analytics />
        <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
            />
      </body>
    </html>
  );
}
