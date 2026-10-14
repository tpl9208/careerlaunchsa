export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
            Career Accelerator
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Expert coaching, practical training, and employer connections to launch your career.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-700">
            Work one-on-one with our coaches, refine your CV and LinkedIn, practice interviews, and access tailored job
            search strategies that convert applications into interviews.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/contact" className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700">
              Book a consultation
            </a>
            <a href="/services" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100">
              View services
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.1)] transition-transform duration-300 hover:-translate-y-1">
          <div className="space-y-4">
            <div className="rounded-xl bg-slate-100 p-4">
              <p className="text-3xl font-bold text-slate-900">1:1</p>
              <p className="text-sm text-slate-500">Personal coaching</p>
            </div>
            <div className="rounded-xl bg-slate-100 p-4">
              <p className="text-3xl font-bold text-slate-900">CV</p>
              <p className="text-sm text-slate-500">Professional profile support</p>
            </div>
            <div className="rounded-xl bg-slate-100 p-4">
              <p className="text-3xl font-bold text-slate-900">Interview</p>
              <p className="text-sm text-slate-500">Practical mock interviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
