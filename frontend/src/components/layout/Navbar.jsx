import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Our Team', path: '/team' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4">
      {/* Light Theme Floating Frosted Pill */}
      <div
        className={`mx-auto transition-all duration-300 ${
          scrolled
            ? 'max-w-[1380px] rounded-full px-5 py-2.5 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-[0_6px_24px_rgba(3,70,101,0.08)]'
            : 'max-w-[1380px] rounded-full px-6 py-3 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-[0_4px_20px_rgba(3,70,101,0.05)]'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Authentic Kevalon Logo */}
          <Link to="/" className="flex items-center shrink-0 cursor-pointer group">
            <img
              src="/logo.webp"
              alt="Kevalon Technology"
              width="512"
              height="146"
              className="h-[36px] sm:h-[42px] md:h-[46px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-[0.1px] transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#034665] bg-[#E6F6F8] font-bold shadow-sm'
                      : 'text-[#334155] hover:text-[#0A8FB6] hover:bg-slate-100/70'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FB6]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="kevalon-btn-primary text-xs !px-5 !py-2.5 flex items-center gap-2 font-bold tracking-wider uppercase text-white shadow-btn-teal"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-slate-100 text-[#034665] hover:bg-[#E6F6F8] focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden mt-2 max-w-[1380px] mx-auto bg-white/98 backdrop-blur-2xl rounded-3xl border border-slate-200 shadow-2xl p-5 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#E6F6F8] text-[#034665] border-l-4 border-[#0A8FB6]'
                    : 'text-[#334155] hover:bg-slate-50 hover:text-[#034665]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <Link
              to="/contact"
              className="kevalon-btn-primary w-full text-center text-xs py-3 flex items-center justify-center gap-2 font-bold tracking-wider uppercase"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
