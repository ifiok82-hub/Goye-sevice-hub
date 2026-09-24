import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { MessageSquare, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20GOYE%20Services%20Hub,%20I%20want%20a%20quote%20for%20CAC%20/%20Website%20/%20AI%20Bot!`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 text-xs sm:text-sm border border-emerald-300 transition-all transform hover:scale-105 group"
    >
      <div className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center text-white">
        <MessageSquare className="w-4 h-4 fill-white" />
      </div>
      <span className="hidden sm:inline">Chat on WhatsApp - Get Quote in 10 mins</span>
      <span className="sm:hidden font-sora">WhatsApp Quote</span>
      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
    </a>
  );
};
