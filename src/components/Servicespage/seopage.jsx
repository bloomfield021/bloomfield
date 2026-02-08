import React, { useEffect, useState } from "react";
import { 
  Search, Globe,  ArrowRight, MessageCircle, 
  CheckCircle2, ChevronDown,Target, 
  TrendingUp, HelpCircle, FileText, MapPin, Award, Layers
} from "lucide-react";
import Lenis from "@studio-freight/lenis";

// --- IMAGE IMPORTS ---
import HeroDigitalImage from "../../assests/bf2.webp"; 
import SEOAnalysisImage from "../../assests/bf4.webp";
import GrowthBgImage from "../../assests/bf3.webp";

const seoPillars = [
  { 
    title: "Local SEO", 
    icon: MapPin, 
    desc: "Dominating GMB and local citations to ensure Coimbatore customers find you first.",
    features: ["Google Maps Ranking", "Local Citations", "Review Strategy"]
  },
  { 
    title: "Technical SEO", 
    icon: Layers, 
    desc: "Optimizing site speed, Core Web Vitals, and architecture for 2026 search standards.",
    features: ["Schema Markup", "Speed Audit", "Mobile First"]
  },
  { 
    title: "Content Strategy", 
    icon: FileText, 
    desc: "Building topical authority with long-form content that answers user intent.",
    features: ["Keyword Research", "Blog Management", "AEO Focus"]
  },
  { 
    title: "Link Building", 
    icon: Globe, 
    desc: "Ethical, high-authority backlink acquisition to boost your domain rating safely.",
    features: ["PR Outreach", "Guest Posting", "Brand Mentions"]
  }
];

