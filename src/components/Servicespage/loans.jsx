import React, { useEffect, useState } from "react";
import { 
   ArrowRight, MessageCircle, 
   ChevronDown, PieChart, Landmark as BankIcon, 
   Home, Briefcase, UserCheck, Globe, MapPin, HelpCircle
} from "lucide-react";
import Lenis from "@studio-freight/lenis";

// --- UPDATED IMAGE IMPORTS ---
import HeroFinanceImage from "../../assests/bf1.webp"; 
import MarketInsightImage from "../../assests/bf2.webp";
import EligibilityBgImage from "../../assests/bf3.webp";

const loanTypes = [
  { 
    title: "Personal Loans", 
    icon: UserCheck, 
    desc: "Unsecured funding for medical, travel, or personal milestones with minimal documentation.",
    keywords: ["Instant Approval", "No Collateral", "Flexible Tenure"]
  },
  { 
    title: "Home Loans", 
    icon: Home, 
    desc: "Competitive ROI for purchasing new apartments or independent houses in Coimbatore's rising zones.",
    keywords: ["Low Interest", "PMAY Benefits", "Balance Transfer"]
  },
  { 
    title: "Business / MSME Loans", 
    icon: Briefcase, 
    desc: "Capital support for Coimbatore's industrial sector to scale production and infrastructure.",
    keywords: ["Working Capital", "Machinery Loan", "MSME Schemes"]
  },
  { 
    title: "Mortgage Loans", 
    icon: BankIcon, 
    desc: "Unlock the value of your property for high-ticket funding with long-term repayment options.",
    keywords: ["Property Value", "Large Capital", "Low EMI"]
  }
];

