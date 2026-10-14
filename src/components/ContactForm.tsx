import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form action="https://formspree.io/f/xwkqqvne" method="POST" className="space-y-4">
      <input type="text" name="name" placeholder="Your name" required className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 focus:border-slate-500" />
      <input type="email" name="email" placeholder="Email address" required className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 focus:border-slate-500" />
      <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 focus:border-slate-500" />
      <textarea name="message" placeholder="How can we help?" required className="min-h-[140px] w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 focus:border-slate-500" />
      <button type="submit" onClick={() => setSubmitted(true)} className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700">
        {submitted ? 'Submitted' : 'Send message'}
      </button>
    </form>
  );
}
