import React from 'react';

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

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Testimonials</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900">What our clients say</h2>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">“{t.quote}”</p>
            <p className="mt-4 font-semibold text-slate-900">{t.name}</p>
            <p className="text-sm text-slate-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
