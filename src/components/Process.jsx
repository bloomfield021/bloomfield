import { useRef } from "react";
import { 
  Search, Target, FileText, UserCheck, CheckCircle2, 
  Globe, Zap, Cpu, BarChart3, Rocket, ShieldCheck,
  HelpCircle, Sparkles, MapPin
} from "lucide-react";

const bankLoanSteps = [
  { id: "01", title: "Step 1: Free Chat", desc: "We start with a free talk to understand how much money you need and if you can get a loan.", icon: Search },
  { id: "02", title: "Step 2: Find the Bank", desc: "We look for the best bank in Coimbatore that offers you the lowest interest rates.", icon: Target },
  { id: "03", title: "Step 3: Paperwork", desc: "We help you get all your documents ready so the bank can approve your file quickly.", icon: FileText },
  { id: "04", title: "Step 4: Bank Follow-up", desc: "We submit your file and talk to the bank every day to make sure things move fast.", icon: UserCheck },
  { id: "05", title: "Step 5: Get the Money", desc: "Once the bank says yes, we stay with you until the money is in your account.", icon: CheckCircle2 }
];

const digitalMarketingSteps = [
  { id: "01", title: "Step 1: Business Check", desc: "We look at your business goals and see who your customers are in Coimbatore.", icon: Globe },
  { id: "02", title: "Step 2: Custom Plan", desc: "We create a simple plan using Google SEO and ads to help people find you online.", icon: Zap },
  { id: "03", title: "Step 3: Starting Work", desc: "Our team builds your website and starts your ads to bring in new customers.", icon: Cpu },
  { id: "04", title: "Step 4: Fix & Grow", desc: "We check your results every day and fix things to make sure you get more calls.", icon: BarChart3 },
  { id: "05", title: "Step 5: See Results", desc: "We show you easy reports that prove your business is growing on the internet.", icon: Rocket }
];

export default function Process() {
  const sectionRef = useRef(null);

  return (
    <section 
      id="process" 
      ref={sectionRef}
      className="relative py-32 bg-[#e5e7eb] text-[#1a1a1a] overflow-hidden"
      itemScope itemType="https://schema.org/HowTo"
    >
      {/* --- SEO / GEO / AEO METADATA --- */}
      <meta itemProp="name" content="Bloomfield Bank Loan and Digital Marketing Process" />
      <meta itemProp="description" content="Step-by-step guide to getting a bank loan and growing your business online in Coimbatore. Simple, fast, and easy to follow." />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Main Header */}
        <div className="text-center mb-32 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-green-700 uppercase">Simple Steps</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a] mb-8 leading-tight">
                An Easy Process <br/>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-700">
                    That Works for You.
                </span>
            </h2>
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              We make bank loans and digital marketing simple to understand. We follow a clear plan to make sure your work is finished fast and correctly.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Column 1: Bank Loan Process */}
          <div itemProp="step" itemScope itemType="https://schema.org/HowToStep">
            <div className="flex items-center gap-4 mb-16 px-6">
               <div className="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-900/20">
                  <ShieldCheck size={24} />
               </div>
               <h3 className="text-2xl font-bold uppercase tracking-tight">Loan Process</h3>
            </div>

            <div className="relative space-y-12">
               <div className="absolute left-[31px] top-0 bottom-0 w-[1px] bg-black/5"></div>
               {bankLoanSteps.map((step, idx) => (
                 <div key={idx} className="relative pl-16 group">
                   <div className="absolute left-[24px] top-0 w-4 h-4 bg-white border-2 border-green-600 rounded-full z-10 group-hover:bg-green-600 transition-colors duration-300 shadow-sm"></div>
                   <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-white group-hover:shadow-xl group-hover:shadow-green-900/5 transition-all duration-500">
                     <div className="flex items-center gap-3 mb-3">
                        <step.icon className="text-green-600" size={20} />
                        <h4 className="font-bold text-black" itemProp="name">{step.title}</h4>
                     </div>
                     <p className="text-neutral-500 text-sm leading-relaxed" itemProp="itemListElement">{step.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Column 2: Digital Marketing Process */}
          <div itemProp="step" itemScope itemType="https://schema.org/HowToStep">
            <div className="flex items-center gap-4 mb-16 px-6">
               <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white shadow-lg">
                  <Zap size={24} className="text-green-500" />
               </div>
               <h3 className="text-2xl font-bold uppercase tracking-tight">Marketing Process</h3>
            </div>

            <div className="relative space-y-12">
               <div className="absolute left-[31px] top-0 bottom-0 w-[1px] bg-black/5"></div>
               {digitalMarketingSteps.map((step, idx) => (
                 <div key={idx} className="relative pl-16 group">
                   <div className="absolute left-[24px] top-0 w-4 h-4 bg-white border-2 border-green-600 rounded-full z-10 group-hover:bg-green-600 transition-colors duration-300 shadow-sm"></div>
                   <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-white group-hover:shadow-xl group-hover:shadow-green-900/5 transition-all duration-500">
                     <div className="flex items-center gap-3 mb-3">
                        <step.icon className="text-green-600" size={20} />
                        <h4 className="font-bold text-black" itemProp="name">{step.title}</h4>
                     </div>
                     <p className="text-neutral-500 text-sm leading-relaxed" itemProp="itemListElement">{step.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* --- NEW INTERACTION SECTION 1: TRUST INDICATORS (GEO Focus) --- */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white/40 border border-white rounded-[3rem] text-center group hover:bg-white transition-all duration-500">
                <HelpCircle className="mx-auto text-green-600 mb-6" size={40} />
                <h4 className="font-bold text-lg mb-2">Honest Advice</h4>
                <p className="text-xs text-neutral-500">We tell you the truth about loan interest rates and marketing results.</p>
            </div>
            <div className="p-10 bg-white/40 border border-white rounded-[3rem] text-center group hover:bg-white transition-all duration-500">
                <Sparkles className="mx-auto text-green-600 mb-6" size={40} />
                <h4 className="font-bold text-lg mb-2">Fast Work</h4>
                <p className="text-xs text-neutral-500">We use high-speed technology to submit your paperwork and update your ads.</p>
            </div>
            <div className="p-10 bg-white/40 border border-white rounded-[3rem] text-center group hover:bg-white transition-all duration-500">
                <MapPin className="mx-auto text-green-600 mb-6" size={40} />
                <h4 className="font-bold text-lg mb-2">Local Support</h4>
                <p className="text-xs text-neutral-500">Our team is located in Coimbatore to help you with direct face-to-face meetings.</p>
            </div>
        </div>

        {/* --- NEW INTERACTION SECTION 2: WHY WE ARE DIFFERENT (AEO Focus) --- */}
        <div className="mt-40 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
             <h3 className="text-3xl font-bold tracking-tight">Why Our <br /> Process is Better</h3>
             <div className="h-1 w-12 bg-green-600 mt-6"></div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Everything is easy to understand",
              "No hidden costs or fake promises",
              "You talk directly to our experts",
              "We focus on real profit for you"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-[1.5rem] border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                 <CheckCircle2 size={24} className="text-green-600 shrink-0" />
                 <span className="font-bold text-xs text-neutral-700 uppercase tracking-widest">{text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}