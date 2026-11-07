import React, { useState } from 'react';
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
} from 'lucide-react';

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

export default function Careers() {
  const [activeTab, setActiveTab] = useState('full-time');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
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
      </div>

      {/* Perks Grid */}
      <div className="light-card p-8 sm:p-12 relative overflow-hidden bg-white border border-slate-200">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#034665] via-[#0A8FB6] to-[#61BBC5]" />
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#034665] text-center mb-8">
          Why Engineers & Creators <span className="kevalon-gradient-text">Love Kevalon</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {perks.map((perk, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium">{perk}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Step Hiring Process */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] mb-2">
            Our Hiring Process
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#034665]">
            Simple, Transparent, & Fast
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringSteps.map((s, idx) => (
            <div key={idx} className="light-card p-6 bg-white border border-slate-200">
              <span className="text-3xl font-heading font-extrabold text-[#0A8FB6] block mb-2">
                {s.step}
              </span>
              <h3 className="font-bold text-lg text-[#034665] mb-2">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
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
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'full-time'
                  ? 'kevalon-btn-primary text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0A8FB6]'
              }`}
            >
              Full-Time Roles
            </button>
            <button
              onClick={() => setActiveTab('internship')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'internship'
                  ? 'kevalon-btn-primary text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0A8FB6]'
              }`}
            >
              Internships & Training
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {(activeTab === 'full-time' ? fullTimeJobs : internshipJobs).map((job) => (
            <div
              key={job.id}
              className="light-card relative overflow-hidden p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 group bg-white border border-slate-200 hover:border-[#0A8FB6]/50 transition-all"
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
                <Link
                  to="/contact"
                  className="kevalon-btn-primary !px-6 !py-3 text-xs uppercase tracking-wider font-bold text-white flex items-center gap-2 shadow-sm"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Resume Submission */}
      <div className="p-8 rounded-3xl [background:linear-gradient(135deg,#FFFFFF_0%,#F0F8FA_50%,#E6F6F8_100%)] text-[#034665] border border-slate-200 shadow-md text-center space-y-2">
        <h3 className="font-heading font-extrabold text-2xl text-[#034665]">
          Don't see a role that matches your profile?
        </h3>
        <p className="text-sm text-slate-600 max-w-lg mx-auto">
          We welcome spontaneous applications from talented engineers, designers, and marketers. Send your resume and portfolio directly to:
        </p>
        <div className="pt-2">
          <a
            href="mailto:careers@kevalontechnology.in"
            className="text-base font-bold text-[#0A8FB6] hover:text-[#034665] underline"
          >
            careers@kevalontechnology.in
          </a>
        </div>
      </div>
    </div>
  );
}
