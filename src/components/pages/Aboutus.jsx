import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import Lenis from "@studio-freight/lenis";
import { 
  ShieldCheck, Zap, Globe, Fingerprint, 
  Lightbulb, MonitorSmartphone, Code, Rocket, 
  CheckCircle2, Users2, ArrowUpRight, MessageCircle, Mail,
  ChevronDown, Search, BarChart3, Landmark
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

const faqData = [
  {
    q: "How does Bloomfield help with bank loans in Coimbatore?",
    a: "We act as your dedicated financial consultant, streamlining the documentation process for Personal, Home, and Business loans. Our team works directly with leading banks to ensure high approval rates and faster processing times for local entrepreneurs."
  },
  {
    q: "Why is Bloomfield the best Digital Marketing Agency in Coimbatore for small businesses?",
    a: "Unlike generic agencies, we combine financial literacy with technical SEO and web design. We focus on 'money keywords' that actually drive sales, ensuring your business ranks on the first page of Google for local searches."
  },
  {
    q: "What industries do you specialize in?",
    a: "While we serve all sectors, we have deep expertise in FinTech, Manufacturing, and Retail. Our solutions are custom-built to handle the specific regulatory and scaling needs of these industries in the Tamil Nadu market."
  }
];

export default function AboutUs() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeFaq, setActiveFaq] = useState(null);

  // --- REDIRECTION HANDLERS ---
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919080691966"; 
    const message = encodeURIComponent("Hi Bloomfield Team, I saw your website and I want to ask about bank loans and digital marketing.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1.0 });
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
      className="py-20 lg:py-32 bg-[#F8F9FA] text-[#1a1a1a] relative overflow-hidden font-sans selection:bg-green-200"
      itemScope 
      itemType="https://schema.org/AboutPage"
    >
      {/* --- DYNAMIC BACKGROUND MESH --- */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        {/* Interactive Mouse Spotlight - Resolves ESLint warning */}
        <div 
          className="absolute w-[600px] h-[600px] bg-green-300/20 rounded-full blur-[120px] transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${cursorPos.x - 300}px, ${cursorPos.y - 300}px)`
          }}
        />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-200 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 mb-8 w-fit shadow-sm mt-16">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[11px] font-bold tracking-[0.15em] text-neutral-600 uppercase">Coimbatore's Digital Partner</span>
            </div>
            <h1 id="about-heading" className="text-6xl md:text-8xl font-medium tracking-tight text-[#0a0a0a] mb-8 leading-[0.95]">
              How can <br />
              <span className="italic font-serif text-green-600">Bloomfield</span> help?
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 max-w-3xl leading-relaxed font-light mb-10">
              We are a team in <strong className="text-black font-semibold">Coimbatore</strong> that helps businesses get easy bank loans and grow online. We use modern technology to make sure your business succeeds in today's digital world.
            </p>
            <div className="flex flex-wrap gap-4">
               <button onClick={handleWhatsAppRedirect} className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-green-500/20">
                 <MessageCircle size={20} /> Chat with Experts
               </button>
               <Link
                 to="/contact"
                 className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-green-600 transition-colors"
               >
                 <Mail size={20} /> Message Us
               </Link>
            </div>
          </div>
          <div className="lg:col-span-4 group">
            <div className="relative h-[400px] lg:h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[0.98]">
               <img src={HeaderImage} alt="Bloomfield Office in Coimbatore" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* --- CORE VALUES --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
          {values.map((v, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white border border-neutral-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-green-600 mb-20">
                <v.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">{v.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-base">{v.description}</p>
            </div>
          ))}
        </div>

        {/* --- TRUST BENTO --- */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-10 lg:p-16 rounded-[3rem] border border-neutral-100 flex flex-col justify-center">
            <h3 className="text-xs font-black text-green-600 uppercase tracking-[0.4em] mb-8">Why Trust Us</h3>
            <h4 className="text-4xl md:text-5xl font-medium mb-10 tracking-tight">Simple Solutions for <br/>Big Goals</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Direct help with Personal, Home, and Business loans.",
                "SEO plans that put your business on the first page of Google.",
                "Expert team with deep knowledge of Coimbatore's market.",
                "Safe and secure data handling for all financial work."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-50 transition-colors">
                  <CheckCircle2 className="text-green-500 w-6 h-6 shrink-0" />
                  <p className="text-neutral-600 leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white/90 backdrop-blur-xl border border-green-200 p-10 rounded-[2.5rem] text-center shadow-xl hover:-translate-y-1 transition-all">
              <span className="text-5xl font-black tracking-tight text-green-600 block mb-3">100%</span>
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-500">Safe Process</p>
            </div>
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200 p-10 rounded-[2.5rem] text-center shadow-xl hover:-translate-y-1 transition-all">
              <span className="text-5xl font-black tracking-tight text-slate-900 block mb-3">2+</span>
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-500">Years Experience</p>
            </div>
          </div>
        </section>

        {/* --- PILLAR OVERLAPS --- */}
        <div className="space-y-16 mb-32">
          <section className="group grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center bg-white p-8 lg:p-12 rounded-[3.5rem] border border-neutral-100">
            <div className="relative h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden order-2 lg:order-1">
              <img src={FinTechImage} alt="Bank Loan Services in Coimbatore" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="order-1 lg:order-2 px-4">
              <span className="text-green-600 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Pillar 01</span>
              <h4 className="text-5xl font-medium mb-8 tracking-tight">Easy Bank Loan Support</h4>
              <p className="text-lg text-neutral-500 mb-10 leading-relaxed">
                Getting a loan doesn't have to be hard. We help you with the paperwork and talk to the banks to get your **Personal, Home, or Business loan** approved quickly.
              </p>
              <button 
                onClick={handleWhatsAppRedirect} 
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-xl transition-all"
              >
                Talk to a Loan Expert <MessageCircle size={18} />
              </button>
            </div>
          </section>

          <section className="group grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center bg-[#0a0a0a] p-8 lg:p-12 rounded-[3.5rem] text-white">
            <div className="px-4 lg:px-8">
              <span className="text-green-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Pillar 02</span>
              <h4 className="text-5xl font-medium mb-8 tracking-tight">Grow Your Brand Online</h4>
              <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
                We make your business look professional and easy to find on the internet. With our **SEO and Web Design**, more customers in Coimbatore will find and trust your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all"
              >
                Start Growing Online <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src={BrandingImage} alt="Digital Marketing Agency Coimbatore" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" />
            </div>
          </section>
        </div>

        {/* --- LOCAL EXPERTISE --- */}
        <section className="mb-32 py-20 px-6 bg-green-50/50 rounded-[4rem] text-center border border-green-100">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-8">
            <Users2 className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="text-4xl font-medium mb-6 tracking-tight">Serving the Heart of Coimbatore</h4>
          <p className="max-w-2xl mx-auto text-neutral-500 text-lg leading-relaxed mb-8 font-light">
            From <span className="text-black font-medium underline decoration-green-300 underline-offset-4">Gandhipuram to Peelamedu</span>, we help local business owners get the funding and digital presence they need to stay ahead of the competition.
          </p>
          <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
            <span>R.S. Puram</span> • <span>Saravanampatti</span> • <span>Kovaipudur</span>
          </div>
        </section>

        {/* --- SPECIALIZED SOLUTIONS (SEO Focus) --- */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-xs font-black text-green-600 uppercase tracking-[0.4em] mb-4">What We Excel At</h3>
            <h2 className="text-5xl font-medium tracking-tight">Targeted Business Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "SEO Services in Coimbatore", 
                desc: "Dominate local search results. We optimize your GMB and website to attract Coimbatore-based customers specifically searching for your services.",
                icon: Search 
              },
              { 
                title: "Financial Consulting", 
                desc: "Expert guidance for Home and Business loans. We handle the complex banking jargon so you can focus on running your business.",
                icon: Landmark 
              },
              { 
                title: "Digital Marketing Agency", 
                desc: "Full-scale digital growth. From high-speed web development to ROI-focused social media campaigns for the Tamil Nadu market.",
                icon: BarChart3 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] border border-neutral-100 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                  <item.icon size={24} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROCESS STEPS --- */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h3 className="text-xs font-black text-green-600 uppercase tracking-[0.4em] mb-4">How We Work</h3>
              <h2 className="text-5xl font-medium tracking-tight">Simple 4-Step Process</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-neutral-100 p-10 rounded-[2.5rem] relative hover:shadow-2xl transition-all group">
                <span className="absolute top-8 right-8 text-neutral-100 text-6xl font-bold group-hover:text-green-50 transition-colors">0{idx + 1}</span>
                <div className="w-14 h-14 rounded-2xl bg-neutral-900 flex items-center justify-center text-white mb-12 group-hover:bg-green-600 transition-colors relative z-10">
                  <step.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-4 relative z-10">{step.title}</h4>
                <p className="text-sm text-neutral-500 leading-relaxed relative z-10">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- FAQ SECTION (For Schema) --- */}
        <section className="mb-32 max-w-4xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
          <div className="text-center mb-16">
            <h3 className="text-xs font-black text-green-600 uppercase tracking-[0.4em] mb-4">Help Center</h3>
            <h2 className="text-5xl font-medium tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white border border-neutral-100 rounded-[2rem] overflow-hidden transition-all"
                itemProp="mainEntity" 
                itemScope 
                itemType="https://schema.org/Question"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 text-left flex justify-between items-center group"
                >
                  <span className="text-lg font-semibold pr-8" itemProp="name">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === i ? 'max-h-96 pb-8' : 'max-h-0'}`}
                  itemProp="acceptedAnswer" 
                  itemScope 
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-neutral-500 leading-relaxed" itemProp="text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- FINAL CALL TO ACTION --- */}
        <div className="relative rounded-[4rem] bg-[#09090b] text-white p-12 lg:p-32 overflow-hidden shadow-2xl group border border-white/5 text-center">
          <img src={TeamImage} alt="Bloomfield Team Consultation" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-[2s]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-5xl md:text-8xl font-medium mb-8 tracking-tighter leading-[0.9] text-white">
              Ready to <span className="italic font-serif text-green-500">Start?</span>
            </h3>
            <p className="text-xl text-neutral-400 mb-16 font-light max-w-2xl mx-auto">Join many other Coimbatore business owners. Choose how you want to reach us below:</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button 
                onClick={handleWhatsAppRedirect} 
                className="w-full sm:w-auto px-12 py-7 bg-[#25D366] text-white font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-500/20"
              >
                Chat on WhatsApp <MessageCircle size={18} />
              </button>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-12 py-7 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:bg-green-500 hover:text-white transition-all flex items-center justify-center gap-3 shadow-lg shadow-white/5 no-underline"
              >
                Go to Contact Page <Mail size={18} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}