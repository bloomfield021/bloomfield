import React, { useEffect, useState } from "react";
import { 
 Megaphone, Users, Target, ArrowRight, 
  MessageCircle, CheckCircle2, ChevronDown, Rocket, 
  Globe, HelpCircle, Star, Zap, 
  Share2, MousePointer2, Award, Heart
} from "lucide-react";
import Lenis from "@studio-freight/lenis";

// --- IMAGE IMPORTS ---
import HeroMarketingImage from "../../assests/bf2.webp"; 
import StrategyAnalysisImage from "../../assests/bf1.webp";
import ImpactBgImage from "../../assests/bf3.webp";

const marketingPillars = [
  { 
    title: "Performance Ads", 
    icon: Megaphone, 
    desc: "ROI-focused Meta and Google Ads targeting Coimbatore's highest-converting demographics.",
    features: ["Precision Targeting", "Lead Generation", "Retargeting"]
  },
  { 
    title: "Social Authority", 
    icon: Share2, 
    desc: "Building a cult following for your brand through high-engagement content strategy.",
    features: ["Visual Storytelling", "Community Growth", "Influencer Tie-ups"]
  },
  { 
    title: "Conversion Design", 
    icon: MousePointer2, 
    desc: "High-speed landing pages built in React to ensure 0% traffic waste and max sales.",
    features: ["UI/UX Audit", "A/B Testing", "Speed Optimization"]
  },
  { 
    title: "Brand Strategy", 
    icon: Target, 
    desc: "Positioning your business as the premium choice in the Tamil Nadu market.",
    features: ["Logo Design", "Brand Voice", "Market Positioning"]
  }
];

