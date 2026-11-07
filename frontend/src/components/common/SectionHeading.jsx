import React from 'react';

export default function SectionHeading({
  tag,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {tag && (
        <div className={`mb-3 ${isCenter ? 'flex justify-center' : ''}`}>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#0A8FB6]/10 text-[#0A8FB6] border border-[#0A8FB6]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A8FB6]" />
            {tag}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#034665] tracking-tight leading-tight">
        {title}{' '}
        {highlight && (
          <span className="kevalon-gradient-text font-black">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
