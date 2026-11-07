import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    slug: 'corporate-website',
    title: 'Corporate Website',
    category: 'Web',
    client: 'Kevalon Enterprise Client',
    duration: '6 Weeks',
    year: '2024',
    desc: 'A modern corporate site with CMS integration, multi-language support and SEO optimizations.',
    problem: 'Outdated platform loading in over 8 seconds with zero mobile optimization and no CMS.',
    solution: 'Rebuilt from scratch using React, server-side rendering for SEO, and CI/CD pipelines.',
    results: '3.2s → 0.8s Load Time • +240% Organic Traffic • +85% Lead Conversions',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 2,
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    category: 'Web',
    client: 'Retail Brand',
    duration: '10 Weeks',
    year: '2024',
    desc: 'A performant e-commerce solution with product catalog, inventory, and admin dashboard.',
    problem: 'Generic SaaS platform that could not handle thousands of SKUs and complex discount logic.',
    solution: 'Custom full-stack storefront with Stripe checkout flow and real-time inventory management.',
    results: '+220% Sales Growth • 99.9% Checkout Reliability',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 3,
    slug: 'mobile-banking-app',
    title: 'Mobile Banking App',
    category: 'Mobile',
    client: 'FinTech Startup',
    duration: '12 Weeks',
    year: '2024',
    desc: 'Secure cross-platform banking application with biometric login and instant money transfers.',
    problem: 'Need for a bank-grade mobile app compliant with financial regulatory security frameworks.',
    solution: 'Developed with Flutter and end-to-end encrypted REST microservices with biometric auth.',
    results: '100k+ Active Users • Zero Security Incidents • 4.9★ Store Rating',
    tech: ['Flutter', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 4,
    slug: 'food-delivery-app',
    title: 'Food Delivery App',
    category: 'Mobile',
    client: 'Restaurant Chain',
    duration: '8 Weeks',
    year: '2024',
    desc: 'On-demand food delivery app with live GPS courier tracking and multi-branch menu ordering.',
    problem: 'High aggregator commission fees eating up profits across 15 physical restaurant branches.',
    solution: 'Built branded iOS/Android apps with Google Maps live tracking and direct order dispatching.',
    results: '40% Cost Savings • 30-min Average Delivery Turnaround',
    tech: ['React Native', 'Firebase', 'Google Maps API', 'Node.js'],
  },
  {
    id: 5,
    slug: '2d-puzzle-game',
    title: '2D Puzzle Game',
    category: 'Game',
    client: 'Gaming Studio',
    duration: '14 Weeks',
    year: '2023',
    desc: 'Engaging cross-platform puzzle game with physics-based mechanics, levels, and reward ads.',
    problem: 'Client needed an addictive casual mobile puzzle game optimized for low-end mobile devices.',
    solution: 'Crafted in Unity with lightweight sprite engines and integrated AdMob mediation.',
    results: '500,000+ Downloads • 4.8★ App Store Rating',
    tech: ['Unity', 'C#', '2D Physics', 'AdMob'],
  },
  {
    id: 6,
    slug: 'ar-adventure-game',
    title: 'AR Adventure Game',
    category: 'Game',
    client: 'Interactive Media Firm',
    duration: '16 Weeks',
    year: '2024',
    desc: 'Augmented reality mobile game combining real-world geolocation with 3D monster battles.',
    problem: 'High memory usage and battery drain on older mobile processors during AR rendering.',
    solution: 'Engineered custom occlusion culling and optimized ARCore/ARKit shaders in Unity.',
    results: '60fps Consistent Rendering • High Player Session Times',
    tech: ['Unity', 'ARKit', 'ARCore', 'C#'],
  },
  {
    id: 7,
    slug: 'portfolio-landing-page',
    title: 'Portfolio Landing Page',
    category: 'Web',
    client: 'Design Agency',
    duration: '3 Weeks',
    year: '2024',
    desc: 'Award-winning creative portfolio with fluid micro-animations and interactive 3D elements.',
    problem: 'Client needed a distinct, futuristic design that converted inbound enterprise prospects.',
    solution: 'Built using Tailwind CSS, Framer Motion transitions, and responsive typography.',
    results: 'Featured in Web Design Showcases • +180% Inbound Inquiries',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 8,
    slug: 'fitness-tracker-app',
    title: 'Fitness Tracker App',
    category: 'Mobile',
    client: 'Health & Wellness Co',
    duration: '8 Weeks',
    year: '2024',
    desc: 'Cross-platform health & fitness app tracking steps, calories, heart rate, and training plans.',
    problem: 'Disjointed Bluetooth synchronization and poor battery efficiency on wearable devices.',
    solution: 'Engineered native Bluetooth Low Energy (BLE) background service with local SQLite sync.',
    results: '99.8% Sync Success Rate • 40% Lower Battery Usage',
    tech: ['Flutter', 'BLE Sync', 'SQLite', 'Node.js'],
  },
  {
    id: 9,
    slug: 'sales-crm-platform',
    title: 'Sales CRM Platform',
    category: 'CRM',
    client: 'B2B Sales Enterprise',
    duration: '12 Weeks',
    year: '2024',
    desc: 'Custom enterprise CRM with lead scoring, automated email cadence, and revenue pipelines.',
    problem: 'Sales team was manually tracking leads across spreadsheets, losing 30% of warm prospects.',
    solution: 'Delivered centralized React + Express portal with role-based access and automated alerts.',
    results: 'Zero Lead Leaks • +65% Closer Velocity • Automated Reports',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
  },
  {
    id: 10,
    slug: 'real-estate-crm',
    title: 'Real Estate CRM',
    category: 'CRM',
    client: 'Commercial Property Group',
    duration: '10 Weeks',
    year: '2024',
    desc: 'Property listing and brokerage CRM with client site visit scheduling and commission tracking.',
    problem: 'Complex inventory of commercial plots and residential units with overlapping broker claims.',
    solution: 'Custom unit allocation matrix, automated WhatsApp visit notifications, and payout logs.',
    results: '400+ Active Agents Onboarded • Real-Time Inventory Control',
    tech: ['React', 'Node.js', 'MongoDB', 'WhatsApp API'],
  },
];

