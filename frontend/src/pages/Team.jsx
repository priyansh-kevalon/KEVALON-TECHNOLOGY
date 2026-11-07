import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Award, Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    name: 'Harsh Kothari',
    role: 'Founder & CEO',
    image: '/team/Harsh_Kothari.webp',
    initials: 'HK',
    tag: 'Leadership',
    bio: 'Visionary leader driving engineering excellence, enterprise partnerships, and full-stack digital transformation for global clients.',
    experience: 'Founder & Strategic Architect',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Vanshita Rathod',
    role: 'HR Manager',
    image: '/team/Vanshita_Rathod.webp',
    initials: 'VR',
    tag: 'Leadership',
    bio: 'Championing talent acquisition, company culture, employee growth, and seamless developer onboarding across all engineering divisions.',
    experience: 'People Operations & Culture',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Hetvi Pandya',
    role: 'MERN Stack Developer',
    image: '/team/Hetvi_Pandya.webp',
    initials: 'HP',
    tag: 'Developer',
    bio: 'Specializing in high-performance React frontends, scalable Node.js microservices, and complex MongoDB schema optimizations.',
    experience: 'Full Stack Engineering',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Vansh Patel',
    role: 'MERN Stack Developer',
    image: '/team/Vansh_Patel.webp',
    initials: 'VP',
    tag: 'Developer',
    bio: 'Building enterprise web portals, interactive real-time dashboards, and secure RESTful backend microservices.',
    experience: 'Full Stack Engineering',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Vrushali Panchal',
    role: 'MERN Stack Developer',
    image: '/team/Vrushali_Panchal.webp',
    initials: 'VP',
    tag: 'Developer',
    bio: 'Architecting scalable cloud databases, Express API controllers, and fluid reactive workflows for ambitious web platforms.',
    experience: 'Full Stack Engineering',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Tilak Soni',
    role: 'MERN Stack Developer',
    image: '/team/Tilak_Soni.webp',
    initials: 'TS',
    tag: 'Developer',
    bio: 'Crafting modern full-stack web solutions with clean code, test-driven validation, and agile sprint-based delivery.',
    experience: 'Full Stack Engineering',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Raval Prince Mahendrabhai',
    role: 'MERN Stack Developer - Intern',
    image: '/team/Raval_Prince_MahendraBhai.webp',
    initials: 'RP',
    tag: 'Developer',
    bio: 'Contributing to live web portals, frontend state management, API integration, and performance benchmarking.',
    experience: 'Web Development',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Ramlavat Surpalsinh',
    role: 'MERN Stack Developer',
    image: '/team/Ramlavat_Surpalsinh_Harendrasinh.webp',
    initials: 'RS',
    tag: 'Developer',
    bio: 'Developing robust full-stack features, third-party webhook integrations, secure JWT auth, and database tuning.',
    experience: 'Full Stack Engineering',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Vaghasiya Yash',
    role: 'Frontend Developer',
    image: '/team/VAGHASIYA_YASH_BHARATBHAI.webp',
    initials: 'VY',
    tag: 'Developer',
    bio: 'Translating complex Figma designs into pixel-perfect, accessible, and lightning-fast responsive React UI components.',
    experience: 'Frontend Engineering',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Kareliya Priyansh',
    role: 'Frontend Developer',
    image: '/team/KARELIYA_PRIYANSH_DEEPAKBHAI.webp',
    initials: 'KP',
    tag: 'Developer',
    bio: 'Focusing on intuitive user experiences, interactive web micro-animations, and mobile-first responsive architecture.',
    experience: 'Frontend Engineering',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Jeel Popat',
    role: 'Full Stack Developer',
    image: '/team/Jeel_Popat.webp',
    initials: 'JP',
    tag: 'Developer',
    bio: 'End-to-end software development from database modeling and server pipelines to seamless client interface design.',
    experience: 'Full Stack Engineering',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Meet Shah',
    role: 'Data Analyst',
    image: '/team/Meet_Shah.webp',
    initials: 'MS',
    tag: 'Developer',
    bio: 'Transforming raw system telemetry into actionable business intelligence, visual dashboards, and analytics pipelines.',
    experience: 'Data & Analytics',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Harsh Rajendra Uttekar',
    role: 'Python Developer - Intern',
    image: '/team/Harsh_Rajendra_Uttekar.webp',
    initials: 'HU',
    tag: 'Developer',
    bio: 'Developing automated Python scripts, data scraping pipelines, and intelligent machine learning proof-of-concepts.',
    experience: 'Python & AI Engineering',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Arpita Sangani',
    role: 'UI/UX Designer - Intern',
    image: '/team/Arpita_Sangani.webp',
    initials: 'AS',
    tag: 'Designer',
    bio: 'Designing user-friendly wireframes, comprehensive component design systems in Figma, and mobile app flows.',
    experience: 'Product & UI/UX Design',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Keyur Nayi',
    role: 'Graphic Designer',
    image: '/team/Keyur_Nayi.webp',
    initials: 'KN',
    tag: 'Designer',
    bio: 'Creating compelling brand identities, promotional collateral, digital assets, and high-impact vector artwork.',
    experience: 'Brand & Graphic Design',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Priya Chavda',
    role: 'Graphic Designer',
    image: '/team/Priya_Chavda.webp',
    initials: 'PC',
    tag: 'Designer',
    bio: 'Crafting creative marketing visuals, social media campaign content, and polished corporate communications.',
    experience: 'Visual Media Design',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Mohit Panchal',
    role: 'Graphic Designer',
    image: '/team/Mohit_Panchal.webp',
    initials: 'MP',
    tag: 'Designer',
    bio: 'Producing visual communication assets, UI iconography, digital advertisements, and brand storytelling visuals.',
    experience: 'Graphic & Media Design',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Bhavya Shah',
    role: 'Flutter Developer',
    image: '/team/Bhavya_Shah.webp',
    initials: 'BS',
    tag: 'Developer',
    bio: 'Engineering high-performance native and cross-platform mobile apps for iOS and Android with fluid 60fps animations.',
    experience: 'Mobile Engineering',
    location: 'Ahmedabad, India',
  },
  {
    name: 'Aangi Thakkar',
    role: 'AI/ML - Intern',
    image: '/team/Aangi_thakkar.webp',
    initials: 'AT',
    tag: 'Developer',
    bio: 'Researching generative AI architectures, LLM prompt engineering, automated workflows, and intelligent chat systems.',
    experience: 'AI & Data Science',
    location: 'Ahmedabad, India',
  },
];

