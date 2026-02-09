import type { Metadata } from "next";
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

export const metadata = {
  title: "Jaimz SEO Phase 3: Next.js SSR Test",
  description: "Phase 3 of the Jaimz SEO experiment testing Server-Side Rendering (SSR) for ZynthoKinetix-2026.",
  verification: {
    google: "aNcwxSgzUwTYpkOs5KyWRsmsTtiXTrtKLBu0ZJj-DWQ",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
