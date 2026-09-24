import React, { useState, useEffect } from 'react';
import { PageView, ServiceType, OrderData } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PricingSection } from './components/PricingSection';
import { OrderForm } from './components/OrderForm';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { AdminPanel } from './components/AdminPanel';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { QuickAccessModal } from './components/QuickAccessModal';
import { LegalModal } from './components/LegalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedService, setSelectedService] = useState<ServiceType>('cac');
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [pwaPrompt, setPwaPrompt] = useState<any>(null);

  // PWA Install Event Listener
  useEffect(() => {
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setPwaPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallPwa = () => {
    if (pwaPrompt) {
      pwaPrompt.prompt();
      pwaPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          setPwaPrompt(null);
        }
      });
    } else {
      alert("To install GOYE SERVICES HUB on mobile: Tap browser menu (⋮ or share) -> 'Add to Home Screen'!");
    }
  };

  const handleSelectService = (service: ServiceType) => {
    setSelectedService(service);
    setCurrentView('order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div>
        {/* Main Header */}
        <Header
          currentView={currentView}
          setCurrentView={setCurrentView}
          onTapLogoForAdmin={() => {
            setCurrentView('admin');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          pwaPrompt={pwaPrompt}
          onInstallPwa={handleInstallPwa}
        />

        {/* View Switcher */}
        {currentView === 'home' && (
          <>
            <Hero setCurrentView={setCurrentView} onSelectService={handleSelectService} />
            <ServicesSection setCurrentView={setCurrentView} onSelectService={handleSelectService} />
            <PortfolioSection />
            <PricingSection setCurrentView={setCurrentView} onSelectService={handleSelectService} />
            <OrderForm initialService={selectedService} onOrderSubmitted={() => {}} />
            <AboutSection />
          </>
        )}

        {currentView === 'services' && (
          <ServicesSection setCurrentView={setCurrentView} onSelectService={handleSelectService} />
        )}

        {currentView === 'portfolio' && (
          <PortfolioSection />
        )}

        {currentView === 'pricing' && (
          <PricingSection setCurrentView={setCurrentView} onSelectService={handleSelectService} />
        )}

        {currentView === 'order' && (
          <OrderForm initialService={selectedService} onOrderSubmitted={() => {}} />
        )}

        {currentView === 'about' && (
          <AboutSection />
        )}

        {currentView === 'contact' && (
          <ContactSection />
        )}

        {currentView === 'admin' && (
          <AdminPanel onBackToHome={() => setCurrentView('home')} />
        )}

        {currentView === 'privacy' && (
          <div className="py-12 max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-sora font-extrabold text-[#FFD700]">Privacy Policy</h2>
            <p className="text-xs font-mono text-gray-400 mt-2">gasv.store/privacy • Goyedagosmess Enterprise RC BN3583773</p>
            <div className="mt-6 space-y-4 text-xs text-gray-300 leading-relaxed font-mono bg-zinc-950 p-6 rounded-2xl border border-gray-800">
              <p>1. Data collected for CAC registration and website setup is encrypted and stored in secure document vaults.</p>
              <p>2. We do not sell user data to third parties.</p>
              <p>3. Uploaded NIN / ID documents are exclusively used for CAC compliance.</p>
            </div>
          </div>
        )}

        {currentView === 'terms' && (
          <div className="py-12 max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-sora font-extrabold text-[#FFD700]">Terms & Conditions</h2>
            <p className="text-xs font-mono text-gray-400 mt-2">gasv.store/terms • Goyedagosmess Enterprise RC BN3583773</p>
            <div className="mt-6 space-y-4 text-xs text-gray-300 leading-relaxed font-mono bg-zinc-950 p-6 rounded-2xl border border-gray-800">
              <p>1. Service turnaround time guarantees: Business Name CAC (3 days), Website (48 hours), AI Bot (2 days).</p>
              <p>2. Payments via Paystack, Flutterwave, or Pi Network Coins activate immediate processing.</p>
              <p>3. Official accredited CAC filings guaranteed 100% authentic.</p>
            </div>
          </div>
        )}
      </div>

      {/* Floating Elements & Modals */}
      <FloatingWhatsApp />

      <QuickAccessModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Mobile Sticky Bottom Nav */}
      <BottomNav
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenMenuModal={() => setQrModalOpen(true)}
      />

      {/* Footer */}
      <Footer
        setCurrentView={setCurrentView}
        onOpenAdmin={() => setCurrentView('admin')}
        onOpenQrModal={() => setQrModalOpen(true)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />
    </div>
  );
}
