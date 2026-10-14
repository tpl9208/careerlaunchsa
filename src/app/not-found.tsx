import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">404</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-700">The page you are looking for does not exist.</p>
      <a href="/" className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700">
        Return home
      </a>
    </div>
  );
}
