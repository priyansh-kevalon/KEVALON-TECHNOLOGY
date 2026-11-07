import React from 'react';

export default function Card({
  children,
  className = '',
  topAccent = false,
  glowOnHover = true,
  ...props
}) {
  return (
    <div
      className={`light-card relative p-6 ${className}`}
      {...props}
    >
      {topAccent && (
        <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[18px] bg-gradient-to-r from-[#034665] via-[#0A8FB6] to-[#61BBC5]" />
      )}
      {children}
    </div>
  );
}