export default function SEOPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Bloomfield, I want to discuss an SEO and Digital Marketing strategy for my business.");
    window.open(`https://wa.me/919080691966?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-[#FCFCFD] text-slate-900 font-sans selection:bg-green-100 selection:text-green-900 antialiased">
      
      {/* 1. HERO SECTION (Aesthetic & Text-First) */}
      <section className="relative pt-32 md:pt-48 pb-24 px-4 md:px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative z-10 order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-8 mt-12">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-green-700">Digital Dominance 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-8 text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>
              Rank Higher. <br />
              <span className="text-green-600 italic">Scale Faster.</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-slate-500 mb-12 leading-relaxed font-light tracking-tight">
              Our <span className="text-slate-900 font-medium border-b-2 border-green-200">SEO services in Coimbatore</span> turn search intent into sustainable revenue through data-backed digital strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button onClick={handleWhatsApp} className="px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-green-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-green-500/20">
                Discuss Strategy <MessageCircle size={18} />
              </button>
              <a href="#audit" className="px-10 py-5 bg-slate-950 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all text-center">
                Free SEO Audit
              </a>
            </div>
          </div>

          <div className="relative order-2">
            <div className="absolute inset-0 bg-green-500/5 blur-[120px] rounded-full" />
            <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white group">
              <img src={HeroDigitalImage} alt="Strategic Digital Marketing Coimbatore" className="w-full aspect-[4/5] object-cover transition-all duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SEARCH PILLARS (Internal Linking Focus) */}
      <section id="services" className="py-32 px-6 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {seoPillars.map((pillar, i) => (
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
                View Details <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LONG-FORM TOPICAL DEPTH (600+ Words: SEO Coimbatore) */}
      <section className="py-32 bg-white border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8">
            <h2 className="text-5xl md:text-6xl font-serif mb-12 text-slate-950 leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>Why Most Businesses <br/><span className="italic text-green-600 underline decoration-green-100 underline-offset-8">Fail at SEO</span></h2>
            <div className="prose prose-xl text-slate-500 font-light leading-relaxed space-y-10 max-w-none tracking-tight">
              <p>
                In the digital age of 2026, simply "having a website" is a liability if it isn't ranking. As a leading <strong>Digital Marketing Agency in Coimbatore</strong>, we see a recurring pattern: companies invest in beautiful designs that are invisible to search engines.
              </p>
              <p>
                SEO is no longer just about keywords; it's about <strong>User Intent</strong> and <strong>Topical Authority</strong>. Whether you are a manufacturing giant in Pollachi or a retail brand in RS Puram, your customers are asking specific questions. Our strategy involves building an ecosystem that answers those questions better than any competitor.
              </p>
              
              <div className="relative h-[400px] my-20 rounded-[4rem] overflow-hidden shadow-xl border border-slate-100">
                 <img src={SEOAnalysisImage} alt="Advanced SEO Data Analytics" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-slate-950/10" />
              </div>

              <p>
                We focus on <strong>Technical SEO</strong>—the foundation. If your site doesn't pass the Core Web Vitals or lacks a proper Schema Markup, Google won't trust you. Our Coimbatore-based experts audit every line of code to ensure search crawlers can index your most valuable "Money Pages" without friction.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
              <div className="p-12 bg-slate-950 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                <TrendingUp className="text-green-500 mb-8 transform group-hover:scale-110 transition-transform" size={48} />
                <h4 className="text-2xl font-serif mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>ROI Tracker</h4>
                <p className="text-sm text-slate-400 mb-10 leading-relaxed font-light">Stop measuring "Hits" and start measuring "Sales." We provide real-time attribution for every digital lead.</p>
                <button onClick={handleWhatsApp} className="w-full py-5 bg-green-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-700 transition-all">Request Audit</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AEO FAQ SECTION (Voice Search Optimization) */}
      <section className="py-32 px-6 bg-[#FCFCFD]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <HelpCircle size={48} className="mx-auto text-green-600 mb-6" />
            <h2 className="text-5xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Common Search Queries</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "How long does SEO take to show results in Coimbatore?", a: "Typically, local SEO results start appearing within 3 to 4 months. Competitive industrial keywords can take 6+ months to achieve stable Top 3 rankings." },
              { q: "What is the importance of Google Business Profile?", a: "For local Coimbatore businesses, GMB is the #1 driver of phone calls and store visits. We optimize your profile for hyper-local 'Near Me' searches." },
              { q: "Does a high site speed affect my ranking?", a: "Absolutely. Google's 2026 algorithm prioritizes user experience. A 1-second delay can result in a 20% drop in conversion and lower search visibility." }
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

      {/* 5. GROWTH METHODOLOGY (Visual Process) */}
      <section id="process" className="py-32 bg-slate-950 text-white px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>The Bloom Engine</h2>
            <div className="h-1 w-24 bg-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-4 gap-16 relative">
             {[
               { title: "Audit", desc: "Uncovering technical blockers and keyword gaps." },
               { title: "Content", desc: "Building semantic hubs for topical authority." },
               { title: "Backlinks", desc: "Acquiring high-trust editorial mentions." },
               { title: "Monetize", desc: "Optimizing conversion funnels for maximum ROI." }
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

      {/* 6. TECH STACK (Trust Signals) */}
      <section className="py-24 px-6 border-b border-slate-100 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12">Powered by Industry Leading Analytics</p>
          <div className="flex flex-wrap justify-center gap-16 grayscale opacity-30 hover:opacity-100 transition-opacity">
            {["SEMRUSH", "AHREFS", "SEARCH CONSOLE", "REACT", "GA4"].map(tech => (
              <span key={tech} className="text-3xl font-black tracking-tighter text-slate-950">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY BLOOMFIELD (Competitive Advantage) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Digital Growth <br/>Without Guesswork</h2>
            <div className="space-y-6">
              {[
                "100% White-Hat SEO. No risk of Google penalties.",
                "Customized Dashboard for real-time rank tracking.",
                "Direct access to Senior SEO Consultants (No Account Managers).",
                "Integrated Ads & SEO for total SERP coverage."
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
                <span className="text-5xl font-black text-green-600 block mb-2">200%</span>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Avg. Traffic Lift</p>
             </div>
             <div className="p-12 bg-slate-950 rounded-[3rem] text-center text-white">
                <span className="text-5xl font-black text-white block mb-2">50+</span>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Brands Managed</p>
             </div>
          </div>
        </div>
      </section>

      {/* 8. CASE STUDY TEASER (Social Proof) */}
      <section className="py-32 bg-green-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <Award className="mx-auto text-green-600 mb-8" size={48} />
           <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
             "We ranked #1 for 'Home Loans Coimbatore' in 120 days."
           </h3>
           <p className="text-lg text-slate-500 font-light mb-12 max-w-2xl mx-auto">See how we took a local financial startup and turned them into a city-wide authority through semantic content and technical optimization.</p>
           <button onClick={handleWhatsApp} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-green-700">View All Case Studies <ArrowRight size={14} /></button>
        </div>
      </section>

      {/* 9. GROWTH CALCULATOR CALLOUT */}
      <section className="py-24 px-4 md:px-6 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto bg-slate-900 rounded-[3rem] md:rounded-[5rem] p-12 md:p-32 relative group shadow-3xl">
          <img src={GrowthBgImage} alt="Scaling digital growth background" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-[3s]" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1]" style={{ fontFamily: "'Playfair Display', serif" }}>Scale Your <br/><span className="italic text-green-500">Presence.</span></h2>
            <p className="text-xl text-slate-400 mb-12 font-light tracking-tight">Stop letting competitors steal your traffic. Let us run a high-performance audit on your domain today.</p>
            <button onClick={handleWhatsApp} className="inline-flex items-center gap-6 px-14 py-7 bg-white text-slate-950 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-green-500 hover:text-white transition-all shadow-2xl">
              Initiate Growth Audit <MessageCircle size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 10. REGIONAL AUTHORITY & FOOTER */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-7xl md:text-9xl font-serif mb-16 text-slate-950 leading-[0.85] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>Let's <span className="text-green-600 italic">Dominate.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <Search className="text-green-600 mb-8 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-[10px] uppercase font-black text-slate-400 mb-4 tracking-widest">Coimbatore SEO</p>
              <p className="text-2xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Visibility Optimized</p>
            </div>
            <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <Target className="text-green-600 mb-8 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-[10px] uppercase font-black text-slate-400 mb-4 tracking-widest">Digital Strategy</p>
              <p className="text-2xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Conversion Focused</p>
            </div>
            <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <Globe className="text-green-600 mb-8 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-[10px] uppercase font-black text-slate-400 mb-4 tracking-widest">Global Reach</p>
              <p className="text-2xl font-serif text-slate-950" style={{ fontFamily: "'Playfair Display', serif" }}>Brand Built</p>
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