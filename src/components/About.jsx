import { useEffect, useRef, useState } from "react";
import { 
  Building2, Briefcase, Key, Car, Landmark, Target,
  Globe, Award, MapPin, CheckCircle2, MessageCircle, HelpCircle, ArrowUpRight,
  Zap
} from "lucide-react";

// --- IMAGE IMPORTS ---
import headerImage from "../assests/bloomfield.png"; 
import loanFocusImage from "../assests/bf4.webp"; 
import digitalMarketingImage from "../assests/bf3.webp"; 
import coimbatoreMapImage from "../assests/bf4.webp"; 

const services = [
  {
    icon: Briefcase,
    title: "Business Loans",
    category: "For Companies",
    description: "Get the money you need to grow your small business or startup without any stress.",
  },
  {
    icon: Building2,
    title: "Home Loans",
    category: "Real Estate",
    description: "Buy your dream home with low interest rates and long repayment plans.",
  },
  {
    icon: Key,
    title: "Personal Cash",
    category: "Quick Funding",
    description: "Fast money for your personal needs, usually approved within 24 hours.",
  },
  {
    icon: Car,
    title: "Car Loans",
    category: "Vehicle Loans",
    description: "Get 100% funding to buy your new car with simple monthly payments.",
  },
];

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919080691966?text=Hi Bloomfield, I want to know more about your services.`, "_blank");
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    };
    const container = containerRef.current;
    if (container) container.addEventListener("mousemove", handleMouseMove);
    return () => { if (container) container.removeEventListener("mousemove", handleMouseMove); };
  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative w-full py-20 md:py-32 bg-[#e5e7eb] text-[#1a1a1a] overflow-hidden font-sans selection:bg-green-500/30"
      itemScope itemType="https://schema.org/AboutPage"
    >
      {/* SEO / GEO / AEO METADATA - Fixing the -42 Points leak */}
      <meta itemProp="description" content="Bloomfield is a leading Digital Marketing Agency and Financial Consulting firm in Coimbatore. We specialize in SEO Services, Business Loans, and Personal Loans with expert guidance." />
      <meta name="keywords" content="SEO Services in Coimbatore, Digital Marketing Agency Coimbatore, Financial Consulting Coimbatore, Bank Loan Agents Coimbatore" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />

      {/* Background FX */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] pointer-events-none"></div>
      <div 
        className="absolute pointer-events-none w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-green-400/15 rounded-full blur-[80px] md:blur-[100px] transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2 opacity-50 z-0"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-12">
        
        {/* --- SECTION 1: HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-24 items-center border-b border-black/5 pb-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/10 backdrop-blur-md mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"/>
              <span className="text-[10px] font-black text-green-700 tracking-[0.3em] uppercase">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#1a1a1a] leading-[0.95] mb-8" itemProp="name">
              Simple Loan & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-700">Digital Growth.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-medium italic max-w-xl">
              We are a team in **Coimbatore** helping people and businesses grow. We make getting bank loans easy and help your business show up on the first page of Google.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[300px] md:h-[450px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img src={headerImage} alt="Bloomfield Coimbatore Office" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100" />
            </div>
          </div>
        </div>

        {/* --- EXTRA SECTION A: THE CORE STRATEGY (SEO Fix) --- */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-10 bg-white rounded-[2.5rem] border border-white shadow-sm flex flex-col gap-6">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-green-500"><Target size={24}/></div>
              <h3 className="text-xl font-bold tracking-tight">Market Strategy</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">Specializing in high-intent search keywords for Coimbatore businesses, driving organic traffic and quality leads.</p>
           </div>
           <div className="p-10 bg-white rounded-[2.5rem] border border-white shadow-sm flex flex-col gap-6">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-green-500"><Zap size={24}/></div>
              <h3 className="text-xl font-bold tracking-tight">Rapid Deployment</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">Our financial systems ensure data integrity and faster loan processing speeds through direct bank institutional links.</p>
           </div>
           <div className="p-10 bg-white rounded-[2.5rem] border border-white shadow-sm flex flex-col gap-6">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-green-500"><Globe size={24}/></div>
              <h3 className="text-xl font-bold tracking-tight">Digital Authority</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">Building long-form authority content to boost domain power and establish trust in the financial sector.</p>
           </div>
        </div>

        {/* --- SECTION 2: BANK LOAN FOCUS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-32 items-center">
            <div className="bg-white/80 backdrop-blur-md p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border border-white shadow-2xl relative overflow-hidden group">
                <img src={loanFocusImage} alt="Loan Guidance" className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-green-900/20">
                      <Landmark size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Easy Bank Loan Support</h3>
                  <p className="text-neutral-600 mb-8 leading-relaxed text-lg font-medium">
                      We work with the best banks to help you pick the right loan. From home to business loans, we handle the hard paperwork for you.
                  </p>
                  <ul className="grid grid-cols-1 gap-4">
                      {["We listen to what you need", "We find the best bank for you", "We make the process fast and clear"].map((item, i) => (
                          <li key={i} className="flex items-center gap-4 text-neutral-800 font-bold bg-white/50 p-4 rounded-2xl border border-black/5">
                              <CheckCircle2 className="text-green-500 w-6 h-6 shrink-0" /> {item}
                          </li>
                      ))}
                  </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {services.map((service, idx) => (
                    <div key={idx} className="p-8 rounded-[2rem] bg-white border border-white shadow-xl hover:border-green-500/20 transition-all group hover:-translate-y-2 duration-500">
                         <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-6 border border-black/5 group-hover:bg-green-600 transition-colors">
                            <service.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                         </div>
                         <h4 className="font-black text-black mb-3 text-lg">{service.title}</h4>
                         <p className="text-xs text-neutral-500 leading-relaxed font-medium">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- EXTRA SECTION B: EXPERTISE STATS (AEO Strategy) --- */}
        <div className="mb-32 p-10 md:p-20 bg-white rounded-[4rem] border border-white shadow-sm flex flex-wrap justify-around gap-12 text-center">
            <div>
               <p className="text-5xl md:text-7xl font-black tracking-tighter text-green-600">500+</p>
               <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mt-2">Clients in Coimbatore</p>
            </div>
            <div>
               <p className="text-5xl md:text-7xl font-black tracking-tighter text-black">12+</p>
               <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mt-2">Partner Banks</p>
            </div>
            <div>
               <p className="text-5xl md:text-7xl font-black tracking-tighter text-green-600">98%</p>
               <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mt-2">Approval Rate</p>
            </div>
        </div>

        {/* --- SECTION 3: DIGITAL MARKETING --- */}
        <div className="mb-32">
            <div className="relative rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-[#09090b] text-white p-8 md:p-24 shadow-2xl">
                <img src={digitalMarketingImage} alt="SEO Services Coimbatore" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 hidden lg:block" />
                <div className="relative z-10 max-w-3xl">
                    <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-green-400 leading-none">Grow Your Brand Online</h3>
                    <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium mb-12 italic">
                        We help your business get found on the internet. We use SEO and social media ads to bring you real customers from Coimbatore and beyond.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                        {[
                            { icon: Globe, title: "Google SEO" },
                            { icon: Target, title: "Social Ads" },
                            { icon: Globe, title: "Web Design" },
                            { icon: Award, title: "Ranking" }
                        ].map((item, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all"><item.icon size={24}/></div>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em]">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* --- SECTION 4: QUICK Q&A --- */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="p-10 md:p-16 bg-white border border-white rounded-[3rem] md:rounded-[4rem] shadow-xl">
            <HelpCircle className="text-green-600 mb-8" size={48} />
            <h3 className="text-3xl font-black mb-10 tracking-tight">Common Questions</h3>
            <div className="space-y-8">
              <div className="border-b border-black/5 pb-6">
                <p className="font-black text-lg text-black mb-3">How fast is the loan approval?</p>
                <p className="text-base text-neutral-500 font-medium">Most loans in Coimbatore are approved within 3 to 7 working days.</p>
              </div>
              <div>
                <p className="font-black text-lg text-black mb-3">Do you help small businesses?</p>
                <p className="text-base text-neutral-500 font-medium">Yes, we specialize in MSME and startup funding with low interest.</p>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-16 bg-green-900 rounded-[3rem] md:rounded-[4rem] text-white flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-pulse" />
            <h3 className="text-4xl md:text-5xl font-black mb-6 relative z-10 tracking-tighter">Want to talk now?</h3>
            <p className="mb-10 opacity-90 text-lg md:text-xl font-medium relative z-10">Click below to chat with us directly on WhatsApp.</p>
            <button onClick={handleWhatsApp} className="px-12 py-6 bg-white text-green-900 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:scale-110 transition-all shadow-2xl relative z-10">
              <MessageCircle size={20} /> Start Chat
            </button>
          </div>
        </div>

        {/* --- EXTRA SECTION C: SERVICE AREAS (GEO Signals) --- */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-4 gap-4">
           {["Gandhipuram", "RS Puram", "Peelamedu", "Saibaba Colony"].map((city, i) => (
             <div key={i} className="p-6 bg-white rounded-2xl border border-white text-center font-black uppercase tracking-[0.2em] text-[10px] text-neutral-400 group hover:text-green-600 transition-colors">
                <MapPin size={12} className="mx-auto mb-2 opacity-20 group-hover:opacity-100" />
                {city}
             </div>
           ))}
        </div>

        {/* --- SECTION 5: TRUST & REGION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-32">
            <div className="lg:col-span-7 space-y-6">
                <h3 className="text-4xl font-black mb-10 tracking-tighter">Why Choose Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Honest Advice",
                        "Easy Processes",
                        "Local Experts",
                        "One-on-One Help",
                    ].map((text, i) => (
                        <div key={i} className="flex items-center gap-5 p-8 bg-white rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl transition-all group">
                            <CheckCircle2 className="text-green-600 shrink-0 group-hover:scale-125 transition-transform" size={24} />
                            <span className="text-lg font-black text-neutral-800 tracking-tight">{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-5 relative group rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src={coimbatoreMapImage} alt="Coimbatore Financial District" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-white/80 group-hover:bg-white/40 transition-colors duration-700"></div>
                <div className="relative p-10 md:p-16 flex flex-col h-full justify-center">
                    <div className="inline-flex items-center gap-3 text-green-700 mb-8">
                        <MapPin size={32} className="animate-bounce" />
                        <span className="font-black uppercase tracking-[0.4em] text-xs">Serving the City</span>
                    </div>
                    <p className="text-neutral-900 font-black text-3xl mb-4 tracking-tighter leading-none">Active in Coimbatore</p>
                    <p className="text-sm text-neutral-600 font-bold uppercase tracking-[0.3em]">Everywhere in Coimbatore</p>
                </div>
            </div>
        </div>

        {/* --- SECTION 6: FINAL CTA --- */}
        <div className="bg-[#09090b] rounded-[3rem] md:rounded-[6rem] p-12 md:p-28 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          <div className="relative z-10">
            <h3 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">Ready to Grow?</h3>
            <p className="mb-14 text-neutral-400 text-lg md:text-2xl max-w-2xl mx-auto font-medium italic">Get a free plan for your loan or website today. Our Coimbatore experts are ready to help.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="px-14 py-6 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-green-600 hover:text-white transition-all transform active:scale-95 shadow-xl">
                Contact Us
              </button>
              <button onClick={handleWhatsApp} className="px-14 py-6 bg-[#04a53f] text-white rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl active:scale-95">
                WhatsApp <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full" />
        </div>

      </div>
    </section>
  );
}