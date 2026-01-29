import React from 'react';
import { 
  Landmark, Briefcase, CarFront,
  UserCheck, Search, Zap, MapPin, CheckCircle2, PhoneCall,
  Cpu, BarChart3
} from 'lucide-react';

// Verification: Ensure this path matches your folder name (assets vs assests)
import CenterImage from '../assests/bloomfield.png'; 

const services = [
  { icon: UserCheck, title: 'Personal & Home Loans', description: 'Quick, transparent approvals for your dream home or personal funding needs.' },
  { icon: Briefcase, title: 'Business Capital', description: 'Simplify borrowing with SME loans, working capital, and expansion finance.' },
  { icon: CarFront, title: 'Vehicle & Mortgage', description: 'Secure the best rates for commercial fleets, private cars, and property loans.' },
  { icon: Search, title: 'Digital Marketing', description: 'Growth strategies including SEO, PPC, and content that reach the right audience.' },
  { icon: Landmark, title: 'Bank Loan Experts', description: 'Professional guidance to find the right bank loan based on your needs.' },
  { icon: BarChart3, title: 'SEO & Branding', description: 'Build a sticky brand identity and rank higher on search engines organically.' },
];

export default function Services() {
  const leftServices = services.slice(0, 3);
  const rightServices = services.slice(3, 6);

  return (
    <section id="services" className="relative py-32 bg-[#e5e7eb] text-[#1a1a1a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-[95%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER CONTENT */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-black/5 mb-6 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase">Our Capabilities — Coimbatore</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-[#1a1a1a] mb-8 leading-[0.9]">
            Bank Loans & Digital <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-700">Marketing Hub.</span>
          </h2>
          <p className="text-xl text-neutral-500 font-light leading-relaxed max-w-3xl">
            We offer reliable bank loan services and result-driven digital marketing solutions to support both individuals and businesses in Coimbatore. Our goal is simple — make finance easy and help businesses grow online.
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

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center py-12 lg:py-0">
            <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10 w-full aspect-square max-w-[500px] rounded-[3.5rem] border-8 border-white bg-white shadow-2xl overflow-hidden group">
               <img src={CenterImage} alt="Central Hub" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
             <h3 className="text-4xl font-bold mb-6 tracking-tight text-black">Bank Loan Services</h3>
             <p className="text-neutral-500 mb-10 leading-relaxed font-light text-lg">We provide professional guidance to help you find the right bank loan based on your needs. By partnering with leading banks and financial institutions, we ensure a smooth, transparent, and stress-free loan process.</p>
             
             <div className="space-y-4 mb-12">
               {[
                 "Personal Loans – Quick approvals for emergency needs", 
                 "Home Loans – Affordable housing with trusted banks", 
                 "Business Loans – Funding solutions for MSMEs & startups", 
                 "Vehicle Loans – Competitive rates for private/commercial", 
                 "Mortgage Loans – Loan against property for larger needs"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-2xl border border-black/5 group hover:bg-white hover:border-green-500/30 transition-all duration-300">
                    <CheckCircle2 className="text-green-600 shrink-0" size={20}/> 
                    <span className="text-sm font-medium text-neutral-700">{item}</span>
                 </div>
               ))}
             </div>
             
             <div className="grid grid-cols-2 gap-4 pt-8 border-t border-black/5">
                {["Simple Documentation", "Transparent Guidance", "Fast Approvals", "Bank Support"].map((text, i) => (
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
             <p className="text-neutral-500 mb-10 leading-relaxed font-light text-lg">We help businesses grow online with easy and effective digital marketing strategies. Our focus is on reaching the right audience, increasing visibility, and delivering real, measurable results.</p>
             
             <div className="space-y-4 mb-12">
               {[
                 "Search Engine Optimization – Improve Google rankings", 
                 "Social Media Marketing – Build your brand presence", 
                 "Online Advertising – Reach customers via Google/Social Ads", 
                 "Content Creation – Engaging content that converts"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-2xl border border-black/5 group hover:bg-white hover:border-green-500/30 transition-all duration-300">
                    <CheckCircle2 className="text-green-600 shrink-0" size={20}/> 
                    <span className="text-sm font-medium text-neutral-700">{item}</span>
                 </div>
               ))}
             </div>

             <div className="grid grid-cols-2 gap-4 pt-8 border-t border-black/5">
                {["Customized Strategy", "Real Lead Focus", "Affordable Plans", "Honest Reporting"].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-green-700">
                    <Zap size={12} fill="currentColor" /> {text}
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* GEOGRAPHIC & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white p-10 rounded-[2.5rem] border border-white flex flex-col justify-center shadow-sm">
             <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-green-600" size={24} />
                <h4 className="font-bold text-xl">Service Areas</h4>
             </div>
             <p className="text-neutral-500 text-sm leading-relaxed">
               Serving Gandhipuram, RS Puram, Peelamedu, Saibaba Colony, and surrounding Coimbatore locations.
             </p>
          </div>

          <div className="lg:col-span-2 bg-[#09090b] rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px]"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">Ready for Growth?</h3>
              <p className="text-neutral-400 text-sm font-light">Contact us today for a free institutional consultation.</p>
            </div>
            <a href="tel:+919080691966" className="relative z-10 group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all shadow-xl shadow-green-900/20">
              Consult Now <PhoneCall size={16} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}