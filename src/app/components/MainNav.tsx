export default function MainNav() {
  return (
    <nav className="bg-black shadow-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-yellow-400">TodoY</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
              Home
            </a>
            <a href="/features" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
              Features
            </a>
            <a href="/pricing" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
              Pricing
            </a>
            <a href="/about" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
              About
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200">
              Sign In
            </a>
            <a href="/signup" className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-md text-sm font-medium transition duration-200">
              Get Started
            </a>

            <div className="md:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
          <a href="/" className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="/features" className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">
            Features
          </a>
          <a href="/pricing" className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">
            Pricing
          </a>
          <a href="/about" className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <div className="border-t border-gray-800 pt-4 pb-3">
            <a href="/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Sign In
            </a>
            <a href="/signup" className="bg-yellow-400 hover:bg-yellow-300 text-black block px-3 py-2 rounded-md text-base font-medium mt-2">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
