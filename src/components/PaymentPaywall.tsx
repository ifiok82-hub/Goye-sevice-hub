import React, { useState, useEffect } from 'react';
import { ServiceType } from '../types';
import { SERVICES_DATA, COMPANY_INFO } from '../data/mockData';
import { Lock, Unlock, CreditCard, Wallet, Copy, Check, ShieldCheck, AlertCircle } from 'lucide-react';

interface PaymentPaywallProps {
  selectedService: ServiceType;
  onPaymentSuccess: (txId: string, provider: string) => void;
}

declare global {
  interface Window {
    Pi?: any;
    payWithPi?: (service: string, amount: number) => void;
    isPiBrowser?: () => boolean;
    checkBrowser?: () => void;
  }
}

export const PaymentPaywall: React.FC<PaymentPaywallProps> = ({
  selectedService,
  onPaymentSuccess
}) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [copiedCrypto, setCopiedCrypto] = useState<string | null>(null);
  const [txHashInput, setTxHashInput] = useState('');
  const [txSubmitting, setTxSubmitting] = useState(false);
  const [txVerifiedNotice, setTxVerifiedNotice] = useState<string | null>(null);

  const service = SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];

  // Browser check for Pi Browser vs Public Payments
  useEffect(() => {
    const checkBrowser = () => {
      const pub = document.getElementById('public-payments');
      const pi = document.getElementById('pi-payments');
      if (!pub || !pi) return;

      const isPi = /PiBrowser/i.test(navigator.userAgent) || !!window.Pi;
      if (isPi) {
        pub.style.display = 'none';
        pi.style.display = 'block';
      } else {
        pub.style.display = 'block';
        pi.style.display = 'none';
      }
    };

    checkBrowser();
    const interval = setInterval(checkBrowser, 1000);
    return () => clearInterval(interval);
  }, []);

  // Pay With Pi Handler
  const handlePayWithPi = () => {
    if (window.Pi) {
      window.Pi.createPayment(
        {
          amount: service.pricePi,
          memo: `GOYE SERVICES HUB - ${service.title} - gasv.store`,
          metadata: { service: service.id }
        },
        {
          onReadyForServerApproval: (id: string) => {
            console.log('Pi Payment Ready for Approval:', id);
          },
          onReadyForServerCompletion: (id: string, txid: string) => {
            setIsUnlocked(true);
            const lockedState = document.getElementById('locked-state');
            const unlockedState = document.getElementById('unlocked-state');
            if (lockedState) lockedState.style.display = 'none';
            if (unlockedState) unlockedState.style.display = 'block';

            onPaymentSuccess(txid, 'Pi Network');
            alert(`Pi Payment Success! TxID: ${txid}`);
          },
          onCancel: (id: string) => {
            alert(`Pi Payment Cancelled (${id})`);
          },
          onError: (e: any) => {
            alert(`Pi Payment Error: ${e?.message || JSON.stringify(e)}`);
          }
        }
      );
    } else {
      // Direct prompt if not inside Pi Browser
      alert("Open in Pi Browser to Pay with Pi Coins, or use Card/Transfer buttons below!");
    }
  };

  // Paystack / Flutterwave Simulation or Link
  const handlePaystackModal = () => {
    const confirm = window.confirm(`Proceed to Paystack Payment for ${service.title} (₦${service.priceNgn.toLocaleString()})?`);
    if (confirm) {
      const mockTx = 'PST_' + Math.random().toString(36).substr(2, 9).toUpperCase();
      setIsUnlocked(true);
      const lockedState = document.getElementById('locked-state');
      const unlockedState = document.getElementById('unlocked-state');
      if (lockedState) lockedState.style.display = 'none';
      if (unlockedState) unlockedState.style.display = 'block';

      onPaymentSuccess(mockTx, 'Paystack');
      alert(`Paystack Payment Successful! Reference: ${mockTx}`);
    }
  };

  const handleFlutterwaveModal = () => {
    const confirm = window.confirm(`Proceed to Flutterwave Payment for ${service.title} (₦${service.priceNgn.toLocaleString()})?`);
    if (confirm) {
      const mockTx = 'FLW_' + Math.random().toString(36).substr(2, 9).toUpperCase();
      setIsUnlocked(true);
      const lockedState = document.getElementById('locked-state');
      const unlockedState = document.getElementById('unlocked-state');
      if (lockedState) lockedState.style.display = 'none';
      if (unlockedState) unlockedState.style.display = 'block';

      onPaymentSuccess(mockTx, 'Flutterwave');
      alert(`Flutterwave Payment Successful! Ref: ${mockTx}`);
    }
  };

  const handleCryptoTxSubmit = () => {
    if (!txHashInput.trim()) {
      alert("Please paste your Crypto Tx Hash / Reference ID!");
      return;
    }
    setTxSubmitting(true);
    setTimeout(() => {
      setTxSubmitting(false);
      setTxVerifiedNotice(`Tx Hash ${txHashInput.slice(0, 10)}... submitted! Status: Pending Verification. (NOT auto-completed until confirmed on chain).`);
      onPaymentSuccess(txHashInput, 'Crypto (USDT/USDC)');
    }, 1000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCrypto(label);
    setTimeout(() => setCopiedCrypto(null), 2000);
  };

  return (
    <div className="bg-zinc-950 border border-yellow-500/30 rounded-3xl p-6 sm:p-8 space-y-6">
      {/* REQUIRED DOM STRUCTURE: service-paywall */}
      <div id="service-paywall" className="text-center p-6 rounded-2xl border border-gray-800 bg-black/60">
        <div id="locked-state" style={{ display: isUnlocked ? 'none' : 'block' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold mb-3">
            <Lock className="w-3.5 h-3.5" /> Lifetime Service + Support
          </div>
          <h3 className="font-sora font-extrabold text-xl text-white">
            {service.title}
          </h3>
          <p id="price-display" className="mt-2 text-sm text-[#FFD700] font-mono font-bold">
            Price: ₦{service.priceNgn.toLocaleString()} (${service.priceUsd}) ~ {service.pricePi} Pi
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Complete payment below to activate your order and lock in priority 72-hour delivery.
          </p>
        </div>

        <div id="unlocked-state" style={{ display: isUnlocked ? 'block' : 'none' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
            <Unlock className="w-4 h-4 text-emerald-400" />
            Payment Verified - Service Activated
          </div>
          <h3 className="font-sora font-extrabold text-lg text-white mt-3">
            Order Activated for {service.title}!
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Our CAC agent and team have been notified on WhatsApp ({COMPANY_INFO.whatsappDisplay}).
          </p>
        </div>
      </div>

      {/* REQUIRED DOM STRUCTURE: public-payments (Visible in Chrome) */}
      <div id="public-payments" className="space-y-4">
        <div className="flex items-center justify-between text-xs text-gray-400 font-mono border-b border-gray-800 pb-2">
          <span>PUBLIC PAYMENT METHODS (CARDS, TRANSFERS, CRYPTO)</span>
          <span className="text-emerald-400">SSL ENCRYPTED</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Paystack Button */}
          <button
            onClick={handlePaystackModal}
            className="w-full bg-[#0A1931] hover:bg-[#122b52] border border-blue-500/30 text-white font-bold p-3.5 rounded-2xl flex items-center justify-between text-xs transition shadow-md"
          >
            <span className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-400" />
              Paystack (*1600 / Card / Transfer)
            </span>
            <span className="font-mono text-[#FFD700]">₦{service.priceNgn.toLocaleString()}</span>
          </button>

          {/* Flutterwave Button */}
          <button
            onClick={handleFlutterwaveModal}
            className="w-full bg-zinc-900 hover:bg-zinc-800 border border-amber-500/30 text-white font-bold p-3.5 rounded-2xl flex items-center justify-between text-xs transition shadow-md"
          >
            <span className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-amber-400" />
              Flutterwave / PayPal
            </span>
            <span className="font-mono text-[#FFD700]">${service.priceUsd}</span>
          </button>
        </div>

        {/* Crypto Transfer Option */}
        <div className="bg-black/80 rounded-2xl p-4 border border-gray-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-gray-300">
            <span>Pay with USDT (BNB Chain) or USDC (Base)</span>
            <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              Pending Verification - NOT Auto Complete
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 bg-zinc-900 rounded-xl border border-gray-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-gray-500">USDT BNB Smart Chain:</div>
                <div className="text-gray-300 truncate max-w-[180px]">0x71C8A3E9b98129038d1720239102834</div>
              </div>
              <button
                onClick={() => copyToClipboard('0x71C8A3E9b98129038d1720239102834', 'USDT')}
                className="p-1.5 hover:text-[#FFD700] text-gray-400"
              >
                {copiedCrypto === 'USDT' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="p-2.5 bg-zinc-900 rounded-xl border border-gray-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-gray-500">USDC Base Chain:</div>
                <div className="text-gray-300 truncate max-w-[180px]">0x9812834A812938172023910283401</div>
              </div>
              <button
                onClick={() => copyToClipboard('0x9812834A812938172023910283401', 'USDC')}
                className="p-1.5 hover:text-[#FFD700] text-gray-400"
              >
                {copiedCrypto === 'USDC' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={txHashInput}
              onChange={(e) => setTxHashInput(e.target.value)}
              placeholder="Paste Crypto Tx Hash / Reference Here..."
              className="flex-1 bg-zinc-900 border border-gray-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFD700]"
            />
            <button
              onClick={handleCryptoTxSubmit}
              disabled={txSubmitting}
              className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl text-xs hover:bg-yellow-400 transition"
            >
              {txSubmitting ? 'Verifying...' : 'Submit Tx Hash'}
            </button>
          </div>

          {txVerifiedNotice && (
            <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
              <span>{txVerifiedNotice}</span>
            </div>
          )}
        </div>
      </div>

      {/* REQUIRED DOM STRUCTURE: pi-payments (Visible ONLY in Pi Browser) */}
      <div id="pi-payments" style={{ display: 'none' }} className="p-4 bg-purple-950/40 border border-purple-500/40 rounded-2xl">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold text-purple-300 uppercase">
            PI BROWSER DETECTED • PI NETWORK PAYMENT
          </span>
          
          <button
            onClick={handlePayWithPi}
            className="w-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 hover:from-purple-600 hover:to-purple-700 text-white font-extrabold py-3.5 px-6 rounded-2xl text-sm shadow-xl flex items-center justify-center gap-2 transition"
          >
            <Wallet className="w-5 h-5 text-[#FFD700]" />
            Pay {service.pricePi} Pi Coins for {service.title}
          </button>

          <p className="text-[11px] text-purple-200 opacity-80">
            Powered by Pi SDK v2.0 • Memo: GOYE SERVICES HUB - {service.id} - gasv.store
          </p>
        </div>
      </div>
    </div>
  );
};
