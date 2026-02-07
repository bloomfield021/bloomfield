import React from "react";
import { Factory, Mountain, MapPin, ArrowRight, Wind, Zap, Globe } from "lucide-react";

export default function ExploreCoimbatore() {
  return (
    <div 
      className="min-h-screen bg-[#f8fafc] font-sans overflow-hidden text-[#0f172a]"
      itemScope 
      itemType="https://schema.org/City"
    >
      {/* --- SEO / GEO / AEO METADATA --- */}
      <meta itemProp="name" content="Coimbatore, Tamil Nadu" />
      <meta itemProp="description" content="Explore Coimbatore: The industrial powerhouse and gateway to the Western Ghats. Known for textiles, manufacturing, and pleasant weather." />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />
      <meta name="geo.position" content="11.0168;76.9558" />

      {/* --- HERO SECTION: THE GATEWAY --- */}
      <section className="relative flex items-center justify-center min-h-[90vh] px-6">
        {/* Visual Background: Subtle Grid + Organic Blurs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
        
        <div className="relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
              Live Terminal: 11.0168° N, 76.9558° E
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-8 italic">
            COIMBATORE.
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed font-light">
            Welcome to the **Manchester of South India**. A city where heavy industry meets the calm hills of the Western Ghats.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group flex items-center gap-3 px-10 py-5 bg-black text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-emerald-600 transition-all shadow-xl active:scale-95">
              Explore City Map <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2 text-slate-400">
              <Wind size={18} className="text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Pleasant Weather Zone</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- DASHBOARD SECTION: CITY STATS (AEO Focused) --- */}
      <section className="py-24 px-6 relative border-y border-slate-200 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[3rem] overflow-hidden shadow-2xl">
          
          <CityFeature 
            icon={<Factory size={24} />} 
            title="Business Power"
            desc="Coimbatore is a hub for textiles and motors. It is the best place for new startups and big factories in Tamil Nadu."
          />

          <CityFeature 
            icon={<Mountain size={24} />} 
            title="Nature's Gate"
            desc="Sitting at the foot of the Western Ghats, the city offers cool breezes, waterfalls, and green forest views."
          />

          <CityFeature 
            icon={<Zap size={24} />} 
            title="Smart Growth"
            desc="Clean streets, great schools, and modern hospitals make this one of the most livable cities in India."
          />

        </div>
      </section>

      {/* --- GEOGRAPHIC HUB: LOCAL SECTORS --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-emerald-600 mb-6">
              <Globe size={20} />
              <span className="text-xs font-black uppercase tracking-widest">Regional Growth</span>
            </div>
            <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-[1.1]">
              The Heart of <br />
              <span className="text-slate-400">Tamil Culture & Trade.</span>
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed mb-10">
              Famous for its hardworking people and Siruvani water. From the Adiyogi statue to modern tech parks, the city is a blend of old and new.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-black italic">Top 10</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Livable Cities</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black italic">30k+</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Industries</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-emerald-600 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative aspect-square bg-[#09090b] rounded-[3rem] flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="text-center z-10 p-12">
                   <MapPin className="text-emerald-500 mx-auto mb-6 animate-bounce" size={48} />
                   <p className="text-white text-2xl font-bold mb-2">Western Ghats</p>
                   <p className="text-emerald-500/60 text-xs uppercase tracking-[0.3em] font-black">Foothills Region</p>
                   <div className="mt-8 pt-8 border-t border-white/5 space-y-2">
                      <p className="text-slate-500 text-[10px] uppercase tracking-widest">Gandhipuram • RS Puram</p>
                      <p className="text-slate-500 text-[10px] uppercase tracking-widest">Peelamedu • Avinashi Road</p>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER STRIP --- */}
      <footer className="py-20 border-t border-slate-200 text-center">
        <p className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">
          Coimbatore • South India • 2026
        </p>
      </footer>
    </div>
  );
}

function CityFeature({ icon, title, desc }) {
  return (
    <div className="bg-white p-12 group hover:bg-slate-50 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}