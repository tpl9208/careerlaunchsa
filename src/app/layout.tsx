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
  title: "Career Launch SA",
  description: "Career Launch SA helps job seekers prepare for the workforce with coaching, CV support, and interview readiness.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-zinc-50 text-zinc-900">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <a href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
                Career Launch SA
              </a>

              <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 sm:flex">
                <a href="/#about" className="transition hover:text-zinc-900">About</a>
                <a href="/#services" className="transition hover:text-zinc-900">Services</a>
                <a href="/#contact" className="transition hover:text-zinc-900">Contact</a>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-zinc-600 sm:px-6 lg:px-8">
              <p>© 2026 Career Launch SA</p>
              <p>Support for your next step</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
