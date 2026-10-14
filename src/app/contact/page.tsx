export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Get in touch</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Contact details</h2>
          <p className="mt-4 text-slate-700">
            Email: <a href="mailto:info@careerlaunchsa.com" className="font-semibold text-slate-900">info@careerlaunchsa.com</a>
          </p>
          <p className="mt-2 text-slate-700">Phone: <a href="tel:+27123456789" className="font-semibold text-slate-900">+27 12 345 6789</a></p>
          <p className="mt-4 text-slate-700">Location: Cape Town, South Africa</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Send us a message</h2>
          {/* @ts-ignore */}
          <div className="mt-4"><!-- Contact form component --></div>
          <script dangerouslySetInnerHTML={{__html: `/* placeholder - form is injected client-side */`}} />
        </div>
      </div>

    </div>
  );
}
