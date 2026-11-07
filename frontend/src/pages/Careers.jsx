import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Award,
  Users2,
  TrendingUp,
  Cpu,
  X,
  User,
  Mail,
  Phone,
  Linkedin,
  Globe,
  UploadCloud,
  Send,
  AlertCircle,
  FileText,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../services/api';

const fullTimeJobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer (MERN)',
    department: 'Engineering',
    type: 'Full-Time',
    experience: '3 - 5 Years',
    location: 'Ahmedabad (On-site / Hybrid)',
    desc: 'Lead the architecture and development of scalable React and Node.js applications, microservices, and enterprise databases.',
    skills: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Docker'],
  },
  {
    id: 2,
    title: 'React Native / Flutter Developer',
    department: 'Mobile Engineering',
    type: 'Full-Time',
    experience: '2 - 4 Years',
    location: 'Ahmedabad',
    desc: 'Engineer fluid native and cross-platform mobile apps for iOS and Android with offline-first synchronization.',
    skills: ['React Native', 'Flutter', 'Redux', 'REST APIs', 'App Store / Play Store'],
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-Time',
    experience: '2 - 4 Years',
    location: 'Ahmedabad',
    desc: 'Design beautiful, intuitive interfaces, design systems in Figma, and interactive user flows for modern web and mobile apps.',
    skills: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    type: 'Full-Time',
    experience: '2 - 5 Years',
    location: 'Ahmedabad',
    desc: 'Automate zero-downtime CI/CD deployment pipelines, manage AWS/GCP cloud environments, and monitor system security.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Linux', 'Nginx'],
  },
  {
    id: 5,
    title: 'Digital Marketing (SMM / SEO)',
    department: 'Growth & Marketing',
    type: 'Full-Time',
    experience: '1 - 3 Years',
    location: 'Ahmedabad',
    desc: 'Execute data-driven organic SEO campaigns, social media management, Google Ads, and conversion rate optimization.',
    skills: ['Technical SEO', 'Google Ads', 'Content Strategy', 'Social Media', 'Analytics'],
  },
  {
    id: 6,
    title: 'Cyber Security Specialist',
    department: 'Security & QA',
    type: 'Full-Time',
    experience: '2 - 4 Years',
    location: 'Ahmedabad',
    desc: 'Conduct vulnerability assessments, OWASP penetration testing, code security audits, and infrastructure hardening.',
    skills: ['Penetration Testing', 'OWASP', 'Network Security', 'Code Auditing'],
  },
];

const internshipJobs = [
  {
    id: 7,
    title: 'Web Development - Intern',
    department: 'Internship Program',
    type: 'Internship (3 - 6 Months)',
    location: 'Ahmedabad (Office)',
    desc: 'Hands-on practical training on live client projects with daily code reviews and 1-on-1 mentorship in React and Node.js.',
    skills: ['HTML/CSS/JS', 'React Basics', 'Node.js Basics', 'Git'],
  },
  {
    id: 8,
    title: 'Intern - Data Analytics & AI/ML',
    department: 'Internship Program',
    type: 'Internship (3 - 6 Months)',
    location: 'Ahmedabad (Office)',
    desc: 'Explore real datasets, build predictive models in Python, and learn modern data visualization and machine learning workflows.',
    skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning Basics', 'SQL'],
  },
  {
    id: 9,
    title: 'Intern - Digital Marketing (SEO)',
    department: 'Internship Program',
    type: 'Internship (3 - 6 Months)',
    location: 'Ahmedabad (Office)',
    desc: 'Learn on-page SEO, link-building strategies, keyword research tools, and Google Analytics on active production web projects.',
    skills: ['SEO Fundamentals', 'Content Writing', 'Keyword Research'],
  },
];

const hiringSteps = [
  { step: '01', title: 'Apply Online', desc: 'Submit your resume, GitHub/portfolio and tell us about your career aspirations.' },
  { step: '02', title: 'Initial Screening', desc: 'A quick 15-minute call with our HR team to discuss your background and culture fit.' },
  { step: '03', title: 'Technical Interview', desc: 'Deep dive into practical code, problem solving, and architectural understanding.' },
  { step: '04', title: 'Offer & Onboarding', desc: 'Receive your formal offer letter and join our collaborative engineering team in Ahmedabad.' },
];

const perks = [
  'Career Growth & Transparent Promotion Paths',
  'Continuous Learning & Certification Allowance',
  'Recognition & Annual Performance Bonuses',
  'Flexible Working Hours & Healthy Work-Life Balance',
  'Latest High-Spec Developer Workstations & Equipment',
  'Mentorship from Senior Full-Stack Architects',
];

