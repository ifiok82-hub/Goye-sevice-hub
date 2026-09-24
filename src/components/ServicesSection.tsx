import React from 'react';
import { PageView, ServiceType } from '../types';
import { SERVICES_DATA } from '../data/mockData';
import { FileCheck, Globe, Bot, Check, ArrowRight, Clock, ShieldCheck, Zap } from 'lucide-react';

interface ServicesSectionProps {
  setCurrentView: (view: PageView) => void;
  onSelectService: (service: ServiceType) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  setCurrentView,
  onSelectService
}) => {
  const getIcon = (id: ServiceType) => {
    switch (id) {
      case 'cac':
        return FileCheck;
      case 'website':
        return Globe;
      case 'bot':
        return Bot;
      case 'bundle':
        return Zap;
      default:
        return FileCheck;
    }
  };

  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-[#FFD700] uppercase font-semibold">
            Core Client Getter Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sora mt-2 tracking-tight">
            The 3 Essential Growth Pillars Every Business Needs
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            We handle your legal registration, build your modern online store or website, and automate your customer sales 24/7.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = getIcon(service.id);
            const isBundle = service.id === 'bundle';

            return (
              <div
                key={service.id}
                className={`rounded-3xl border transition-all overflow-hidden ${
                  isBundle
                    ? 'bg-gradient-to-r from-black via-zinc-900 to-black border-[#FFD700] gold-glow'
                    : 'bg-zinc-900/60 border-gray-800 hover:border-[#FFD700]/50'
                } p-6 sm:p-8 relative`}
              >
                {service.badge && (
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    <span className="bg-[#FFD700] text-black text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {service.badge}
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                          Service {index + 1} • {service.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-sora text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-gray-300 font-medium">
                      {service.tagline}
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                          <span className="w-4 h-4 rounded-full bg-[#FFD700]/20 text-[#FFD700] flex items-center justify-center mt-0.5 shrink-0">
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-black/80 rounded-2xl p-6 border border-gray-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mb-2">
                        <Clock className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Timeline: {service.deliveryTime}</span>
                      </div>

                      <div className="space-y-1">
                        <div className="text-2xl sm:text-3xl font-extrabold font-sora text-white">
                          ₦{service.priceNgn.toLocaleString()}{' '}
                          <span className="text-xs font-normal text-gray-400">
                            (${service.priceUsd})
                          </span>
                        </div>
                        <div className="text-xs font-mono text-[#FFD700]">
                          ~ {service.pricePi} Pi Coins
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        onClick={() => {
                          onSelectService(service.id);
                          setCurrentView('order');
                        }}
                        className="w-full bg-[#FFD700] hover:bg-yellow-400 text-black font-extrabold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition"
                      >
                        {service.ctaText}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
