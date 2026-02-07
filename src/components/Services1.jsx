import React, { useEffect } from "react";
import { 
  Landmark, Zap, CheckCircle2, PhoneCall, MapPin, 
  BarChart3, ShieldCheck, ArrowRight, MessageCircle, 
  HelpCircle, Settings2 
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

  // --- REDIRECTION HELPERS ---
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Bloomfield, I want to know more about your loan and marketing services.");
    window.open(`https://wa.me/919080691966?text=${msg}`, "_blank");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen text-slate-900 font-sans selection:bg-green-100" itemScope itemType="https://schema.org/Service">
      
      {/* --- SEO / GEO / AEO METADATA --- */}
      <head>
        <title>Bloomfield Services | Bank Loans & Digital Marketing Coimbatore</title>
        <meta name="description" content="Easy bank loans and digital marketing services in Coimbatore. Get personal loans, business loans, and SEO help." />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
      </head>

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-700">Official Services 2026</span>
            </div>
            {/* AEO Question Header */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]" itemProp="name">
              Need a Loan or <br />
              <span className="text-green-600">Online Growth?</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl" itemProp="description">
              We help you get bank loans easily and grow your business online. Our team makes complicated bank and tech steps very simple for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={handleWhatsApp} className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-green-600 transition-all flex items-center justify-center gap-2">
                <MessageCircle size={20} /> Chat on WhatsApp
              </button>
              <button onClick={scrollToContact} className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all">Contact Us</button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-green-500/5 rounded-[2.5rem] blur-2xl group-hover:bg-green-500/10 transition-colors"></div>
            <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
              <img src={HeroImage} alt="Best Bank Loan Agent and Digital Marketer in Coimbatore" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">How We Help You</h2>
            <div className="h-1.5 w-20 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bank Loans Section */}
          <div className="bg-white p-10 lg:p-14 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white mb-10">
              <Landmark size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6">Easy Bank Loans</h2>
            <p className="text-slate-500 mb-10 leading-relaxed text-lg font-light">
              We help you find and apply for the right bank loan. Whether it is for your home or your business, we handle the paperwork for you.
            </p>
            <ul className="space-y-5 mb-12 flex-grow">
              {["Personal & Home Loans", "Business & MSME Loans", "Low Interest Rates", "Fast Paperwork"].map((text) => (
                <li key={text} className="flex items-center gap-4 text-slate-700 font-medium">
                  <CheckCircle2 size={22} className="text-green-600" /> {text}
                </li>
              ))}
            </ul>
            <button onClick={handleWhatsApp} className="w-full py-5 bg-slate-50 rounded-2xl font-bold text-slate-900 hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2 group">
              Apply via WhatsApp <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Digital Marketing Section */}
          <div className="bg-white p-10 lg:p-14 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-10">
              <Zap size={32} className="text-green-400" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Digital Marketing</h2>
            <p className="text-slate-500 mb-10 leading-relaxed text-lg font-light">
              We make sure people find your business when they search on Google. We help you get more customers using SEO and social media.
            </p>
            <ul className="space-y-5 mb-12 flex-grow">
              {["Google Search Ranking (SEO)", "Facebook & Instagram Ads", "Website Design", "Google Maps Growth"].map((text) => (
                <li key={text} className="flex items-center gap-4 text-slate-700 font-medium">
                  <CheckCircle2 size={22} className="text-green-600" /> {text}
                </li>
              ))}
            </ul>
            <button onClick={scrollToContact} className="w-full py-5 bg-slate-50 rounded-2xl font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2 group">
              Get Free SEO Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Integration Banner */}
        <div className="mt-12 relative h-[300px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-xl border border-white">
            <img src={TechImage} alt="Modern Business Infrastructure in Coimbatore" className="w-full h-full object-cover grayscale opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-slate-900/20 flex items-center px-12 lg:px-20">
                <div className="max-w-xl text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Bloomfield?</h3>
                    <p className="text-white/80 font-light text-lg">We understand the Coimbatore market. We combine money help with digital tools to make your brand the best in the city.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- NEW SECTION 1: HOW WE WORK (GEO/AEO Content) --- */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple 3-Step Process</h2>
            <p className="text-slate-500">How we get you results quickly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                <Settings2 size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">1. Talk & Plan</h4>
              <p className="text-slate-500 text-sm">We listen to your needs and make a simple plan for your loan or website.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">2. Fast Processing</h4>
              <p className="text-slate-500 text-sm">We handle the bank talks or start your digital marketing immediately.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                <BarChart3 size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">3. See Success</h4>
              <p className="text-slate-500 text-sm">You get your loan approval or see your business growing on Google.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION 2: FAQ (AEO Targeted) --- */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <HelpCircle size={40} className="mx-auto text-green-600 mb-4" />
          <h2 className="text-4xl font-bold">Common Questions</h2>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-lg mb-2">How long does loan approval take?</h4>
            <p className="text-slate-500 text-sm">Usually, it takes 3 to 7 working days depending on the bank and your documents.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-lg mb-2">Can you help my business show on Google Maps?</h4>
            <p className="text-slate-500 text-sm">Yes, we specialize in Local SEO to help businesses in Coimbatore rank #1 on Google Maps.</p>
          </div>
        </div>
      </section>

      {/* --- REGIONAL FOCUS --- */}
      <section className="py-24 bg-slate-900 text-white mx-4 rounded-[4rem] px-6 text-center shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Coimbatore Local Expert</h2>
          <p className="text-slate-400 mb-16 text-lg font-light">Serving Gandhipuram, RS Puram, Peelamedu, and Saravanampatti with 100% trust.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
               <MapPin className="text-green-500 mx-auto mb-6" size={32} />
               <h4 className="font-bold text-xl mb-3">City Wide</h4>
               <p className="text-sm text-slate-400">Serving every area in Coimbatore.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
               <ShieldCheck className="text-green-500 mx-auto mb-6" size={32} />
               <h4 className="font-bold text-xl mb-3">Safe Process</h4>
               <p className="text-sm text-slate-400">Your information is always private.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
               <BarChart3 className="text-green-500 mx-auto mb-6" size={32} />
               <h4 className="font-bold text-xl mb-3">Real Growth</h4>
               <p className="text-sm text-slate-400">Proven results for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CONTACT CTA --- */}
      <section id="contact" className="py-40 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter text-slate-900">Start Today.</h2>
          <p className="text-slate-500 text-xl font-light mb-12">Get a free plan for your loan or marketing. Choose how you want to reach us below:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={handleWhatsApp} 
              className="inline-flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-green-700 transition-all shadow-xl"
            >
              WhatsApp Us <MessageCircle size={20} />
            </button>
            <a 
              href="tel:+919080691966" 
              className="inline-flex items-center justify-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-slate-700 transition-all shadow-xl"
            >
              Call Our Experts <PhoneCall size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}