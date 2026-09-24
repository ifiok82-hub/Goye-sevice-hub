import React, { useState } from 'react';
import { CERTIFICATE_SAMPLES, WEBSITE_SAMPLES, BOT_DEMO_SAMPLES } from '../data/mockData';
import { FileCheck, Globe, Bot, Shield, ExternalLink, Send, Sparkles, Eye, CheckCircle } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cac' | 'website' | 'bot'>('cac');
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATE_SAMPLES[0] | null>(null);
  
  // Interactive Bot Demo State
  const [selectedBotIndex, setSelectedBotIndex] = useState(0);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'bot'; text: string }>>([
    { role: 'bot', text: BOT_DEMO_SAMPLES[0].initialMessage }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendBotMessage = () => {
    if (!userInput.trim()) return;
    const msg = userInput;
    setUserInput('');
    setChatMessages(prev => [...prev, { role: 'user', text: msg }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const activeBot = BOT_DEMO_SAMPLES[selectedBotIndex];
      let reply = `Thank you for asking about "${msg}". As ${activeBot.name}, I can register your details, answer pricing questions, and auto-book appointments on WhatsApp in real time!`;
      
      if (msg.toLowerCase().includes('price') || msg.toLowerCase().includes('cost')) {
        reply = "Our prices: CAC Registration from ₦30,000 ($18 ~ 47.3 Pi), Website from ₦80,000 ($50 ~ 131.5 Pi), AI Bot from ₦150,000 ($90 ~ 236.8 Pi). Or 3-in-1 Bundle for ₦230,000!";
      } else if (msg.toLowerCase().includes('register') || msg.toLowerCase().includes('cac')) {
        reply = "CAC Business Name registration takes just 3 working days. All we need is your proposed business name and NIN/ID card!";
      }

      setChatMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 800);
  };

  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono tracking-widest text-[#FFD700] uppercase font-semibold">
            Our Proven Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sora mt-2">
            Verified Portfolio & Live Demos
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Real CAC Certificates, Modern Client Websites, and Live AI Bot Demonstrations.
          </p>

          {/* Sub-Tab Selector */}
          <div className="mt-6 inline-flex p-1 rounded-full bg-zinc-900 border border-gray-800">
            <button
              onClick={() => setActiveTab('cac')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'cac' ? 'bg-[#FFD700] text-black shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              CAC Certificates (6)
            </button>
            <button
              onClick={() => setActiveTab('website')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'website' ? 'bg-[#FFD700] text-black shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Globe className="w-4 h-4" />
              Websites Built (6)
            </button>
            <button
              onClick={() => setActiveTab('bot')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'bot' ? 'bg-[#FFD700] text-black shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Bot className="w-4 h-4" />
              AI Bot Demos (3)
            </button>
          </div>
        </div>

        {/* TAB 1: CAC CERTIFICATES (6 Samples) */}
        {activeTab === 'cac' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {CERTIFICATE_SAMPLES.map((cert) => (
              <div
                key={cert.id}
                className="bg-zinc-900 border border-gray-800 hover:border-[#FFD700]/50 rounded-2xl p-5 relative overflow-hidden group shadow-lg transition"
              >
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-3">
                  <span className="bg-[#FFD700]/10 text-[#FFD700] px-2.5 py-0.5 rounded border border-[#FFD700]/20 font-bold">
                    {cert.type}
                  </span>
                  <span>{cert.regDate}</span>
                </div>

                {/* Simulated Certificate Display with Blur */}
                <div className="relative rounded-xl border border-yellow-500/20 bg-gradient-to-b from-amber-950/30 to-black p-4 text-center my-3 group-hover:border-[#FFD700] transition-colors">
                  {/* Seal Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <Shield className="w-32 h-32 text-[#FFD700]" />
                  </div>

                  <p className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                    FEDERAL REPUBLIC OF NIGERIA
                  </p>
                  <p className="text-[11px] font-sora font-extrabold text-[#FFD700] mt-1">
                    CORPORATE AFFAIRS COMMISSION
                  </p>
                  
                  <div className="my-4 py-2 border-y border-dashed border-yellow-500/30 bg-black/60 backdrop-blur-sm">
                    <h4 className="font-sora font-extrabold text-sm text-white blur-[0.5px]">
                      {cert.businessName}
                    </h4>
                    <p className="text-xs font-mono text-[#FFD700] font-bold mt-1">
                      {cert.rcNumber}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
                    <span>SEAL OF CAC</span>
                    <span className="text-emerald-400 flex items-center gap-0.5">
                      <CheckCircle className="w-3 h-3" /> VERIFIED
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-gray-400 text-[11px]">Sensitive details blurred for privacy</span>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-[#FFD700] font-bold hover:underline flex items-center gap-1 text-xs"
                  >
                    <Eye className="w-3.5 h-3.5" /> Preview Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: WEBSITES BUILT (6 Samples) */}
        {activeTab === 'website' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {WEBSITE_SAMPLES.map((site) => (
              <div
                key={site.id}
                className="bg-zinc-900 border border-gray-800 hover:border-[#FFD700]/50 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg transition"
              >
                <div>
                  {/* Browser Mockup Header */}
                  <div className="bg-black/90 px-4 py-2 border-b border-gray-800 flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 truncate max-w-[180px]">
                      {site.url}
                    </span>
                  </div>

                  {/* Visual Preview Box */}
                  <div
                    className="p-6 h-40 flex flex-col justify-between relative overflow-hidden"
                    style={{ backgroundColor: site.color }}
                  >
                    <span className="text-[10px] uppercase font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-black/40 text-white w-max">
                      {site.category}
                    </span>
                    <div>
                      <h4 className="font-sora font-extrabold text-lg text-white">
                        {site.title}
                      </h4>
                      <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                        {site.description}
                      </p>
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="p-4 bg-zinc-950 space-y-2">
                    <div className="text-[11px] text-gray-400 font-semibold">Included Features:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {site.features.map((feat, idx) => (
                        <span key={idx} className="text-[10px] bg-zinc-800 text-gray-300 px-2 py-0.5 rounded border border-gray-700">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-800 bg-zinc-900 flex justify-between items-center">
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> 48-Hour Delivery
                  </span>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#FFD700] text-black font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 hover:bg-yellow-400 transition"
                  >
                    Demo Link <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: AI BOT DEMOS (Interactive Chat Playground) */}
        {activeTab === 'bot' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            {/* Bot Selector List */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-sora font-bold text-lg text-white">
                Select an AI Bot to Test Live:
              </h3>

              {BOT_DEMO_SAMPLES.map((bot, index) => (
                <div
                  key={bot.id}
                  onClick={() => {
                    setSelectedBotIndex(index);
                    setChatMessages([{ role: 'bot', text: bot.initialMessage }]);
                  }}
                  className={`p-5 rounded-2xl border cursor-pointer transition ${
                    selectedBotIndex === index
                      ? 'bg-gradient-to-r from-zinc-900 to-black border-[#FFD700] shadow-lg'
                      : 'bg-zinc-900/60 border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FFD700] uppercase">
                      {bot.platform}
                    </span>
                    {selectedBotIndex === index && (
                      <span className="text-[10px] bg-emerald-500 text-black font-bold px-2 py-0.5 rounded">
                        Active Testing
                      </span>
                    )}
                  </div>
                  <h4 className="font-sora font-bold text-base text-white mt-2">
                    {bot.name}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {bot.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Live Chat Screen */}
            <div className="lg:col-span-7 bg-zinc-950 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[520px]">
              {/* Chat Header */}
              <div className="bg-zinc-900 px-6 py-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sora font-bold text-sm text-white">
                      {BOT_DEMO_SAMPLES[selectedBotIndex].name}
                    </h4>
                    <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live AI Engine Active
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-gray-400 bg-black/60 px-3 py-1 rounded-full border border-gray-800">
                  {BOT_DEMO_SAMPLES[selectedBotIndex].platform}
                </span>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-black/40">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-[#FFD700] text-black font-semibold rounded-br-none'
                          : 'bg-zinc-800 text-gray-100 border border-gray-700 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-zinc-800 text-gray-400 px-4 py-2 rounded-2xl text-xs flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFD700] animate-spin" />
                      AI Bot is typing response...
                    </div>
                  </div>
                )}
              </div>

              {/* Prompt Suggestions & Input Bar */}
              <div className="p-4 bg-zinc-900 border-t border-gray-800 space-y-3">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 text-[11px]">
                  <span className="text-gray-500 font-mono shrink-0">Try asking:</span>
                  <button
                    onClick={() => setUserInput("How much is business registration?")}
                    className="bg-black/60 text-gray-300 hover:text-[#FFD700] px-3 py-1 rounded-full border border-gray-800 shrink-0"
                  >
                    "How much is CAC?"
                  </button>
                  <button
                    onClick={() => setUserInput("Can I pay with Pi Network coins?")}
                    className="bg-black/60 text-gray-300 hover:text-[#FFD700] px-3 py-1 rounded-full border border-gray-800 shrink-0"
                  >
                    "Can I pay with Pi?"
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendBotMessage()}
                    placeholder="Type a test question for this AI bot..."
                    className="flex-1 bg-black border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFD700]"
                  />
                  <button
                    onClick={handleSendBotMessage}
                    className="bg-[#FFD700] hover:bg-yellow-400 text-black font-bold p-2.5 rounded-xl transition"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-zinc-900 border border-yellow-500/40 rounded-3xl max-w-lg w-full p-6 relative text-center">
              <h3 className="font-sora font-extrabold text-lg text-[#FFD700]">
                CAC Sample Certificate
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {selectedCert.businessName} • {selectedCert.rcNumber}
              </p>

              <div className="my-6 p-6 border-2 border-yellow-500/30 rounded-2xl bg-gradient-to-b from-amber-950/40 to-black text-center relative">
                <Shield className="w-24 h-24 text-[#FFD700]/20 mx-auto" />
                <p className="font-bold text-white text-base mt-2 blur-[0.5px]">
                  {selectedCert.businessName}
                </p>
                <p className="text-xs font-mono text-[#FFD700] mt-1">{selectedCert.rcNumber}</p>
                <p className="text-[10px] text-gray-400 mt-2">Registered on {selectedCert.regDate}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full bg-gray-800 text-white font-bold py-2.5 rounded-xl text-xs"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
