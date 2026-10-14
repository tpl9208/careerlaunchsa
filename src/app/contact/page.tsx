import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Career Launch SA to book a consultation or ask about career coaching, CV support, and interview preparation services.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Career Launch SA",
    description:
      "Book your career consultation and get support with job searching, CV writing, and interview preparation.",
    url: "https://www.careerlaunchsa.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Let’s talk about your next move.</h1>

      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-4 text-slate-700">
          <p>
            Email: <a href="mailto:info@careerlaunchsa.com" className="font-semibold text-slate-900 underline">info@careerlaunchsa.com</a>
          </p>
          <p>
            Phone: <a href="tel:+27123456789" className="font-semibold text-slate-900 underline">+27 12 345 6789</a>
          </p>
          <p>We look forward to helping you take your next step with confidence.</p>
        </div>
      </div>
    </div>
  );
}
