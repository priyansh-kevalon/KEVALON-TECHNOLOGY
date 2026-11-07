import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ArrowUpRight, Linkedin, Twitter, Instagram, Youtube, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#FFFFFF] text-slate-700 border-t border-slate-200 overflow-hidden">
      {/* Kevalon Signature Top CTA Banner */}
      <div className="relative z-10 border-b border-slate-200 px-4 sm:px-8 md:px-12 py-8 sm:py-10 [background:linear-gradient(135deg,#FFFFFF_0%,#F0F8FA_50%,#E6F6F8_100%)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] uppercase text-[#0A8FB6] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0A8FB6] animate-pulse" />
              <span>Ready to Build?</span>
            </div>
            <h2 className="font-heading font-extrabold text-[#034665] tracking-tight leading-tight text-2xl sm:text-3xl lg:text-4xl">
              Let's build something{' '}
              <span className="kevalon-gradient-text font-black">
                extraordinary together.
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="kevalon-btn-primary !px-6 !py-3 text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.link/a02fdn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#034665] text-sm font-bold border border-slate-200 hover:border-[#0A8FB6] hover:bg-[#F0F8FA] transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#16a34a]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body with Subtle Dots */}
      <div className="relative bg-[#F8FAFC] bg-dots-light py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center shrink-0">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm inline-block">
                <img
                  src="/logo.webp"
                  alt="Kevalon Technology"
                  width="512"
                  height="146"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Kevalon Technology is an IT and software engineering firm based in Ahmedabad, India, specializing in custom web applications, mobile apps, enterprise ERP, and AI-driven systems.
            </p>

            {/* Official Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.linkedin.com/company/kevalon-technology"
                target="_blank"
                rel="me noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#034665] hover:bg-[#0A8FB6] hover:text-white hover:border-[#0A8FB6] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/KevalonT"
                target="_blank"
                rel="me noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#034665] hover:bg-[#0A8FB6] hover:text-white hover:border-[#0A8FB6] transition-all"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/kevalon_technology/"
                target="_blank"
                rel="me noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#034665] hover:bg-[#0A8FB6] hover:text-white hover:border-[#0A8FB6] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@KevalonTechnology"
                target="_blank"
                rel="me noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#034665] hover:bg-[#0A8FB6] hover:text-white hover:border-[#0A8FB6] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#034665] font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FB6]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-[#0A8FB6] transition-colors flex items-center gap-1 group">
                  Home <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0A8FB6] transition-colors flex items-center gap-1 group">
                  About Us <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0A8FB6] transition-colors flex items-center gap-1 group">
                  All Services <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#0A8FB6] transition-colors flex items-center gap-1 group">
                  Portfolio <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#0A8FB6] transition-colors flex items-center gap-1 group">
                  Our Team <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#0A8FB6] transition-colors flex items-center gap-1 group">
                  Careers <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-[#034665] font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FB6]" />
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link to="/services/custom-software" className="hover:text-[#0A8FB6] transition-colors">
                  Web Application Dev
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-apps" className="hover:text-[#0A8FB6] transition-colors">
                  Mobile Application Dev
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="hover:text-[#0A8FB6] transition-colors">
                  ERP & CRM Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-devops" className="hover:text-[#0A8FB6] transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/ai-ml" className="hover:text-[#0A8FB6] transition-colors">
                  AI & Intelligent Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[#034665] font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FB6]" />
              Headquarters
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A8FB6] shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  913, Solaris Business Hub, Parshwanath Jain BRTS, Bhuyangdev, Ahmedabad, Gujarat 380013, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0A8FB6] shrink-0" />
                <a href="mailto:sales@kevalontechnology.in" className="hover:text-[#0A8FB6] transition-colors text-xs">
                  sales@kevalontechnology.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0A8FB6] shrink-0" />
                <a href="tel:+919081012218" className="hover:text-[#0A8FB6] transition-colors text-xs font-semibold text-[#034665]">
                  +91 90810 12218
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Kevalon Technology. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[#0A8FB6] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#0A8FB6] transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#0A8FB6] transition-colors">
              Internship Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
