import React from 'react';
import { PageView } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { ShieldCheck, Globe, Mail, Lock, QrCode, MessageSquare, ExternalLink, CreditCard } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: PageView) => void;
  onOpenAdmin: () => void;
  onOpenQrModal: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentView,
  onOpenAdmin,
  onOpenQrModal,
  onOpenLegal
}) => {
  return (
    <footer className="bg-black text-white border-t border-yellow-500/20 pt-12 pb-24 md:pb-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-black border border-[#FFD700] flex items-center justify-center font-bold text-[#FFD700] font-sora">
                G
              </div>
              <span className="font-sora font-extrabold text-base text-white">
                GOYE <span className="text-[#FFD700]">SERVICES HUB</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              {COMPANY_INFO.tagline} Registered CAC Agency, 48-Hour Web Design, and WhatsApp AI Automation for SMEs.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-[11px] text-[#FFD700] font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                {COMPANY_INFO.entity} ({COMPANY_INFO.rcNumber})
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2 text-xs">
            <h4 className="font-sora font-bold text-sm text-[#FFD700] uppercase tracking-wider mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={() => { setCurrentView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FFD700]">
                  CAC Business Registration
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FFD700]">
                  Website & Brand Design
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FFD700]">
                  WhatsApp AI Sales Bot
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('pricing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FFD700]">
                  3-in-1 Turnkey Bundle
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Legal */}
          <div className="space-y-2 text-xs">
            <h4 className="font-sora font-bold text-sm text-[#FFD700] uppercase tracking-wider mb-3">
              Navigation & Legal
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={() => { setCurrentView('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FFD700]">
                  Portfolio & CAC Samples
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FFD700]">
                  About Goyedagosmess
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('privacy')} className="hover:text-[#FFD700]">
                  Privacy Policy (gasv.store/privacy)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('terms')} className="hover:text-[#FFD700]">
                  Terms of Service (gasv.store/terms)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & QR Code Button */}
          <div className="space-y-3 text-xs">
            <h4 className="font-sora font-bold text-sm text-[#FFD700] uppercase tracking-wider">
              Verification & QR
            </h4>

            <button
              onClick={onOpenQrModal}
              className="w-full bg-zinc-900 hover:bg-zinc-800 border border-yellow-500/40 text-[#FFD700] font-bold p-3 rounded-2xl flex items-center justify-center gap-2 transition"
            >
              <QrCode className="w-4 h-4" />
              Show QR Code & Link (gasv.store)
            </button>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <Mail className="w-4 h-4 text-[#FFD700]" />
              {COMPANY_INFO.email}
            </a>

            <a
              href={COMPANY_INFO.sisterDomain}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-gray-400 hover:text-[#FFD700]"
            >
              <Globe className="w-4 h-4 text-gray-400" />
              Sister: {COMPANY_INFO.sisterSchool} <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Payment Badges & Admin Trigger */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-500 font-mono text-[10px] uppercase mr-1">Accepted Payments:</span>
            <span className="bg-zinc-900 px-2.5 py-1 rounded border border-gray-800 font-bold text-blue-400">Paystack</span>
            <span className="bg-zinc-900 px-2.5 py-1 rounded border border-gray-800 font-bold text-amber-400">Flutterwave</span>
            <span className="bg-zinc-900 px-2.5 py-1 rounded border border-gray-800 font-bold text-cyan-400">PayPal / Cards</span>
            <span className="bg-zinc-900 px-2.5 py-1 rounded border border-gray-800 font-bold text-emerald-400">USDT / USDC</span>
            <span className="bg-zinc-900 px-2.5 py-1 rounded border border-purple-500/40 font-bold text-purple-400">Pi GCV / Pi Coins</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <button
              onClick={onOpenAdmin}
              className="hover:text-[#FFD700] transition flex items-center gap-1 text-[11px] font-mono opacity-80 hover:opacity-100"
            >
              <Lock className="w-3 h-3 text-yellow-500" />
              Admin Panel Access
            </button>

            <span>© 2026 GOYE SERVICES HUB. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
