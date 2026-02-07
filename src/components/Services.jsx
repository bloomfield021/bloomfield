import React from 'react';
import { 
  Landmark, Briefcase, CarFront, UserCheck, Search, Zap, 
  MapPin, CheckCircle2, PhoneCall, Cpu, BarChart3, 
  ArrowUpRight, Navigation, MessageCircle
} from 'lucide-react';

// Verification: Ensure this path matches your folder name (assets vs assests)
import CenterImage from '../assests/bloomfield.png'; 
import ScrollToTop from './ScrollToTop';

const services = [
  { icon: UserCheck, title: 'Personal & Home Loans', description: 'Get quick and easy approvals for your dream house or personal cash needs.' },
  { icon: Briefcase, title: 'Business Money', description: 'Simple loans for small businesses, startups, and company growth.' },
  { icon: CarFront, title: 'Vehicle & Property', description: 'Low interest rates for cars, commercial trucks, and loans against property.' },
  { icon: Search, title: 'Digital Growth', description: 'Smart ways to reach new customers using Google search and online ads.' },
  { icon: Landmark, title: 'Bank Experts', description: 'We talk to the banks for you to find the best loan deals.' },
  { icon: BarChart3, title: 'SEO & Branding', description: 'We help your business rank #1 on Google and build a professional brand.' },
];

