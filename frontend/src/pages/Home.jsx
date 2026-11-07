import React, { useEffect, useState } from 'react';
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
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Award,
  Star,
  Quote,
  Search,
  PenTool,
  Cpu,
  CheckCircle,
  Rocket,
  RefreshCw,
  ExternalLink,
  Layers,
  Terminal,
  Server,
  Sparkles,
  MessageSquare,
  Building2,
  Lock,
} from 'lucide-react';
import api from '../services/api';
import { servicesData } from './Services';

const processSteps = [
  {
    num: '01',
    icon: Search,
    title: 'Discovery & Analysis',
    tag: 'Scoping Phase',
    deliverable: 'Scope of Work & PRD',
    desc: 'Deep-dive analysis of your business logic, user personas, market competitors, and architectural requirements.',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'Architecture & Tech Stack',
    tag: 'System Design',
    deliverable: 'Database Schema & API Specs',
    desc: 'Planning scalable database schemas, microservice boundaries, security protocols, and hosting topology.',
  },
  {
    num: '03',
    icon: PenTool,
    title: 'UI/UX Prototyping',
    tag: 'Design System',
    deliverable: 'Interactive Figma Prototype',
    desc: 'Designing intuitive user flows, pixel-perfect responsive layouts, and interactive design prototypes.',
  },
  {
    num: '04',
    icon: Code2,
    title: 'Agile Sprint Engineering',
    tag: 'Core Development',
    deliverable: 'Weekly Sprint Demos',
    desc: 'Clean, modular coding with test-driven practices, regular git commits, and transparent sprint reviews.',
  },
  {
    num: '05',
    icon: ShieldCheck,
    title: 'Quality & Penetration QA',
    tag: 'Testing & Security',
    deliverable: 'QA Test Report & Audit',
    desc: 'End-to-end automated testing, cross-browser audits, load tests, and rigorous vulnerability assessments.',
  },
  {
    num: '06',
    icon: Rocket,
    title: 'Production Deployment',
    tag: 'Launch Day',
    deliverable: 'Live Production URL & SSL',
    desc: 'Zero-downtime release pipelines on AWS, automated database migrations, and domain configuration.',
  },
  {
    num: '07',
    icon: RefreshCw,
    title: 'SLA Support & Growth',
    tag: 'Post-Launch',
    deliverable: '24/7 Monitoring & Scaling',
    desc: 'Ongoing uptime monitoring, performance optimization, SEO analytics, and seamless feature upgrades.',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Bhargav Solanki',
    role: 'CEO, RB Hires Consult Inc',
    service: 'Web Application Development',
    metric: '3× Business Growth',
    text: 'Kevalon developed a modern, high-performing web application that perfectly represents our brand. Their attention to detail, responsive design, and seamless functionality helped us attract more enterprise clients and establish a commanding presence in our sector.',
  },
  {
    id: 2,
    name: 'Kalpeshsinh Chauhan',
    role: 'Founder, Holly Zolly',
    service: 'E-Commerce Platform',
    metric: '220% Sales Growth',
    text: 'Kevalon built a powerful e-commerce platform that made online shopping smooth and reliable for our customers. The improved checkout speed, secure payments, and user-friendly interface helped us significantly increase sales and customer satisfaction.',
  },
  {
    id: 3,
    name: 'Dipen Shah',
    role: 'CEO, Grivafin Insurance Solutions',
    service: 'Mobile Banking & App',
    metric: '4.9★ Store Rating',
    text: 'The mobile application developed by Kevalon is fast, intuitive, and highly secure. Their team delivered a polished product with an excellent user experience, making it easier for our customers to manage policies anytime.',
  },
  {
    id: 4,
    name: 'Jagdish Patel',
    role: 'Founder, Chamunda Gau Ras Bhandhar',
    service: 'Social Media & Growth',
    metric: '65% Engagement Boost',
    text: "Kevalon's digital marketing and custom technical systems significantly increased our brand visibility and customer engagement. Their creative campaigns and targeted architecture helped us reach thousands of new customers.",
  },
];

