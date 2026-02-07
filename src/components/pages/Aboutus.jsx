import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { 
  ShieldCheck, Zap, Globe, Fingerprint, 
  Lightbulb, MonitorSmartphone, Code, Rocket, 
  CheckCircle2, Users2, ArrowUpRight
} from "lucide-react";

// --- IMAGE IMPORTS ---
import HeaderImage from "../../assests/bloomfield.png"; 
import FinTechImage from "../../assests/bf4.webp";
import BrandingImage from "../../assests/bf2.webp";
import TeamImage from "../../assests/bf3.webp";

const values = [
  { icon: ShieldCheck, title: "Total Trust", description: "In finance and tech, trust is everything. We follow strict rules to keep your data and money safe." },
  { icon: Zap, title: "Fast Results", description: "Our systems are built to work quickly and handle many users at once without slowing down." },
  { icon: Globe, title: "Local & Global", description: "We help Coimbatore businesses grow locally and reach customers in over 40 countries." },
  { icon: Fingerprint, title: "Made for You", description: "We don't use basic templates. We build custom plans that fit your specific business needs." },
];

const processSteps = [
  { title: "Step 01: Audit", description: "We check your current business to find where you can save money and grow faster.", icon: Lightbulb },
  { title: "Step 02: Design", description: "We create a clear plan and safe digital maps for your new business systems.", icon: MonitorSmartphone },
  { title: "Step 03: Build", description: "Our team writes the code and connects your site to secure banking systems.", icon: Code },
  { title: "Step 04: Launch", description: "We start your project and keep checking it to make sure it earns you the most profit.", icon: Rocket },
];

