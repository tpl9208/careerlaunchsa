import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore services from Career Launch SA including CV reviews, interview coaching, and career strategy support.",
};

const services = [
  {
    title: "CV and application support",
    description: "We help you present your experience clearly and confidently so your application stands out.",
  },
  {
    title: "Interview preparation",
    description: "Practice key questions, improve communication, and feel more confident in each interview stage.",
  },
  {
    title: "Career planning",
    description: "Create a realistic plan for your next move with clear steps, priorities, and accountability.",
  },
  {
    title: "Workplace readiness",
    description: "Build the foundational skills needed to transition into work with greater confidence and clarity.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Services</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Support that helps you move forward.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-4 text-slate-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