export default function LoanPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Bloomfield, I am interested in applying for a loan. Please guide me through the process.");
    window.open(`https://wa.me/919080691966?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-[#FCFCFD] text-slate-900 font-sans selection:bg-green-100 selection:text-green-900 antialiased">
      
      {/* 1. HERO SECTION */}
<section className="relative pt-32 md:pt-40 pb-24 px-4 md:px-6 overflow-hidden bg-white border-b border-slate-100">
  <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    
    {/* Text Container: Naturally first in source, so it appears on top in mobile */}
    <div className="relative z-10 order-1">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-8 mt-12">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-green-700">Financial Authority 2026</span>
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-8 text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>
        Secure Your <br />
        <span className="text-green-600 italic">Capital Future.</span>
      </h1>
      <p className="max-w-xl text-lg md:text-xl text-slate-500 mb-12 leading-relaxed font-light tracking-tight">
        We provide the <span className="text-slate-900 font-medium border-b-2 border-green-200">best bank loans in Coimbatore</span> with a transparent, fast-track approval process.
      </p>
      <div className="flex flex-col sm:flex-row gap-5">
        <button onClick={handleWhatsApp} className="px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-green-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-green-500/20">
          Apply on WhatsApp <MessageCircle size={18} />
        </button>
        <a href="#process" className="px-10 py-5 bg-slate-950 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all text-center">
          Our Methodology
        </a>
      </div>
    </div>

    {/* Image Container: Naturally second, so it appears below text in mobile */}
    <div className="relative order-2">
      <div className="absolute inset-0 bg-green-500/5 blur-[120px] rounded-full" />
      <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white group">
        <img 
          src={HeroFinanceImage} 
          alt="Premium Loan Consulting Services in Coimbatore" 
          className="w-full aspect-[4/5] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
        />
      </div>
    </div>

  </div>
</section>

      {/* 2. CORE LOAN PILLARS */}
      <section id="loans" className="py-32 px-6 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loanTypes.map((loan, i) => (
            <div key={i} className="group p-12 bg-white rounded-[3.5rem] border border-slate-100 hover:border-green-200 hover:shadow-2xl transition-all duration-700">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-28 group-hover:bg-green-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                <loan.icon size={28} />
              </div>
              <h3 className="text-3xl font-serif mb-4 text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>{loan.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light tracking-tight">{loan.desc}</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {loan.keywords.map(kw => (
                  <span key={kw} className="px-3 py-1 bg-slate-50 text-[9px] font-black text-slate-400 rounded-full uppercase tracking-widest">{kw}</span>
                ))}
              </div>
              <button onClick={handleWhatsApp} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-green-600 group-hover:gap-4 transition-all">
                Initiate Application <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LONG-FORM AUTHORITY HUB */}
      <section className="py-32 bg-white border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8">
            <h2 className="text-5xl md:text-6xl font-serif mb-12 text-slate-950 leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>Expert Insights: The Coimbatore <br/><span className="italic text-green-600 underline decoration-green-100 underline-offset-8">Lending Landscape</span></h2>
            <div className="prose prose-xl text-slate-500 font-light leading-relaxed space-y-10 max-w-none tracking-tight">
              <p>
                In the bustling industrial hub of South India, securing a <strong>Home Loan in Coimbatore</strong> or an <strong>MSME Business Loan</strong> is no longer just about filling forms; it’s about strategic financial positioning.
              </p>
              <p>
                At Bloomfield, we specialize in "Profile Architecture." We analyze your <strong>CIBIL score</strong>, evaluate your collateral, and present your case to the bank in a way that ensures a 98% approval rating for clients in Gandhipuram, RS Puram, and beyond.
              </p>
              
              <div className="relative h-[400px] my-20 rounded-[4rem] overflow-hidden shadow-xl">
                 <img src={MarketInsightImage} alt="Financial Market Data Insight for Coimbatore" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-slate-950/20" />
              </div>

              <p>
                Beyond just approvals, we focus on <strong>Credit Health</strong>. Our pre-submission audit ensures that your file only hits the banker's desk when it is guaranteed to pass, protecting your financial future from rejection marks.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
              <div className="p-12 bg-slate-950 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group border border-white/10">
                <PieChart className="text-green-500 mb-8 transform group-hover:scale-110 transition-transform" size={48} />
                <h4 className="text-2xl font-serif mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>EMI Calculator</h4>
                <p className="text-sm text-slate-400 mb-10 leading-relaxed font-light">Plan your monthly repayments with surgical precision. Avoid the pitfalls of over-leveraging.</p>
                <button onClick={handleWhatsApp} className="w-full py-5 bg-green-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-700 transition-all">Calculate Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-32 px-6 bg-[#FCFCFD]">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <HelpCircle size={48} className="mx-auto text-green-600 mb-6" />
          <h2 className="text-5xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { q: "What is the current Home Loan ROI in Coimbatore?", a: "As of early 2026, Home Loan ROI ranges from 8.35% to 9.20% depending on your CIBIL score and employer profile." },
            { q: "How much Business Loan can I get without collateral?", a: "MSME loans up to ₹50 Lakhs can be processed under CGTMSE schemes without physical collateral for qualified businesses." },
            { q: "Is a CIBIL score of 700 enough for a Personal Loan?", a: "Yes, a score of 700 is considered 'Good,' though 750+ unlocks the most competitive rates." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-500">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full p-10 text-left flex justify-between items-center group"
              >
                <span className="text-xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>{faq.q}</span>
                <div className={`p-2 rounded-full border border-slate-100 transition-all duration-500 ${activeFaq === i ? 'bg-slate-950 text-white' : ''}`}>
                  <ChevronDown className={`transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} size={20} />
                </div>
              </button>
              <div className={`px-10 transition-all duration-500 ease-in-out overflow-hidden ${activeFaq === i ? 'max-h-48 pb-10' : 'max-h-0'}`}>
                <p className="text-slate-500 leading-relaxed font-light text-lg">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROCESS */}
      <section id="process" className="py-32 bg-slate-950 text-white px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Methodology</h2>
            <div className="h-1 w-24 bg-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-4 gap-16 relative">
             {[
               { title: "Analysis", desc: "Expert assessment of your financial health." },
               { title: "Optimization", desc: "Refining documentation for 100% compliance." },
               { title: "Direct Filing", desc: "Submission with top-tier banking partners." },
               { title: "Disbursement", desc: "Fund transfer to your account in record time." }
             ].map((step, idx) => (
               <div key={idx} className="relative group">
                 <span className="text-9xl font-black text-white/5 absolute -top-16 -left-8 group-hover:text-green-500/10 transition-colors duration-700">0{idx+1}</span>
                 <h4 className="text-3xl font-serif text-green-500 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h4>
                 <p className="text-slate-400 text-base leading-relaxed font-light">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 9. ELIGIBILITY */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto bg-slate-900 rounded-[5rem] p-12 md:p-32 relative group shadow-3xl">
          {/* Resolved ESLint alt warning here */}
          <img 
            src={EligibilityBgImage} 
            alt="Financial eligibility background illustration" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-[3s]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>Calculate Your <br/><span className="italic text-green-500">Power.</span></h2>
            <p className="text-xl text-slate-400 mb-12 font-light tracking-tight">Don't guess your financial strength. Let our experts provide an accurate assessment in minutes.</p>
            <button onClick={handleWhatsApp} className="inline-flex items-center gap-6 px-14 py-7 bg-white text-slate-950 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-green-500 hover:text-white transition-all shadow-2xl">
              Initiate Pre-Check <MessageCircle size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 10. FINAL CONTACT */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-7xl md:text-9xl font-serif mb-16 text-slate-950 leading-[0.85] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to <span className="text-green-600 italic">Scale?</span></h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <PhoneCall className="text-green-600 mb-8 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-[10px] uppercase font-black text-slate-400 mb-4 tracking-widest">Connect Directly</p>
              <p className="text-2xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>+91 90806 91966</p>
            </div>
            <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <MapPin className="text-green-600 mb-8 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-[10px] uppercase font-black text-slate-400 mb-4 tracking-widest">Headquarters</p>
              <p className="text-2xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Coimbatore, TN</p>
            </div>
            <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <Globe className="text-green-600 mb-8 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-[10px] uppercase font-black text-slate-400 mb-4 tracking-widest">Digital Presence</p>
              <p className="text-2xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>bloomfieldorg.com</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Styled Helper Icon Component
function PhoneCall(props) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}