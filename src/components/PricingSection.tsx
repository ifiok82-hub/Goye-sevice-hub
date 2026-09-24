import React from 'react';
import { PageView, ServiceType } from '../types';
import { SERVICES_DATA } from '../data/mockData';
import { Check, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  setCurrentView: (view: PageView) => void;
  onSelectService: (service: ServiceType) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  setCurrentView,
  onSelectService
}) => {
  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-[#FFD700] uppercase font-semibold">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sora mt-2">
            No Hidden Fees. Guaranteed Results.
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Pay in NGN, USD, or Pi Network Coins. All packages include official certificates, live tracker, and documents vault.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((plan) => {
            const isBundle = plan.id === 'bundle';

            return (
              <div
                key={plan.id}
                className={`rounded-3xl border p-6 flex flex-col justify-between relative transition-all ${
                  isBundle
                    ? 'bg-gradient-to-b from-zinc-900 via-black to-zinc-950 border-[#FFD700] gold-glow scale-105 z-10'
                    : 'bg-zinc-900/60 border-gray-800 hover:border-gray-700'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                    {plan.category}
                  </span>
                  <h3 className="font-sora font-extrabold text-lg text-white mt-1">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {plan.tagline}
                  </p>

                  <div className="my-6 p-4 bg-black/80 rounded-2xl border border-gray-800">
                    <div className="text-2xl font-extrabold font-sora text-white">
                      ₦{plan.priceNgn.toLocaleString()}
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono mt-1">
                      <span className="text-gray-400">${plan.priceUsd} USD</span>
                      <span className="text-[#FFD700] font-bold">~ {plan.pricePi} Pi</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 my-4">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <span className="w-4 h-4 rounded-full bg-[#FFD700]/20 text-[#FFD700] flex items-center justify-center mt-0.5 shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800">
                  <button
                    onClick={() => {
                      onSelectService(plan.id);
                      setCurrentView('order');
                    }}
                    className={`w-full font-extrabold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition ${
                      isBundle
                        ? 'bg-[#FFD700] hover:bg-yellow-400 text-black'
                        : 'bg-black/90 hover:bg-black text-white border border-gray-700 hover:border-[#FFD700]'
                    }`}
                  >
                    {isBundle && <Zap className="w-4 h-4 fill-black" />}
                    {plan.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* COMPARISON TABLE */}
        <div className="mt-16 bg-zinc-950 border border-gray-800 rounded-3xl p-6 sm:p-8 overflow-x-auto">
          <div className="flex items-center gap-2 text-xs font-bold text-[#FFD700] uppercase font-mono mb-4">
            <ShieldCheck className="w-4 h-4 text-[#FFD700]" /> Feature Comparison Matrix
          </div>

          <table className="w-full text-left text-xs min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 font-mono text-[11px] uppercase">
                <th className="py-3 px-4">Feature / Deliverable</th>
                <th className="py-3 px-4">CAC Reg. (₦30k)</th>
                <th className="py-3 px-4">Website (₦80k)</th>
                <th className="py-3 px-4">AI Bot (₦150k)</th>
                <th className="py-3 px-4 text-[#FFD700]">Bundle (₦230k)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-300">
              <tr>
                <td className="py-3 px-4 font-semibold">Original CAC Certificate & TIN</td>
                <td className="py-3 px-4 text-emerald-400">✓ Included</td>
                <td className="py-3 px-4 text-gray-600">-</td>
                <td className="py-3 px-4 text-gray-600">-</td>
                <td className="py-3 px-4 text-[#FFD700] font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">5-Page Website + Free Domain</td>
                <td className="py-3 px-4 text-gray-600">-</td>
                <td className="py-3 px-4 text-emerald-400">✓ Included</td>
                <td className="py-3 px-4 text-gray-600">-</td>
                <td className="py-3 px-4 text-[#FFD700] font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">WhatsApp 24/7 AI Sales Bot</td>
                <td className="py-3 px-4 text-gray-600">-</td>
                <td className="py-3 px-4 text-gray-600">-</td>
                <td className="py-3 px-4 text-emerald-400">✓ Included</td>
                <td className="py-3 px-4 text-[#FFD700] font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Paystack / Flutterwave / Pi Integration</td>
                <td className="py-3 px-4 text-gray-600">-</td>
                <td className="py-3 px-4 text-emerald-400">✓ Included</td>
                <td className="py-3 px-4 text-emerald-400">✓ Included</td>
                <td className="py-3 px-4 text-[#FFD700] font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Delivery Time Guarantee</td>
                <td className="py-3 px-4">3 Days</td>
                <td className="py-3 px-4">48 Hours</td>
                <td className="py-3 px-4">2 Days</td>
                <td className="py-3 px-4 text-[#FFD700] font-bold">72 Hours Full Turnkey</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
