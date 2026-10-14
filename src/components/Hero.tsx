import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Launch Your Career in <span className="text-blue-600">South Africa</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Find learnerships, real salaries, career paths, and free tools — all in one place. 
          Built for South African students and job seekers.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/learnerships"
            className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Browse Learnerships
          </Link>
          <Link
            href="/salary"
            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
          >
            Check Salaries
          </Link>
        </div>

        {/* Small trust text */}
        <p className="mt-8 text-sm text-gray-500">
          Free • Updated regularly • Made for South Africans
        </p>

      </div>
    </section>
  );
}