import React, { useEffect } from "react";
import { 
  Landmark, Zap, CheckCircle2, PhoneCall, MapPin, 
  BarChart3, ShieldCheck, ArrowRight 
} from 'lucide-react';
import Lenis from "@studio-freight/lenis";

// IMPORT YOUR IMAGES HERE
import HeroImage from "../assests/bf3.webp"; 
import TechImage from "../assests/bf2.webp";

export default function ServicesPage() {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#f9fafb] min-h-screen text-slate-900 font-sans selection:bg-green-100">
      
      {/* --- HERO SECTION: Split Layout --- */}
      <section className="pt-40 pb-20 px-6 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-700">Official Services 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Financial Loans & <br />
              <span className="text-green-600">Digital Growth.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              We provide professional bank loan assistance and result-driven digital marketing. Simple processes designed for real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-green-600 transition-all shadow-lg shadow-slate-200">Free Consultation</button>
              <button className="px-8 py-4 bg-white border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all">Our Process</button>
            </div>
          </div>
          
          {/* Hero Image 01 */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-green-500/5 rounded-[2.5rem] blur-2xl group-hover:bg-green-500/10 transition-colors"></div>
            <div className="relative h-[600px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src={HeroImage} 
                alt="Professional Financial Consulting" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">Expert Solutions</h2>
            <div className="h-1.5 w-20 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bank Loans Section */}
          <div className="bg-white p-10 lg:p-14 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg shadow-green-100">
              <Landmark size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6">Bank Loan Services</h2>
            <p className="text-slate-500 mb-10 leading-relaxed text-lg font-light">
              Reliable bank loan services to help individuals and businesses find the right financial solutions. We partner with leading institutions for personal, home, and business capital.
            </p>
            <ul className="space-y-5 mb-12 flex-grow">
              {["Personal & Home Loans", "Business & MSME Loans", "Vehicle & Mortgage Financing", "Transparent Documentation"].map((text) => (
                <li key={text} className="flex items-center gap-4 text-slate-700 font-medium">
                  <CheckCircle2 size={22} className="text-green-600" /> {text}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 bg-slate-50 rounded-2xl font-bold text-slate-900 hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2 group">
              Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Digital Marketing Section */}
          <div className="bg-white p-10 lg:p-14 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg shadow-slate-100">
              <Zap size={32} className="text-green-400" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Digital Marketing</h2>
            <p className="text-slate-500 mb-10 leading-relaxed text-lg font-light">
              We help businesses grow online with easy and effective digital marketing. Reaching the right audience and delivering real, measurable results for your local presence.
            </p>
            <ul className="space-y-5 mb-12 flex-grow">
              {["SEO & Google Search Ranking", "Social Media Strategy", "Online Ad Campaigns", "High-Quality Content Creation"].map((text) => (
                <li key={text} className="flex items-center gap-4 text-slate-700 font-medium">
                  <CheckCircle2 size={22} className="text-green-600" /> {text}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 bg-slate-50 rounded-2xl font-bold text-slate-900 hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2 group">
              Start Growing <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Integration Image 02: Full Width Professional Banner */}
        <div className="mt-12 relative h-[300px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-xl border border-white">
            <img 
                src={TechImage} 
                alt="Modern Digital Infrastructure" 
                className="w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-slate-900/20 flex items-center px-12 lg:px-20">
                <div className="max-w-xl text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Integrated Strategy.</h3>
                    <p className="text-white/80 font-light text-lg">Every loan and marketing strategy is designed with a deep understanding of the Coimbatore business corridors.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- REGIONAL FOCUS --- */}
      <section className="py-24 bg-slate-900 text-white mx-4 rounded-[4rem] px-6 text-center shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Focus in Coimbatore</h2>
          <p className="text-slate-400 mb-16 text-lg font-light">Our regional headquarters serves Gandhipuram, RS Puram, Peelamedu, and Saibaba Colony with direct bank links and growth strategies.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
               <MapPin className="text-green-500 mx-auto mb-6" size={32} />
               <h4 className="font-bold text-xl mb-3">Local Support</h4>
               <p className="text-sm text-slate-400 font-light">Direct consultation for businesses across Coimbatore.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
               <ShieldCheck className="text-green-500 mx-auto mb-6" size={32} />
               <h4 className="font-bold text-xl mb-3">Institutional Trust</h4>
               <p className="text-sm text-slate-400 font-light">Partnered with leading banks for reliable approvals.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
               <BarChart3 className="text-green-500 mx-auto mb-6" size={32} />
               <h4 className="font-bold text-xl mb-3">Proven ROI</h4>
               <p className="text-sm text-slate-400 font-light">Marketing results based on real customer data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CONTACT CTA --- */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter text-slate-900">Let's Talk.</h2>
          <p className="text-slate-500 text-xl font-light mb-12">Experience a simple path to capital and a clear strategy for digital growth. Your first consultation is free.</p>
          <a 
            href="tel:+919080691966" 
            className="inline-flex items-center gap-5 bg-green-600 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-2xl active:scale-95"
          >
            Call Our Experts <PhoneCall size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}