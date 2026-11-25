import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Smartphone,
  Layout,
  Server,
  Palette,
  ShoppingCart,
  UserCheck,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tickerItems = [
  'Internship Registration Open at Kevalon Technology | Internship Duration: 15 Days to 6 Months | Training & Project-Based Internship Programs Available',
  'IT Domains: Full Stack Development, Web Development, React JS, AI/ML, Data Science, Python & Cyber Security',
  'Non-IT Domains: Digital Marketing, UI/UX Design & Business Development Executive',
  '🌐 Client-Based Live Projects | 🏢 Industry Expert Mentorship | 📜 Internship Certificate | 🌟 100% Placement Assistance for Eligible Candidates | Limited Seats - Apply Now!',
];

const staffHireLinks = [
  {
    name: 'Hire App Developers',
    role: 'Hire App Developers',
    icon: Smartphone,
    desc: 'iOS, Android & Flutter experts',
    path: '/staff-augmentation?role=app',
  },
  {
    name: 'Hire Frontend Developers',
    role: 'Hire Frontend Developers',
    icon: Layout,
    desc: 'React, Next.js & Vue specialists',
    path: '/staff-augmentation?role=frontend',
  },
  {
    name: 'Hire Backend Developers',
    role: 'Hire Backend Developers',
    icon: Server,
    desc: 'Node.js, Python & Cloud APIs',
    path: '/staff-augmentation?role=backend',
  },
  {
    name: 'Hire Designers',
    role: 'Hire UI/UX Designers',
    icon: Palette,
    desc: 'Figma & Design Systems',
    path: '/staff-augmentation?role=designer',
  },
  {
    name: 'Hire eCommerce Developers',
    role: 'Hire eCommerce Developers',
    icon: ShoppingCart,
    desc: 'Shopify, WooCommerce & Headless',
    path: '/staff-augmentation?role=ecommerce',
  },
  {
    name: 'Hire Dedicated Developers',
    role: 'Hire Dedicated Developers',
    icon: UserCheck,
    desc: 'Full-stack & project-ready talent',
    path: '/staff-augmentation?role=dedicated',
  },
];

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Our Work', path: '/portfolio' },
  {
    name: 'Staff Augmentation',
    path: '/staff-augmentation',
    hasDropdown: true,
  },
  { name: 'Our Team', path: '/team' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [staffDropdownOpen, setStaffDropdownOpen] = useState(false);
  const [mobileStaffOpen, setMobileStaffOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
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
    setStaffDropdownOpen(false);
    setMobileStaffOpen(false);
  }, [location.pathname, location.search]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setStaffDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setStaffDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT TICKER (Authentic Marquee Banner) */}
      <div
        className={`fixed top-0 left-0 right-0 z-[60] h-8 sm:h-9 bg-gradient-to-r from-[#034665] via-[#0A8FB6] to-[#034665] text-white overflow-hidden transition-all duration-300 select-none shadow-xs ${
          scrolled ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        {/* Subtle Edge Fade Gradients */}
        <div className="absolute left-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-r from-[#034665] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-l from-[#034665] to-transparent z-10 pointer-events-none" />

        <Link
          to="/apply-now"
          className="flex items-center h-full group cursor-pointer"
          title="Click to apply now"
        >
          <div className="animate-ticker flex items-center whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((text, idx) => (
              <span key={idx} className="inline-flex items-center mx-4 text-[11px] sm:text-xs font-medium text-[#E0F4F7] tracking-wide">
                <span>{text}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#61BBC5] mx-4 opacity-75 inline-block shrink-0" />
              </span>
            ))}
          </div>
        </Link>
      </div>

      {/* 2. FLOATING FROSTED NAVBAR */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 ${
          scrolled ? 'top-2 sm:top-3' : 'top-10 sm:top-11'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-300 ${
            scrolled
              ? 'max-w-[1380px] rounded-full px-5 py-2.5 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-[0_8px_30px_rgba(3,70,101,0.08)]'
              : 'max-w-[1380px] rounded-full px-6 py-3 bg-white/92 backdrop-blur-xl border border-slate-200/80 shadow-[0_4px_22px_rgba(3,70,101,0.06)]'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Kevalon Brand Logo */}
            <Link to="/" className="flex items-center shrink-0 cursor-pointer group">
              <motion.img
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                src="/logo.webp"
                alt="Kevalon Technology"
                width="512"
                height="146"
                className="h-[36px] sm:h-[40px] md:h-[44px] w-auto object-contain transition-transform"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 relative">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  const isStaffActive = location.pathname.startsWith('/staff-augmentation');
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavLink
                        to={item.path}
                        className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-[0.1px] transition-colors duration-200 flex items-center gap-1.5 ${
                          isStaffActive
                            ? 'text-[#034665] font-bold'
                            : 'text-[#334155] hover:text-[#0A8FB6]'
                        }`}
                      >
                        {isStaffActive && (
                          <motion.div
                            layoutId="activeNavIndicator"
                            className="absolute inset-0 bg-[#E6F6F8] rounded-full -z-10 shadow-xs border border-[#0A8FB6]/20"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            staffDropdownOpen ? 'rotate-180 text-[#0A8FB6]' : 'text-slate-400'
                          }`}
                        />
                        {isStaffActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FB6] animate-pulse" />
                        )}
                      </NavLink>

                      {/* Dropdown Menu (Matches User Reference Image) */}
                      <AnimatePresence>
                        {staffDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                          >
                            <div className="w-[330px] bg-white/98 backdrop-blur-2xl rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(3,70,101,0.18)] p-4 text-left">
                              {/* Header & Subheading */}
                              <div className="px-2 pt-1 pb-2">
                                <h4 className="text-[11px] font-extrabold tracking-widest text-[#034665] uppercase flex items-center gap-1.5">
                                  <span>STAFF AUGMENTATION SERVICES</span>
                                </h4>
                                <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mt-1">
                                  HIRE TALENT
                                </p>
                              </div>

                              {/* Interactive Talent Role Items */}
                              <div className="space-y-1">
                                {staffHireLinks.map((subItem) => {
                                  const IconComponent = subItem.icon;
                                  return (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.path}
                                      onClick={() => setStaffDropdownOpen(false)}
                                      className="group flex items-center gap-3 px-2.5 py-2 rounded-xl hover:bg-[#F0F8FA] transition-all duration-150"
                                    >
                                      <div className="w-7 h-7 rounded-lg bg-[#E6F6F8] text-[#0A8FB6] group-hover:bg-[#034665] group-hover:text-white transition-all duration-200 flex items-center justify-center shrink-0">
                                        <IconComponent className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <span className="block text-[13px] font-semibold text-slate-700 group-hover:text-[#034665] transition-colors leading-tight">
                                          {subItem.name}
                                        </span>
                                        <span className="block text-[11px] text-slate-400 group-hover:text-slate-500 truncate">
                                          {subItem.desc}
                                        </span>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>

                              {/* Card Footer Matching Reference Image */}
                              <div className="border-t border-slate-100 pt-3 mt-2 px-2 flex items-center justify-between">
                                <span className="text-[11px] text-slate-500 font-medium">
                                  Scale your team fast
                                </span>
                                <Link
                                  to="/staff-augmentation"
                                  onClick={() => setStaffDropdownOpen(false)}
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0A8FB6] hover:bg-[#034665] text-white text-[11px] font-semibold transition-all duration-200 shadow-xs"
                                >
                                  <span>View All</span>
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-[0.1px] transition-colors duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'text-[#034665] font-bold'
                          : 'text-[#334155] hover:text-[#0A8FB6]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.div
                            layoutId="activeNavIndicator"
                            className="absolute inset-0 bg-[#E6F6F8] rounded-full -z-10 shadow-xs border border-[#0A8FB6]/20"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span>{item.name}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FB6] animate-pulse" />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Action Button: Apply Now */}
            <div className="hidden sm:flex items-center gap-2.5">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/apply-now"
                  className="rounded-full px-5 py-2 text-xs sm:text-[13px] font-semibold text-white whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_10px_24px_rgba(3,70,101,0.28)] bg-[linear-gradient(137.68deg,#61BBC5_0.13%,#034665_100%)] flex items-center gap-1.5"
                >
                  <span>Apply Now</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
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

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 max-w-[1380px] mx-auto bg-white/98 backdrop-blur-2xl rounded-3xl border border-slate-200 shadow-2xl p-4 sm:p-5 space-y-1.5 max-h-[85vh] overflow-y-auto"
            >
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.name} className="rounded-xl overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `text-sm font-semibold ${
                              isActive ? 'text-[#034665] font-bold' : 'text-[#334155]'
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                        <button
                          type="button"
                          onClick={() => setMobileStaffOpen(!mobileStaffOpen)}
                          className="p-1 rounded-md text-slate-400 hover:text-[#0A8FB6]"
                          aria-label="Toggle Staff Submenu"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileStaffOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Mobile Dropdown Sub-Items */}
                      {mobileStaffOpen && (
                        <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl my-1 border border-slate-100">
                          {staffHireLinks.map((sub) => {
                            const SubIcon = sub.icon;
                            return (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-xs font-medium text-slate-700 hover:text-[#034665] hover:bg-white"
                              >
                                <SubIcon className="w-3.5 h-3.5 text-[#0A8FB6]" />
                                <span>{sub.name}</span>
                              </Link>
                            );
                          })}
                          <div className="pt-1.5 border-t border-slate-200/60 flex items-center justify-between px-2">
                            <span className="text-[10px] text-slate-500 font-medium">Scale your team fast</span>
                            <Link
                              to="/staff-augmentation"
                              className="text-[11px] font-bold text-[#0A8FB6] hover:underline"
                            >
                              View All →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
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
                );
              })}

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <Link
                  to="/apply-now"
                  className="rounded-full w-full py-3 text-center text-xs uppercase tracking-wider font-bold text-white shadow-md bg-[linear-gradient(137.68deg,#61BBC5_0.13%,#034665_100%)] flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="kevalon-btn-outline w-full text-center text-xs py-2.5 flex items-center justify-center gap-2 font-bold tracking-wider uppercase"
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
