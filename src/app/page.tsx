import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Hero />
      <Pricing />
      <Testimonials />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Ready to start?</h2>
            <p className="mt-3 text-slate-700">Book a consultation and we'll build a plan tailored to your goals.</p>
            <a href="/contact" className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700">Contact us</a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Ask us anything</h2>
            <p className="mt-3 text-slate-700">Use the form to send a message and we'll reply within one business day.</p>
            {/* @ts-ignore */}
            <div className="mt-4"><ContactForm /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
