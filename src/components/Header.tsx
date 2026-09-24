import React, { useState } from 'react';
import { PageView } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { Globe, ShieldCheck, Download, Lock, Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  onTapLogoForAdmin: () => void;
  pwaPrompt: any;
  onInstallPwa: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  onTapLogoForAdmin,
  pwaPrompt,
  onInstallPwa
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoTapCount, setLogoTapCount] = useState(0);

  const handleLogoClick = () => {
    const nextCount = logoTapCount + 1;
    setLogoTapCount(nextCount);
    if (nextCount >= 5) {
      setLogoTapCount(0);
      onTapLogoForAdmin();
    } else if (nextCount === 1) {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems: { label: string; view: PageView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Services', view: 'services' },
    { label: 'Portfolio', view: 'portfolio' },
    { label: 'Pricing', view: 'pricing' },
    { label: 'Order Form', view: 'order' },
    { label: 'About', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20 text-white">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-black via-[#111111] to-black border-b border-yellow-500/10 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-gray-300 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1 font-semibold text-[#FFD700]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" />
              {COMPANY_INFO.entity} ({COMPANY_INFO.rcNumber})
            </span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span className="hidden md:inline-flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-gray-400" />
              <a href={COMPANY_INFO.domain} target="_blank" rel="noreferrer" className="hover:text-[#FFD700] transition">
                {COMPANY_INFO.shortDomain}
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs ml-auto">
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="inline-flex items-center gap-1 text-gray-300 hover:text-[#FFD700] transition"
            >
              <Mail className="w-3 h-3 text-[#FFD700]" />
              <span className="hidden sm:inline">{COMPANY_INFO.email}</span>
            </a>
            
            {pwaPrompt && (
              <button
                onClick={onInstallPwa}
                className="bg-[#FFD700] text-black hover:bg-yellow-400 font-bold px-2.5 py-0.5 rounded text-[11px] inline-flex items-center gap-1 transition shadow-sm"
              >
                <Download className="w-3 h-3" />
                Install App
              </button>
            )}

            <button
              onClick={onTapLogoForAdmin}
              className="text-gray-400 hover:text-[#FFD700] transition inline-flex items-center gap-1"
              title="Admin Portal Access (Password: GoyeBN3583773)"
            >
              <Lock className="w-3 h-3 text-yellow-500/70" />
              <span className="hidden lg:inline text-[10px] uppercase font-mono">Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo / Brand */}
        <div 
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-lg bg-black border border-[#FFD700]/50 flex items-center justify-center p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <span className="font-extrabold text-[#FFD700] font-sora text-xl tracking-tighter">G</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-sora font-extrabold text-base md:text-lg tracking-wider text-white">
                GOYE <span className="text-[#FFD700]">SERVICES HUB</span>
              </span>
            </div>
            <p className="text-[10px] text-gray-400 font-medium tracking-tight">
              {COMPANY_INFO.subtitle} • {COMPANY_INFO.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                setCurrentView(item.view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                currentView === item.view
                  ? 'bg-[#FFD700] text-black font-bold shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setCurrentView('order');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="ml-2 bg-gradient-to-r from-[#FFD700] to-yellow-500 text-black hover:brightness-110 font-bold px-4 py-1.5 rounded-full text-xs shadow-lg transition transform hover:scale-105"
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-yellow-500/20 px-4 py-4 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                setCurrentView(item.view);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold ${
                currentView === item.view
                  ? 'bg-[#FFD700] text-black font-bold'
                  : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="pt-2 border-t border-gray-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setCurrentView('order');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#FFD700] text-black font-bold py-3 rounded-lg text-center text-sm shadow-md"
            >
              Order Service Now
            </button>
            <button
              onClick={() => {
                onTapLogoForAdmin();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gray-900 border border-gray-800 text-yellow-500 font-mono py-2 rounded-lg text-center text-xs flex items-center justify-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              Admin Panel Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
