// src/components/Layout.jsx
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col selection:bg-slate-100 selection:text-slate-900">
      
      {/* --- ULTRA MINIMAL HEADER --- */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Quiet Logo */}
          <Link to="/" className="flex items-center gap-2 focus:outline-none">
            <div className="w-15 bg-slate-900 rounded-sm flex items-center justify-center">
              {/* <span className="text-white font-medium text-xs leading-none">+</span> */}
              <img src="/logo.jpeg" alt="Soudamini Logo" className="w-full h-full object-cover" />
            </div>
            {/* <span className="text-base font-semibold tracking-tight text-slate-900">
              Soudamini.
            </span> */}
          </Link>

          {/* Clean Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-slate-900' : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Simple CTA */}
          <div className="hidden md:block">
            <a 
              href="#download" 
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 outline-none"
            >
              Get App
            </a>
          </div>

          {/* Minimal Mobile Toggle */}
          <button 
            className="md:hidden p-2 -mr-2 text-slate-400 hover:text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Quiet Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-50 bg-white px-6 py-4 space-y-4 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-medium text-slate-500 hover:text-slate-900"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="#download"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-slate-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium mt-4"
            >
              Get App
            </a>
          </div>
        )}
      </header>

      {/* --- CONTENT WRAPPER --- */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* --- QUIET FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-sm font-medium text-slate-900">
             Soudamini Healthcare
          </div>

          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
            <Link to="/delete-account" className="hover:text-slate-900 transition-colors">Delete Account</Link>
            <Link to="/contact" className="hover:text-slate-900 transition-colors">Support</Link>
          </div>

          <div className="text-sm text-slate-400 font-medium">
            © {new Date().getFullYear()}
          </div>
          
        </div>
      </footer>
    </div>
  );
}