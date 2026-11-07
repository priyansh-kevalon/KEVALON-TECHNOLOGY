import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  { name: 'Harsh Kothari', role: 'Founder & CEO', initials: 'HK', tag: 'Leadership' },
  { name: 'Vanshita Rathod', role: 'HR Manager', initials: 'VR', tag: 'Leadership' },
  { name: 'Hetvi Pandya', role: 'MERN Stack Developer', initials: 'HP', tag: 'Developer' },
  { name: 'Vansh Patel', role: 'MERN Stack Developer', initials: 'VP', tag: 'Developer' },
  { name: 'Vrushali Panchal', role: 'MERN Stack Developer', initials: 'VP', tag: 'Developer' },
  { name: 'Tilak Soni', role: 'MERN Stack Developer', initials: 'TS', tag: 'Developer' },
  { name: 'Raval Prince Mahendrabhai', role: 'MERN Stack Developer - Intern', initials: 'RP', tag: 'Developer' },
  { name: 'Ramlavat Surpalsinh', role: 'MERN Stack Developer', initials: 'RS', tag: 'Developer' },
  { name: 'Vaghasiya Yash', role: 'Frontend Developer', initials: 'VY', tag: 'Developer' },
  { name: 'Kareliya Priyansh', role: 'Frontend Developer', initials: 'KP', tag: 'Developer' },
  { name: 'Jeel Popat', role: 'Full Stack Developer', initials: 'JP', tag: 'Developer' },
  { name: 'Meet Shah', role: 'Data Analyst', initials: 'MS', tag: 'Developer' },
  { name: 'Harsh Rajendra Uttekar', role: 'Python Developer - Intern', initials: 'HU', tag: 'Developer' },
  { name: 'Arpita Sangani', role: 'UI/UX Designer - Intern', initials: 'AS', tag: 'Designer' },
  { name: 'Keyur Nayi', role: 'Graphic Designer', initials: 'KN', tag: 'Designer' },
  { name: 'Priya Chavda', role: 'Graphic Designer', initials: 'PC', tag: 'Designer' },
  { name: 'Mohit Panchal', role: 'Graphic Designer', initials: 'MP', tag: 'Designer' },
  { name: 'Bhavya Shah', role: 'Flutter Developer', initials: 'BS', tag: 'Developer' },
  { name: 'Aangi Thakkar', role: 'AI/ML - Intern', initials: 'AT', tag: 'Developer' },
];

const filterTags = ['All', 'Leadership', 'Developer', 'Designer'];

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
          A passionate in-house team of architects, developers, designers, and strategists crafting world-class digital products from Ahmedabad, India.
        </p>
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

      {/* Team Grid with Animated Layout */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

              {/* Initials Avatar Box */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.08 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0A8FB6] to-[#034665] p-0.5 shadow-sm mb-4 transition-transform duration-300"
              >
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#034665] font-heading font-bold text-2xl group-hover:text-[#0A8FB6] transition-colors">
                  {member.initials}
                </div>
              </motion.div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#E6F6F8] text-[#0A8FB6] border border-[#0A8FB6]/20 inline-block mb-2">
                  {member.tag}
                </span>
                <h3 className="font-bold text-lg text-[#034665] leading-snug mb-1 group-hover:text-[#0A8FB6] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {member.role}
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