export default function Home() {
  const [backendStatus, setBackendStatus] = useState({
    checked: false,
    online: false,
    message: '',
  });

  const [activeTab, setActiveTab] = useState('web');

  useEffect(() => {
    api
      .get('/health')
      .then((data) => {
        setBackendStatus({
          checked: true,
          online: true,
          message: data.message || 'Connected to Kevalon Core API',
        });
      })
      .catch(() => {
        setBackendStatus({
          checked: true,
          online: false,
          message: 'Backend server offline',
        });
      });
  }, []);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* 1. ASYMMETRIC HERO SECTION WITH SMOOTH ANIMATIONS */}
      <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E6F6F8] border border-[#0A8FB6]/30 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#0A8FB6] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#034665]">
                Ahmedabad's Premier IT & Software Engineering Firm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[64px] text-[#034665] tracking-tight leading-[1.12]"
            >
              Custom Web, Mobile App & AI Systems Built For{' '}
              <span className="kevalon-gradient-text italic font-black">
                Ambitious Businesses.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed"
            >
              We engineer enterprise-grade web applications, cross-platform mobile apps, cloud ERPs, and AI automation that empower founders to outpace competition and scale revenue.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="kevalon-btn-primary !px-7 !py-3.5 text-sm uppercase tracking-wider font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold text-[#034665] bg-white border border-slate-300 hover:border-[#0A8FB6] hover:bg-[#F0F8FA] transition-all shadow-xs"
                >
                  View Portfolio
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="https://wa.link/a02fdn"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-[#15803d] bg-[#f0fdf4] border border-[#bbf7d0] hover:bg-[#dcfce7] transition-all shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 text-[#16a34a]" />
                  <span>WhatsApp Us</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Live Gateway Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex items-center gap-3 text-xs text-slate-500"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
                <span className={`w-2 h-2 rounded-full ${backendStatus.online ? 'bg-emerald-500 animate-ping' : 'bg-amber-400'}`} />
                <span className="font-medium text-slate-700">API Status:</span>
                <span className={`font-semibold ${backendStatus.online ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {backendStatus.checked
                    ? backendStatus.online
                      ? 'Live Gateway Connected (Node.js & MongoDB)'
                      : 'Connecting...'
                    : 'Verifying Gateway...'}
                </span>
              </div>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span className="hidden sm:inline text-slate-500">Ahmedabad, Gujarat</span>
            </motion.div>

            {/* Metric Strip */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
            >
              {[
                { val: '50+', lbl: 'Delivered Projects' },
                { val: '98%', lbl: 'Client Satisfaction' },
                { val: '10+', lbl: 'IT Capabilities' },
                { val: '24/7', lbl: 'Active SLA Support' },
              ].map((m, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, borderColor: 'rgba(10, 143, 182, 0.4)' }}
                  transition={{ duration: 0.2 }}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs cursor-default"
                >
                  <div className="font-heading font-extrabold text-2xl text-[#034665]">
                    {m.val}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                    {m.lbl}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Floating Interactive Tech Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="light-card p-6 sm:p-7 relative overflow-hidden bg-white border-2 border-slate-200/90 shadow-xl"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#034665] via-[#0A8FB6] to-[#61BBC5]" />

              {/* Terminal-like Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono font-bold text-slate-500 ml-2">
                    kevalon-stack-v2.6
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#0A8FB6] bg-[#E6F6F8] px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FB6] animate-pulse" />
                  Production Ready
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="mt-4 flex gap-1.5 p-1 bg-slate-100 rounded-xl relative">
                {[
                  { id: 'web', label: 'Web Platform' },
                  { id: 'mobile', label: 'Mobile Apps' },
                  { id: 'ai', label: 'AI & Cloud' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex-1 py-1.5 text-xs font-bold rounded-lg transition-all z-10 ${
                      activeTab === tab.id
                        ? 'text-[#034665]'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabBadge"
                        className="absolute inset-0 bg-white rounded-lg shadow-xs -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Animated Tab Content */}
              <div className="mt-5 min-h-[190px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'web' && (
                    <motion.div
                      key="web"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="flex items-start justify-between p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                        <div>
                          <div className="text-xs font-bold text-[#034665]">Frontend Engine</div>
                          <div className="text-[11px] text-slate-500">React 19 • Next.js • Tailwind CSS</div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          0.4s FCP
                        </span>
                      </div>

                      <div className="flex items-start justify-between p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                        <div>
                          <div className="text-xs font-bold text-[#034665]">Backend & APIs</div>
                          <div className="text-[11px] text-slate-500">Node.js • Express • RESTful • GraphQL</div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          99.98% SLA
                        </span>
                      </div>

                      <div className="flex items-start justify-between p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                        <div>
                          <div className="text-xs font-bold text-[#034665]">Database Tier</div>
                          <div className="text-[11px] text-slate-500">MongoDB • PostgreSQL • Redis Cache</div>
                        </div>
                        <span className="text-[10px] font-mono text-[#0A8FB6] font-bold bg-[#E6F6F8] px-2 py-0.5 rounded">
                          Encrypted
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'mobile' && (
                    <motion.div
                      key="mobile"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="flex items-start justify-between p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                        <div>
                          <div className="text-xs font-bold text-[#034665]">Cross-Platform SDK</div>
                          <div className="text-[11px] text-slate-500">Flutter • React Native (iOS & Android)</div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          60 FPS
                        </span>
                      </div>

                      <div className="flex items-start justify-between p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                        <div>
                          <div className="text-xs font-bold text-[#034665]">Offline Sync & Data</div>
                          <div className="text-[11px] text-slate-500">SQLite • WatermelonDB • AES-256 Storage</div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          Zero-Loss
                        </span>
                      </div>

                      <div className="flex items-start justify-between p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                        <div>
                          <div className="text-xs font-bold text-[#034665]">Store Deployments</div>
                          <div className="text-[11px] text-slate-500">Apple App Store & Google Play Store Publishing</div>
                        </div>
                        <span className="text-[10px] font-mono text-[#0A8FB6] font-bold bg-[#E6F6F8] px-2 py-0.5 rounded">
                          Automated
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'ai' && (
                    <motion.div
                      key="ai"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="flex items-start justify-between p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                        <div>
                          <div className="text-xs font-bold text-[#034665]">AI Model Integration</div>
                          <div className="text-[11px] text-slate-500">OpenAI • Gemini • Claude • LangChain</div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          High Speed
                        </span>
                      </div>

                      <div className="flex items-start justify-between p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                        <div>
                          <div className="text-xs font-bold text-[#034665]">Cloud Hosting & CI/CD</div>
                          <div className="text-[11px] text-slate-500">AWS • Docker Containers • Nginx • Cloudflare</div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          Auto-Scale
                        </span>
                      </div>

                      <div className="flex items-start justify-between p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                        <div>
                          <div className="text-xs font-bold text-[#034665]">Security Audits</div>
                          <div className="text-[11px] text-slate-500">SSL/TLS • JWT Auth • Rate Limiting • OWASP</div>
                        </div>
                        <span className="text-[10px] font-mono text-[#0A8FB6] font-bold bg-[#E6F6F8] px-2 py-0.5 rounded">
                          Hardened
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Card Footer Feature Pill */}
                <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-[#034665] to-[#0A8FB6] text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#61BBC5]" />
                    <span className="text-xs font-semibold">100% Code & IP Ownership Transferred</span>
                  </div>
                  <Link
                    to="/contact"
                    className="text-[11px] font-bold uppercase tracking-wider text-[#E6F6F8] hover:text-white flex items-center gap-1"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. DIVERSIFIED BENTO-GRID CORE CAPABILITIES WITH SCROLL REVEAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] border border-[#0A8FB6]/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FB6]" />
            What We Deliver
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#034665] tracking-tight">
            Comprehensive <span className="kevalon-gradient-text">Engineering Services</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            From single-page web platforms to complex enterprise ERPs and AI automation, engineered for maximum performance.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Tile 1: Hero Large Web Development Card (Spans 8 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 light-card p-8 relative overflow-hidden bg-white border border-slate-200 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-shadow"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A8FB6] to-[#034665]" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-[#E6F6F8] border border-[#0A8FB6]/20 flex items-center justify-center text-[#0A8FB6] group-hover:bg-[#0A8FB6] group-hover:text-white transition-colors"
                >
                  <Code2 className="w-6 h-6" />
                </motion.div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A8FB6] bg-[#0A8FB6]/10 px-3 py-1 rounded-full">
                  Flagship Capability
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#034665] group-hover:text-[#0A8FB6] transition-colors">
                Custom Web Application Development
              </h3>
              <p className="text-sm font-semibold text-[#0A8FB6] uppercase tracking-wider mt-1 mb-3">
                Enterprise-grade reactive platforms & high-concurrency portals
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                We engineer scalable, secure, and lightning-fast web applications with modern architectures (React, Next.js, Node.js, Express, MongoDB). Designed to handle millions of requests with sub-second response times.
              </p>

              {/* Specific Value Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Single-Page Apps (SPA) with React & Next.js</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>High-concurrency Node.js REST & GraphQL APIs</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Optimized MongoDB schemas & query caching</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Enterprise authentication & RBAC roles</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'MongoDB', 'Docker'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                to="/services/web-application-development"
                className="inline-flex items-center gap-1 text-sm font-bold text-[#034665] hover:text-[#0A8FB6] transition-colors"
              >
                <span>Explore Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Tile 2: Mobile App Development (Spans 4 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 light-card p-7 relative overflow-hidden bg-white border border-slate-200 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-shadow"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#034665] to-[#0A8FB6]" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-[#E6F6F8] border border-[#0A8FB6]/20 flex items-center justify-center text-[#0A8FB6] group-hover:bg-[#0A8FB6] group-hover:text-white transition-colors"
                >
                  <Smartphone className="w-5 h-5" />
                </motion.div>
                <span className="text-xs font-mono font-bold text-slate-400">02</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#034665] group-hover:text-[#0A8FB6] transition-colors">
                Mobile App Development
              </h3>
              <p className="text-xs font-bold text-[#0A8FB6] uppercase tracking-wider mt-1 mb-2">
                iOS & Android Native Performance
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                High-performance native and cross-platform mobile apps built with Flutter and React Native. Fluid 60fps animations, offline-first sync, and push notifications.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-600">
                <div className="font-semibold text-slate-800">Publishing Guaranteed:</div>
                <div>• Apple App Store Guidelines Compliant</div>
                <div>• Google Play Store Testing & Approval</div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Flutter • React Native</span>
              <Link
                to="/services/mobile-application-development"
                className="text-xs font-bold text-[#0A8FB6] hover:text-[#034665] flex items-center gap-1"
              >
                <span>View</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Tile 3: AI & Intelligent Automation (Spans 4 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 light-card p-7 relative overflow-hidden bg-white border border-slate-200 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-[#E6F6F8] border border-[#0A8FB6]/20 flex items-center justify-center text-[#0A8FB6] group-hover:bg-[#0A8FB6] group-hover:text-white transition-colors"
                >
                  <Cpu className="w-5 h-5" />
                </motion.div>
                <span className="text-xs font-mono font-bold text-slate-400">03</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#034665] group-hover:text-[#0A8FB6] transition-colors">
                AI & Machine Learning
              </h3>
              <p className="text-xs font-bold text-[#0A8FB6] uppercase tracking-wider mt-1 mb-2">
                Automated Workflows & LLMs
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Empower your business with custom LLM integrations, retrieval-augmented generation (RAG), intelligent customer bots, and predictive operational analytics.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">OpenAI • Gemini • Python</span>
              <Link
                to="/services/ai-ml"
                className="text-xs font-bold text-[#0A8FB6] hover:text-[#034665] flex items-center gap-1"
              >
                <span>View</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Tile 4: Enterprise ERP & CRM Systems (Spans 4 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 light-card p-7 relative overflow-hidden bg-white border border-slate-200 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-[#E6F6F8] border border-[#0A8FB6]/20 flex items-center justify-center text-[#0A8FB6] group-hover:bg-[#0A8FB6] group-hover:text-white transition-colors"
                >
                  <Database className="w-5 h-5" />
                </motion.div>
                <span className="text-xs font-mono font-bold text-slate-400">04</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#034665] group-hover:text-[#0A8FB6] transition-colors">
                Web ERP & CRM Systems
              </h3>
              <p className="text-xs font-bold text-[#0A8FB6] uppercase tracking-wider mt-1 mb-2">
                Operational Efficiency & Sync
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Connect your inventory, invoicing, employee attendance, sales funnels, and executive BI dashboards into a single cohesive control center.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Custom Modules • Analytics</span>
              <Link
                to="/services/web-erp-development"
                className="text-xs font-bold text-[#0A8FB6] hover:text-[#034665] flex items-center gap-1"
              >
                <span>View</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Tile 5: Cloud DevOps & APIs (Spans 4 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-4 light-card p-7 relative overflow-hidden bg-white border border-slate-200 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-[#E6F6F8] border border-[#0A8FB6]/20 flex items-center justify-center text-[#0A8FB6] group-hover:bg-[#0A8FB6] group-hover:text-white transition-colors"
                >
                  <Plug className="w-5 h-5" />
                </motion.div>
                <span className="text-xs font-mono font-bold text-slate-400">05</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#034665] group-hover:text-[#0A8FB6] transition-colors">
                API & Cloud Infrastructure
              </h3>
              <p className="text-xs font-bold text-[#0A8FB6] uppercase tracking-wider mt-1 mb-2">
                Microservices & CI/CD Pipelines
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                High-throughput RESTful & GraphQL microservices with Docker containerization, AWS hosting, Cloudflare caching, and automated deployment pipelines.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">AWS • Docker • CI/CD</span>
              <Link
                to="/services/api-development"
                className="text-xs font-bold text-[#0A8FB6] hover:text-[#034665] flex items-center gap-1"
              >
                <span>View</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-slate-300 text-[#034665] text-xs font-bold uppercase tracking-wider hover:border-[#0A8FB6] hover:bg-[#F0F8FA] transition-all shadow-sm"
            >
              <span>Explore All 9 Capabilities & Tech Stacks</span>
              <ArrowRight className="w-4 h-4 text-[#0A8FB6]" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. STEPPED ROADMAP PROCESS WITH STAGGERED ENTRANCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] border border-[#0A8FB6]/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FB6]" />
            How We Work
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#034665] tracking-tight">
            Our 7-Step <span className="kevalon-gradient-text">Engineering Lifecycle</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            A battle-tested agile methodology from requirements gathering to live release and proactive SLA maintenance.
          </p>
        </motion.div>

        {/* Numbered Stepper Path */}
        <div className="space-y-4">
          {processSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ x: 6, borderColor: 'rgba(10, 143, 182, 0.5)' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="light-card p-5 sm:p-6 bg-white border border-slate-200/90 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 transition-colors shadow-xs"
              >
                {/* Number & Icon */}
                <div className="flex items-center gap-4 min-w-[280px]">
                  <div className="font-heading font-black text-3xl sm:text-4xl text-[#0A8FB6]/80 w-12">
                    {s.num}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-[#E6F6F8] border border-[#0A8FB6]/20 flex items-center justify-center text-[#0A8FB6] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#034665] leading-tight">
                      {s.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-[#0A8FB6] uppercase tracking-wider">
                      {s.tag}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
                  {s.desc}
                </p>

                {/* Deliverable Badge */}
                <div className="shrink-0 w-full lg:w-auto text-left lg:text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-[#034665] border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{s.deliverable}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE KEVALON MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="light-card p-8 sm:p-12 bg-white border border-slate-200 shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Conviction Statement */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6]">
                Why Ambitious Brands Choose Us
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#034665] leading-tight">
                Not Just Another Agency.{' '}
                <span className="kevalon-gradient-text">Your In-House Tech Partner.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Most agencies outsource or hand off your code to junior interns. At Kevalon Technology, our in-house engineering team in Ahmedabad works directly with you, delivering enterprise-grade quality with full transparency.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    title: 'Direct Senior Developer Access',
                    desc: 'No lost-in-translation middlemen. Speak directly to the software architect writing your code.',
                  },
                  {
                    title: '100% Intellectual Property Ownership',
                    desc: 'All source code, design systems, and database schemas are transferred to you with zero lock-in.',
                  },
                  {
                    title: 'Solaris Business Hub Headquarters',
                    desc: 'A permanent physical office in Ahmedabad where you can walk in and meet our engineers anytime.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#034665]">{item.title}</div>
                      <div className="text-xs text-slate-500 leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Key Commitments Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Zap,
                  title: 'Sub-Second Speed',
                  desc: 'We optimize every database query, image asset, and bundle size to ensure Google Core Web Vitals score 90+.',
                  color: 'text-[#0A8FB6]',
                },
                {
                  icon: Lock,
                  title: 'Enterprise Security',
                  desc: 'OWASP-compliant code audits, JWT token encryption, rate limiting, and zero-trust cloud configuration.',
                  color: 'text-[#034665]',
                },
                {
                  icon: Building2,
                  title: 'Scalable Foundation',
                  desc: 'Engineered to scale from your first 1,000 customers to over 1,000,000 users without architecture rewrites.',
                  color: 'text-[#0A8FB6]',
                },
                {
                  icon: Award,
                  title: 'Guaranteed Delivery',
                  desc: 'Milestone-based delivery timeline backed by transparent weekly sprint reviews and live staging links.',
                  color: 'text-[#034665]',
                },
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, borderColor: 'rgba(10, 143, 182, 0.4)' }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2 cursor-default shadow-xs"
                  >
                    <Icon className={`w-6 h-6 ${card.color}`} />
                    <h4 className="font-bold text-base text-[#034665]">{card.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. CLIENT REVIEWS & OUTCOMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] border border-[#0A8FB6]/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FB6]" />
            Client Reviews
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#034665] tracking-tight">
            Trusted by Founders &{' '}
            <span className="kevalon-gradient-text">Industry Leaders</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Verified feedback on our technical delivery, speed, and real-world business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="light-card p-7 sm:p-8 flex flex-col justify-between bg-white border border-slate-200 relative overflow-hidden shadow-xs hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#0A8FB6] px-3 py-1 rounded-full bg-[#E6F6F8] border border-[#0A8FB6]/20">
                    {t.metric}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#034665]">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
                <span className="text-xs font-semibold text-[#0A8FB6] bg-[#0A8FB6]/10 px-2.5 py-1 rounded-md">
                  {t.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. HIGH-IMPACT PRE-FOOTER CTA */}
      <section className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl [background:linear-gradient(135deg,#FFFFFF_0%,#F0F8FA_50%,#E6F6F8_100%)] border border-slate-200 shadow-xl text-center space-y-5"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6]">
            Get In Touch
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#034665] max-w-2xl mx-auto">
            Ready to turn your vision into high-performing software?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Book a direct architecture consultation with our engineering team at Solaris Business Hub, Ahmedabad.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="kevalon-btn-primary !px-8 !py-3.5 text-sm uppercase tracking-wider font-bold text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Schedule Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="tel:+919081012218"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#034665] text-sm font-bold border border-slate-300 hover:border-[#0A8FB6] shadow-xs"
              >
                <span>Call +91 90810 12218</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
