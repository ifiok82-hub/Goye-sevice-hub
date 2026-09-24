import React from 'react';
import { PageView, ServiceType } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/mockData';
import { ShieldCheck, ArrowRight, Zap, Award, CheckCircle2, FileCheck, Globe, Bot } from 'lucide-react';

interface HeroProps {
  setCurrentView: (view: PageView) => void;
  onSelectService: (service: ServiceType) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentView, onSelectService }) => {
  return (
    <div className="relative pt-6 pb-12 md:py-16 overflow-hidden">
      {/* Background Decorative Gold Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Entity Trust Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-[#FFD700]/40 text-xs text-gray-200 shadow-xl backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
            <span className="font-semibold">{COMPANY_INFO.entity}</span>
            <span className="bg-[#FFD700] text-black font-extrabold px-2 py-0.5 rounded text-[10px] tracking-wide">
              {COMPANY_INFO.rcNumber}
            </span>
          </div>
        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-sora leading-tight tracking-tight">
            We Turn Your Business Idea Into{' '}
            <span className="gold-gradient-text block sm:inline mt-1">
              Registered, Online & Automated
            </span>{' '}
            in 72 Hours
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
            {COMPANY_INFO.tagline} Official CAC Agent + Website Builder + AI WhatsApp Bot Agency.
          </p>

          {/* Quick CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => {
                onSelectService('bundle');
                setCurrentView('order');
              }}
              className="bg-gradient-to-r from-[#FFD700] via-yellow-400 to-[#FFD700] text-black font-extrabold px-6 py-3.5 rounded-full text-sm sm:text-base shadow-xl hover:scale-105 transition-transform flex items-center gap-2 gold-glow"
            >
              <Zap className="w-5 h-5 text-black fill-black" />
              Get 3-in-1 Bundle (Save ₦30k)
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setCurrentView('pricing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-black/80 text-white hover:text-[#FFD700] border border-gray-700 hover:border-[#FFD700] font-semibold px-6 py-3.5 rounded-full text-sm sm:text-base backdrop-blur-md transition-all"
            >
              See Pricing Table
            </button>
          </div>

          {/* Trust Guarantees Bar */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-xs text-gray-400 border-t border-b border-gray-800 py-3">
            <span className="flex items-center gap-1.5 text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-[#FFD700]" /> 100% CAC Verified
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Award className="w-4 h-4 text-[#FFD700]" /> 48-Hour Web Guarantee
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Zap className="w-4 h-4 text-[#FFD700]" /> Pi Network SDK Integrated
            </span>
          </div>
        </div>

        {/* 3 CORE SERVICE CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: CAC Registration */}
          <div className="bg-gradient-to-b from-zinc-900 to-black border border-[#FFD700]/30 rounded-2xl p-6 relative hover:border-[#FFD700] transition-all group flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-[#FFD700]/20 text-[#FFD700] text-xs font-bold px-3 py-1 rounded-full border border-[#FFD700]/30">
                  Service 1
                </span>
                <span className="text-xs text-gray-400 font-mono">3 Days Delivery</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700]">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sora font-extrabold text-lg text-white group-hover:text-[#FFD700] transition-colors">
                    CAC & Business Reg.
                  </h3>
                  <p className="text-xs text-gray-400">Business Name, LTD, NGO, Tax ID</p>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-300 leading-relaxed">
                Official CAC registration with certificate, Status Report, and TIN delivered directly to your vault and email.
              </p>

              <div className="mt-4 p-3 bg-black/60 rounded-xl border border-gray-800">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-400">Price From:</span>
                  <span className="text-[#FFD700] font-bold">₦30,000 ($18) ~ 47.3 Pi</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800 flex gap-2">
              <button
                onClick={() => {
                  onSelectService('cac');
                  setCurrentView('order');
                }}
                className="w-full bg-[#FFD700] text-black hover:bg-yellow-400 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition"
              >
                Register My Business
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Website & Brand Design */}
          <div className="bg-gradient-to-b from-zinc-900 to-black border border-[#FFD700]/30 rounded-2xl p-6 relative hover:border-[#FFD700] transition-all group flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-[#FFD700]/20 text-[#FFD700] text-xs font-bold px-3 py-1 rounded-full border border-[#FFD700]/30">
                  Service 2
                </span>
                <span className="text-xs text-gray-400 font-mono">48 Hours Delivery</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700]">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sora font-extrabold text-lg text-white group-hover:text-[#FFD700] transition-colors">
                    Website & Brand Design
                  </h3>
                  <p className="text-xs text-gray-400">5 Pages, Domain, Email & Payments</p>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-300 leading-relaxed">
                Modern responsive website + Logo + Business Email + Paystack / Flutterwave / Pi Network payment integration.
              </p>

              <div className="mt-4 p-3 bg-black/60 rounded-xl border border-gray-800">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-400">Price From:</span>
                  <span className="text-[#FFD700] font-bold">₦80,000 ($50) ~ 131.5 Pi</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800 flex gap-2">
              <button
                onClick={() => {
                  onSelectService('website');
                  setCurrentView('order');
                }}
                className="w-full bg-[#FFD700] text-black hover:bg-yellow-400 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition"
              >
                Build My Website
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: AI Automation for SMEs */}
          <div className="bg-gradient-to-b from-zinc-900 to-black border border-[#FFD700]/30 rounded-2xl p-6 relative hover:border-[#FFD700] transition-all group flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-[#FFD700]/20 text-[#FFD700] text-xs font-bold px-3 py-1 rounded-full border border-[#FFD700]/30">
                  Service 3
                </span>
                <span className="text-xs text-gray-400 font-mono">High-Ticket</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700]">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sora font-extrabold text-lg text-white group-hover:text-[#FFD700] transition-colors">
                    AI Automation for SMEs
                  </h3>
                  <p className="text-xs text-gray-400">WhatsApp & Social Sales Bot</p>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-300 leading-relaxed">
                24/7 WhatsApp customer care bot, AI social media auto-poster, and Instagram DM sales closer.
              </p>

              <div className="mt-4 p-3 bg-black/60 rounded-xl border border-gray-800">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-400">Price From:</span>
                  <span className="text-[#FFD700] font-bold">₦150,000 ($90) ~ 236.8 Pi</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800 flex gap-2">
              <button
                onClick={() => {
                  onSelectService('bot');
                  setCurrentView('order');
                }}
                className="w-full bg-[#FFD700] text-black hover:bg-yellow-400 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition"
              >
                Automate My Business
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
