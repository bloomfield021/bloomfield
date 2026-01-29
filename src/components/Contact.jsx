import { useState } from 'react';
import { Mail, Phone, ShieldCheck, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';

// --- IMAGE IMPORTS ---
import ContactVisual from '../assests/bf4.webp';

export default function Contact() {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Processing...");
    const formData = new FormData(e.target);
    formData.append("access_key", "073a4656-7102-4ac8-ba38-3fd9b1afecd4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message transmitted successfully." : "System error. Please retry.");
    if (data.success) e.target.reset();
  };

  return (
    <section id="contact" className="relative py-40 bg-[#f8f9fa] text-[#0a0a0a] overflow-hidden min-h-screen selection:bg-green-500/30">
      
      {/* Background Infrastructure */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* --- 01. GLOBAL HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-10">
               <div className="h-[1px] w-12 bg-green-600"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-green-700">Project Initiation</span>
            </div>
            <h2 className="text-6xl md:text-[11rem] font-bold tracking-tighter leading-[0.8] mb-12">
              Build <br /> <span className="text-neutral-300">Beyond.</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl font-light leading-relaxed">
              Partner with Bloomfield to architect your financial capital and digital ecosystems on a global scale. 
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6 pb-2">
             <div className="p-6 bg-white border border-black/5 shadow-2xl rounded-3xl flex items-center gap-4">
                <ShieldCheck size={24} className="text-green-600" />
                <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 leading-none mb-1">Encrypted Line</p>
                    <p className="text-sm font-bold text-black">AES-256 SSL Secure</p>
                </div>
             </div>
          </div>
        </div>

        {/* --- 02. INTERFACE GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left: Contact Nodes */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-12">
                {[
                    { icon: Globe, label: "Global Reach", title: "Coimbatore Operations Hub", desc: "Serving the international corridor." },
                    { icon: Mail, label: "Correspondence", title: "bloomfieldrealtors@gmail.com", desc: "Response window: < 12h" },
                    { icon: Phone, label: "Voice Channel", title: "+91 90806 91966", desc: "Monday — Friday" }
                ].map((node, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="flex items-center gap-6 mb-4">
                            <node.icon size={18} className="text-green-600" />
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 group-hover:text-green-600 transition-colors">{node.label}</span>
                        </div>
                        <h4 className="text-2xl font-bold tracking-tight mb-2">{node.title}</h4>
                        <p className="text-sm text-neutral-400 font-light">{node.desc}</p>
                    </div>
                ))}
            </div>

            {/* Visual Anchor */}
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-black/5">
                <img src={ContactVisual} className="w-full h-full object-cover" alt="Hub" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                    <CheckCircle2 size={32} className="text-green-400 mb-4" />
                    <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">Verified Institutional <br /> Partnership active</p>
                </div>
            </div>
          </div>

          {/* Right: The Request Terminal */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-black/[0.03] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[100px]"></div>
                
                <form onSubmit={handleSubmit} className="space-y-16 relative z-10">
                    <div className="space-y-16">
                        {/* Name Field */}
                        <div className="group relative">
                            <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-4 block group-focus-within:text-green-600 transition-colors">Identity</label>
                            <input 
                                type="text" name="name" required placeholder="Name / Organization" 
                                className="w-full bg-transparent border-b border-black/10 py-4 text-2xl font-bold tracking-tighter placeholder-neutral-200 focus:outline-none focus:border-green-600 transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="group relative">
                                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-4 block group-focus-within:text-green-600 transition-colors">Channel</label>
                                <input 
                                    type="email" name="email" required placeholder="Email Address" 
                                    className="w-full bg-transparent border-b border-black/10 py-4 text-lg font-bold tracking-tight placeholder-neutral-200 focus:outline-none focus:border-green-600 transition-all"
                                />
                            </div>
                            <div className="group relative">
                                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-4 block group-focus-within:text-green-600 transition-colors">Direct</label>
                                <input 
                                    type="tel" name="phone" required placeholder="+1 / +91" 
                                    className="w-full bg-transparent border-b border-black/10 py-4 text-lg font-bold tracking-tight placeholder-neutral-200 focus:outline-none focus:border-green-600 transition-all"
                                />
                            </div>
                        </div>

                       
                    </div>

                    <div className="pt-8">
                        <button 
                            type="submit" 
                            className="group relative w-full py-8 bg-black text-white overflow-hidden rounded-full transition-all duration-700 hover:bg-green-600 hover:scale-[1.02]"
                        >
                            <span className="relative z-10 font-black uppercase tracking-[0.4em] text-[11px] flex items-center justify-center gap-4">
                                Transmit Protocol <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-green-600 transition-transform duration-500"></div>
                        </button>
                        {result && <p className="mt-8 text-center text-[10px] font-black uppercase tracking-widest text-green-700 animate-pulse">{result}</p>}
                    </div>
                </form>
            </div>
          </div>
        </div>

        {/* --- 03. FOOTER INTEL --- */}
        <div className="mt-40 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 group hover:opacity-100 transition-opacity">
            <p className="text-[9px] font-black uppercase tracking-[0.5em]">Global Operating Hours: 10:00am — 08:00pm GMT</p>
            <div className="flex gap-10">
                <span className="text-[9px] font-black uppercase tracking-[0.4em]">Node: 11.02.26</span>
                <span className="text-[9px] font-black uppercase tracking-[0.4em]">v.4.1 Global</span>
            </div>
        </div>

      </div>
    </section>
  );
}