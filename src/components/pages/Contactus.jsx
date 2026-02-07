import React, { useState } from 'react';
import { 
  Mail, Phone, Send, ShieldCheck, Globe, 
  MessageCircle, Clock, Zap, CheckCircle2, 
 
} from 'lucide-react';
import ContactImage from '../../assests/bloomfield.png'; 

export default function Contact() {
  const [result, setResult] = useState("");

  // --- REDIRECTION HELPERS ---
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Bloomfield, I want to ask about your loan and marketing services.");
    window.open(`https://wa.me/919080691966?text=${msg}`, "_blank");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "073a4656-7102-4ac8-ba38-3fd9b1afecd4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message sent successfully!" : "Error. Please try again.");
    if (data.success) event.target.reset();
  };

  return (
    <div className="bg-[#f3f4f6] selection:bg-green-500/30 font-sans tracking-tight antialiased" itemScope itemType="https://schema.org/ContactPage">
      
      {/* SEO / GEO / AEO METADATA */}
      <meta itemProp="description" content="Contact Bloomfield in Coimbatore for easy bank loans and digital marketing help. Reach us via WhatsApp, phone, or email for a free consultation." />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />

      <section id="contact" className="relative py-32 overflow-hidden min-h-screen">
        
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12">
          
          {/* Header */}
          <div className="mb-24 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-10 backdrop-blur-md mt-16 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-700">
                Start Today
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-[#1a1a1a] mb-10 leading-[0.85]" itemProp="name">
              Ready to <span className="text-neutral-400">Grow?</span><br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-800">
                Contact Us.
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed font-normal max-w-2xl">
              We help you get the money you need and grow your business online. Our team in **Coimbatore** makes every step simple for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Info Card */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="relative h-[450px] lg:h-[550px] rounded-[3rem] overflow-hidden group shadow-xl border border-white">
                <img
                  src={ContactImage}
                  alt="Bloomfield Coimbatore Support"
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-10 left-10 px-6 py-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full flex items-center gap-3">
                  <ShieldCheck className="text-green-500 w-4 h-4" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-[0.2em]">
                    Secure Line
                  </span>
                </div>

                <div className="absolute bottom-12 left-12 right-12 z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-green-500 w-5 h-5" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">City Center</span>
                  </div>
                  <h3 className="text-white text-4xl font-bold tracking-tight mb-3 uppercase leading-none">
                    Coimbatore Hub
                  </h3>
                  <p className="text-neutral-300 text-sm font-normal max-w-xs leading-relaxed">
                    Our main office for helping local businesses grow and get bank loans.
                  </p>
                </div>
              </div>

              {/* Minimal Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Mail, label: "Email Us", value: "bloomfieldrealtors@gmail.com" },
                  { icon: Phone, label: "Call Us", value: "+91 90806 91966" }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white/80 backdrop-blur-md border border-white rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-green-500 shadow-md">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase text-neutral-400 block tracking-[0.2em] mb-1">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-black">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#09090b] rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden h-full border border-white/10">
                
                <div className="mb-16 relative z-10">
                  <h3 className="text-white text-4xl font-bold tracking-tight uppercase mb-3 leading-none">Message Us</h3>
                  <div className="h-1 w-12 bg-green-600 rounded-full mb-6" />
                  <p className="text-neutral-400 text-sm font-normal">
                    Fill out the form below and we will get back to you fast.
                  </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-12 relative z-10">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group relative">
                      <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-4 block transition-colors group-focus-within:text-green-500">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Full Name"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-normal focus:outline-none focus:border-green-500 transition-all placeholder-neutral-800"
                      />
                    </div>

                    <div className="group relative">
                      <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-4 block transition-colors group-focus-within:text-green-500">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="example@mail.com"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-normal focus:outline-none focus:border-green-500 transition-all placeholder-neutral-800"
                      />
                    </div>
                  </div>

                  <div className="group relative">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-4 block transition-colors group-focus-within:text-green-500">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 / Mobile Number"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-normal focus:outline-none focus:border-green-500 transition-all placeholder-neutral-800"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="flex flex-col gap-6 pt-6">
                    <button
                      type="submit"
                      className="group w-full py-7 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-xl transition-all duration-500 flex items-center justify-center gap-6 hover:bg-green-600 hover:text-white shadow-xl active:scale-[0.98]"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    {/* INTERACTION 1: WHATSAPP REDIRECTION */}
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="group w-full py-7 bg-[#25D366] text-white font-bold uppercase tracking-[0.2em] text-[10px] rounded-xl transition-all duration-500 flex items-center justify-center gap-6 hover:shadow-lg active:scale-[0.98]"
                    >
                      <span>Chat on WhatsApp</span>
                      <MessageCircle className="w-4 h-4" />
                    </button>

                    {result && (
                      <p className={`text-center text-[10px] font-bold uppercase tracking-[0.2em] mt-8 animate-pulse ${result.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                        {result}
                      </p>
                    )}
                  </div>
                </form>

                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 blur-[120px] pointer-events-none opacity-50" />
              </div>
            </div>
          </div>

          {/* --- NEW INTERACTION SECTION 2: HELP CARDS (AEO Focus) --- */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-white/40 border border-white rounded-[3rem] hover:bg-white transition-all duration-500">
               <Clock className="text-green-600 mb-6" size={32} />
               <h4 className="text-xl font-bold mb-4">Fast Response</h4>
               <p className="text-neutral-500 font-normal">We check messages all day. We usually reply to everyone within 12 hours.</p>
            </div>
            <div className="p-10 bg-white/40 border border-white rounded-[3rem] hover:bg-white transition-all duration-500">
               <Zap className="text-green-600 mb-6" size={32} />
               <h4 className="text-xl font-bold mb-4">Free Advice</h4>
               <p className="text-neutral-500 font-normal">Ask us anything about your loan or business growth. Our first talk is free.</p>
            </div>
          </div>

          {/* --- NEW INTERACTION SECTION 3: QUICK LIST --- */}
          <div className="mt-12 p-12 bg-black rounded-[3rem] text-white">
            <h4 className="text-2xl font-bold mb-8">What we can help with:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Easy Personal & Home Loans",
                "Business Loan Processing",
                "Website Ranking (SEO)",
                "Social Media Marketing"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="font-normal text-neutral-300">{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}