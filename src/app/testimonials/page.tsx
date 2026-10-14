import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read client testimonials about Career Launch SA and the outcomes clients achieved with career coaching and interview support.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Client testimonials | Career Launch SA",
    description:
      "Career Launch SA clients share how career coaching and employability support helped them secure interviews and grow in confidence.",
    url: "https://www.careerlaunchsa.com/testimonials",
  },
};

const testimonials = [
  {
    quote: 'Career Launch SA helped me rework my CV and I landed three interviews in two weeks. Highly recommend.',
    name: 'Lindiwe M.',
    role: 'Marketing Assistant',
  },
  {
    quote: 'The coaching sessions gave me confidence for interviews — I accepted a job offer within a month.',
    name: 'Thabo S.',
    role: 'Junior Developer',
  },
  {
    quote: 'Professional, practical, and supportive. The mock interviews were invaluable.',
    name: 'Priya R.',
    role: 'Admin Officer',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Testimonials</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">What our clients say</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-slate-700">“{item.quote}”</p>
            <div className="mt-6 border-t border-slate-200 pt-4">
              <p className="font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
