import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Gamepad2,
  ShoppingCart,
  Database,
  Plug,
  Users2,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

export const servicesData = [
  {
    num: '01',
    slug: 'web-application-development',
    title: 'Web Application Development',
    icon: Code2,
    tagline: 'Enterprise-grade reactive web platforms',
    desc: 'Custom, scalable web applications built with modern frameworks for enterprise-grade performance, rock-solid security, and seamless workflows.',
    features: [
      'Single Page Applications (SPA) with React & Next.js',
      'High-concurrency Node.js & Express backends',
      'Scalable MongoDB database schemas & query optimization',
      'Server-side rendering (SSR) for lightning-fast SEO ranking',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
  },
  {
    num: '02',
    slug: 'mobile-application-development',
    title: 'Mobile App Development',
    icon: Smartphone,
    tagline: 'High-performance native & cross-platform apps',
    desc: 'High-performance native and cross-platform apps for every device and every user, engineered for fluid 60fps animations and high retention.',
    features: [
      'Cross-platform development using Flutter & React Native',
      'Native iOS (Swift) & Android (Kotlin) apps',
      'Offline-first synchronization & encrypted local storage',
      'Real-time push notifications & geolocation mapping',
    ],
    tags: ['Flutter', 'React Native', 'iOS & Android'],
  },
  {
    num: '03',
    slug: 'game-development',
    title: 'Game Development',
    icon: Gamepad2,
    tagline: 'Engaging 2D & 3D cross-platform games',
    desc: 'Engaging 2D/3D games built for mobile, web and cross-platform publishing with captivating visuals, fluid physics, and multiplayer capabilities.',
    features: [
      'Unity 2D & 3D game physics & mechanics',
      'Multiplayer networking & real-time matchmaking',
      'Cross-platform export for iOS, Android, and WebGL',
      'In-game monetization, ad networks, and asset pipelines',
    ],
    tags: ['Unity', '2D & 3D', 'Multiplayer'],
  },
  {
    num: '04',
    slug: 'e-commerce-development',
    title: 'E-Commerce Development',
    icon: ShoppingCart,
    tagline: 'Secure, high-converting digital storefronts',
    desc: 'Secure and scalable stores with powerful checkout, payment gateway integrations, real-time inventory management, and tailored admin control.',
    features: [
      'Custom headless storefronts & Shopify/WooCommerce apps',
      'Integrated payment gateways (Stripe, Razorpay, PayPal)',
      'Automated inventory sync & multi-currency billing',
      'High-conversion checkout flows with abandoned-cart recovery',
    ],
    tags: ['Shopify', 'WooCommerce', 'Custom Headless'],
  },
  {
    num: '05',
    slug: 'web-erp-development',
    title: 'Web ERP Development',
    icon: Database,
    tagline: 'Connected operational systems for growing teams',
    desc: 'End-to-end ERP systems connecting finance, HR, inventory, procurement, and operations into a single cohesive management portal.',
    features: [
      'Custom ERP modules for multi-branch organizations',
      'Centralized inventory, warehouse & supply chain tracking',
      'Automated invoicing, payroll & compliance reporting',
      'Executive BI dashboards with real-time operational telemetry',
    ],
    tags: ['ERP Modules', 'Analytics', 'Automation'],
  },
  {
    num: '06',
    slug: 'api-development',
    title: 'API Development & Microservices',
    icon: Plug,
    tagline: 'High-throughput, secure distributed APIs',
    desc: 'Secure RESTful and GraphQL APIs built for modern web, mobile and cloud infrastructure with comprehensive documentation and token security.',
    features: [
      'RESTful & GraphQL API architectures',
      'Microservices orchestration & Docker containerization',
      'OAuth2, JWT authentication & rate limiting',
      'Third-party software integrations & webhooks',
    ],
    tags: ['REST APIs', 'GraphQL', 'Microservices'],
  },
  {
    num: '07',
    slug: 'crm-development',
    title: 'CRM Development',
    icon: Users2,
    tagline: 'Custom CRM platforms with automated workflows',
    desc: 'Custom CRM platforms with automation and integration designed to turn leads into long-term loyal clients while empowering your sales reps.',
    features: [
      'Lead capture, automated scoring & sales pipelines',
      'Client interaction history, email logging & WhatsApp alerts',
      'Role-based permissions & audit logging for large teams',
      'Custom reporting & revenue forecast analytics',
    ],
    tags: ['Lead Mgmt', 'Pipeline', 'Automation'],
  },
  {
    num: '08',
    slug: 'seo-digital-marketing',
    title: 'SEO & Digital Marketing',
    icon: TrendingUp,
    tagline: 'Data-driven growth marketing & search rankings',
    desc: 'Data-driven SEO and growth marketing that boosts organic search rankings, generates targeted buyer traffic, and scales conversion rates.',
    features: [
      'Comprehensive on-page, off-page & technical SEO audits',
      'Keyword research & competitor gap analysis',
      'Google Ads (PPC), meta campaigns & lead generation',
      'Google Analytics 4 & conversion tracking dashboards',
    ],
    tags: ['SEO', 'Google Ads', 'Analytics'],
  },
  {
    num: '09',
    slug: 'internship-training',
    title: 'Internship & Training Programs',
    icon: GraduationCap,
    tagline: 'Hands-on live project training & mentorship',
    desc: 'Hands-on internships and practical software engineering training on live client projects with 1-on-1 mentorship and official industry certifications.',
    features: [
      'Real-world MERN Stack, Python & Flutter project training',
      'Daily code reviews by senior engineering mentors',
      'Live deployment & GitHub collaboration workflows',
      'Official completion certification & career placement support',
    ],
    tags: ['Live Projects', 'Mentorship', 'Certification'],
  },
];

export default function Services() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web', 'Mobile', 'Enterprise', 'Growth'];

  const filteredServices = servicesData.filter((svc) => {
    if (filter === 'All') return true;
    if (filter === 'Web') return svc.slug.includes('web') || svc.slug.includes('api');
    if (filter === 'Mobile') return svc.slug.includes('mobile') || svc.slug.includes('game');
    if (filter === 'Enterprise') return svc.slug.includes('erp') || svc.slug.includes('crm');
    if (filter === 'Growth') return svc.slug.includes('seo') || svc.slug.includes('internship');
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-20">
      {/* Services Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] border border-[#0A8FB6]/20">
          <span className="w-2 h-2 rounded-full bg-[#0A8FB6] animate-pulse" />
          <span>Our Core Capabilities</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#034665] tracking-tight leading-tight">
          Enterprise IT & Software{' '}
          <span className="kevalon-gradient-text">Development Services</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          From full-stack web platforms and native mobile apps to custom ERPs and AI systems, Kevalon Technology engineers digital products built to scale.
        </p>
      </motion.div>

      {/* 4 Pillars of Excellence Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { val: '10+', lbl: 'Services', sub: 'Across IT domains' },
          { val: '50+', lbl: 'Projects', sub: 'Delivered successfully' },
          { val: '98%', lbl: 'Satisfaction', sub: 'Client rating' },
          { val: '24/7', lbl: 'Support', sub: 'Ongoing maintenance' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4, borderColor: 'rgba(10, 143, 182, 0.4)' }}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-center shadow-xs cursor-default"
          >
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#034665]">
              {stat.val}
            </div>
            <div className="text-xs font-bold text-slate-800 uppercase mt-0.5">{stat.lbl}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Category Filter Pills with Layout Animation */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
              filter === cat
                ? 'text-white'
                : 'bg-white text-slate-600 hover:text-[#034665] border border-slate-200 hover:border-[#0A8FB6]'
            }`}
          >
            {filter === cat && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 kevalon-btn-primary rounded-full -z-10 shadow-sm"
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              />
            )}
            <span>{cat}</span>
          </button>
        ))}
      </div>

      {/* Services Grid with Motion Stagger */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence>
          {filteredServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                layout
                key={svc.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="light-card relative overflow-hidden p-6 sm:p-8 flex flex-col justify-between group bg-white border border-slate-200 hover:border-[#0A8FB6]/50 shadow-xs hover:shadow-xl transition-all"
              >
                {/* Top Accent Stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#034665] to-[#0A8FB6]" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-12 h-12 rounded-xl bg-[#E6F6F8] border border-[#0A8FB6]/20 flex items-center justify-center text-[#0A8FB6] group-hover:bg-[#0A8FB6] group-hover:text-white transition-colors duration-300"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {svc.num}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#034665] group-hover:text-[#0A8FB6] transition-colors leading-snug mb-1">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0A8FB6] uppercase tracking-wider mb-3">
                    {svc.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {svc.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#034665] group-hover:text-[#0A8FB6] transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Consultation Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-12 rounded-3xl [background:linear-gradient(135deg,#FFFFFF_0%,#F0F8FA_50%,#E6F6F8_100%)] text-[#034665] border border-slate-200 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <span className="text-xs font-extrabold tracking-widest uppercase text-[#0A8FB6] block mb-1">
            Need Architectural Guidance?
          </span>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#034665]">
            Let’s discuss your technical roadmap.
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Our engineering leads will evaluate your requirements and recommend the optimal technology stack.
          </p>
        </div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/contact"
            className="kevalon-btn-primary !px-7 !py-3.5 text-sm font-bold uppercase tracking-wider text-white shrink-0 shadow-sm inline-block"
          >
            <span>Schedule Free Consultation</span>
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
