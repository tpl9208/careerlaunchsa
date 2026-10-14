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

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Contact details</h2>
          <div className="mt-6 space-y-4 text-slate-700">
            <p>
              Email: <a href="mailto:info@careerlaunchsa.com" className="font-semibold text-slate-900 underline">info@careerlaunchsa.com</a>
            </p>
            <p>
              Phone: <a href="tel:+27123456789" className="font-semibold text-slate-900 underline">+27 12 345 6789</a>
            </p>
            <p>Location: Cape Town, South Africa</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Send us a message</h2>
          <div className="mt-6">
            <form action="https://formspree.io/f/xwkqqvne" method="POST" className="space-y-4">
              <input type="text" name="name" placeholder="Your name" required className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 focus:border-slate-500" />
              <input type="email" name="email" placeholder="Email address" required className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 focus:border-slate-500" />
              <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 focus:border-slate-500" />
              <textarea name="message" placeholder="How can we help?" required className="min-h-[140px] w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 focus:border-slate-500" />
              <button type="submit" className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
