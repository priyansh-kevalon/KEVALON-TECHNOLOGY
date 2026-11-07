import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Award, Briefcase, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    name: 'Harsh Kothari',
    role: 'Founder & CEO',
    image: '/team/Harsh_Kothari.webp',
    initials: 'HK',
    tag: 'Leadership',
    bio: 'Visionary leader driving engineering excellence, enterprise partnerships, and digital transformation.',
  },
  {
    name: 'Vanshita Rathod',
    role: 'HR Manager',
    image: '/team/Vanshita_Rathod.webp',
    initials: 'VR',
    tag: 'Leadership',
    bio: 'Championing talent acquisition, company culture, employee wellness, and developer onboarding.',
  },
  {
    name: 'Hetvi Pandya',
    role: 'MERN Stack Developer',
    image: '/team/Hetvi_Pandya.webp',
    initials: 'HP',
    tag: 'Developer',
    bio: 'Specializing in reactive React frontends, high-speed Node.js microservices, and database modeling.',
  },
  {
    name: 'Vansh Patel',
    role: 'MERN Stack Developer',
    image: '/team/Vansh_Patel.webp',
    initials: 'VP',
    tag: 'Developer',
    bio: 'Building enterprise web applications, real-time dashboards, and secure RESTful APIs.',
  },
  {
    name: 'Vrushali Panchal',
    role: 'MERN Stack Developer',
    image: '/team/Vrushali_Panchal.webp',
    initials: 'VP',
    tag: 'Developer',
    bio: 'Architecting scalable MongoDB databases, Express controllers, and responsive user flows.',
  },
  {
    name: 'Tilak Soni',
    role: 'MERN Stack Developer',
    image: '/team/Tilak_Soni.webp',
    initials: 'TS',
    tag: 'Developer',
    bio: 'Crafting modern full-stack web solutions with clean code, unit testing, and agile sprints.',
  },
  {
    name: 'Raval Prince Mahendrabhai',
    role: 'MERN Stack Developer - Intern',
    image: '/team/Raval_Prince_MahendraBhai.webp',
    initials: 'RP',
    tag: 'Developer',
    bio: 'Contributing to live web portals, API integration, and front-end performance tuning.',
  },
  {
    name: 'Ramlavat Surpalsinh',
    role: 'MERN Stack Developer',
    image: '/team/Ramlavat_Surpalsinh_Harendrasinh.webp',
    initials: 'RS',
    tag: 'Developer',
    bio: 'Developing robust full-stack features, third-party webhook integrations, and authentication.',
  },
  {
    name: 'Vaghasiya Yash',
    role: 'Frontend Developer',
    image: '/team/VAGHASIYA_YASH_BHARATBHAI.webp',
    initials: 'VY',
    tag: 'Developer',
    bio: 'Translating Figma designs into pixel-perfect, accessible, and high-performance React UI components.',
  },
  {
    name: 'Kareliya Priyansh',
    role: 'Frontend Developer',
    image: '/team/KARELIYA_PRIYANSH_DEEPAKBHAI.webp',
    initials: 'KP',
    tag: 'Developer',
    bio: 'Focusing on intuitive user experiences, interactive animations, and mobile-first layouts.',
  },
  {
    name: 'Jeel Popat',
    role: 'Full Stack Developer',
    image: '/team/Jeel_Popat.webp',
    initials: 'JP',
    tag: 'Developer',
    bio: 'Full-lifecycle software engineering from server architecture to seamless client interfaces.',
  },
  {
    name: 'Meet Shah',
    role: 'Data Analyst',
    image: '/team/Meet_Shah.webp',
    initials: 'MS',
    tag: 'Developer',
    bio: 'Transforming raw telemetry into actionable business intelligence dashboards and analytics models.',
  },
  {
    name: 'Harsh Rajendra Uttekar',
    role: 'Python Developer - Intern',
    image: '/team/Harsh_Rajendra_Uttekar.webp',
    initials: 'HU',
    tag: 'Developer',
    bio: 'Developing Python automation scripts, data pipelines, and machine learning proof-of-concepts.',
  },
  {
    name: 'Arpita Sangani',
    role: 'UI/UX Designer - Intern',
    image: '/team/Arpita_Sangani.webp',
    initials: 'AS',
    tag: 'Designer',
    bio: 'Designing user journeys, wireframes, component design systems, and mobile app interfaces.',
  },
  {
    name: 'Keyur Nayi',
    role: 'Graphic Designer',
    image: '/team/Keyur_Nayi.webp',
    initials: 'KN',
    tag: 'Designer',
    bio: 'Creating compelling brand identities, digital assets, social media visuals, and vector graphics.',
  },
  {
    name: 'Priya Chavda',
    role: 'Graphic Designer',
    image: '/team/Priya_Chavda.webp',
    initials: 'PC',
    tag: 'Designer',
    bio: 'Crafting creative marketing visuals, product packaging mockups, and corporate media.',
  },
  {
    name: 'Mohit Panchal',
    role: 'Graphic Designer',
    image: '/team/Mohit_Panchal.webp',
    initials: 'MP',
    tag: 'Designer',
    bio: 'Producing visual communication assets, UI illustrations, and brand promotional material.',
  },
  {
    name: 'Bhavya Shah',
    role: 'Flutter Developer',
    image: '/team/Bhavya_Shah.webp',
    initials: 'BS',
    tag: 'Developer',
    bio: 'Engineering cross-platform mobile apps for iOS and Android with offline-first synchronization.',
  },
  {
    name: 'Aangi Thakkar',
    role: 'AI/ML - Intern',
    image: '/team/Aangi_thakkar.webp',
    initials: 'AT',
    tag: 'Developer',
    bio: 'Researching generative AI integrations, LLM prompt engineering, and intelligent chatbot systems.',
  },
];

