import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CureLinkHero } from './components/CureLinkHero';
import { ProblemSection } from './components/ProblemSection';
import { HeroAIChat } from './components/HeroAIChat';
import { AIVisionModule } from './components/AIVisionModule';
import { RAGSecurity } from './components/RAGSecurity';
import { AISIntegration } from './components/AISIntegration';
import { StoriesAndDoctorShowcase } from './components/StoriesAndDoctorShowcase';
import { MedicalPartnership } from './components/MedicalPartnership';
import { FooterCTA } from './components/FooterCTA';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AdminAuthModal } from './components/admin/AdminAuthModal';
import { trackVisit } from './utils/analyticsTracker';

export function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Track visit on mount
  useEffect(() => {
    trackVisit(window.location.pathname);
  }, []);

  // Hash-based admin routing & Hotkey listener (Ctrl+Shift+A or Cmd+Shift+A)
  useEffect(() => {
    const checkHashAndAuth = () => {
      if (window.location.hash === '#admin' || window.location.hash === '#analytics') {
        const isAuth = localStorage.getItem('sanarip_admin_auth') === 'true';
        if (isAuth) {
          setIsAdminOpen(true);
        } else {
          setIsAuthModalOpen(true);
        }
      }
    };

    checkHashAndAuth();
    window.addEventListener('hashchange', checkHashAndAuth);

    const handleGlobalOpenAdmin = () => {
      const isAuth = localStorage.getItem('sanarip_admin_auth') === 'true';
      if (isAuth) {
        setIsAdminOpen(true);
      } else {
        setIsAuthModalOpen(true);
      }
    };
    window.addEventListener('open-admin-dashboard', handleGlobalOpenAdmin);

    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a' || e.key === 'Ф' || e.key === 'ф')) {
        e.preventDefault();
        handleGlobalOpenAdmin();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', checkHashAndAuth);
      window.removeEventListener('open-admin-dashboard', handleGlobalOpenAdmin);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lenis Smooth Scroll
  useEffect(() => {
    if (isAdminOpen) return; // Disable smooth scroll hijacking in admin panel

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Smooth scroll handler for anchor links
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      if (href === '#admin' || href === '#analytics') return;

      e.preventDefault();

      if (href === '#' || href === '#top' || href === '#hero') {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          lenis.scrollTo(targetElement, { offset: -30, duration: 1.2 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isAdminOpen]);

  return (
    <div id="top" className="bg-[#F3F5F9] text-slate-900 selection:bg-[#1C64F2]/20 selection:text-[#1C64F2] min-h-screen font-sans">
      {isAdminOpen ? (
        /* Full-Screen Admin & Analytics Panel */
        <AdminDashboard 
          onClose={() => {
            setIsAdminOpen(false);
            if (window.location.hash === '#admin' || window.location.hash === '#analytics') {
              history.pushState("", document.title, window.location.pathname + window.location.search);
            }
          }} 
        />
      ) : (
        <>
          <main>
            {/* BLOCK 1: Hero Banner ("Care at Every Step") */}
            <CureLinkHero />

            {/* BLOCK 2: Bishkek Emergency Medicine Problems */}
            <ProblemSection />

            {/* BLOCK 3: Interactive Triage AI Chat (3 Languages & 3 Triage Scenarios) */}
            <HeroAIChat />

            {/* BLOCK 4: AI Vision Image Injury Diagnosis */}
            <AIVisionModule />

            {/* BLOCK 5: RAG & Clinical Security Database (MedElement & Ministry of Health KR) */}
            <RAGSecurity />

            {/* BLOCK 6: Synergy & Integration with AIS "103" */}
            <AISIntegration />

            {/* BLOCK 7: Bishkek Pilot Launch & Steel Drake Studio Team Credits */}
            <StoriesAndDoctorShowcase />

            {/* BLOCK 8: Monetization & B2B Partnership Ecosystem for Clinics, Doctors & Labs */}
            <MedicalPartnership />
          </main>

          {/* BLOCK 9: Luxury Footer */}
          <FooterCTA />
        </>
      )}

      {/* Admin PIN Gatekeeper Modal */}
      <AdminAuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => {
          setIsAuthModalOpen(false);
          if (window.location.hash === '#admin' || window.location.hash === '#analytics') {
            history.pushState("", document.title, window.location.pathname + window.location.search);
          }
        }}
        onAuthenticated={() => {
          setIsAuthModalOpen(false);
          setIsAdminOpen(true);
        }}
      />
    </div>
  );
}

export default App;
