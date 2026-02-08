import React, { useEffect, useState } from "react";
import { 
  ShieldCheck, Landmark,BarChart3, ArrowRight, 
  MessageCircle, CheckCircle2, ChevronDown,
  LineChart, Globe, HelpCircle, Star, Compass, 
  Scale, Layers, Award, Gem
} from "lucide-react";
import Lenis from "@studio-freight/lenis";

// --- IMAGE IMPORTS ---
import HeroConsultingImage from "../../assests/bf4.webp"; 
import StrategyAnalysisImage from "../../assests/bf1.webp";
import VisionBgImage from "../../assests/bf3.webp";

const consultingPillars = [
  { 
    title: "Capital Strategy", 
    icon: Landmark, 
    desc: "Optimizing your debt-to-equity ratio and securing low-cost capital for expansion.",
    features: ["Debt Restructuring", "Funding Roadmap", "Liquidity Management"]
  },
  { 
    title: "Risk Management", 
    icon: ShieldCheck, 
    desc: "Identifying financial blind spots and implementing 2026-standard compliance frameworks.",
    features: ["Audit Readiness", "Operational Risk", "Credit Protection"]
  },
  { 
    title: "Market Entry", 
    icon: Globe, 
    desc: "Strategic blueprints for Coimbatore brands scaling to national or global markets.",
    features: ["Feasibility Studies", "Scalability Audit", "Competitive Intelligence"]
  },
  { 
    title: "Wealth Advisory", 
    icon: Gem, 
    desc: "Sophisticated asset management and tax optimization for HNWIs and business owners.",
    features: ["Tax Planning", "Estate Strategy", "Portfolio Growth"]
  }
];

