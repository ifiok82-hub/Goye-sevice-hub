import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { ShieldCheck, Award, Globe, Building2, CheckCircle2, ExternalLink } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-mono tracking-widest text-[#FFD700] uppercase font-semibold">
            About Goyedagosmess Enterprise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sora mt-2">
            GOYE SERVICES HUB ({COMPANY_INFO.rcNumber})
          </h2>
          <p className="mt-3 text-sm text-gray-400 max-w-xl mx-auto">
            Official CAC Accredited Agent, Web Development Agency, and SME AI Automation Agency based in Lagos, Nigeria.
          </p>
        </div>

        {/* Company Bio */}
        <div className="bg-zinc-900/80 border border-gray-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] font-bold sora text-2xl">
              G
            </div>
            <div>
              <h3 className="font-sora font-extrabold text-lg text-white">
                {COMPANY_INFO.brandName}
              </h3>
              <p className="text-xs text-[#FFD700] font-mono">
                {COMPANY_INFO.entity} • {COMPANY_INFO.rcNumber}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            Founded with a mission to help African and international founders launch and scale rapidly, 
            GOYE SERVICES HUB brings together corporate legal registration, high-converting web design, and 24/7 AI WhatsApp automation into a single, seamless 72-hour turnkey service.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 bg-black/60 rounded-2xl border border-gray-800">
              <ShieldCheck className="w-5 h-5 text-[#FFD700] mb-2" />
              <div className="font-bold text-white">Official CAC Agent</div>
              <div className="text-gray-400 mt-1">Accredited filings for Business Name, LTD, NGO & SCUML</div>
            </div>

            <div className="p-4 bg-black/60 rounded-2xl border border-gray-800">
              <Globe className="w-5 h-5 text-[#FFD700] mb-2" />
              <div className="font-bold text-white">48-Hour Web Agency</div>
              <div className="text-gray-400 mt-1">Full e-commerce, payment gateways & custom domains</div>
            </div>

            <div className="p-4 bg-black/60 rounded-2xl border border-gray-800">
              <Award className="w-5 h-5 text-[#FFD700] mb-2" />
              <div className="font-bold text-white">AI Automation</div>
              <div className="text-gray-400 mt-1">WhatsApp & Social DM bots trained on your business data</div>
            </div>
          </div>

          {/* Sister Company Note */}
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-[#FFD700]">Sister Educational Ecosystem:</span>
              <p className="text-gray-300 mt-0.5">
                {COMPANY_INFO.sisterSchool} — Educating the next generation of Web3 & AI pioneers.
              </p>
            </div>
            <a
              href={COMPANY_INFO.sisterDomain}
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFD700] text-black font-extrabold px-3.5 py-1.5 rounded-lg shrink-0 flex items-center gap-1 text-xs hover:bg-yellow-400 transition"
            >
              Visit sirwise.online <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