export default function Aboutus() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // --- REDIRECTION LOGIC ---
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919080691966"; 
    const message = encodeURIComponent("Hi Bloomfield Team, I saw your website and I want to ask about bank loans and digital marketing.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <section 
      id="about" 
      className="py-32 bg-[#e5e7eb] text-[#1a1a1a] relative overflow-hidden font-sans antialiased"
      aria-labelledby="about-heading"
      itemScope 
      itemType="https://schema.org/AboutPage"
    >
      {/* Background FX */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div 
        className="absolute rounded-full w-96 h-96 bg-green-400/10 blur-[120px] pointer-events-none transition-transform duration-300" 
        style={{ transform: `translate(${cursorPos.x - 200}px, ${cursorPos.y - 200}px)` }} 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- SECTION 1: INTRODUCTION --- */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-8 backdrop-blur-md shadow-sm mt-16">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.2em] text-green-700 uppercase">Expert Advice & Fast Tech</span>
            </div>
            <h2 id="about-heading" className="text-5xl font-light tracking-tighter text-[#1a1a1a] mb-10 leading-[0.85]">
              How can <br />
              <span className="font-bold text-green-600">Bloomfield help?</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl leading-relaxed font-light">
              We are a team in **Coimbatore** that helps businesses get easy bank loans and grow online. We use modern technology to make sure your business succeeds in today's digital world.
            </p>
          </div>
          <div className="lg:col-span-5">
            <figure className="relative h-[450px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white mt-16">
               <img src={HeaderImage} alt="Bloomfield Office in Coimbatore" className="w-full h-full object-cover" loading="lazy" />
            </figure>
          </div>
        </article>

        {/* SECTION 2: VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {values.map((v, i) => (
            <div key={i} className="group bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] border border-white hover:bg-white transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-white mb-8 group-hover:bg-green-600">
                <v.icon size={20} />
              </div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-neutral-500 text-sm">{v.description}</p>
            </div>
          ))}
        </div>

        {/* --- NEW SECTION 01: WHY CHOOSE US (GEO/AEO Content) --- */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white/40 p-12 rounded-[4rem] border border-white">
          <div>
            <h3 className="text-sm font-black text-green-700 uppercase tracking-[0.3em] mb-6">Why Trust Us</h3>
            <h4 className="text-4xl font-bold mb-6">Simple Solutions for Big Goals</h4>
            <div className="space-y-4">
              {[
                "Direct help with Personal, Home, and Business loans.",
                "SEO plans that put your business on the first page of Google.",
                "Expert team with deep knowledge of Coimbatore's market.",
                "Safe and secure data handling for all financial work."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 w-5 h-5 mt-1" />
                  <p className="text-neutral-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-600 p-8 rounded-[3rem] text-white text-center">
              <span className="text-4xl font-bold italic">100%</span>
              <p className="text-[10px] uppercase mt-2">Safe Process</p>
            </div>
            <div className="bg-black p-8 rounded-[3rem] text-white text-center">
              <span className="text-4xl font-bold italic">5+</span>
              <p className="text-[10px] uppercase mt-2">Years Exp</p>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: PILLAR BREAKDOWNS --- */}
        <div className="mb-40 space-y-40">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative h-[550px] rounded-[4rem] overflow-hidden shadow-2xl border border-white order-2 lg:order-1">
              <img src={FinTechImage} alt="Bank Loan Services" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-sm font-black text-green-700 uppercase tracking-[0.3em] mb-6">Pillar 01</h3>
              <h4 className="text-4xl font-bold mb-8 text-black">Easy Bank Loan Support</h4>
              <p className="text-lg text-neutral-600 mb-10">
                Getting a loan doesn't have to be hard. We help you with the paperwork and talk to the banks to get your **Personal, Home, or Business loan** approved quickly.
              </p>
              <button onClick={handleWhatsAppRedirect} className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-xs uppercase hover:scale-105 transition-all">
                Talk to a Loan Expert
              </button>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="text-sm font-black text-green-700 uppercase tracking-[0.3em] mb-6">Pillar 02</h3>
              <h4 className="text-4xl font-bold mb-8 text-black">Grow Your Brand Online</h4>
              <p className="text-lg text-neutral-600 mb-10">
                We make your business look professional and easy to find on the internet. With our **SEO and Web Design**, more customers in Coimbatore will find and trust your business.
              </p>
              <button onClick={scrollToContact} className="px-8 py-4 bg-black text-white rounded-full font-bold text-xs uppercase hover:bg-green-600 transition-all">
                Start Growing Online
              </button>
            </div>
            <div className="relative h-[550px] rounded-[4rem] overflow-hidden shadow-2xl border border-white">
              <img src={BrandingImage} alt="Digital Marketing Services" className="w-full h-full object-cover" />
            </div>
          </section>
        </div>

        {/* --- NEW SECTION 02: LOCAL EXPERTISE --- */}
        <section className="mb-40 text-center">
          <Users2 className="w-12 h-12 mx-auto mb-6 text-green-600" />
          <h4 className="text-3xl font-bold mb-4">Serving the Heart of Coimbatore</h4>
          <p className="max-w-2xl mx-auto text-neutral-600">
            From Gandhipuram to Peelamedu, we help local business owners get the funding and digital presence they need to stay ahead of the competition.
          </p>
        </section>

        {/* --- SECTION 4: THE STEPS --- */}
        <section className="mb-40">
          <div className="text-center mb-24">
            <h3 className="text-sm font-black text-green-700 uppercase tracking-[0.3em] mb-6">How We Work</h3>
            <h2 className="text-4xl font-bold">Simple 4-Step Process</h2>
          </div>
          <ol className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {processSteps.map((step, idx) => (
              <li key={idx} className="bg-white/40 border border-white p-10 rounded-[3rem] hover:bg-white transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white mb-8 group-hover:bg-green-600">
                  <step.icon size={22} />
                </div>
                <h4 className="text-lg font-bold mb-4">{step.title}</h4>
                <p className="text-xs text-neutral-500">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* --- SECTION 5: FINAL CALL TO ACTION --- */}
        <div className="relative rounded-[4rem] bg-[#09090b] text-white p-12 lg:p-24 overflow-hidden shadow-2xl group border border-white/5 text-center">
          <img src={TeamImage} alt="Consultation" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/40 to-[#09090b]/80" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">Ready to <span className="text-green-500 italic">Start?</span></h3>
            <p className="text-xl text-neutral-400 mb-12 font-light">Join many other Coimbatore business owners. Choose how you want to reach us below:</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {/* BUTTON 1: WHATSAPP */}
              <button 
                onClick={handleWhatsAppRedirect} 
                className="group px-12 py-6 bg-[#25D366] text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Chat on WhatsApp <ArrowUpRight size={16} />
              </button>

              {/* BUTTON 2: CONTACT PAGE */}
              <button 
                onClick={scrollToContact} 
                className="group px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-green-500 hover:text-white transition-all"
              >
                Go to Contact Page
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}