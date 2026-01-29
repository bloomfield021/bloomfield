import React, { useState } from 'react';
import { Mail, Phone, Send, ShieldCheck, Globe, } from 'lucide-react';
import ContactImage from '../../assests/bloomfield.png'; 

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Transmitting...");

    const formData = new FormData(event.target);
    formData.append("access_key", "073a4656-7102-4ac8-ba38-3fd9b1afecd4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message transmitted successfully." : "Connection error. Please try again.");
    if (data.success) event.target.reset();
  };

  return (
    <div className="bg-[#e5e7eb] selection:bg-green-500/30 font-sans antialiased">
      <section id="contact" className="relative py-32 overflow-hidden min-h-screen">
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12">
          
          {/* Header */}
          <div className="mb-24 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-10 backdrop-blur-md mt-16 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-700">
                Initiate Partnership
              </span>
            </div>
            
            <h2 className="text-6xl md:text-[9rem] font-extralight tracking-tighter text-[#1a1a1a] mb-10 leading-[0.8]">
              Ready to <span className="text-neutral-400 italic">Scale?</span><br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-800">
                Engineer Growth.
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed font-light max-w-2xl tracking-tight">
              Whether you require capital injection or digital transformation, our architects are ready to blueprint your next milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Visuals & Info */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="relative h-[450px] lg:h-[550px] rounded-[4rem] overflow-hidden group shadow-2xl border border-white/20">
                <img
                  src={ContactImage}
                  alt="Corporate HQ"
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute top-10 left-10 px-6 py-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full flex items-center gap-3">
                  <ShieldCheck className="text-green-500 w-4 h-4" />
                  <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">
                    Secured Protocol
                  </span>
                </div>

                <div className="absolute bottom-12 left-12 right-12 z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-green-500 w-5 h-5" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Regional HQ</span>
                  </div>
                  <h3 className="text-white text-4xl font-bold tracking-tighter mb-3 uppercase leading-none">
                    Coimbatore Corridor
                  </h3>
                  <p className="text-neutral-300 text-sm font-light max-w-xs leading-relaxed">
                    Strategic operations center for the industrial and technological corridors of South India.
                  </p>
                </div>
              </div>

              {/* Minimal Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Mail, label: "Digital Mail", value: "bloomfieldrealtors@gmail.com" },
                  { icon: Phone, label: "Direct Line", value: "+91 90806 91966" }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white/60 backdrop-blur-md border border-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-green-500 shadow-lg">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase text-neutral-400 block tracking-[0.3em] mb-1">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-black tracking-tight">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Terminal Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#09090b] rounded-[4rem] p-10 md:p-20 shadow-2xl relative overflow-hidden h-full border border-white/5">
                
                <div className="mb-16 relative z-10">
                  <h3 className="text-white text-4xl font-bold tracking-tighter uppercase mb-3 leading-none">Mission Brief</h3>
                  <div className="h-1 w-12 bg-green-600 rounded-full mb-6" />
                  <p className="text-neutral-400 text-sm font-light tracking-wide">
                    Define your project requirements and strategic goals.
                  </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-12 relative z-10">
                  
                  {/* Row 1: Identity & Channel */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group relative">
                      <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600 mb-4 block transition-colors group-focus-within:text-green-500">Identity</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Full Name"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-light focus:outline-none focus:border-green-500 transition-all placeholder-neutral-800"
                      />
                    </div>

                    <div className="group relative">
                      <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600 mb-4 block transition-colors group-focus-within:text-green-500">Channel</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-light focus:outline-none focus:border-green-500 transition-all placeholder-neutral-800"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number */}
                  <div className="group relative">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600 mb-4 block transition-colors group-focus-within:text-green-500">Direct Line</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 / Country Code"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-light focus:outline-none focus:border-green-500 transition-all placeholder-neutral-800"
                    />
                  </div>

                  

                  {/* Submit Action */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="group w-full py-7 bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] rounded-2xl transition-all duration-500 flex items-center justify-center gap-6 hover:bg-green-600 hover:text-white shadow-2xl active:scale-[0.98]"
                    >
                      <span>Transmit Data</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    {result && (
                      <p className={`text-center text-[10px] font-black uppercase tracking-[0.2em] mt-8 animate-pulse ${result.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                        {result}
                      </p>
                    )}
                  </div>
                </form>

                {/* Aesthetic background glow for the form */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 blur-[120px] pointer-events-none opacity-50" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}