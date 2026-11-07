import React from 'react';

export default function Badge({
  children,
  variant = 'accent',
  icon: Icon,
  className = '',
}) {
  const variants = {
    accent: 'bg-[#0A8FB6]/10 text-[#0A8FB6] border-[#0A8FB6]/25',
    primary: 'bg-[#034665]/10 text-[#034665] border-[#034665]/20',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border backdrop-blur-sm ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}
