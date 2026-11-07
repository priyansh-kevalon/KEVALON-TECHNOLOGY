import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'web-application-development',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      await api.post('/contact', {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      });

      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'web-application-development',
        message: '',
      });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error:
          err.message ||
          'Could not reach server. Please email sales@kevalontechnology.in directly.',
      });
    }
  };

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
          <span>Get In Touch</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#034665] tracking-tight leading-tight">
          Let’s Discuss Your Next{' '}
          <span className="kevalon-gradient-text">Digital Project</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Have an idea or need an enterprise technology partner? Our engineering leads are available to evaluate your scope and provide a tailored proposal.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="light-card relative overflow-hidden p-8 space-y-6 bg-white border border-slate-200 shadow-sm">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#034665] to-[#0A8FB6]" />
            <h3 className="font-heading font-bold text-2xl text-[#034665] mb-6">
              Headquarters & Channels
            </h3>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#E6F6F8] border border-[#0A8FB6]/20 flex items-center justify-center text-[#0A8FB6] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Us</h4>
                <a
                  href="mailto:sales@kevalontechnology.in"
                  className="text-sm text-[#0A8FB6] font-semibold hover:underline block mt-0.5"
                >
                  sales@kevalontechnology.in
                </a>
                <span className="text-xs text-slate-500 block mt-0.5">We reply within 24 hours</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#E6F6F8] border border-[#0A8FB6]/20 flex items-center justify-center text-[#0A8FB6] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Call Us</h4>
                <a
                  href="tel:+919081012218"
                  className="text-sm text-[#034665] font-bold hover:text-[#0A8FB6] transition-colors block mt-0.5"
                >
                  +91 90810 12218
                </a>
                <span className="text-xs text-slate-500 block mt-0.5">Mon - Sat, 10:00 AM - 7:00 PM IST</span>
              </div>
            </div>

            {/* Visit */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#E6F6F8] border border-[#0A8FB6]/20 flex items-center justify-center text-[#0A8FB6] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Visit Us</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                  913, Solaris Business Hub, Parshwanath Jain BRTS, Sola Road, Bhuyangdev, Ahmedabad, Gujarat 380013, India
                </p>
                <span className="text-xs text-slate-500 block mt-1">Available for in-person meetings</span>
              </div>
            </div>

            {/* WhatsApp Direct */}
            <div className="pt-4 border-t border-slate-100">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.link/a02fdn"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] text-[#15803d] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#dcfce7] transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#16a34a]" />
                <span>Chat Instantly On WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="light-card p-8 sm:p-10 bg-white border border-slate-200 shadow-md">
            <h3 className="font-heading font-bold text-2xl text-[#034665] mb-2">
              Send Project Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-8">
              Fill out the details below. Our senior project architect will get in touch with you shortly.
            </p>

            {status.success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">Message Dispatched Successfully!</strong>
                  Thank you for reaching out. A team member from Kevalon Technology will contact you within 24 hours.
                </div>
              </motion.div>
            )}

            {status.error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>{status.error}</div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="e.g. Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 90810 12218"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Required Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all"
                >
                  <option value="web-application-development">Web Application Development</option>
                  <option value="mobile-application-development">Mobile App Development (iOS & Android)</option>
                  <option value="game-development">Game Development (2D/3D Unity)</option>
                  <option value="e-commerce-development">E-Commerce Development</option>
                  <option value="web-erp-development">Web ERP Development</option>
                  <option value="api-development">API Development & Microservices</option>
                  <option value="crm-development">CRM Development</option>
                  <option value="seo-digital-marketing">SEO & Digital Marketing</option>
                  <option value="internship-training">Internship & Training Program</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Project Description & Requirements *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project objectives, target timeline, features, or specific business challenges..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0A8FB6] focus:bg-white focus:ring-2 focus:ring-[#0A8FB6]/20 transition-all resize-vertical"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.submitting}
                className="kevalon-btn-primary w-full py-3.5 text-xs font-bold uppercase tracking-widest text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 transition-all"
              >
                {status.submitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Send Project Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
