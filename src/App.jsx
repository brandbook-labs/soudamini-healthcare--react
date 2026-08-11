import { useState } from 'react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Navigation */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-md flex items-center justify-center" aria-hidden="true">
              <span className="text-white font-bold text-xl leading-none">+</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-blue-900 tracking-tight">
              Soudamini Healthcare
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex space-x-8 text-sm font-medium">
              <li>
                <a href="#specialties" className="text-slate-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-sm">
                  Specialties
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-sm">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-md p-1"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-1 shadow-lg" aria-label="Mobile navigation">
            <a href="#specialties" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50">
              Specialties
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50">
              About Us
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50">
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl md:text-6xl leading-tight">
            Compassionate Care for a <span className="text-blue-700">Healthier Tomorrow</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
            Delivering accessible, high-quality medical services to our community. Experience modern healthcare driven by technology and dedicated professionals.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button 
              className="bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors focus:ring-4 focus:ring-blue-300 focus:outline-none shadow-sm"
              aria-label="Book a healthcare appointment"
            >
              Book Appointment
            </button>
            <button 
              className="bg-white text-slate-700 border border-slate-300 px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-colors focus:ring-4 focus:ring-slate-100 focus:outline-none shadow-sm"
            >
              Patient Portal
            </button>
          </div>
        </div>
      </main>

    </div>
  );
}