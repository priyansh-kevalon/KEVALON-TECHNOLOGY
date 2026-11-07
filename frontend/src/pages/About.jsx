import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Rocket,
  ShieldCheck,
  MessageSquareHeart,
  Zap,
  Users2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  Building,
  Award,
} from 'lucide-react';

const principles = [
  {
    icon: Rocket,
    title: 'Outcome-Driven Engineering',
    desc: 'Every solution we build is engineered to deliver measurable business outcomes: higher conversions, stronger SEO rankings, and exceptional user experiences that maximize your long-term ROI.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Scalable',
    desc: 'Our software solutions follow industry-best security practices and are architected to scale seamlessly as your business grows, protecting your data and users at every stage.',
  },
  {
    icon: MessageSquareHeart,
    title: 'Transparent Communication',
    desc: 'We keep you informed with regular progress updates, clear project timelines, and honest communication, so there are never any surprises throughout the development lifecycle.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    desc: 'Our agile workflows and dedicated full-time team enable us to deliver high-quality digital products faster, meeting your deadlines without ever cutting corners on quality.',
  },
  {
    icon: Users2,
    title: 'Full-Stack In-House Team',
    desc: 'From frontend UI and backend APIs to cloud deployment and database management, our in-house full-stack experts handle every layer of your project under one roof.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Partner',
    desc: "Our relationship doesn't end at launch. We provide ongoing maintenance, performance monitoring, and growth consulting to ensure your digital product keeps evolving with your business.",
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20 sm:space-y-24">
      {/* 1. HEADER & SPOTLIGHT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] border border-[#0A8FB6]/20">
            <span className="w-2 h-2 rounded-full bg-[#0A8FB6] animate-pulse" />
            <span>About Kevalon Technology</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#034665] tracking-tight leading-[1.14]">
            Driving Digital Innovation &{' '}
            <span className="kevalon-gradient-text">Business Growth.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A trusted IT and software development company delivering reliable and result-driven digital solutions, from web apps and mobile to SEO and custom enterprise software, built for ambitious businesses.
          </p>

          <div className="p-5 rounded-2xl border-l-4 border-[#0A8FB6] bg-[#F0F8FA] text-slate-700 text-sm sm:text-base italic leading-relaxed shadow-xs">
            “A passionate team of engineers, designers and strategists building enterprise-grade digital products. We deliver scalable, high-performance solutions that drive real business growth.”
          </div>

          <div className="flex flex-wrap gap-3.5 pt-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="kevalon-btn-primary !px-7 !py-3.5 text-sm uppercase tracking-wider font-bold text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-[#034665] bg-white border border-slate-300 hover:border-[#0A8FB6] hover:bg-[#F0F8FA] transition-all shadow-xs"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Brand Card Display */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="light-card relative overflow-hidden p-8 sm:p-9 bg-white border-2 border-slate-200/90 shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#034665] via-[#0A8FB6] to-[#61BBC5]" />

            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#034665] to-[#0A8FB6] flex items-center justify-center text-white shadow-sm">
                <Building className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#034665] bg-[#E6F6F8] border border-[#0A8FB6]/30 px-3 py-1 rounded-full flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0A8FB6]" />
                <span>Ahmedabad, India</span>
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-[#034665] mb-2">
              Kevalon Technology
            </h3>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-4">
              IT Consulting & Software Engineering
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Headquartered at <strong>913, Solaris Business Hub, Bhuyangdev, Ahmedabad</strong>, we operate with a dedicated in-house team of architects, developers, designers, and growth strategists serving domestic and international clients.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-5 border-t border-slate-100">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-2xl font-black font-heading text-[#034665]">50+</span>
                <span className="block text-[11px] font-semibold text-slate-500 uppercase mt-0.5">Projects Delivered</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-2xl font-black font-heading text-[#0A8FB6]">98%</span>
                <span className="block text-[11px] font-semibold text-slate-500 uppercase mt-0.5">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. 6 CORE PRINCIPLES */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] border border-[#0A8FB6]/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FB6]" />
            The Principles That Guide Us
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#034665] tracking-tight">
            What Sets <span className="kevalon-gradient-text">Kevalon Apart</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            The foundational commitments embedded into every line of code and customer interaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="light-card p-7 sm:p-8 flex flex-col justify-between bg-white border border-slate-200 group shadow-xs hover:shadow-lg transition-shadow"
              >
                <div>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-[#E6F6F8] border border-[#0A8FB6]/20 flex items-center justify-center text-[#0A8FB6] mb-5 group-hover:bg-[#0A8FB6] group-hover:text-white transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="font-bold text-xl text-[#034665] mb-2 group-hover:text-[#0A8FB6] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3. TEAM & CAREERS PROMPT BANNER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-12 rounded-3xl [background:linear-gradient(135deg,#FFFFFF_0%,#F0F8FA_50%,#E6F6F8_100%)] text-[#034665] border border-slate-200 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#034665]">
            Meet the people driving Kevalon forward.
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Explore our leadership team, our software developers, and career opportunities in Ahmedabad.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/team"
              className="kevalon-btn-primary !px-6 !py-3 text-xs uppercase tracking-wider font-bold text-white shadow-sm inline-block"
            >
              Our Team
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/careers"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-[#034665] text-xs font-bold uppercase tracking-wider border border-slate-300 hover:border-[#0A8FB6] hover:bg-[#F0F8FA] transition-all shadow-xs"
            >
              Join Kevalon
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
