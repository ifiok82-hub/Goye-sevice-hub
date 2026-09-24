import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { MessageSquare, Mail, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center">
          <span className="text-xs font-mono tracking-widest text-[#FFD700] uppercase font-semibold">
            Direct Support & Enquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sora mt-2">
            Get in Touch With Our Agents
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            We respond on WhatsApp in less than 10 minutes during office hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Details Card */}
          <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="font-sora font-extrabold text-lg text-white">
              Official Contact Info
            </h3>

            <div className="space-y-4 text-xs font-medium">
              <div className="flex items-start gap-3 p-3 bg-black/60 rounded-2xl border border-gray-800">
                <MessageSquare className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-gray-400 font-mono text-[10px]">WHATSAPP DIRECT</div>
                  <div className="text-white font-bold text-sm mt-0.5">{COMPANY_INFO.whatsappDisplay}</div>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20GOYE%20Services%20Hub,%20I%20have%20an%20enquiry.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#FFD700] font-bold mt-1 hover:underline text-xs"
                  >
                    Chat on WhatsApp <Send className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-black/60 rounded-2xl border border-gray-800">
                <Mail className="w-5 h-5 text-[#FFD700] mt-0.5 shrink-0" />
                <div>
                  <div className="text-gray-400 font-mono text-[10px]">EMAIL ADDRESS</div>
                  <div className="text-white font-bold text-sm mt-0.5">{COMPANY_INFO.email}</div>
                  <span className="text-gray-400 text-[11px]">24/7 Email Monitoring</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-black/60 rounded-2xl border border-gray-800">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-gray-400 font-mono text-[10px]">HEAD OFFICE</div>
                  <div className="text-white font-bold text-sm mt-0.5">{COMPANY_INFO.location}</div>
                  <span className="text-gray-400 text-[11px]">Physical & Remote Consultations</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-black/60 rounded-2xl border border-gray-800">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-gray-400 font-mono text-[10px]">OFFICE HOURS</div>
                  <div className="text-white font-bold text-sm mt-0.5">{COMPANY_INFO.officeHours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="font-sora font-extrabold text-lg text-white">
              Send Quick Message
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Message sent. Opening WhatsApp chat...");
                window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20GOYE,%20I%20sent%20a%20contact%20enquiry.`, '_blank');
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tunde Ade"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#FFD700]"
                />
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Email or Phone</label>
                <input
                  type="text"
                  required
                  placeholder="080... or email@domain.com"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#FFD700]"
                />
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">How can we help?</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Ask any question about CAC, Websites, or AI Bots..."
                  className="w-full bg-black border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-[#FFD700]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFD700] hover:bg-yellow-400 text-black font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
