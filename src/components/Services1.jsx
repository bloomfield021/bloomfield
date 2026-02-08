import React, { useEffect } from "react";
import { Link } from "react-router-dom"; 
import { 
  Landmark, Zap, CheckCircle2, PhoneCall, MapPin, 
  BarChart3, ShieldCheck, ArrowRight, MessageCircle, 
  HelpCircle, Settings2, Search,
  FileText, PieChart, Star, Award
} from 'lucide-react';
import Lenis from "@studio-freight/lenis";

// IMPORT YOUR IMAGES HERE
import HeroImage from "../assests/bf3.webp"; 
import TechImage from "../assests/bf2.webp";

export default function ServicesPage() {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // --- REDIRECTION HELPERS ---
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Bloomfield, I want to know more about your loan and marketing services.");
    window.open(`https://wa.me/919080691966?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen text-slate-900 font-sans antialiased selection:bg-green-100" itemScope itemType="https://schema.org/Service">
      
    {/* --- HERO SECTION --- */}
<section className="pt-32 md:pt-40 pb-20 px-4 md:px-6 border-b border-slate-200 bg-white overflow-hidden">
  <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    
    {/* Text Container */}
    <div className="order-1"> 
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-6 mt-16">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-700">Official Services 2026</span>
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-medium tracking-tight mb-6 md:mb-8 leading-[0.95] text-slate-950 font-serif" style={{ fontFamily: 'serif' }}>
        Need a Loan or <br />
        <span className="text-green-600 italic">Online Growth?</span>
      </h1>
      <p className="text-base md:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl font-light tracking-tight">
        We help you get bank loans easily and grow your business online. Our team makes complicated bank and tech steps very simple for you.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button onClick={handleWhatsApp} className="px-9 py-4 bg-[#25D366] text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-green-500/20 hover:scale-[1.02]">
          <MessageCircle size={18} /> Chat on WhatsApp
        </button>
        <Link to="/contact" className="px-9 py-4 bg-slate-950 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-slate-800 transition-all text-center">
          Contact Us
        </Link>
      </div>
    </div>
    
    {/* Image Container */}
    <div className="relative group order-2">
      <div className="absolute -inset-4 bg-green-500/5 rounded-[3rem] blur-3xl group-hover:bg-green-500/10 transition-colors duration-1000"></div>
      <div className="relative h-[450px] md:h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl">
        <img src={HeroImage} alt="Best Bank Loan Agent and Digital Marketer in Coimbatore" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>
    </div>

  </div>
</section>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-[1440px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-slate-950" style={{ fontFamily: 'serif' }}>How We Help You</h2>
            <div className="h-1 w-24 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Bank Loans Section */}
          <div className="group bg-white p-8 md:p-16 rounded-[3.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-green-100 hover:shadow-2xl hover:shadow-green-500/5 transition-all duration-700 flex flex-col">
            <div className="w-20 h-20 bg-green-600 rounded-3xl flex items-center justify-center text-white mb-12 transform group-hover:rotate-6 transition-transform">
              <Landmark size={36} />
            </div>
            <h2 className="text-4xl font-serif mb-6 text-slate-950" style={{ fontFamily: 'serif' }}>Easy Bank Loans</h2>
            <p className="text-slate-500 mb-12 leading-relaxed text-lg font-light tracking-tight">
              We help you find and apply for the right bank loan. Whether it is for your home or your business, we handle the paperwork for you.
            </p>
            <ul className="space-y-6 mb-14 flex-grow">
              {["Personal & Home Loans", "Business & MSME Loans", "Low Interest Rates", "Fast Paperwork"].map((text) => (
                <li key={text} className="flex items-center gap-5 text-slate-800 font-medium tracking-tight">
                  <div className="bg-green-50 p-1 rounded-full"><CheckCircle2 size={20} className="text-green-600" /></div> {text}
                </li>
              ))}
            </ul>
            <button 
              onClick={handleWhatsApp} 
              className="w-full py-6 bg-slate-50 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-slate-900 hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-3 group"
            >
              Apply via WhatsApp <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Digital Marketing Section */}
          <div className="group bg-white p-8 md:p-16 rounded-[3.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-slate-300 hover:shadow-2xl transition-all duration-700 flex flex-col">
            <div className="w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center text-white mb-12 transform group-hover:-rotate-6 transition-transform">
              <Zap size={36} className="text-green-400" />
            </div>
            <h2 className="text-4xl font-serif mb-6 text-slate-950" style={{ fontFamily: 'serif' }}>Digital Marketing</h2>
            <p className="text-slate-500 mb-12 leading-relaxed text-lg font-light tracking-tight">
              We make sure people find your business when they search on Google. We help you get more customers using SEO and social media.
            </p>
            <ul className="space-y-6 mb-14 flex-grow">
              {["Google Search Ranking (SEO)", "Facebook & Instagram Ads", "Website Design", "Google Maps Growth"].map((text) => (
                <li key={text} className="flex items-center gap-5 text-slate-800 font-medium tracking-tight">
                  <div className="bg-slate-50 p-1 rounded-full"><CheckCircle2 size={20} className="text-green-600" /></div> {text}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="w-full py-6 bg-slate-50 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center gap-3 group no-underline">
              Get Free SEO Audit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Integration Banner */}
        <div className="mt-16 relative h-[400px] md:h-[550px] rounded-[4rem] overflow-hidden shadow-2xl border border-white">
            <img src={TechImage} alt="Modern Business Infrastructure in Coimbatore" className="w-full h-full object-cover grayscale opacity-90 scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent flex items-center px-10 md:px-24">
                <div className="max-w-2xl text-white">
                    <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight" style={{ fontFamily: 'serif' }}>Why Choose Bloomfield?</h3>
                    <p className="text-slate-300 font-light text-lg md:text-xl leading-relaxed tracking-tight">We understand the Coimbatore market. We combine money help with digital tools to make your brand the best in the city. Our strategy ensures your business is visible to the right local audience at the right time.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- LONG-FORM FINANCE AUTHORITY --- */}
      <section className="py-24 bg-white px-4 md:px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="text-green-600 font-black uppercase tracking-[0.3em] text-xs">Expert Analysis</span>
                <h2 className="text-4xl lg:text-5xl font-serif mt-6 mb-8 text-slate-950 leading-tight" style={{ fontFamily: 'serif' }}>The 2026 Guide to Secured Financing in Coimbatore</h2>
                <p className="text-slate-500 leading-relaxed mb-10 text-lg font-light tracking-tight">
                  Coimbatore’s industrial landscape is shifting. To stay ahead, business owners need more than just capital—they need a strategic financial structure.
                </p>
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner">
                  <PieChart className="text-green-600 mb-6" size={32} />
                  <h4 className="font-bold text-slate-950 mb-3 tracking-tight">Market Insight</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">Recent data shows that 74% of MSMEs in Peelamedu and Gandhipuram struggle with loan approvals due to documentation gaps, not lack of revenue.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 text-slate-600 space-y-12 leading-relaxed text-xl font-light tracking-tight">
              <h3 className="text-3xl font-serif text-slate-950" style={{ fontFamily: 'serif' }}>Understanding the MSME Loan Ecosystem</h3>
              <p>
                For small and medium enterprises in the Manchester of South India, securing a <strong>Business Loan in Coimbatore</strong> has become a complex journey. At Bloomfield, we bridge the gap between traditional banking requirements and the fast-paced needs of modern entrepreneurs. Whether you are operating a textile unit in Tirupur or a tech startup in Saravanampatti, the core of a successful loan application lies in "Profile Readiness."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                <div className="border-l-[3px] border-green-500 pl-8 py-2">
                  <h4 className="font-bold text-slate-950 mb-3 text-lg tracking-tight">Credit Score Optimization</h4>
                  <p className="text-base text-slate-500">We fix the foundation. Our consultants work on improving your CIBIL score and resolving legacy banking issues that might hinder your 2026 growth plans.</p>
                </div>
                <div className="border-l-[3px] border-slate-950 pl-8 py-2">
                  <h4 className="font-bold text-slate-950 mb-3 text-lg tracking-tight">Collateral Advisory</h4>
                  <p className="text-base text-slate-500">Our legal and valuation experts in Coimbatore provide a preliminary check to ensure your assets are bank-ready for high-value mortgage loans.</p>
                </div>
              </div>
              <h3 className="text-3xl font-serif text-slate-950" style={{ fontFamily: 'serif' }}>Personal & Home Loans: Turning Dreams into Reality</h3>
              <p>
                Buying a home in Coimbatore’s rising residential zones like Kovaipudur or Vadavalli is a significant milestone. Bloomfield’s financial consulting services act as your personal advocate. We compare 25+ banking institutions to find the lowest ROI and ensure that hidden charges don't catch you by surprise.
              </p>
              <div className="bg-slate-950 text-white p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="text-3xl font-serif mb-6 text-green-500" style={{ fontFamily: 'serif' }}>The Bloomfield Promise</h4>
                  <p className="text-xl font-light opacity-80 leading-relaxed italic pr-12">"We never charge upfront fees for loan consultations. Our success is tied directly to your approval. This 100% transparent model has made us the trusted financial partner for over 500+ families."</p>
                </div>
                <Award className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LONG-FORM DIGITAL STRATEGY --- */}
      <section className="py-24 bg-slate-950 text-white px-4 md:px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <span className="text-green-500 font-black uppercase tracking-[0.3em] text-xs">Growth Playbook</span>
                <h2 className="text-4xl lg:text-5xl font-serif mt-6 mb-8 leading-tight" style={{ fontFamily: 'serif' }}>Why Your Local Business is Invisible on Google</h2>
                <p className="text-slate-400 leading-relaxed mb-10 text-lg font-light tracking-tight">
                  In 2026, if your business isn't on the first page of Google Maps, you are losing 80% of your potential local leads to competitors.
                </p>
                <div className="space-y-5">
                  {[
                    "Zero-Click Searches are rising",
                    "Local intent is the #1 driver of sales",
                    "Mobile users prioritize 'Near Me' results"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-bold tracking-tight text-slate-200">
                      <div className="bg-green-500/20 p-1 rounded-full"><Star className="text-green-500 shrink-0" size={14} /></div> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 text-slate-400 space-y-12 leading-relaxed text-xl font-light tracking-tight">
              <h3 className="text-3xl font-serif text-white" style={{ fontFamily: 'serif' }}>The Anatomy of a Digital Marketing Agency in Coimbatore</h3>
              <p>
                A website without SEO is like a billboard in the middle of a desert. As a premier <strong>Digital Marketing Agency in Coimbatore</strong>, Bloomfield focuses on "Discoverability." Our approach to <strong>Search Engine Optimization (SEO)</strong> is tailored for the specific search patterns of Tamil Nadu’s industrial hub.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-green-500/50 transition-all duration-500 group">
                  <Search className="text-green-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="text-white font-bold mb-3 text-lg tracking-tight">Hyper-Local SEO</h4>
                  <p className="text-base text-slate-400">We target specific keywords like "Best Loan Agent in Gandhipuram" to capture the most relevant local traffic.</p>
                </div>
                <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-green-500/50 transition-all duration-500 group">
                  <BarChart3 className="text-green-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="text-white font-bold mb-3 text-lg tracking-tight">Conversion Optimization</h4>
                  <p className="text-base text-slate-400">We use high-speed React frameworks to ensure your site converts visitors into paying customers efficiently.</p>
                </div>
              </div>
              <p>
                Stop wasting money on broad Facebook ads. We use <strong>Geofencing and Demographic Targeting</strong> to ensure your budget is spent only on people who can actually visit your shop or hire your service. The synergy between our <strong>Financial Consulting</strong> and <strong>Digital Services</strong> is unique. We understand your business's cash flow, which allows us to recommend marketing budgets that are sustainable and profitable.
              </p>
              <div className="border border-green-500/20 bg-green-500/5 p-10 md:p-14 rounded-[4rem]">
                <h4 className="text-green-500 font-bold mb-6 flex items-center gap-3 tracking-widest text-xs uppercase"><FileText size={18}/> Case Study: MSME Growth</h4>
                <p className="text-2xl font-serif text-white italic leading-relaxed" style={{ fontFamily: 'serif' }}>
                  "By integrating our SEO strategy with a structured Business Loan application, we helped a local manufacturing unit in Coimbatore increase their production capacity by 40% while doubling online inquiries."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW WE WORK --- */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-950 mb-4" style={{ fontFamily: 'serif' }}>Simple 3-Step Process</h2>
            <p className="text-slate-500 font-light tracking-tight text-lg">How we get you results quickly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                <Settings2 size={36} />
              </div>
              <h4 className="text-2xl font-serif mb-4 text-slate-950" style={{ fontFamily: 'serif' }}>1. Talk & Plan</h4>
              <p className="text-slate-500 text-base font-light leading-relaxed">We listen to your needs and make a simple plan for your loan or website.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                <ShieldCheck size={36} />
              </div>
              <h4 className="text-2xl font-serif mb-4 text-slate-950" style={{ fontFamily: 'serif' }}>2. Fast Processing</h4>
              <p className="text-slate-500 text-base font-light leading-relaxed">We handle the bank talks or start your digital marketing immediately.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                <BarChart3 size={36} />
              </div>
              <h4 className="text-2xl font-serif mb-4 text-slate-950" style={{ fontFamily: 'serif' }}>3. See Success</h4>
              <p className="text-slate-500 text-base font-light leading-relaxed">You get your loan approval or see your business growing on Google.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <HelpCircle size={48} className="mx-auto text-green-600 mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-slate-950" style={{ fontFamily: 'serif' }}>Common Questions</h2>
        </div>
        <div className="space-y-8">
          <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
            <h4 className="font-serif text-2xl mb-4 text-slate-950" style={{ fontFamily: 'serif' }}>How long does loan approval take?</h4>
            <p className="text-slate-500 text-lg font-light leading-relaxed">Usually, it takes 3 to 7 working days depending on the bank and your documents. We expedite the process by ensuring all documentation is correct the first time.</p>
          </div>
          <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
            <h4 className="font-serif text-2xl mb-4 text-slate-950" style={{ fontFamily: 'serif' }}>Can you help my business show on Google Maps?</h4>
            <p className="text-slate-500 text-lg font-light leading-relaxed">Yes, we specialize in Local SEO to help businesses in Coimbatore rank #1 on Google Maps. This is critical for driving walk-in customers.</p>
          </div>
        </div>
      </section>

      {/* --- REGIONAL FOCUS --- */}
      <section className="py-24 bg-slate-950 text-white mx-4 rounded-[4rem] md:rounded-[5rem] px-6 text-center shadow-2xl overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white leading-tight" style={{ fontFamily: 'serif' }}>Coimbatore Local Expert</h2>
          <p className="text-slate-400 mb-20 text-xl font-light tracking-tight italic">Serving Gandhipuram, RS Puram, Peelamedu, and Saravanampatti with 100% trust.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10">
               <MapPin className="text-green-500 mx-auto mb-8" size={36} />
               <h4 className="font-serif text-2xl mb-4 text-white" style={{ fontFamily: 'serif' }}>City Wide</h4>
               <p className="text-base text-slate-400 font-light leading-relaxed">Serving every area in Coimbatore with door-step loan consulting.</p>
            </div>
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10">
               <ShieldCheck className="text-green-500 mx-auto mb-8" size={36} />
               <h4 className="font-serif text-2xl mb-4 text-white" style={{ fontFamily: 'serif' }}>Safe Process</h4>
               <p className="text-base text-slate-400 font-light leading-relaxed">Encrypted data handling. Your financial privacy is our top priority.</p>
            </div>
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10">
               <BarChart3 className="text-green-500 mx-auto mb-8" size={36} />
               <h4 className="font-serif text-2xl mb-4 text-white" style={{ fontFamily: 'serif' }}>Real Growth</h4>
               <p className="text-base text-slate-400 font-light leading-relaxed">Measurable KPIs for all digital marketing and SEO campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CONTACT CTA --- */}
      <section id="contact" className="py-32 md:py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-serif mb-10 tracking-tight text-slate-950 leading-[0.95]" style={{ fontFamily: 'serif' }}>Start Today.</h2>
          <p className="text-slate-500 text-xl md:text-2xl font-light mb-16 tracking-tight">Get a free plan for your loan or marketing. Choose how you want to reach our Coimbatore experts below:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={handleWhatsApp} 
              className="inline-flex items-center justify-center gap-4 bg-[#25D366] text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-green-700 transition-all shadow-2xl shadow-green-500/20"
            >
              WhatsApp Us <MessageCircle size={20} />
            </button>
            <a 
              href="tel:+919080691966" 
              className="inline-flex items-center justify-center gap-4 bg-slate-950 text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-2xl"
            >
              Call Our Experts <PhoneCall size={20} />
            </a>
          </div>
          <div className="mt-16">
             <Link to="/contact" className="text-slate-400 text-sm hover:text-green-600 transition-colors font-medium underline underline-offset-8 decoration-slate-300">Or use our online contact form</Link>
          </div>
        </div>
      </section>
    </div>
  );
}