import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: 'R499',
    features: ['CV review', '1 x 30min session', 'Email support'],
  },
  {
    name: 'Professional',
    price: 'R1299',
    features: ['CV + LinkedIn', '3 x 45min sessions', 'Interview prep'],
    best: true,
  },
  {
    name: 'Accelerator',
    price: 'R2499',
    features: ['Full program', '6 x 60min sessions', 'Employer intro support'],
  },
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pricing</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900">Simple pricing that scales with your goals</h2>
        <p className="mt-4 text-slate-700">Choose a plan that fits your current needs and budget.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className={`rounded-2xl border p-6 ${tier.best ? 'border-slate-900 bg-slate-900 text-white' : 'bg-white border-slate-200'}`}>
            <h3 className={`text-lg font-semibold ${tier.best ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
            <p className={`mt-4 text-3xl font-bold ${tier.best ? 'text-white' : 'text-slate-900'}`}>{tier.price}</p>
            <ul className={`mt-4 space-y-2 ${tier.best ? 'text-slate-200' : 'text-slate-700'}`}>
              {tier.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="/contact" className={`inline-flex items-center rounded-full px-4 py-2 font-semibold ${tier.best ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'}`}>
                Get started
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
