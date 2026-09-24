import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-yellow-500/30 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl text-white">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#FFD700]" />
            <h3 className="font-sora font-extrabold text-lg">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black border border-gray-700 text-gray-400 hover:text-white flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-gray-300 leading-relaxed font-mono">
          <p className="text-[#FFD700] font-bold">
            {COMPANY_INFO.brandName} • {COMPANY_INFO.entity} ({COMPANY_INFO.rcNumber})
          </p>
          <p>
            URL Reference: {COMPANY_INFO.domain}/{type}
          </p>

          {type === 'privacy' ? (
            <>
              <h4 className="font-bold text-white text-sm">1. Information We Collect</h4>
              <p>
                We collect personal information required for CAC Business Registration, Website setup, and AI Bot training. This includes your Full Name, Email Address, Phone Number, Business Name, and NIN/Identity documents required by the Corporate Affairs Commission (CAC) Nigeria.
              </p>

              <h4 className="font-bold text-white text-sm">2. Use of Information</h4>
              <p>
                Your data is strictly used to process official filing with CAC, configure your web domain and business email, and train your private AI chatbot. We do NOT sell or share your information with third-party advertisers.
              </p>

              <h4 className="font-bold text-white text-sm">3. Security & Storage</h4>
              <p>
                All uploaded documents (ID cards, signatures, passport photos) are stored in secure cloud storage buckets protected with Row Level Security (RLS) and end-to-end encryption.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-white text-sm">1. Service Agreements & Delivery Timelines</h4>
              <p>
                GOYE SERVICES HUB guarantees 3-day turnaround for CAC Business Name Registration upon name availability approval, 48 hours for Website & Brand Design, and 2 days for AI WhatsApp Bot setup.
              </p>

              <h4 className="font-bold text-white text-sm">2. Payments & Pi Network Compliance</h4>
              <p>
                Payments made via Paystack, Flutterwave, or Pi Network SDK are subject to verification. Services are activated upon payment verification. Crypto Tx Hashes are manually verified on chain before final certificate delivery.
              </p>

              <h4 className="font-bold text-white text-sm">3. Official Accreditation</h4>
              <p>
                GOYE SERVICES HUB operates as an official CAC registration agent under Goyedagosmess Enterprise (RC BN3583773). All certificates are genuine and verifiable on the official CAC portal.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 flex justify-between items-center bg-black/40 text-xs">
          <span className="text-gray-400">© 2026 {COMPANY_INFO.brandName}</span>
          <button
            onClick={onClose}
            className="bg-[#FFD700] text-black font-bold px-4 py-2 rounded-xl"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};
