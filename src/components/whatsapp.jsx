import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function QuickContact() {
  const whatsappNumber = "919080691966"; 
  const phoneNumber = "+919080691966";
  const message = encodeURIComponent("Hello Bloomfield, I saw your website and I'm interested in your services.");

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
      {/* WhatsApp Link */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-white/80 backdrop-blur-md border border-white flex items-center justify-center rounded-2xl shadow-2xl hover:shadow-green-500/30 transition-all duration-500 hover:-translate-y-1 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-green-600 scale-0 group-hover:scale-100 rounded-2xl transition-transform duration-500 origin-center"></div>
        <MessageCircle size={24} className="relative z-10 text-green-600 group-hover:text-white transition-colors duration-500" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* Dialer Link */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative w-14 h-14 bg-slate-950 flex items-center justify-center rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-1 active:scale-95"
        aria-label="Call Us"
      >
        <div className="absolute inset-0 bg-green-600 scale-0 group-hover:scale-100 rounded-2xl transition-transform duration-500 origin-center"></div>
        <PhoneCall size={22} className="relative z-10 text-white transition-transform duration-500 group-hover:rotate-12" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Call Now
        </span>
      </a>
    </div>
  );
}