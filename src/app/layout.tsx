import type { Metadata } from "next";
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
  title: {
    default: "Career Launch SA",
    template: "%s | Career Launch SA",
  },
  description:
    "Career Launch SA helps job seekers gain confidence, improve their CVs, and prepare for interviews through practical career support.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-900">
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <a href="/" className="text-lg font-semibold tracking-tight text-slate-900">
                Career Launch SA
              </a>

              <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 sm:flex">
                <a href="/about" className="transition hover:text-slate-900">About</a>
                <a href="/services" className="transition hover:text-slate-900">Services</a>
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
