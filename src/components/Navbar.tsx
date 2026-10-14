import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">CareerLaunch</span>
            <span className="text-xl font-bold text-gray-800">SA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/learnerships" className="text-gray-700 hover:text-blue-600 font-medium">
              Learnerships
            </Link>
            <Link href="/salary" className="text-gray-700 hover:text-blue-600 font-medium">
              Salaries
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-blue-600 font-medium">
              Careers
            </Link>
            <Link href="/tools" className="text-gray-700 hover:text-blue-600 font-medium">
              Tools
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-medium hidden sm:block"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Sign up
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}