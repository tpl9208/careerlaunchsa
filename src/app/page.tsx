export default function Home() {
  return (
    <div className="bg-zinc-50">
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700">
              Career readiness
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Launch your next career with confidence.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-700">
              Career Launch SA helps job seekers build skills, improve their CVs,
              prepare for interviews, and connect with employers through practical,
              supportive guidance.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
              >
                Book a consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                Explore services
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="rounded-2xl bg-zinc-900 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">Program snapshot</p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-3xl font-bold">1:1</p>
                  <p className="text-sm text-zinc-300">Career coaching</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">CV + LinkedIn</p>
                  <p className="text-sm text-zinc-300">Professional positioning</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">Interview prep</p>
                  <p className="text-sm text-zinc-300">Confidence building</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">About</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">A practical path from uncertainty to opportunity.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-700">
            We support people who want to enter the workforce with confidence. Through guided coaching,
            real-world preparation, and clear next steps, we help individuals turn ambition into action.
          </p>
        </div>
      </section>

      <section id="services" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Services</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              ["CV & Portfolio Support", "Create a stronger professional profile that stands out to employers."],
              ["Interview Preparation", "Practice answers, build confidence, and sharpen your presentation."],
              ["Career Strategy", "Map out your next move with realistic goals and actionable steps."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
                <p className="mt-3 text-zinc-700">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-900 p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Let’s build your next step together.</h2>
          <p className="mt-4 max-w-xl text-zinc-300">
            Reach out to discuss your goals, get guidance, or start your career support journey.
          </p>

          <div className="mt-8 flex flex-col gap-3 text-base sm:flex-row sm:items-center">
            <a href="mailto:info@careerlaunchsa.com" className="text-white underline decoration-white/70 underline-offset-4 hover:decoration-white">
              info@careerlaunchsa.com
            </a>
            <span className="hidden text-zinc-500 sm:inline">•</span>
            <a href="tel:+27123456789" className="text-white underline decoration-white/70 underline-offset-4 hover:decoration-white">
              +27 12 345 6789
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
