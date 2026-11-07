import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Layers, Cpu, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { servicesData } from './Services';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];
  const Icon = service.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Back Button */}
      <div>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#0A8FB6] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Capabilities</span>
        </Link>
      </div>

      {/* Hero Header Card */}
      <div className="light-card relative overflow-hidden p-8 sm:p-12 bg-white border border-slate-200 shadow-md">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#034665] via-[#0A8FB6] to-[#61BBC5]" />

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[#E6F6F8] border border-[#0A8FB6]/30 flex items-center justify-center text-[#0A8FB6] shadow-sm">
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A8FB6] block mb-1">
              {service.tagline}
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#034665]">
              {service.title}
            </h1>
          </div>
        </div>

        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          {service.desc}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="kevalon-btn-primary !px-7 !py-3.5 text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <span>Initiate Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold text-[#034665] bg-white border border-slate-300 hover:border-[#0A8FB6] hover:bg-[#F0F8FA] transition-all shadow-xs"
          >
            Explore Case Studies
          </Link>
        </div>
      </div>

      {/* Grid: Deliverables & Tech Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="light-card p-8 bg-white border border-slate-200">
            <h3 className="font-heading font-bold text-2xl text-[#034665] mb-6 flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-[#0A8FB6]" />
              Core Capabilities & Specifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h4 className="font-heading font-bold text-lg text-[#034665] mb-2">
                Agile Engineering Methodology
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At Kevalon Technology, every service follows our 7-step engineering process: Discovery, Planning, UI/UX Design, Agile Development, Rigorous QA Testing, Zero-Downtime Deployment, and Continuous Maintenance & Support.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="light-card p-6 bg-white border border-slate-200">
            <h4 className="font-heading font-bold text-lg text-[#034665] mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#0A8FB6]" />
              Technologies & Stacks
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#E6F6F8] text-[#034665] border border-[#0A8FB6]/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="light-card p-6 [background:linear-gradient(135deg,#FFFFFF_0%,#F0F8FA_50%,#E6F6F8_100%)] border border-slate-200">
            <h4 className="font-heading font-bold text-lg text-[#034665] mb-2">
              Need custom scoping for {service.title}?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Schedule a technical evaluation call with our lead architect. We respond within 24 hours.
            </p>
            <Link
              to="/contact"
              className="kevalon-btn-primary w-full text-center text-xs py-3 block font-bold uppercase tracking-wider text-white shadow-sm"
            >
              Request Scoping Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
