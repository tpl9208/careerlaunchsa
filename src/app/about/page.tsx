import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Career Launch SA supports job seekers with career coaching, CV reviews, interview practice, and practical employment support.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Career Launch SA",
    description:
      "Discover how Career Launch SA helps people move into meaningful work with confidence and practical support.",
    url: "https://www.careerlaunchsa.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">About us</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Career support built around real-world needs.</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Who we help</h2>
          <p className="mt-4 text-slate-700">
            We work with learners, unemployed individuals, and early-career professionals who want clearer direction,
            stronger confidence, and more opportunities in the workplace.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">What we focus on</h2>
          <p className="mt-4 text-slate-700">
            Our support focuses on employability skills, professional presentation, interview confidence, and practical
            job search strategies that help candidates take action.
          </p>
        </div>
      </div>
    </div>
  );
}
