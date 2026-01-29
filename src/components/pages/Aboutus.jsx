import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { 
  ShieldCheck, Zap, Globe, Fingerprint, 
  Lightbulb, MonitorSmartphone, Code, Rocket, 
  BarChart3, Layers, ArrowUpRight
} from "lucide-react";

// --- IMAGE IMPORTS ---
// Replace these paths with your actual image files
import HeaderImage from "../../assests/bloomfield.png"; 
import FinTechImage from "../../assests/bf4.webp";
import BrandingImage from "../../assests/bf2.webp";
import TeamImage from "../../assests/bf3.webp";

const values = [
  { icon: ShieldCheck, title: "Institutional Integrity", description: "In the world of capital and code, trust is the only currency. We maintain rigorous compliance protocols." },
  { icon: Zap, title: "Velocity & Scale", description: "Our solutions are engineered to handle massive throughput and millions of concurrent users." },
  { icon: Globe, title: "Global Reach", description: "Providing the infrastructure for businesses to operate seamlessly across 40+ international markets." },
  { icon: Fingerprint, title: "Bespoke Architecture", description: "We reject off-the-shelf solutions in favor of custom systems that align with your DNA." },
];

const processSteps = [
  { title: "Phase 01: Strategic Discovery", description: "Deep-dive audit identifying friction points and untapped capital opportunities.", icon: Lightbulb },
  { title: "Phase 02: Systems Architecture", description: "Designing high-fidelity prototypes and structural diagrams for secure data flows.", icon: MonitorSmartphone },
  { title: "Phase 03: Precision Engineering", description: "Building ecosystems with Next.js and banking API integrations.", icon: Code },
  { title: "Phase 04: Deployment & Liquidity", description: "Monitoring real-time performance and optimizing for maximum capital efficiency.", icon: Rocket },
];

export default function Aboutus() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1.2 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="about" className="py-32 bg-[#e5e7eb] text-[#1a1a1a] relative overflow-hidden font-sans antialiased">
      {/* Background FX */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute rounded-full w-96 h-96 bg-green-400/10 blur-[120px] pointer-events-none transition-transform duration-300" style={{ transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- SECTION 1: INTRODUCTION WITH IMAGE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-8 backdrop-blur-md shadow-sm mt-16">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.2em] text-green-700 uppercase">Operational Excellence</span>
            </div>
            <h2 className="text-6xl md:text-[7.5rem] font-light tracking-tighter text-[#1a1a1a] mb-10 leading-[0.85]">
              A Legacy of <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-700">
                Data & Discipline.
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl leading-relaxed font-light">
              Founded at the intersection of high-finance and disruptive engineering, Bloomfield Ecosystem operates as a specialized architect for the 21st-century enterprise.
            </p>
          </div>
          <div className="lg:col-span-5 relative group">
            <div className="relative h-[450px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white transition-transform duration-700 group-hover:scale-[1.02]">
               <img src={HeaderImage} alt="Heritage" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  <p className="font-mono text-[10px] uppercase tracking-widest">Est. 2026</p>
                  <h4 className="text-xl font-bold">Innovation Center</h4>
               </div>
            </div>
          </div>
        </div>

        {/* Section 2: Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {values.map((v, i) => (
            <div key={i} className="group bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] border border-white hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-white mb-8 group-hover:bg-green-600 transition-colors">
                <v.icon size={20} />
              </div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed font-medium">{v.description}</p>
            </div>
          ))}
        </div>

        {/* --- SECTION 3: PILLAR BREAKDOWNS WITH IMAGES --- */}
        <div className="mb-40 space-y-40">
          
          {/* Pillar 01 - Financial Technology */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1 group">
               <div className="absolute -inset-4 bg-green-500/5 rounded-[4rem] blur-2xl group-hover:bg-green-500/10 transition-colors" />
               <div className="relative h-[550px] rounded-[4rem] overflow-hidden shadow-2xl border border-white">
                  <img src={FinTechImage} alt="Financial Systems" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-10 left-10 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                     <BarChart3 className="text-green-500 w-8 h-8" />
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-sm font-black text-green-700 uppercase tracking-[0.3em] mb-6">Pillar 01</h3>
              <h4 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight text-black">Financial Technology Infrastructure</h4>
              <p className="text-lg text-neutral-600 font-light leading-relaxed mb-10">
                We specialize in low-latency financial dashboards and liquidity management systems. Monitor asset movement and trade execution with micro-second precision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Automated Sweeps', 'Risk Assessment'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/40 rounded-2xl border border-black/5">
                    <div className="w-2 h-2 rounded-full bg-green-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillar 02 - Brand Engineering */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="text-sm font-black text-green-700 uppercase tracking-[0.3em] mb-6">Pillar 02</h3>
              <h4 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight text-black">Digital Brand Engineering</h4>
              <p className="text-lg text-neutral-600 font-light leading-relaxed mb-10">
                Identity is more than a logo; it is a psychological contract. We build brand identities that evoke authority, trust, and modern sophistication across every touchpoint.
              </p>
              <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] px-8 py-4 bg-black text-white rounded-full hover:bg-green-600 transition-all">
                The Brand Protocol <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            <div className="relative group">
               <div className="relative h-[550px] rounded-[4rem] overflow-hidden shadow-2xl border border-white">
                  <img src={BrandingImage} alt="Digital Design" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-all" />
               </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 4: THE EXECUTION PROTOCOL --- */}
        <div className="mb-40">
          <div className="text-center mb-24">
            <h3 className="text-sm font-black text-green-700 uppercase tracking-[0.3em] mb-6">The Execution Protocol</h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Four-Phase Methodology</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white/40 border border-white p-10 rounded-[3rem] hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white mb-8 group-hover:bg-green-600 transition-colors">
                  <step.icon size={22} />
                </div>
                <h4 className="text-lg font-bold mb-4 tracking-tight leading-tight">{step.title}</h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 5: FINAL CTA WITH BACKGROUND IMAGE --- */}
        <div className="relative rounded-[4rem] bg-[#09090b] text-white p-12 lg:p-24 overflow-hidden shadow-2xl group border border-white/5">
          <img src={TeamImage} alt="Ecosystem" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-1000 scale-105 group-hover:scale-100" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/40 to-[#09090b]/80" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-green-500/20 backdrop-blur-md border border-green-500/30 flex items-center justify-center text-green-500 mx-auto mb-10">
               <Layers size={32} />
            </div>
            <h3 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">Ready to Architect Your <span className="text-green-500 italic">Future?</span></h3>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">Join the growing ecosystem of visionaries who have chosen velocity without compromise. Let's build the infrastructure for your success.</p>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} 
              className="group px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full transition-all duration-500 hover:bg-green-500 hover:text-white hover:scale-105"
            >
              Initiate Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}