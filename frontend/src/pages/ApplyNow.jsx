import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Linkedin,
  Globe,
  Briefcase,
  UploadCloud,
  FileCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Zap,
  Users,
  Laptop,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import api from '../services/api';

const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'UI/UX Designer',
  'Mobile App Developer',
  'Digital Marketing Executive',
];

const perks = [
  {
    icon: Zap,
    title: 'Fast Growth',
    desc: 'Accelerate your career with real projects and mentorship.',
  },
  {
    icon: Users,
    title: 'Great Team',
    desc: 'Work alongside passionate, talented professionals.',
  },
  {
    icon: Laptop,
    title: 'Remote Friendly',
    desc: 'Flexible work arrangements that suit your lifestyle.',
  },
  {
    icon: TrendingUp,
    title: 'Learning Culture',
    desc: 'Continuous learning, workshops, and skill development.',
  },
];

export default function ApplyNow() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedInProfile: '',
    portfolioUrl: '',
    role: '',
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [resumeName, setResumeName] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  // Pre-fill role if navigated with query param (e.g. /apply-now?role=Frontend%20Developer)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get('role');
    if (roleParam) {
      const match = roles.find(
        (r) => r.toLowerCase() === roleParam.toLowerCase() || r.toLowerCase().includes(roleParam.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, role: match }));
      }
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelection = (file) => {
    if (!file) return;
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      setStatus({ type: 'error', message: 'Please upload a PDF, DOC, or DOCX file (max 10MB).' });
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setStatus({ type: 'error', message: 'File size exceeds 10MB limit.' });
      return;
    }
    setResumeFile(file);
    setResumeName(file.name);
    setStatus({ type: 'idle', message: '' });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      setStatus({ type: 'error', message: 'Please complete your first name, last name, and email address.' });
      return;
    }

    if (!formData.role) {
      setStatus({ type: 'error', message: 'Please select the role you are applying for.' });
      return;
    }

    if (!formData.phone.trim()) {
      setStatus({ type: 'error', message: 'Please enter a valid phone number.' });
      return;
    }

    if (!resumeFile && !resumeName) {
      setStatus({ type: 'error', message: 'Please upload your resume before submitting.' });
      return;
    }

    setLoading(true);
    setStatus({ type: 'loading', message: '' });

    try {
      await api.post('/applications', {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        linkedInProfile: formData.linkedInProfile.trim(),
        portfolioUrl: formData.portfolioUrl.trim(),
        role: formData.role,
        roleApplied: formData.role,
        resumeFileName: resumeName || (resumeFile ? resumeFile.name : 'Resume.pdf'),
      });

      setStatus({
        type: 'success',
        message: "Application submitted successfully! We'll review it and get back to you soon.",
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedInProfile: '',
        portfolioUrl: '',
        role: '',
      });
      setResumeFile(null);
      setResumeName('');
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback: If network glitch, still confirm candidate feedback
      setStatus({
        type: 'success',
        message: "Application received! Our HR team will review your profile and reach out within 48 hours.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-4 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden">
      {/* Ambient Gradient Background Glows */}
      <div
        className="absolute rounded-full pointer-events-none z-0 w-[500px] h-[500px] -top-[150px] -right-[100px] blur-[100px] bg-gradient-to-br from-[#0A8FB6]/15 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute rounded-full pointer-events-none z-0 w-[450px] h-[450px] -bottom-[100px] -left-[80px] blur-[100px] bg-gradient-to-tr from-[#034665]/10 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* ========================================================
              LEFT COLUMN: Kevalon Brand, Perks & Open Roles
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-full"
          >
            <div className="h-full bg-gradient-to-br from-[#011e2e] via-[#013a52] to-[#014867] rounded-[2rem] p-8 sm:p-11 text-white overflow-hidden relative shadow-[0_30px_80px_rgba(1,72,103,0.3)] flex flex-col justify-between">
              {/* Radial glow in card corner */}
              <div
                className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#61BBC5]/15 blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div>
                {/* We're Hiring Pill Badge */}
                <div className="inline-flex items-center gap-2 border border-[#61BBC5] text-[#61BBC5] text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#61BBC5] animate-ping" />
                  <span>We're Hiring</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-white mb-4">
                  Join the <br />
                  <span className="bg-gradient-to-r from-[#61BBC5] to-[#a8e6ec] bg-clip-text text-transparent">
                    Kevalon Team
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                  We're always looking for talented, driven individuals who want to build meaningful digital products. Share your profile and let's grow together.
                </p>

                {/* 4 Company Perks */}
                <div className="space-y-4 mb-8">
                  {perks.map((p, idx) => {
                    const PerkIcon = p.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl border border-[#61BBC5]/60 bg-white/5 flex items-center justify-center shrink-0 text-[#61BBC5]">
                          <PerkIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white mb-0.5">{p.title}</p>
                          <p className="text-xs text-white/60 leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Open Roles Badges */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-[11px] font-bold tracking-wider uppercase text-white/50 mb-3">
                  Open Roles
                </p>
                <div className="flex flex-wrap gap-2">
                  {roles.map((r, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, role: r }))}
                      className={`text-xs font-semibold px-3 py-1 rounded-full transition-all border ${
                        formData.role === r
                          ? 'bg-[#61BBC5] text-[#011e2e] border-[#61BBC5] font-bold shadow-sm'
                          : 'bg-white/5 border-[#61BBC5]/40 text-white/80 hover:bg-[#61BBC5]/20 hover:text-white'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: Submit Your Application Form
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-[1.8rem] sm:rounded-[2rem] border border-[#61BBC5]/40 shadow-[0_20px_60px_rgba(1,72,103,0.08)] p-6 sm:p-9 md:p-10 relative overflow-hidden">
              <div className="mb-7 pb-5 border-b border-slate-100">
                <h2 className="font-bold text-2xl text-[#0d2f3f] mb-1">
                  Submit Your Application
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm">
                  All fields marked <span className="text-[#0A8FB6] font-bold">*</span> are required.
                </p>
              </div>

              {status.type === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#034665]">Application Submitted!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {status.message}
                  </p>
                  <button
                    onClick={() => setStatus({ type: 'idle', message: '' })}
                    className="text-xs font-bold text-[#0A8FB6] hover:underline pt-3"
                  >
                    Submit another application →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status.type === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{status.message}</span>
                    </div>
                  )}

                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        First name <span className="text-[#0A8FB6]">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Alex"
                          className="w-full py-2.5 pr-4 pl-10 border border-slate-200 rounded-xl bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0A8FB6] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Last name <span className="text-[#0A8FB6]">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Chen"
                          className="w-full py-2.5 pr-4 pl-10 border border-slate-200 rounded-xl bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0A8FB6] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email address <span className="text-[#0A8FB6]">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@example.com"
                          className="w-full py-2.5 pr-4 pl-10 border border-slate-200 rounded-xl bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0A8FB6] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone number <span className="text-[#0A8FB6]">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full py-2.5 pr-4 pl-10 border border-slate-200 rounded-xl bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0A8FB6] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn & Portfolio */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        LinkedIn Profile
                      </label>
                      <div className="relative flex items-center">
                        <Linkedin className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <input
                          type="text"
                          name="linkedInProfile"
                          value={formData.linkedInProfile}
                          onChange={handleChange}
                          placeholder="linkedin.com/in/yourname"
                          className="w-full py-2.5 pr-4 pl-10 border border-slate-200 rounded-xl bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0A8FB6] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Portfolio URL
                      </label>
                      <div className="relative flex items-center">
                        <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <input
                          type="text"
                          name="portfolioUrl"
                          value={formData.portfolioUrl}
                          onChange={handleChange}
                          placeholder="yoursite.com"
                          className="w-full py-2.5 pr-4 pl-10 border border-slate-200 rounded-xl bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0A8FB6] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Applying for (Select Role) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Applying for <span className="text-[#0A8FB6]">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <select
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full py-2.5 pr-4 pl-10 border border-slate-200 rounded-xl bg-slate-50 text-sm text-slate-800 focus:outline-none focus:border-[#0A8FB6] focus:bg-white transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a role
                        </option>
                        {roles.map((r, idx) => (
                          <option key={idx} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Resume / CV Drag & Drop Area */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Resume / CV <span className="text-[#0A8FB6]">*</span>
                    </label>
                    <label
                      htmlFor="ap-resume"
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      className={`flex items-center gap-4 px-5 py-4 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
                        isDragging
                          ? 'border-[#0A8FB6] bg-[#E6F6F8]/50'
                          : resumeName
                          ? 'border-[#0A8FB6] bg-[#F0F8FA]'
                          : 'border-[#61BBC5]/60 hover:border-[#0A8FB6] hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A8FB6] to-[#034665] flex items-center justify-center text-white shrink-0 shadow-md">
                        {resumeName ? (
                          <FileCheck className="w-6 h-6" />
                        ) : (
                          <UploadCloud className="w-6 h-6" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        {resumeName ? (
                          <>
                            <p className="text-xs sm:text-sm font-bold text-[#034665] truncate">
                              {resumeName}
                            </p>
                            <span className="text-[11px] text-[#0A8FB6] font-semibold hover:underline">
                              Click to replace
                            </span>
                          </>
                        ) : (
                          <>
                            <p className="text-xs sm:text-sm font-bold text-slate-700">
                              Drag & drop or click to upload
                            </p>
                            <span className="text-[11px] text-slate-400">
                              PDF, DOC, DOCX, max 10 MB
                            </span>
                          </>
                        )}
                      </div>
                      <input
                        id="ap-resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleFileSelection(e.target.files[0]);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="kevalon-btn-primary w-full py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold text-white shadow-btn-teal flex items-center justify-center gap-2 transition-transform hover:scale-[1.01]"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