export default function ConsultingPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Bloomfield, I am looking for expert financial and strategic consulting for my business.");
    window.open(`https://wa.me/919080691966?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-[#FCFCFD] text-slate-900 font-sans selection:bg-green-100 selection:text-green-900 antialiased">
      
      {/* 1. HERO SECTION (Premium Text-First Flow) */}
      <section className="relative pt-32 md:pt-48 pb-24 px-4 md:px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative z-10 order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-8 mt-12">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-green-700">Strategic Advisory 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-8 text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>
              Architecting <br />
              <span className="text-green-600 italic">Business Value.</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-slate-500 mb-12 leading-relaxed font-light tracking-tight">
              Premium <span className="text-slate-900 font-medium border-b-2 border-green-200">financial consulting in Coimbatore</span> for visionaries who require data-driven clarity and absolute discretion.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button onClick={handleWhatsApp} className="px-10 py-5 bg-slate-950 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-900/20">
                Book Consultation <Compass size={18} />
              </button>
              <a href="#philosophy" className="px-10 py-5 border border-slate-200 text-slate-950 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all text-center">
                Our Philosophy
              </a>
            </div>
          </div>

          <div className="relative order-2">
            <div className="absolute inset-0 bg-green-500/5 blur-[120px] rounded-full" />
            <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white group">
              <img src={HeroConsultingImage} alt="Professional Financial Consulting" className="w-full aspect-[4/5] object-cover transition-all duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADVISORY PILLARS */}
      <section id="pillars" className="py-32 px-6 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {consultingPillars.map((pillar, i) => (
            <div key={i} className="group p-12 bg-white rounded-[3.5rem] border border-slate-100 hover:border-green-200 hover:shadow-2xl transition-all duration-700">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-28 group-hover:bg-green-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                <pillar.icon size={28} />
              </div>
              <h3 className="text-3xl font-serif mb-4 text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>{pillar.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">{pillar.desc}</p>
              <div className="flex flex-col gap-3 mb-10">
                {pillar.features.map(feat => (
                  <div key={feat} className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-green-500" /> {feat}
                  </div>
                ))}
              </div>
              <button onClick={handleWhatsApp} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-green-600 group-hover:gap-4 transition-all">
                Request Brief <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LONG-FORM AUTHORITY HUB (Strategy Coimbatore Focus) */}
      <section id="philosophy" className="py-32 bg-white border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8">
            <h2 className="text-5xl md:text-6xl font-serif mb-12 text-slate-950 leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>Engineering Resilience <br/><span className="italic text-green-600 underline decoration-green-100 underline-offset-8">For The 2026 Market</span></h2>
            <div className="prose prose-xl text-slate-500 font-light leading-relaxed space-y-10 max-w-none tracking-tight">
              <p>
                In the complex commercial ecosystem of Coimbatore, growth is often hindered not by a lack of vision, but by the weight of inefficient capital structures. At Bloomfield, our <strong>Financial Consulting services</strong> are designed to strip away fiscal friction and replace it with a lean, aggressive growth roadmap.
              </p>
              <p>
                Whether you are navigating the intricate tax laws of Tamil Nadu or preparing for a private equity round, our consultants provide the <strong>Strategic Advisory</strong> needed to protect your margins. We act as your fractional CFO, bringing Wall Street-level rigor to Coimbatore’s local brilliance.
              </p>
              
              <div className="relative h-[450px] my-20 rounded-[4rem] overflow-hidden shadow-xl border border-slate-100">
                 <img src={StrategyAnalysisImage} alt="Strategic Data Board" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-slate-950/20" />
              </div>

              <p>
                Our <strong>Corporate Restructuring</strong> methodology focuses on high-impact interventions. We analyze your cash flow cycles, debt obligations, and operational overheads to unlock trapped capital. This isn't just accounting; it’s business engineering tailored for the Manchester of South India.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
              <div className="p-12 bg-green-600 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                <LineChart className="text-white mb-8 transform group-hover:scale-110 transition-transform" size={48} />
                <h4 className="text-2xl font-serif mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Wealth Projection</h4>
                <p className="text-sm text-green-50 mb-10 leading-relaxed font-light">Where will your business be in 36 months? Our modeling tools provide a clear visual of your projected fiscal trajectory.</p>
                <button onClick={handleWhatsApp} className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all">Request Projection</button>
                <Layers className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AEO FAQ SECTION (Consulting Questions) */}
      <section className="py-32 px-6 bg-[#FCFCFD]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <HelpCircle size={48} className="mx-auto text-green-600 mb-6" />
            <h2 className="text-5xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Executive Inquiries</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "What defines Bloomfield's consulting approach?", a: "We combine traditional financial prudence with modern technological scalability. Our solutions are not generic reports; they are actionable implementation plans." },
              { q: "Do you handle MSME debt restructuring?", a: "Yes. We specialize in helping Coimbatore's industrial MSMEs optimize their existing loan portfolios and secure fresh capital under various government subsidy schemes." },
              { q: "Is our financial data shared with third parties?", a: "Never. We operate under strict Non-Disclosure Agreements (NDAs). Your corporate data is encrypted and handled only by senior partners." }
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
        </div>
      </section>

      {/* 5. CONSULTING FRAMEWORK (Process) */}
      <section id="process" className="py-32 bg-slate-950 text-white px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Strategic Lifecycle</h2>
            <div className="h-1 w-24 bg-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-4 gap-16 relative">
             {[
               { title: "Diagnosis", desc: "Granular audit of current fiscal and operational health." },
               { title: "Synthesis", desc: "Developing a bespoke strategy to address identified gaps." },
               { title: "Integration", desc: "Active oversight during the execution phase." },
               { title: "Evolution", desc: "Continuous refinement as your market share expands." }
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

      {/* 6. COMPLIANCE & TRUST (Trust Signals) */}
      <section className="py-24 px-6 border-b border-slate-100 bg-white text-center">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12">Advisory Standards & Compliance</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-30 hover:opacity-100 transition-all duration-700">
            {["SEBI GUIDELINES", "RBI COMPLIANT", "ISO 27001", "GDPR", "MSME GLOBAL"].map(brand => (
              <span key={brand} className="text-2xl md:text-3xl font-black tracking-tighter text-slate-950">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. QUANTIFIABLE RESULTS (The Competitive Edge) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Measurable Impact <br/>On Corporate Health</h2>
            <div className="space-y-6">
              {[
                "Average 15% reduction in annual operational overheads.",
                "Strategic debt-refinancing saving clients millions in ROI.",
                "Successful market-entry blueprints for 20+ local enterprises.",
                "Private-access wealth reports delivered quarterly."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-green-50 p-1 rounded-full"><CheckCircle2 size={20} className="text-green-600" /></div>
                  <p className="text-slate-600 font-light text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="p-12 bg-slate-50 rounded-[3rem] text-center border border-slate-100">
                <span className="text-5xl font-black text-green-600 block mb-2">₹1Cr+</span>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Assets Advised</p>
             </div>
             <div className="p-12 bg-slate-950 rounded-[3rem] text-center text-white shadow-2xl">
                <span className="text-5xl font-black text-white block mb-2">100%</span>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Privacy Guarantee</p>
             </div>
          </div>
        </div>
      </section>

      {/* 8. STEWARDSHIP (Social Proof) */}
      <section className="py-32 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <Scale className="mx-auto text-green-600 mb-8" size={48} />
           <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
             "Bloomfield isn't just a consultancy; they are a growth partner. Their capital restructuring saved our manufacturing unit from a severe liquidity crisis."
           </h3>
           <p className="text-lg text-slate-500 font-light mb-12 max-w-2xl mx-auto">High-level stewardship for Coimbatore’s leading family offices and industrial groups.</p>
           <div className="flex justify-center gap-6">
              <Award className="text-slate-300" size={32} />
              <Star className="text-slate-300" size={32} />
              <ShieldCheck className="text-slate-300" size={32} />
           </div>
        </div>
      </section>

      {/* 9. VISIONARY CALLOUT */}
      <section className="py-24 px-4 md:px-6 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto bg-slate-900 rounded-[3rem] md:rounded-[5rem] p-12 md:p-32 relative group shadow-3xl">
          <img src={VisionBgImage} alt="Future strategy vision background" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-[3s]" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1]" style={{ fontFamily: "'Playfair Display', serif" }}>Secure Your <br/><span className="italic text-green-500">Legacy.</span></h2>
            <p className="text-xl text-slate-400 mb-12 font-light tracking-tight">Don’t leave your business's financial future to chance. Let’s architect a legacy that lasts for generations.</p>
            <button onClick={handleWhatsApp} className="inline-flex items-center gap-6 px-14 py-7 bg-white text-slate-950 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-green-500 hover:text-white transition-all shadow-2xl">
              Initiate Strategy Brief <MessageCircle size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 10. FINAL CONTACT & DISCRETION */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-7xl md:text-9xl font-serif mb-16 text-slate-950 leading-[0.85] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>Strategic <span className="text-green-600 italic">Clarity.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="p-12 bg-white rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <BarChart3 className="text-green-600 mb-8 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-[10px] uppercase font-black text-slate-400 mb-4 tracking-widest">Financial Audits</p>
              <p className="text-2xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Full Transparency</p>
            </div>
            <div className="p-12 bg-white rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <ShieldCheck className="text-green-600 mb-8 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-[10px] uppercase font-black text-slate-400 mb-4 tracking-widest">Confidentiality</p>
              <p className="text-2xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Partner-Led Service</p>
            </div>
            <div className="p-12 bg-white rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <Globe className="text-green-600 mb-8 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-[10px] uppercase font-black text-slate-400 mb-4 tracking-widest">Local Insights</p>
              <p className="text-2xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Coimbatore Focus</p>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400">
             <p className="text-xs font-bold uppercase tracking-widest italic">Confidentiality is the cornerstone of our advisory.</p>
             <p className="text-xs font-bold uppercase tracking-widest">Bloomfield Strategy Ecosystems © 2026</p>
          </div>
        </div>
      </section>

    </div>
  );
}