export default function Services() {
  const leftServices = services.slice(0, 3);
  const rightServices = services.slice(3, 6);

  // REDIRECTION HELPERS
  const handleWhatsApp = () => {
    window.open(`https://wa.me/919080691966?text=Hi%20Bloomfield,%20I%20want%20to%20learn%20more%20about%20your%20services.`, "_blank");
  };

  return (
    <section id="services" className="relative py-32 bg-[#e5e7eb] text-[#1a1a1a] overflow-hidden" itemScope itemType="https://schema.org/Service">
      
      {/* --- SEO / GEO / AEO METADATA --- */}
      <meta itemProp="serviceType" content="Bank Loans and Digital Marketing" />
      <meta itemProp="areaServed" content="Coimbatore" />
      <meta property="og:description" content="Get easy bank loans and expert digital marketing in Coimbatore. We help you with personal loans, business loans, and Google SEO." />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-[95%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER CONTENT */}
        <div className="mb-24">
          <ScrollToTop />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-black/5 mb-6 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase">Support Center — Coimbatore</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-[#1a1a1a] mb-8 leading-[0.9]" itemProp="name">
            Loans & Online <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-700">Growth Hub.</span>
          </h2>
          <p className="text-xl text-neutral-500 font-light leading-relaxed max-w-3xl">
            We make bank loans easy and help your business grow on the internet. Whether you need money for a home or want more customers in **Coimbatore**, we have the right plan for you.
          </p>
        </div>

        {/* 3-COLUMN VISUAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center mb-48">
          {/* LEFT */}
          <div className="space-y-20 flex flex-col justify-center">
            {leftServices.map((s, i) => (
              <div key={i} className="group text-right">
                <div className="flex flex-row-reverse lg:flex-row items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-green-600 transition-colors tracking-tight">{s.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{s.description}</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-green-600 shadow-sm group-hover:shadow-xl group-hover:bg-black group-hover:text-white transition-all duration-500 shrink-0"><s.icon size={24} /></div>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE HUB */}
          <div className="relative flex justify-center py-12 lg:py-0">
            <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10 w-full aspect-square max-w-[500px] rounded-[3.5rem] border-8 border-white bg-white shadow-2xl overflow-hidden group">
               <img src={CenterImage} alt="Bloomfield Coimbatore Main Center" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button onClick={handleWhatsApp} className="px-6 py-3 bg-green-600 text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <MessageCircle size={14} /> WhatsApp Us
                  </button>
               </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-20 flex flex-col justify-center">
            {rightServices.map((s, i) => (
              <div key={i} className="group text-left">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-green-600 shadow-sm group-hover:shadow-xl group-hover:bg-black group-hover:text-white transition-all duration-500 shrink-0"><s.icon size={24} /></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-green-600 transition-colors tracking-tight">{s.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DETAILED SERVICE BLOCKS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-40">
          {/* LOANS */}
          <div className="bg-white p-12 rounded-[3rem] border border-white shadow-xl hover:shadow-2xl transition-all duration-700">
             <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-green-900/20">
                <Landmark size={32} />
             </div>
             <h3 className="text-4xl font-bold mb-6 tracking-tight text-black">Bank Loan Support</h3>
             <p className="text-neutral-500 mb-10 leading-relaxed font-light text-lg">We help you find the best bank loans with low interest rates. We handle all the hard paperwork so you can get your money fast and without any stress.</p>
             
             <div className="space-y-4 mb-12">
               {[
                 "Personal Loans – Easy cash for your needs", 
                 "Home Loans – Buy your house with top banks", 
                 "Business Loans – Get money for your startup or company", 
                 "Vehicle Loans – Best rates for cars and trucks", 
                 "Property Loans – Use your land to get cash"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-2xl border border-black/5 group hover:bg-white hover:border-green-500/30 transition-all duration-300">
                    <CheckCircle2 className="text-green-600 shrink-0" size={20}/> 
                    <span className="text-sm font-medium text-neutral-700">{item}</span>
                 </div>
               ))}
             </div>
             
             <div className="grid grid-cols-2 gap-4 pt-8 border-t border-black/5">
                {["Easy Documents", "Honest Advice", "Fast Approval", "Trusted Banks"].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-green-700">
                    <Zap size={12} fill="currentColor" /> {text}
                  </div>
                ))}
             </div>
          </div>

          {/* DIGITAL MARKETING */}
          <div className="bg-white p-12 rounded-[3rem] border border-white shadow-xl hover:shadow-2xl transition-all duration-700">
             <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white mb-8 shadow-lg shadow-black/20">
                <Cpu size={32} className="text-green-500" />
             </div>
             <h3 className="text-4xl font-bold mb-6 tracking-tight text-black">Digital Marketing</h3>
             <p className="text-neutral-500 mb-10 leading-relaxed font-light text-lg">We help your business grow online so more people find you. We use Google SEO and social media ads to bring you real customers and more sales.</p>
             
             <div className="space-y-4 mb-12">
               {[
                 "Google Ranking (SEO) – Show up on page #1", 
                 "Social Media – Build your brand on Instagram & Facebook", 
                 "Online Ads – Reach local customers instantly", 
                 "Web Design – Professional sites that look great"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-2xl border border-black/5 group hover:bg-white hover:border-green-500/30 transition-all duration-300">
                    <CheckCircle2 className="text-green-600 shrink-0" size={20}/> 
                    <span className="text-sm font-medium text-neutral-700">{item}</span>
                 </div>
               ))}
             </div>

             <div className="grid grid-cols-2 gap-4 pt-8 border-t border-black/5">
                {["Smart Strategy", "Real Customer Leads", "Affordable Price", "Monthly Reports"].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-green-700">
                    <Zap size={12} fill="currentColor" /> {text}
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* --- NEW SECTION 01: THE CITY HUB (MAP INTERACTION LOGIC) --- */}
        <div className="mb-40 p-12 bg-white rounded-[4rem] border border-white shadow-sm overflow-hidden relative group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                <Navigation size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Active in all over Coimbatore</h3>
              <p className="text-neutral-500 mb-8 font-light">We are physically present to help you. Our team visits businesses across the city to provide on-site loan help and marketing audits.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-neutral-50 rounded-3xl border border-black/5">
                   <p className="text-green-600 font-bold text-2xl mb-1">100%</p>
                   <p className="text-[10px] uppercase font-black tracking-widest text-neutral-400">City Coverage</p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-3xl border border-black/5">
                   <p className="text-green-600 font-bold text-2xl mb-1">150+</p>
                   <p className="text-[10px] uppercase font-black tracking-widest text-neutral-400">Happy Clients</p>
                </div>
              </div>
            </div>
            {/* Visual Map/Design Interaction Placeholder */}
            <div className="relative h-[350px] rounded-[3rem] bg-[#09090b] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
               <div className="relative text-center p-8">
                  <MapPin className="text-green-500 mx-auto mb-4 animate-bounce" size={48} />
                  <p className="text-white text-xl font-bold mb-2 uppercase tracking-tighter">Main Branch</p>
                  
               </div>
            </div>
          </div>
        </div>

        {/* --- NEW SECTION 02: QUICK ACTIONS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-1 bg-white p-10 rounded-[2.5rem] border border-white flex flex-col justify-center shadow-sm group hover:border-green-500/20 transition-all">
             <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-green-600" size={24} />
                <h4 className="font-bold text-xl">Fast Process</h4>
             </div>
             <p className="text-neutral-500 text-sm leading-relaxed">
               We use smart tools to make sure your loan application is submitted correctly and your SEO is updated daily.
             </p>
          </div>

          <div className="lg:col-span-2 bg-[#09090b] rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px]"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">Ready to Grow?</h3>
              <p className="text-neutral-400 text-sm font-light">Join the top businesses in Coimbatore using our services.</p>
            </div>
            <div className="flex gap-4 relative z-10">
              <button onClick={handleWhatsApp} className="group inline-flex items-center gap-4 px-8 py-5 bg-[#00ac3f] rounded-full font-black uppercase tracking-[0.1em] text-xs hover:scale-105 transition-all">
                WhatsApp Us <ArrowUpRight size={16} />
              </button>
              <a href="tel:+919080691966" className="group inline-flex items-center gap-4 px-8 py-5 bg-white text-black rounded-full font-black uppercase tracking-[0.1em] text-xs hover:bg-green-600 hover:text-white transition-all">
                Call Now <PhoneCall size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}