export default function MarketingPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Bloomfield, I need a modern marketing strategy to grow my Coimbatore-based business.");
    window.open(`https://wa.me/919080691966?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-[#FCFCFD] text-slate-900 font-sans selection:bg-green-100 selection:text-green-900 antialiased">
      
      {/* 1. HERO SECTION (Text-First Mobile Flow) */}
      <section className="relative pt-32 md:pt-48 pb-24 px-4 md:px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative z-10 order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-8 mt-12">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-green-700">Growth Architects 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-8 text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>
              Make Your <br />
              <span className="text-green-600 italic">Brand Famous.</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-slate-500 mb-12 leading-relaxed font-light tracking-tight">
              Our <span className="text-slate-900 font-medium border-b-2 border-green-200">digital marketing agency in Coimbatore</span> combines behavioral data with world-class design to win you more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button onClick={handleWhatsApp} className="px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-green-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-green-500/20">
                Launch My Campaign <Rocket size={18} />
              </button>
              <a href="#work" className="px-10 py-5 bg-slate-950 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all text-center">
                Our Work
              </a>
            </div>
          </div>

          <div className="relative order-2">
            <div className="absolute inset-0 bg-green-500/5 blur-[120px] rounded-full" />
            <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white group">
              <img src={HeroMarketingImage} alt="Strategic Growth Marketing Agency Coimbatore" className="w-full aspect-[4/5] object-cover transition-all duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE GROWTH PILLARS */}
      <section id="services" className="py-32 px-6 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketingPillars.map((pillar, i) => (
            <div key={i} className="group p-12 bg-white rounded-[3.5rem] border border-slate-100 hover:border-green-200 hover:shadow-2xl transition-all duration-700">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-28 group-hover:bg-green-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                <pillar.icon size={28} />
              </div>
              <h3 className="text-3xl font-serif mb-4 text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>{pillar.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">{pillar.desc}</p>
              <ul className="space-y-3 mb-10">
                {pillar.features.map(feat => (
                  <li key={feat} className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full" /> {feat}
                  </li>
                ))}
              </ul>
              <button onClick={handleWhatsApp} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-green-600 group-hover:gap-4 transition-all">
                Learn Strategy <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LONG-FORM TOPICAL DEPTH (Marketing Coimbatore Focus) */}
      <section className="py-32 bg-white border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8">
            <h2 className="text-5xl md:text-6xl font-serif mb-12 text-slate-950 leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>Beyond Likes: Real ROI <br/><span className="italic text-green-600 underline decoration-green-100 underline-offset-8">For Local Brands</span></h2>
            <div className="prose prose-xl text-slate-500 font-light leading-relaxed space-y-10 max-w-none tracking-tight">
              <p>
                The digital landscape in Coimbatore has evolved. In 2026, social media is no longer a vanity tool—it's the primary engine for <strong>Lead Generation</strong>. Whether you are a luxury real estate developer in Peelamedu or an MSME unit in the SIDCO industrial estate, your customers are making buying decisions on their phones long before they reach your office.
              </p>
              <p>
                As a premier <strong>Digital Marketing Agency in Coimbatore</strong>, Bloomfield doesn't believe in "one-size-fits-all" templates. We build custom marketing funnels that align with the specific cultural and commercial pulse of Tamil Nadu.
              </p>
              
              <div className="relative h-[450px] my-20 rounded-[4rem] overflow-hidden shadow-xl border border-slate-100">
                 <img src={StrategyAnalysisImage} alt="Marketing Strategy and Data Visualization" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-slate-950/20" />
              </div>

              <p>
                Our <strong>Performance Marketing</strong> strategy utilizes AI-driven algorithms to ensure your ad spend is never wasted. We target "High-Intent" users—people specifically looking for your services in Coimbatore, Pollachi, and Tirupur—ensuring your brand is the only logical choice they see.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
              <div className="p-12 bg-slate-950 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                <Users className="text-green-500 mb-8 transform group-hover:scale-110 transition-transform" size={48} />
                <h4 className="text-2xl font-serif mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Lead Velocity</h4>
                <p className="text-sm text-slate-400 mb-10 leading-relaxed font-light">How many qualified leads is your current agency generating weekly? We guarantee a 30% increase in lead volume within the first 60 days.</p>
                <button onClick={handleWhatsApp} className="w-full py-5 bg-green-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-700 transition-all">Get Growth Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AEO FAQ SECTION (Marketing Voice Search) */}
      <section className="py-32 px-6 bg-[#FCFCFD]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <HelpCircle size={48} className="mx-auto text-green-600 mb-6" />
            <h2 className="text-5xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Marketing Intelligence</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Which platform is best for marketing a Coimbatore business?", a: "For B2C (Retail, Real Estate), Meta (Instagram/Facebook) dominates. For industrial MSMEs, Google Search and LinkedIn Ads provide the highest quality B2B leads." },
              { q: "How do you track the ROI of social media ads?", a: "We use advanced conversion tracking (Pixel/CAPI) to monitor every rupee spent. You will see exactly how many inquiries and sales each campaign generated." },
              { q: "What is the typical marketing budget for a small business?", a: "We recommend starting with a 'Pilot Budget' that allows for data collection. Once we identify winning creative strategies, we scale based on your desired Cost Per Lead (CPL)." }
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

      {/* 5. THE BLOOMFIELD FUNNEL (Process) */}
      <section id="work" className="py-32 bg-slate-950 text-white px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Campaign Lifecycle</h2>
            <div className="h-1 w-24 bg-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-4 gap-16 relative">
             {[
               { title: "Discovery", desc: "Analyzing your market position and competitor gaps." },
               { title: "Creative", desc: "Producing high-impact visuals and persuasive copy." },
               { title: "Deployment", desc: "Launching multi-channel ads with daily optimization." },
               { title: "Scaling", desc: "Doubling down on high-performance assets to boost ROI." }
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

      {/* 6. PLATFORM EXPERTISE (Trust Signals) */}
      <section className="py-24 px-6 border-b border-slate-100 bg-white text-center">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12">Certified Partner Agency</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-30 hover:opacity-100 transition-all duration-700">
            {["META ADS", "GOOGLE PREMIER", "LINKEDIN", "TIKTOK ADS", "CANVA PRO"].map(brand => (
              <span key={brand} className="text-2xl md:text-4xl font-black tracking-tighter text-slate-950">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. REVENUE IMPACT (The Competitive Edge) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Marketing That <br/>Actually Sells</h2>
            <div className="space-y-6">
              {[
                "Data-Driven Creative: We test 50+ ad variations per week.",
                "Omni-channel presence: Be everywhere your customer is.",
                "Zero-Waste Budgeting: 100% focus on bottom-line profit.",
                "Direct reporting: Weekly calls with your Senior Strategist."
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
                <span className="text-5xl font-black text-green-600 block mb-2">10M+</span>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Monthly Impressions</p>
             </div>
             <div className="p-12 bg-slate-950 rounded-[3rem] text-center text-white shadow-2xl shadow-slate-900/40">
                <span className="text-5xl font-black text-white block mb-2">5X</span>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Avg. ROAS</p>
             </div>
          </div>
        </div>
      </section>

      {/* 8. BRAND LOVE (Social Proof) */}
      <section className="py-32 bg-green-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <Heart className="mx-auto text-green-600 mb-8" size={48} fill="currentColor" />
           <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
             "Bloomfield transformed our digital presence. We're now the #1 retail brand in our category in Coimbatore."
           </h3>
           <p className="text-lg text-slate-500 font-light mb-12 max-w-2xl mx-auto">Join the 50+ local businesses scaling their revenue through Bloomfield's digital ecosystems.</p>
           <div className="flex justify-center gap-2">
              {[1,2,3,4,5].map(s => <Star key={s} className="text-green-600" fill="currentColor" size={16} />)}
           </div>
        </div>
      </section>

      {/* 9. THE IMPACT CALLOUT */}
      <section className="py-24 px-4 md:px-6 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto bg-slate-900 rounded-[3rem] md:rounded-[5rem] p-12 md:p-32 relative group shadow-3xl">
          <img src={ImpactBgImage} alt="Marketing growth and impact" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-[3s]" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1]" style={{ fontFamily: "'Playfair Display', serif" }}>Ignite Your <br/><span className="italic text-green-500">Growth.</span></h2>
            <p className="text-xl text-slate-400 mb-12 font-light tracking-tight">Stop spending on ads that don't convert. Let us build a high-performance marketing machine for your brand.</p>
            <button onClick={handleWhatsApp} className="inline-flex items-center gap-6 px-14 py-7 bg-white text-slate-950 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-green-500 hover:text-white transition-all shadow-2xl">
              Start Free Strategy Call <MessageCircle size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 10. FOOTER & GLOBAL REACH */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-7xl md:text-9xl font-serif mb-16 text-slate-950 leading-[0.85] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>Be <span className="text-green-600 italic">Unstoppable.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="p-12 bg-white rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <Zap className="text-green-600 mb-8 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-[10px] uppercase font-black text-slate-400 mb-4 tracking-widest">Coimbatore Ads</p>
              <p className="text-2xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Localized Targeting</p>
            </div>
            <div className="p-12 bg-white rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <Globe className="text-green-600 mb-8 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-[10px] uppercase font-black text-slate-400 mb-4 tracking-widest">Digital Presence</p>
              <p className="text-2xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Global Standards</p>
            </div>
            <div className="p-12 bg-white rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <Award className="text-green-600 mb-8 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-[10px] uppercase font-black text-slate-400 mb-4 tracking-widest">Success Rate</p>
              <p className="text-2xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Proven Growth</p>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
             <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Bloomfield Digital Ecosystems © 2026</p>
             <div className="flex gap-8">
                <a href="/privacy" className="text-slate-400 text-[10px] uppercase font-bold tracking-widest hover:text-green-600">Privacy</a>
                <a href="/terms" className="text-slate-400 text-[10px] uppercase font-bold tracking-widest hover:text-green-600">Terms</a>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}