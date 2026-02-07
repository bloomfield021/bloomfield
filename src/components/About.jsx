import { useEffect, useRef, useState } from "react";
import { 
  Building2, Briefcase, Key, Car, Landmark, Target,
  Globe, Award, MapPin, CheckCircle2, MessageCircle, HelpCircle, ArrowUpRight
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

  // REDIRECTION HELPERS
  const handleWhatsApp = () => {
    window.open(`https://wa.me/919080691966?text=Hi Bloomfield, I want to know more about your services.`, "_blank");
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };
    const container = containerRef.current;
    if (container) container.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (container) container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative w-full py-32 bg-[#e5e7eb] text-[#1a1a1a] overflow-hidden font-sans"
      itemScope itemType="https://schema.org/AboutPage"
    >
      {/* SEO / GEO / AEO METADATA */}
      <meta itemProp="description" content="Learn about Bloomfield in Coimbatore. We provide easy bank loans and expert digital marketing to help you grow." />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />

      {/* Background FX */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div 
        className="absolute pointer-events-none w-[600px] h-[600px] bg-green-400/20 rounded-full blur-[100px] transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2 opacity-50 z-0"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* --- SECTION 1: HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center border-b border-black/5 pb-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/10 backdrop-blur-md mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"/>
              <span className="text-[10px] font-bold text-green-700 tracking-[0.2em] uppercase">Who We Are</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a] leading-[1.05] mb-8" itemProp="name">
              Simple Loan & <br/>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-700">Digital Growth.</span>
            </h2>
            <p className="text-xl text-neutral-700 leading-relaxed font-light">
              We are a team in **Coimbatore** helping people and businesses grow. We make getting bank loans easy and help your business show up on the first page of Google.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border border-white">
              <img src={headerImage} alt="Bloomfield Coimbatore Team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>

        {/* --- SECTION 2: BANK LOAN FOCUS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
            <div className="bg-white/50 backdrop-blur-sm p-12 rounded-[3rem] border border-white shadow-xl relative overflow-hidden group">
                <img src={loanFocusImage} alt="Financial Services" className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center text-white mb-8">
                      <Landmark size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight">Easy Bank Loan Support</h3>
                  <p className="text-neutral-600 mb-8 leading-relaxed">
                      We work with the best banks to help you pick the right loan. From home to business loans, we handle the hard paperwork for you.
                  </p>
                  <ul className="space-y-3">
                      {["We listen to what you need", "We find the best bank for you", "We make the process fast and clear"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-neutral-700 font-medium">
                              <CheckCircle2 className="text-green-500 w-5 h-5" /> {item}
                          </li>
                      ))}
                  </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, idx) => (
                    <div key={idx} className="p-8 rounded-3xl bg-white border border-white shadow-sm hover:border-green-500/20 transition-all group">
                         <service.icon className="w-6 h-6 mb-4 text-green-600 group-hover:scale-110 transition-transform" />
                         <h4 className="font-bold text-black mb-2">{service.title}</h4>
                         <p className="text-xs text-neutral-500 leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- SECTION 3: DIGITAL MARKETING --- */}
        <div className="mb-32">
            <div className="relative rounded-[4rem] overflow-hidden bg-black text-white p-12 lg:p-20 shadow-2xl">
                <img src={digitalMarketingImage} alt="Business Growth" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 hidden lg:block" />
                <div className="relative z-10 max-w-2xl">
                    <h3 className="text-3xl font-bold mb-6 tracking-tight text-green-400">Grow Your Brand Online</h3>
                    <p className="text-lg text-neutral-300 leading-relaxed font-light mb-12">
                        We help your business get found on the internet. We use SEO and social media ads to bring you real customers from Coimbatore and beyond.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: Globe, title: "Google SEO" },
                            { icon: Target, title: "Social Ads" },
                            { icon: Globe, title: "Web Design" },
                            { icon: Award, title: "Ranking" }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 text-green-500"><item.icon size={20}/></div>
                                <p className="text-[10px] font-black uppercase tracking-widest">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* --- NEW SECTION 4: QUICK Q&A (AEO Focused) --- */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-10 bg-white/60 border border-white rounded-[3rem]">
            <HelpCircle className="text-green-600 mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-8">Common Questions</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-sm text-black mb-2">How fast is the loan approval?</p>
                <p className="text-sm text-neutral-500">Most loans in Coimbatore are approved within 3 to 7 working days.</p>
              </div>
              <div>
                <p className="font-bold text-sm text-black mb-2">Do you help small businesses?</p>
                <p className="text-sm text-neutral-500">Yes, we specialize in MSME and startup funding with low interest.</p>
              </div>
            </div>
          </div>

          <div className="p-10 bg-green-900 rounded-[3rem] text-white flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-bold mb-4">Want to talk now?</h3>
            <p className="mb-8 opacity-90">Click below to chat with us directly on WhatsApp.</p>
            <button onClick={handleWhatsApp} className="px-10 py-5 bg-white text-green-900 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:scale-105 transition-all">
              <MessageCircle size={18} /> Start Chat
            </button>
          </div>
        </div>

        {/* --- SECTION 5: TRUST & REGION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
            <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-bold mb-8">Why Choose Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        "Honest Advice",
                        "Easy Processes",
                        "Local Experts",
                        "One-on-One Help",
                    ].map((text, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 bg-white/40 rounded-2xl border border-black/5">
                            <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                            <span className="text-sm font-medium text-neutral-700">{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-5 relative group rounded-[3rem] overflow-hidden shadow-xl border border-white">
                <img src={coimbatoreMapImage} alt="Coimbatore Service Area" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-white/90"></div>
                <div className="relative p-12 flex flex-col h-full justify-center">
                    <div className="inline-flex items-center gap-2 text-green-700 mb-6">
                        <MapPin size={24} />
                        <span className="font-bold uppercase tracking-widest text-xs">Serving the City</span>
                    </div>
                    <p className="text-neutral-700 font-bold text-lg mb-2">Active in Coimbatore</p>
                    <p className="text-xs text-neutral-500 uppercase tracking-[0.2em]">Everywhere in Coimbatore</p>
                </div>
            </div>
        </div>

        {/* --- NEW SECTION 6: FINAL CTA --- */}
        <div className="bg-[#09090b] rounded-[4rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter uppercase">Ready to Grow?</h3>
            <p className="mb-10 opacity-60 max-w-xl mx-auto">Get a free plan for your loan or website today. Our Coimbatore experts are ready to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-green-600 hover:text-white transition-all">
                Contact Us
              </button>
              <button onClick={handleWhatsApp} className="px-10 py-5 bg-[#04a53f] text-white rounded-full font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                WhatsApp <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px]" />
        </div>

      </div>
    </section>
  );
}