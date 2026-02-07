import { useState } from 'react';
import { Mail, Phone, ShieldCheck, Globe, ArrowUpRight, CheckCircle2, MessageCircle, MapPin, Clock } from 'lucide-react';

// --- IMAGE IMPORTS ---
import ContactVisual from '../assests/bf4.webp';

export default function Contact() {
  const [result, setResult] = useState("");

  // --- REDIRECTION HELPERS ---
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Bloomfield Team, I saw your website and I want to ask about bank loans and digital marketing.");
    window.open(`https://wa.me/919080691966?text=${msg}`, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData(e.target);
    formData.append("access_key", "073a4656-7102-4ac8-ba38-3fd9b1afecd4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message sent successfully!" : "Error. Please try again.");
    if (data.success) e.target.reset();
  };

  return (
    <section id="contact" className="relative py-36 bg-[#f8f9fa] text-[#0a0a0a] overflow-hidden min-h-screen selection:bg-green-500/30" itemScope itemType="https://schema.org/ContactPage">
      
      {/* SEO / GEO / AEO METADATA */}
      <meta itemProp="description" content="Contact Bloomfield in Coimbatore for easy bank loans and digital marketing help. Reach us via WhatsApp, phone, or email for a free consultation." />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />

      {/* Background FX */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* --- 01. HEADER SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-10">
               <div className="h-[1px] w-12 bg-green-600"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-green-700">Start Your Project</span>
            </div>
            <h2 className="text-6xl md:text-6xl font-bold tracking-tighter leading-[0.8] mb-12" itemProp="name">
              Let's <br /> <span className="text-green-600">Talk.</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl font-light leading-relaxed">
              Work with Bloomfield to grow your business and get the bank loans you need. We help you build your brand and find capital in Coimbatore and beyond.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6 pb-2">
             <div className="p-6 bg-white border border-black/5 shadow-2xl rounded-3xl flex items-center gap-4">
                <ShieldCheck size={24} className="text-green-600" />
                <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 leading-none mb-1">Safe Connection</p>
                    <p className="text-sm font-bold text-black">Your Data is Protected</p>
                </div>
             </div>
          </div>
        </div>

        {/* --- 02. INTERFACE GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-12">
                {[
                    { icon: Globe, label: "Our Base", title: "Coimbatore, Tamil Nadu", desc: "Serving businesses in South India." },
                    { icon: Mail, label: "Write to Us", title: "bloomfieldrealtors@gmail.com", desc: "We reply within 12 hours." },
                    { icon: Phone, label: "Call Directly", title: "+91 90806 91966", desc: "Available Monday — Saturday" }
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
                <img src={ContactVisual} className="w-full h-full object-cover" alt="Bloomfield Business Hub in Coimbatore" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                    <CheckCircle2 size={32} className="text-green-400 mb-4" />
                    <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">Official Business <br /> Support Active</p>
                </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-black/[0.03] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[100px]"></div>
                
                <form onSubmit={handleSubmit} className="space-y-16 relative z-10">
                    <div className="space-y-16">
                        <div className="group relative">
                            <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-800 mb-4 block group-focus-within:text-green-600 transition-colors">Your Name</label>
                            <input 
                                type="text" name="name" required placeholder="Full Name or Business Name" 
                                className="w-full bg-transparent border-b border-black/10 py-4 text-2xl font-bold tracking-tighter placeholder-neutral-200 focus:outline-none focus:border-green-600 transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="group relative">
                                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-800 mb-4 block group-focus-within:text-green-600 transition-colors">How to Reach You</label>
                                <input 
                                    type="email" name="email" required placeholder="Email Address" 
                                    className="w-full bg-transparent border-b border-black/10 py-4 text-lg font-bold tracking-tight placeholder-neutral-200 focus:outline-none focus:border-green-600 transition-all"
                                />
                            </div>
                            <div className="group relative">
                                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-800 mb-4 block group-focus-within:text-green-600 transition-colors">Phone Number</label>
                                <input 
                                    type="tel" name="phone" required placeholder="+91 00000 00000" 
                                    className="w-full bg-transparent border-b border-black/10 py-4 text-lg font-bold tracking-tight placeholder-neutral-200 focus:outline-none focus:border-green-600 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 pt-8">
                        {/* MAIN SUBMIT BUTTON */}
                        <button 
                            type="submit" 
                            className="group relative w-full py-8 bg-black text-white overflow-hidden rounded-full transition-all duration-700 hover:bg-green-600 hover:scale-[1.02]"
                        >
                            <span className="relative z-10 font-black uppercase tracking-[0.4em] text-[11px] flex items-center justify-center gap-4">
                                Send Message <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-green-600 transition-transform duration-500"></div>
                        </button>

                        {/* WHATSAPP REDIRECTION BUTTON */}
                        <button 
                            type="button"
                            onClick={handleWhatsApp}
                            className="group w-full py-6 bg-[#25D366] text-white rounded-full transition-all flex items-center justify-center gap-4 hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.3)] active:scale-95"
                        >
                            <MessageCircle size={20} />
                            <span className="font-black uppercase tracking-[0.4em] text-[11px]">Chat on WhatsApp</span>
                        </button>
                        
                        {result && <p className="mt-8 text-center text-[10px] font-black uppercase tracking-widest text-green-700 animate-pulse">{result}</p>}
                    </div>
                </form>
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: LOCAL TRUST (GEO Signals) --- */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-12 rounded-[4rem] border border-black/5 shadow-sm">
           <div className="space-y-6">
              <h3 className="text-3xl font-bold">Serving Coimbatore Business Owners</h3>
              <p className="text-neutral-500 font-light">We are physically located in the heart of the city, helping local visionaries in Gandhipuram, Peelamedu, RS Puram, and Saravanampatti.</p>
              <div className="flex items-center gap-4">
                <MapPin className="text-green-600" size={24} />
                <p className="text-sm font-bold">Local Experts. Global Results.</p>
              </div>
           </div>
           <div className="bg-neutral-50 p-8 rounded-[3rem] flex flex-col justify-center items-center text-center">
              <Clock className="text-green-600 mb-4" size={40} />
              <h4 className="text-xl font-bold">Fast Response</h4>
              <p className="text-sm text-neutral-400">Our team checks messages hourly. You won't be left waiting.</p>
           </div>
        </div>

        {/* --- FOOTER INFO --- */}
        <div className="mt-10 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 group hover:opacity-100 transition-opacity">
            <p className="text-[9px] font-black uppercase tracking-[0.5em]">Business Hours: 10:00am — 08:00pm | Coimbatore HQ</p>
            <div className="flex gap-10">
                <span className="text-[9px] font-black uppercase tracking-[0.4em]">Official Site 2026</span>
                <span className="text-[9px] font-black uppercase tracking-[0.4em]">Coimbatore, India</span>
            </div>
        </div>

      </div>
    </section>
  );
}