const allRolesList = [
  ...fullTimeJobs.map((j) => j.title),
  ...internshipJobs.map((j) => j.title),
  'Other / Spontaneous Application',
];

export default function Careers() {
  const [activeTab, setActiveTab] = useState('full-time');

  // Application Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    portfolioUrl: '',
    roleApplied: '',
    resumeFileName: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const fileInputRef = useRef(null);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Open modal with preselected role
  const handleOpenApplyModal = (roleTitle = '') => {
    setFormData((prev) => ({
      ...prev,
      roleApplied: roleTitle || fullTimeJobs[0].title,
    }));
    setStatus({ submitting: false, success: false, error: null });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFormData((prev) => ({ ...prev, resumeFileName: file.name }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFormData((prev) => ({ ...prev, resumeFileName: file.name }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.roleApplied) {
      setStatus({ submitting: false, success: false, error: 'Please select a role to apply for.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      await api.post('/jobs/apply', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        linkedinUrl: formData.linkedinUrl,
        portfolioUrl: formData.portfolioUrl,
        roleApplied: formData.roleApplied,
        resumeFileName: formData.resumeFileName || selectedFile?.name || 'Resume_Attached.pdf',
      });

      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedinUrl: '',
        portfolioUrl: '',
        roleApplied: '',
        resumeFileName: '',
      });
      setSelectedFile(null);
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Could not submit application. Please email careers@kevalontechnology.in directly.',
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] border border-[#0A8FB6]/20">
          <span className="w-2 h-2 rounded-full bg-[#0A8FB6] animate-pulse" />
          <span>Careers at Kevalon Technology</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#034665] tracking-tight leading-tight">
          Build Your Future With{' '}
          <span className="kevalon-gradient-text">Our Team</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Join a culture of engineering excellence, continuous learning, and collaborative innovation headquartered at Solaris Business Hub, Ahmedabad.
        </p>
      </motion.div>

      {/* Perks Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="light-card p-8 sm:p-12 relative overflow-hidden bg-white border border-slate-200 shadow-md"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#034665] via-[#0A8FB6] to-[#61BBC5]" />
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#034665] text-center mb-8">
          Why Engineers & Creators <span className="kevalon-gradient-text">Love Kevalon</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, borderColor: 'rgba(10, 143, 182, 0.4)' }}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium">{perk}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 4-Step Hiring Process */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] mb-2">
            Our Hiring Process
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#034665]">
            Simple, Transparent, & Fast
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringSteps.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="light-card p-6 bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-shadow"
            >
              <span className="text-3xl font-heading font-extrabold text-[#0A8FB6] block mb-2">
                {s.step}
              </span>
              <h3 className="font-bold text-lg text-[#034665] mb-2">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Open Positions Tabs */}
      <div>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#034665]">
              Current Openings ({activeTab === 'full-time' ? fullTimeJobs.length : internshipJobs.length})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select between full-time positions and live project internships.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('full-time')}
              className={`relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'full-time'
                  ? 'text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0A8FB6]'
              }`}
            >
              {activeTab === 'full-time' && (
                <motion.div
                  layoutId="activeJobTab"
                  className="absolute inset-0 kevalon-btn-primary rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              <span>Full-Time Roles</span>
            </button>
            <button
              onClick={() => setActiveTab('internship')}
              className={`relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'internship'
                  ? 'text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0A8FB6]'
              }`}
            >
              {activeTab === 'internship' && (
                <motion.div
                  layoutId="activeJobTab"
                  className="absolute inset-0 kevalon-btn-primary rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              <span>Internships & Training</span>
            </button>
          </div>
        </div>

        <motion.div layout className="space-y-4">
          <AnimatePresence mode="wait">
            {(activeTab === 'full-time' ? fullTimeJobs : internshipJobs).map((job) => (
              <motion.div
                layout
                key={job.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="light-card relative overflow-hidden p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 group bg-white border border-slate-200 hover:border-[#0A8FB6]/50 shadow-xs hover:shadow-lg transition-all"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#E6F6F8] text-[#0A8FB6] border border-[#0A8FB6]/20">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-500">• {job.type}</span>
                    <span className="text-xs text-slate-500">• {job.location}</span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-[#034665] group-hover:text-[#0A8FB6] transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                    {job.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {job.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => handleOpenApplyModal(job.title)}
                    className="kevalon-btn-primary !px-6 !py-3 text-xs uppercase tracking-wider font-bold text-white flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Direct Resume Submission */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-10 rounded-3xl [background:linear-gradient(135deg,#FFFFFF_0%,#F0F8FA_50%,#E6F6F8_100%)] text-[#034665] border border-slate-200 shadow-md text-center space-y-4"
      >
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#034665]">
          Don't see a role that matches your profile?
        </h3>
        <p className="text-sm text-slate-600 max-w-lg mx-auto">
          We welcome spontaneous applications from talented engineers, designers, and marketers. Submit your resume directly using our application portal:
        </p>
        <div className="pt-1 flex flex-wrap items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={() => handleOpenApplyModal('Other / Spontaneous Application')}
            className="kevalon-btn-primary !px-7 !py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md flex items-center gap-2"
          >
            <span>Submit Spontaneous Application</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <a
            href="mailto:careers@kevalontechnology.in"
            className="text-sm font-bold text-[#0A8FB6] hover:text-[#034665] underline"
          >
            Or email careers@kevalontechnology.in
          </a>
        </div>
      </motion.div>

      {/* ============================================================== */}
      {/* 🚀 SUBMIT YOUR APPLICATION MODAL (EXACT ACCORDING TO USER IMAGE) */}
      {/* ============================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
            >
              {/* Modal Top Accent Line */}
              <div className="h-1.5 bg-gradient-to-r from-[#034665] via-[#0A8FB6] to-[#61BBC5] shrink-0" />

              {/* Modal Header */}
              <div className="p-6 sm:p-8 pb-4 border-b border-slate-100 flex items-start justify-between">
                <div>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#034665] tracking-tight">
                    Submit Your Application
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-1 font-medium">
                    All fields marked <span className="text-[#0A8FB6] font-bold">*</span> are required.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
                {/* Status Messages */}
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Application Submitted Successfully!</strong>
                      Thank you for applying to Kevalon Technology. Our HR team will review your profile and contact you within 24–48 hours.
                    </div>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>{status.error}</div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: First name & Last name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        First name <span className="text-[#0A8FB6]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Alex"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Last name <span className="text-[#0A8FB6]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Chen"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email address & Phone number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email address <span className="text-[#0A8FB6]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@example.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone number <span className="text-[#0A8FB6]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: LinkedIn Profile & Portfolio URL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        LinkedIn Profile
                      </label>
                      <div className="relative">
                        <Linkedin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          name="linkedinUrl"
                          value={formData.linkedinUrl}
                          onChange={handleChange}
                          placeholder="linkedin.com/in/yourname"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Portfolio URL
                      </label>
                      <div className="relative">
                        <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          name="portfolioUrl"
                          value={formData.portfolioUrl}
                          onChange={handleChange}
                          placeholder="yoursite.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Applying for * */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Applying for <span className="text-[#0A8FB6]">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        name="roleApplied"
                        required
                        value={formData.roleApplied}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a role
                        </option>
                        {allRolesList.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Resume / CV * (Drag & Drop or Click to Upload) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Resume / CV <span className="text-[#0A8FB6]">*</span>
                    </label>

                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />

                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                      }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-2xl p-4 sm:p-5 flex items-center gap-4 cursor-pointer transition-all ${
                        dragOver
                          ? 'border-[#0A8FB6] bg-[#E6F6F8]'
                          : selectedFile
                          ? 'border-emerald-400 bg-emerald-50/50'
                          : 'border-[#0A8FB6]/35 bg-[#F0F8FA]/60 hover:bg-[#E6F6F8] hover:border-[#0A8FB6]'
                      }`}
                    >
                      {/* Upload Icon Box */}
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0 transition-transform ${
                          selectedFile ? 'bg-emerald-600' : 'bg-[#0A8FB6]'
                        }`}
                      >
                        {selectedFile ? (
                          <Check className="w-6 h-6 sm:w-7 sm:h-7" />
                        ) : (
                          <UploadCloud className="w-6 h-6 sm:w-7 sm:h-7" />
                        )}
                      </div>

                      <div className="text-left flex-grow">
                        {selectedFile ? (
                          <>
                            <div className="text-xs sm:text-sm font-bold text-emerald-800 flex items-center gap-1.5">
                              <FileText className="w-4 h-4 text-emerald-600" />
                              <span className="truncate max-w-[240px] sm:max-w-xs">{selectedFile.name}</span>
                            </div>
                            <div className="text-[11px] text-emerald-600 mt-0.5">
                              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to submit (Click to replace)
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-xs sm:text-sm font-bold text-[#034665]">
                              Drag & drop or click to upload
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              PDF, DOC, DOCX, max 10 MB
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status.submitting}
                      className="w-full py-3.5 px-6 rounded-full text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 cursor-pointer"
                      style={{
                        background: 'linear-gradient(137deg, #0A8FB6 0%, #034665 100%)',
                      }}
                    >
                      {status.submitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
