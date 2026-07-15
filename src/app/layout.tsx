import type { Metadata } from "next";
import { Geist, Geist_Mono, Kaisei_Decol } from "next/font/google";
import "./globals.css";
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
  title: "Learn Japanese Online with Native Teachers — Daily Dose Japanese",
  description: "Learn to actually speak Japanese with native teachers. Personalized online lessons tailored to your goals, level, and lifestyle.",
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
      </body>
    </html>
  );
}
