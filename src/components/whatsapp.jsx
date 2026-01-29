import React from 'react';
import { MessageCircle, PhoneCall, ArrowUpRight } from 'lucide-react';

export default function QuickContact() {
  const whatsappNumber = "+919080691966"; // Format: CountryCodeNumber
  const phoneNumber = "+919080691966";
  const message = encodeURIComponent("Hello Bloomfield, I am interested in architecting a new project.");

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* WhatsApp Link */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-white/80 backdrop-blur-md border border-white p-2 pr-6 rounded-full shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-1"
      >
        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
          <MessageCircle size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest text-green-700">Live Chat</span>
          <span className="text-sm font-bold text-black flex items-center gap-1">
            WhatsApp <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
        </div>
      </a>

      {/* Dialer Link */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative flex items-center gap-3 bg-white/80 backdrop-blur-md border border-white p-2 pr-6 rounded-full shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-1"
      >
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-green-600 transition-colors duration-300">
          <PhoneCall size={22} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Direct Line</span>
          <span className="text-sm font-bold text-black flex items-center gap-1">
            Call Now <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
        </div>
      </a>
    </div>
  );
}