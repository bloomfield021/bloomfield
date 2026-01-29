import { useRef } from "react"; // Removed unused useEffect and useState
import { 
  Search, 
  Target, 
  FileText, 
  UserCheck, 
  CheckCircle2, 
  Globe, 
  Zap, 
  Cpu, 
  BarChart3, 
  Rocket,
  ShieldCheck,
} from "lucide-react";

const bankLoanSteps = [
  { id: "01", title: "Step 1: Free Consultation", desc: "We begin with a free discussion to understand your financial requirement, eligibility, and loan purpose.", icon: Search },
  { id: "02", title: "Step 2: Bank Selection", desc: "Based on your profile, we identify the best bank or financial institution that matches your needs.", icon: Target },
  { id: "03", title: "Step 3: Documentation Support", desc: "We help you prepare and submit the required documents correctly to avoid delays or rejections.", icon: FileText },
  { id: "04", title: "Step 4: Application & Follow-Up", desc: "We submit your loan application and coordinate with the bank to ensure smooth processing.", icon: UserCheck },
  { id: "05", title: "Step 5: Approval & Disbursal", desc: "Once approved, we assist until the loan amount is successfully disbursed.", icon: CheckCircle2 }
];

const digitalMarketingSteps = [
  { id: "01", title: "Step 1: Requirement Analysis", desc: "We understand your business goals, target audience, and current online presence.", icon: Globe },
  { id: "02", title: "Step 2: Strategy Creation", desc: "A customized digital marketing plan is created using SEO, social media, ads, and content.", icon: Zap },
  { id: "03", title: "Step 3: Execution", desc: "We implement the strategy with a focus on quality, consistency, and performance.", icon: Cpu },
  { id: "04", title: "Step 4: Monitoring & Optimization", desc: "Campaigns are monitored and optimized regularly for better reach and leads.", icon: BarChart3 },
  { id: "05", title: "Step 5: Reporting & Growth", desc: "We provide clear updates and focus on continuous improvement and long-term growth.", icon: Rocket }
];

export default function Process() {
  // Removed scrollProgress state and scroll event listener as they were not being used
  const sectionRef = useRef(null);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-[#e5e7eb] text-[#1a1a1a] overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Main Header */}
        <div className="text-center mb-32 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-green-700 uppercase">Our Process</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a] mb-8 leading-tight">
                A Simple & Transparent Process <br/>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-700">
                    That Delivers Results.
                </span>
            </h2>
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              We believe that both bank loans and digital marketing should be easy to understand and stress-free. Our process is designed to keep things clear, fast, and effective from start to finish.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Column 1: Bank Loan Process */}
          <div>
            <div className="flex items-center gap-4 mb-16 px-6">
               <div className="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-900/20">
                  <ShieldCheck size={24} />
               </div>
               <h3 className="text-2xl font-bold uppercase tracking-tight">Bank Loan Process</h3>
            </div>

            <div className="relative space-y-12">
               <div className="absolute left-[31px] top-0 bottom-0 w-[1px] bg-black/5"></div>
               {bankLoanSteps.map((step, idx) => (
                 <div key={idx} className="relative pl-16 group">
                   <div className="absolute left-[24px] top-0 w-4 h-4 bg-white border-2 border-green-600 rounded-full z-10 group-hover:bg-green-600 transition-colors duration-300 shadow-sm"></div>
                   <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-white group-hover:shadow-xl group-hover:shadow-green-900/5 transition-all duration-500">
                     <div className="flex items-center gap-3 mb-3">
                        <step.icon className="text-green-600" size={20} />
                        <h4 className="font-bold text-black">{step.title}</h4>
                     </div>
                     <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Column 2: Digital Marketing Process */}
          <div>
            <div className="flex items-center gap-4 mb-16 px-6">
               <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white shadow-lg">
                  <Zap size={24} className="text-green-500" />
               </div>
               <h3 className="text-2xl font-bold uppercase tracking-tight">Digital Marketing Process</h3>
            </div>

            <div className="relative space-y-12">
               <div className="absolute left-[31px] top-0 bottom-0 w-[1px] bg-black/5"></div>
               {digitalMarketingSteps.map((step, idx) => (
                 <div key={idx} className="relative pl-16 group">
                   <div className="absolute left-[24px] top-0 w-4 h-4 bg-white border-2 border-green-600 rounded-full z-10 group-hover:bg-green-600 transition-colors duration-300 shadow-sm"></div>
                   <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-white group-hover:shadow-xl group-hover:shadow-green-900/5 transition-all duration-500">
                     <div className="flex items-center gap-3 mb-3">
                        <step.icon className="text-green-600" size={20} />
                        <h4 className="font-bold text-black">{step.title}</h4>
                     </div>
                     <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Section: Differentiation */}
        <div className="mt-40 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
             <h3 className="text-3xl font-bold tracking-tight">What Makes Our <br /> Process Different</h3>
             <div className="h-1 w-12 bg-green-600 mt-6"></div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Simple and easy to understand",
              "Transparent guidance at every stage",
              "Personalized support (no middlemen)",
              "Focus on real outcomes, not promises"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-[1.5rem] border border-black/5 shadow-sm">
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