const categories = ['All', 'Web', 'Mobile', 'Game', 'CRM'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] border border-[#0A8FB6]/20">
          <span className="w-2 h-2 rounded-full bg-[#0A8FB6] animate-pulse" />
          <span>Proven Track Record</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#034665] tracking-tight leading-tight">
          Client Success &{' '}
          <span className="kevalon-gradient-text">Delivered Projects</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Explore how Kevalon Technology engineers high-impact web apps, mobile solutions, games, and enterprise CRMs for businesses worldwide.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === cat
                ? 'kevalon-btn-primary text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-[#034665] border border-slate-200 hover:border-[#0A8FB6]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            className="light-card relative overflow-hidden p-6 sm:p-7 flex flex-col justify-between group bg-white border border-slate-200 hover:border-[#0A8FB6]/50 transition-all"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#034665] to-[#0A8FB6]" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#E6F6F8] text-[#0A8FB6] border border-[#0A8FB6]/20">
                  {proj.category}
                </span>
                <span className="text-xs text-slate-400 font-semibold">{proj.duration}</span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-[#034665] group-hover:text-[#0A8FB6] transition-colors mb-2">
                {proj.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {proj.desc}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A8FB6] block mb-1">
                  Key Deliverable & Outcome:
                </span>
                <span className="text-xs text-slate-700 font-medium leading-relaxed block">
                  {proj.results}
                </span>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-4">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#034665] group-hover:text-[#0A8FB6] transition-colors"
              >
                <span>Inquire About Similar Solution</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl [background:linear-gradient(135deg,#FFFFFF_0%,#F0F8FA_50%,#E6F6F8_100%)] text-[#034665] border border-slate-200 shadow-md text-center space-y-3">
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#034665]">
          Ready to turn your vision into our next success story?
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Contact our development team in Ahmedabad to discuss scope, timelines, and technical architecture.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="kevalon-btn-primary !px-7 !py-3.5 text-sm font-bold uppercase tracking-wider text-white inline-flex items-center gap-2 shadow-sm"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
