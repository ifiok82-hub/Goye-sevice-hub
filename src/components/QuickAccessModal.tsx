import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { X, QrCode, Globe, Copy, Check, ExternalLink } from 'lucide-react';

interface QuickAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickAccessModal: React.FC<QuickAccessModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(COMPANY_INFO.domain);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-yellow-500/50 rounded-3xl max-w-sm w-full p-6 text-center text-white relative shadow-2xl gold-glow">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-900 border border-gray-700 text-gray-400 hover:text-white flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] flex items-center justify-center mx-auto mb-3">
          <QrCode className="w-6 h-6" />
        </div>

        <h3 className="font-sora font-extrabold text-lg text-white">
          Quick Access & QR Code
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          Scan or share official link for GOYE SERVICES HUB
        </p>

        {/* QR Code Graphic Box */}
        <div className="my-5 p-4 bg-white rounded-2xl inline-block border-4 border-[#FFD700]">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(COMPANY_INFO.domain)}`}
            alt="GOYE QR Code"
            className="w-40 h-40 mx-auto"
          />
        </div>

        {/* Domain Link Box */}
        <div className="p-3 bg-zinc-900 rounded-2xl border border-gray-800 flex items-center justify-between text-xs font-mono">
          <span className="text-[#FFD700] font-bold truncate">{COMPANY_INFO.domain}</span>
          <button
            onClick={handleCopy}
            className="p-1.5 hover:text-[#FFD700] text-gray-400"
            title="Copy URL"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        <div className="mt-4 flex gap-2">
          <a
            href={COMPANY_INFO.domain}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#FFD700] hover:bg-yellow-400 text-black font-extrabold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md"
          >
            Open https://www.gasv.store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
