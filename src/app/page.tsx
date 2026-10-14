import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Temporary placeholders for the rest of the sections */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Latest Learnerships</h2>
        <p className="text-gray-600">Coming soon...</p>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Popular Salaries</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Featured Careers</h2>
        <p className="text-gray-600">Coming soon...</p>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Career Tools</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>

      {/* Simple Footer for now */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold">CareerLaunch SA</p>
          <p className="mt-2 text-gray-400">Helping South Africans launch their careers</p>
        </div>
      </footer>
    </div>
  );
}

