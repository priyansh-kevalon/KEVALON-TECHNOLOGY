import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col relative selection:bg-[#0A8FB6] selection:text-white overflow-x-hidden">
      {/* Light Theme Subtle Ambient Blobs */}
      <div className="fixed -top-40 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#0A8FB6]/8 to-[#034665]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-1/2 -right-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#61BBC5]/10 to-[#F0F8FA] rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed -bottom-40 -left-40 w-[600px] h-[600px] bg-[#034665]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow relative z-10 pt-24 sm:pt-28">
        <Outlet />
      </main>

      {/* Signature Kevalon Footer */}
      <Footer />
    </div>
  );
}