const filterTags = ['All', 'Leadership', 'Developer', 'Designer'];

function BigEmployeeAvatar({ src, alt, initials, tag }) {
  const [hasError, setHasError] = useState(!src);

  return (
    <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-200/80 shadow-md group">
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#0A8FB6] to-[#034665] flex items-center justify-center text-white font-heading font-black text-6xl">
          {initials}
        </div>
      )}

      {/* Floating Department Badge on Image */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#034665] border border-slate-200 shadow-sm">
          {tag}
        </span>
      </div>

      {/* Subtle Bottom Vignette Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />

      {/* Quick Verified Badge */}
      <div className="absolute bottom-3 left-4 text-white text-xs font-semibold flex items-center gap-1.5 drop-shadow-sm">
        <CheckCircle2 className="w-4 h-4 text-[#61BBC5]" />
        <span>Kevalon Core Team</span>
      </div>
    </div>
  );
}

export default function Team() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered =
    activeTag === 'All'
      ? teamMembers
      : teamMembers.filter((m) => m.tag === activeTag);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-14 sm:space-y-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] border border-[#0A8FB6]/20">
          <span className="w-2 h-2 rounded-full bg-[#0A8FB6] animate-pulse" />
          <span>The People Behind Kevalon</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#034665] tracking-tight leading-tight">
          Meet Our Dedicated{' '}
          <span className="kevalon-gradient-text">Engineering Team</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          A passionate in-house team of architects, developers, designers, and strategists crafting world-class digital products from Solaris Business Hub, Ahmedabad.
        </p>

        <div className="pt-2 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#0A8FB6]" />
            19+ In-House Specialists
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#0A8FB6]" />
            Solaris Business Hub, Ahmedabad
          </span>
        </div>
      </motion.div>

      {/* Filter Tabs with Sliding Animation */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
              activeTag === tag
                ? 'text-white'
                : 'bg-white text-slate-600 hover:text-[#034665] border border-slate-200 hover:border-[#0A8FB6] shadow-2xs'
            }`}
          >
            {activeTag === tag && (
              <motion.div
                layoutId="activeTeamPill"
                className="absolute inset-0 kevalon-btn-primary rounded-full -z-10 shadow-sm"
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              />
            )}
            <span>{tag}</span>
          </button>
        ))}
      </div>

      {/* Spacious 3-Column Large Team Cards Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        <AnimatePresence>
          {filtered.map((member, idx) => (
            <motion.div
              layout
              key={member.name}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="light-card relative overflow-hidden p-6 sm:p-7 flex flex-col justify-between bg-white border border-slate-200 hover:border-[#0A8FB6]/50 shadow-md hover:shadow-2xl transition-all rounded-3xl"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#034665] via-[#0A8FB6] to-[#61BBC5]" />

              <div>
                {/* Large Portrait Image Frame */}
                <BigEmployeeAvatar
                  src={member.image}
                  alt={member.name}
                  initials={member.initials}
                  tag={member.tag}
                />

                {/* Content Area with Enlarged Typography */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0A8FB6]">
                      {member.experience}
                    </span>
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {member.location}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-[26px] text-[#034665] leading-tight group-hover:text-[#0A8FB6] transition-colors">
                    {member.name}
                  </h3>

                  <div className="text-sm font-bold text-[#0A8FB6] uppercase tracking-wider">
                    {member.role}
                  </div>

                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer Strip */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-[#034665]">
                  <Briefcase className="w-3.5 h-3.5 text-[#0A8FB6]" />
                  Full-Time In-House
                </span>
                <span className="text-[#0A8FB6] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Verified Member →
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Join the Team CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-12 rounded-3xl [background:linear-gradient(135deg,#FFFFFF_0%,#F0F8FA_50%,#E6F6F8_100%)] text-[#034665] border border-slate-200 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#034665]">
            Want to build extraordinary technology with us?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
            We are hiring full-stack developers, mobile app engineers, and tech interns in Ahmedabad.
          </p>
        </div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/careers"
            className="kevalon-btn-primary !px-8 !py-4 text-sm font-bold uppercase tracking-wider text-white inline-flex items-center gap-2 shadow-sm shrink-0"
          >
            <span>View Open Positions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
