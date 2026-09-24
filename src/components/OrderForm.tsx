import React, { useState } from 'react';
import { ServiceType, OrderData } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/mockData';
import { PaymentPaywall } from './PaymentPaywall';
import { Send, CheckCircle2, Phone, Mail, Building, MessageSquare, ShieldCheck, User } from 'lucide-react';

interface OrderFormProps {
  initialService?: ServiceType;
  onOrderSubmitted: (order: OrderData) => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({
  initialService = 'cac',
  onOrderSubmitted
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+234');
  const [serviceNeeded, setServiceNeeded] = useState<ServiceType>(initialService);
  const [businessName, setBusinessName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [createdOrder, setCreatedOrder] = useState<OrderData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !businessName) {
      alert("Please fill in all required fields (*)");
      return;
    }

    const newOrder: OrderData = {
      id: 'GOYE-' + Math.floor(100000 + Math.random() * 900000),
      fullName,
      email,
      phone: `${countryCode}${phone.replace(/^0/, '')}`,
      countryCode,
      serviceNeeded,
      businessName,
      message,
      status: 'Submitted',
      createdAt: new Date().toISOString()
    };

    // Save to localStorage
    const existingOrdersJson = localStorage.getItem('goye_orders');
    const existingOrders: OrderData[] = existingOrdersJson ? JSON.parse(existingOrdersJson) : [];
    existingOrders.unshift(newOrder);
    localStorage.setItem('goye_orders', JSON.stringify(existingOrders));

    setCreatedOrder(newOrder);
    setSubmitted(true);
    onOrderSubmitted(newOrder);

    // FormSubmit POST in background if needed
    try {
      fetch(COMPANY_INFO.formSubmitEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrder)
      }).catch(() => {});
    } catch (err) {}

    // Open WhatsApp Chat with Pre-filled Message
    const selectedServiceData = SERVICES_DATA.find((s) => s.id === serviceNeeded);
    const waMessage = `*NEW ORDER - GOYE SERVICES HUB*%0A%0A*Order ID:* ${newOrder.id}%0A*Name:* ${fullName}%0A*Email:* ${email}%0A*Phone:* ${newOrder.phone}%0A*Business Name:* ${businessName}%0A*Service:* ${selectedServiceData?.title}%0A*Price:* ₦${selectedServiceData?.priceNgn.toLocaleString()} ($${selectedServiceData?.priceUsd} ~ ${selectedServiceData?.pricePi} Pi)%0A*Message:* ${message || 'None'}`;
    
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${waMessage}`;
    window.open(waUrl, '_blank');
  };

  const currentService = SERVICES_DATA.find((s) => s.id === serviceNeeded) || SERVICES_DATA[0];

  return (
    <div className="py-10 max-w-4xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-xs font-mono tracking-widest text-[#FFD700] uppercase font-semibold">
          Fast 72-Hour Turnaround
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-sora mt-2 text-white">
          Order Form & Service Activation
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Fill in your business details. We will contact you on WhatsApp within 10 minutes!
        </p>
      </div>

      {!submitted ? (
        <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#FFD700]" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Chief Emeka Okafor"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FFD700]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#FFD700]" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. emeka@business.com"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FFD700]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone & Country Selector */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FFD700]" />
                  Phone & Country *
                </label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-black border border-gray-700 rounded-xl px-2 py-3 text-xs text-white focus:outline-none focus:border-[#FFD700] w-24"
                  >
                    <option value="+234">+234 🇳🇬</option>
                    <option value="+1">+1 🇺🇸</option>
                    <option value="+44">+44 🇬🇧</option>
                    <option value="+233">+233 🇬🇭</option>
                    <option value="+254">+254 🇰🇪</option>
                  </select>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="8123456789"
                    className="flex-1 bg-black border border-gray-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FFD700]"
                  />
                </div>
              </div>

              {/* Service Needed Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" />
                  Service Needed *
                </label>
                <select
                  value={serviceNeeded}
                  onChange={(e) => setServiceNeeded(e.target.value as ServiceType)}
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FFD700]"
                >
                  <option value="cac">CAC Business Reg. (from ₦30k / $18 ~ 47.3 Pi)</option>
                  <option value="website">Website & Brand Design (from ₦80k / $50 ~ 131.5 Pi)</option>
                  <option value="bot">AI SME Automation Bot (from ₦150k / $90 ~ 236.8 Pi)</option>
                  <option value="bundle">3-in-1 ALL INCLUSIVE BUNDLE (₦230k / $140 ~ 368 Pi)</option>
                </select>
              </div>
            </div>

            {/* Proposed Business Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#FFD700]" />
                Proposed Business Name *
              </label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. GOYE GLOBAL LOGISTICS LTD"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FFD700]"
              />
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#FFD700]" />
                Additional Message / Specific Requirements (Optional)
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us any extra details about your business or preferences..."
                className="w-full bg-black border border-gray-700 rounded-xl p-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FFD700]"
              />
            </div>

            {/* Submit CTA Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FFD700] via-yellow-400 to-[#FFD700] text-black font-extrabold py-4 rounded-xl text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl hover:brightness-110 transition gold-glow"
            >
              <Send className="w-5 h-5 text-black" />
              Submit - We will contact on WhatsApp in 10 mins
            </button>
          </form>

          {/* Payment Paywall Integrated below form */}
          <div className="pt-6 border-t border-gray-800">
            <h4 className="text-xs font-bold text-gray-300 font-sora mb-3">
              Optional Instant Payment Paywall:
            </h4>
            <PaymentPaywall
              selectedService={serviceNeeded}
              onPaymentSuccess={(txId, provider) => {
                if (createdOrder) {
                  createdOrder.isUnlocked = true;
                  createdOrder.txHash = txId;
                  createdOrder.paymentMethod = provider;
                }
              }}
            />
          </div>
        </div>
      ) : (
        /* Order Submitted Success View */
        <div className="bg-zinc-900 border border-[#FFD700] rounded-3xl p-8 text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="font-sora font-extrabold text-2xl text-white">
            Order Submitted Successfully!
          </h3>

          <div className="p-4 bg-black/80 rounded-2xl border border-gray-800 text-xs text-gray-300 max-w-md mx-auto space-y-2 text-left font-mono">
            <div className="flex justify-between">
              <span className="text-gray-500">Order Ref:</span>
              <span className="text-[#FFD700] font-bold">{createdOrder?.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Business Name:</span>
              <span>{createdOrder?.businessName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Service:</span>
              <span>{currentService.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Status:</span>
              <span className="text-emerald-400 font-bold">{createdOrder?.status}</span>
            </div>
          </div>

          <p className="text-xs text-gray-300 max-w-md mx-auto">
            We have redirected you to WhatsApp. If the chat didn't open automatically, click the button below to connect with your assigned GOYE agent!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20GOYE,%20I%20just%20submitted%20order%20${createdOrder?.id}%20for%20${createdOrder?.businessName}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold px-6 py-3 rounded-full text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              Chat on WhatsApp Now
            </a>

            <button
              onClick={() => {
                setSubmitted(false);
                setFullName('');
                setEmail('');
                setPhone('');
                setBusinessName('');
                setMessage('');
              }}
              className="bg-zinc-800 text-white font-semibold px-6 py-3 rounded-full text-xs hover:bg-zinc-700"
            >
              Submit Another Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
