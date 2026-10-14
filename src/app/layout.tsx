import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
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
  metadataBase: new URL("https://www.careerlaunchsa.com"),
  title: {
    default: "Career Launch SA",
    template: "%s | Career Launch SA",
  },
  description:
    "Career Launch SA helps job seekers gain confidence, improve their CVs, and prepare for interviews through practical career coaching and workplace readiness support.",
  applicationName: "Career Launch SA",
  authors: [{ name: "Career Launch SA" }],
  keywords: [
    "career coaching",
    "CV writing",
    "interview preparation",
    "job readiness",
    "career support South Africa",
    "workplace readiness",
    "employment support",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Career Launch SA",
    description:
      "Career coaching, CV support, and interview preparation for job seekers who want a stronger path into employment.",
    url: "https://www.careerlaunchsa.com",
    siteName: "Career Launch SA",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Launch SA",
    description:
      "Turn job-search uncertainty into a confident next step with tailored career support.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-900">
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <a href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900">
                <img src="/logo.svg" alt="Career Launch SA logo" className="h-8 w-auto" />
                <span>Career Launch SA</span>
              </a>

              <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 sm:flex">
                <a href="/about" className="transition hover:text-slate-900">About</a>
                <a href="/services" className="transition hover:text-slate-900">Services</a>
                <a href="/testimonials" className="transition hover:text-slate-900">Testimonials</a>
                <a href="/contact" className="transition hover:text-slate-900">Contact</a>
              </nav>

              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Enquire now
              </a>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <p>© 2026 Career Launch SA</p>
              <p>Support for your next step</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