const filterTags = ['All', 'Leadership', 'Developer', 'Designer'];

function EmployeeAvatar({ src, alt, initials }) {
  const [hasError, setHasError] = useState(!src);

  if (!hasError && src) {
    return (
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-2xl overflow-hidden mb-4 p-1 bg-gradient-to-br from-[#0A8FB6]/30 via-slate-100 to-[#034665]/20 shadow-md group-hover:scale-105 transition-transform duration-300">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover object-top rounded-xl bg-slate-100"
        />
      </div>
    );
  }

  return (
    <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-2xl bg-gradient-to-br from-[#0A8FB6] to-[#034665] p-1 shadow-md mb-4 group-hover:scale-105 transition-transform duration-300">
      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center text-[#034665] font-heading font-bold text-3xl group-hover:text-[#0A8FB6] transition-colors">
        {initials}
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] border border-[#0A8FB6]/20">
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

        <div className="pt-2 flex items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#0A8FB6]" />
            19+ In-House Specialists
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#0A8FB6]" />
            Ahmedabad Headquarters
          </span>
        </div>
      </motion.div>

      {/* Filter Tabs with Sliding Animation */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
              activeTag === tag
                ? 'text-white'
                : 'bg-white text-slate-600 hover:text-[#034665] border border-slate-200 hover:border-[#0A8FB6]'
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

      {/* Team Grid with High-Res Employee Photos */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
        <AnimatePresence>
          {filtered.map((member, idx) => (
            <motion.div
              layout
              key={member.name}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="light-card relative overflow-hidden p-6 text-center group flex flex-col items-center justify-between bg-white border border-slate-200 hover:border-[#0A8FB6]/50 shadow-xs hover:shadow-xl transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#034665] to-[#0A8FB6]" />

              {/* High-Resolution Portrait Employee Photo */}
              <EmployeeAvatar
                src={member.image}
                alt={member.name}
                initials={member.initials}
              />

              <div className="w-full">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#E6F6F8] text-[#0A8FB6] border border-[#0A8FB6]/20 inline-block mb-2">
                  {member.tag}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#034665] leading-snug mb-1 group-hover:text-[#0A8FB6] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#0A8FB6] uppercase tracking-wider mb-2">
                  {member.role}
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                  {member.bio}
                </p>
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
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            We are hiring full-stack developers, mobile app engineers, and tech interns in Ahmedabad.
          </p>
        </div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/careers"
            className="kevalon-btn-primary !px-7 !py-3.5 text-sm font-bold uppercase tracking-wider text-white inline-flex items-center gap-2 shadow-sm shrink-0"
          >
            <span>View Open Positions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
