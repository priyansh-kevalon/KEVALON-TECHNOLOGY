import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function RootLayout() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col relative selection:bg-[#0A8FB6] selection:text-white overflow-x-hidden">
      {/* Sleek Top Reading Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#034665] via-[#0A8FB6] to-[#61BBC5] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Light Theme Animated Ambient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'easeInOut',
        }}
        className="fixed -top-40 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#0A8FB6]/8 to-[#034665]/5 rounded-full blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'easeInOut',
        }}
        className="fixed top-1/2 -right-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#61BBC5]/10 to-[#F0F8FA] rounded-full blur-[160px] pointer-events-none z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'easeInOut',
        }}
        className="fixed -bottom-40 -left-40 w-[600px] h-[600px] bg-[#034665]/5 rounded-full blur-[150px] pointer-events-none z-0"
      />

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
