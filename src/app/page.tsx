const services = [
  {
    title: "CV & LinkedIn Support",
    description: "Polish your profile and present your experience clearly to recruiters and employers.",
  },
  {
    title: "Interview Coaching",
    description: "Practice common questions, sharpen your delivery, and build confidence before interviews.",
  },
  {
    title: "Career Strategy",
    description: "Build a realistic action plan to move from job search uncertainty to a clear next step.",
  },
];

const stats = [
  { value: "1:1", label: "Career guidance" },
  { value: "CV", label: "Profile optimisation" },
  { value: "Interview", label: "Confidence coaching" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Career Launch SA",
  description:
    "Career Launch SA provides career coaching, CV support, interview preparation, and job-readiness support for individuals looking to enter or grow in the workforce.",
  areaServed: "South Africa",
  url: "https://www.careerlaunchsa.com",
  email: "mailto:info@careerlaunchsa.com",
  telephone: "+27 12 345 6789",
  sameAs: [],
};

export default function Home() {
  return (
    <div className="bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              Career readiness
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Launch your next career with confidence.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-700">
              Career Launch SA helps job seekers build skills, improve their CVs,
              prepare for interviews, and move forward with practical support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Book a consultation
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Explore services
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="rounded-[1.5rem] bg-slate-900 p-7 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Program snapshot</p>
              <div className="mt-6 space-y-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">About</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">A practical path from uncertainty to opportunity.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We support people who want to enter the workforce with confidence. Through guided coaching,
            real-world preparation, and clear next steps, we help individuals turn ambition into action.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Let’s build your next step together.</h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Reach out to discuss your goals, get guidance, or start your career support journey.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-base sm:flex-row sm:items-center">
              <a href="mailto:info@careerlaunchsa.com" className="text-white underline decoration-white/70 underline-offset-4 hover:decoration-white">
                info@careerlaunchsa.com
              </a>
              <span className="hidden text-slate-500 sm:inline">•</span>
              <a href="tel:+27123456789" className="text-white underline decoration-white/70 underline-offset-4 hover:decoration-white">
                +27 12 345 6789
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
