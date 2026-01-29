import { 
 
  ArrowUpRight, 
  FolderOpen, 
  Search, 
  Target, 
  Zap, 
  BarChart3, 
  Landmark, 
  FileText, 
  
  CheckCircle2,
  PhoneCall,
  
  Briefcase
} from 'lucide-react';

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Financial Infrastructure',
    description: 'A comprehensive liquidity management interface processing $5M+ daily transactions.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'D3.js', 'Security'],
  },
  {
    title: 'E-Commerce Scale',
    category: 'Full-Stack Architecture',
    description: 'Re-engineering a high-volume retail platform to handle 10k concurrent users.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Stripe', 'Redis'],
  },
  {
    title: 'Alpha Brand Identity',
    category: 'Corporate Branding',
    description: 'Visual identity system for a Tier-1 investment firm, focusing on trust and legacy.',
    image: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Strategy', 'Identity', 'Print'],
  },
  {
    title: 'SaaS Conversion Core',
    category: 'Growth Engineering',
    description: 'High-performance landing page infrastructure that improved lead capture by 40%.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['CRO', 'Motion', 'Analytics'],
  },
  {
    title: 'Global Campaigns',
    category: 'Digital Strategy',
    description: 'Multi-market rollout strategy for a neobank entering the Asian market.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Marketing', 'PPC', 'Content'],
  },
  {
    title: 'HealthTech Mobile',
    category: 'Product Design',
    description: 'End-to-end mobile experience design for a biometric tracking application.',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Mobile', 'UX/UI', 'Compliance'],
  }
];

export default function Work() {
  return (
    <section id="work" className="relative py-32 bg-[#e5e7eb] text-[#1a1a1a] overflow-hidden font-sans">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-[95%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION: HOW WE WORK HEADER */}
        <div className="mb-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-8 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-green-700 uppercase">How We Work</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-[#1a1a1a] mb-8 leading-none">
              Simple Process. <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-700">
                Clear Guidance. Real Results.
              </span>
            </h2>
            <p className="text-xl text-neutral-600 font-light leading-relaxed max-w-2xl">
              We follow a step-by-step approach to ensure every client gets the right solution — whether it’s a bank loan or digital marketing service. Our process is designed to be easy, transparent, and effective.
            </p>
        </div>

        {/* WORK PROCESS GRID: LOANS & DIGITAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-40">
          
          {/* LOAN PROCESS */}
          <div className="bg-white/70 backdrop-blur-md p-10 rounded-[3rem] border border-white shadow-xl">
             <div className="flex items-center gap-4 mb-10 pb-6 border-b border-black/5">
                <div className="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-900/20">
                  <Landmark size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">Our Work Process – Bank Loan Services</h3>
             </div>
             
             <div className="space-y-12">
               {[
                 { id: "1", icon: Search, title: "Understand Your Requirement", desc: "We start by understanding your financial needs, eligibility, and goals — personal, home, business, vehicle, or mortgage loan." },
                 { id: "2", icon: Target, title: "Match You with the Right Bank", desc: "Based on your profile, we connect you with trusted banks and financial institutions offering the best possible terms." },
                 { id: "3", icon: FileText, title: "Document Support & Application", desc: "We guide you through the documentation and application process to avoid delays or rejections." },
                 { id: "4", icon: Zap, title: "Quick Approval & Disbursal", desc: "We follow up with the bank to ensure fast approvals and smooth loan disbursal." }
               ].map((step, i) => (
                 <div key={i} className="flex gap-6 group">
                   <div className="flex flex-col items-center">
                     <div className="text-xs font-black text-green-700 bg-green-500/10 w-8 h-8 rounded-full flex items-center justify-center mb-2">{step.id}</div>
                     {i !== 3 && <div className="w-[1px] h-full bg-black/5"></div>}
                   </div>
                   <div className="pb-4">
                     <h4 className="font-bold text-lg mb-2 group-hover:text-green-700 transition-colors">{step.title}</h4>
                     <p className="text-sm text-neutral-500 leading-relaxed font-normal">{step.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* DIGITAL PROCESS */}
          <div className="bg-white/70 backdrop-blur-md p-10 rounded-[3rem] border border-white shadow-xl">
             <div className="flex items-center gap-4 mb-10 pb-6 border-b border-black/5">
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white shadow-lg">
                  <BarChart3 size={24} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">Our Work Process – Digital Marketing Services</h3>
             </div>
             
             <div className="space-y-12">
               {[
                 { id: "1", icon: Target, title: "Business & Market Analysis", desc: "We understand your business, target audience, and competitors in the Coimbatore market." },
                 { id: "2", icon: Zap, title: "Strategy Planning", desc: "We create a customized digital marketing plan using SEO, social media, ads, or content — based on your goals." },
                 { id: "3", icon: Briefcase, title: "Execution & Optimization", desc: "We implement the strategy and continuously optimize it for better reach, leads, and conversions." },
                 { id: "4", icon: Target, title: "Results & Reporting", desc: "We track performance and share clear, easy-to-understand results — no technical confusion." }
               ].map((step, i) => (
                 <div key={i} className="flex gap-6 group">
                   <div className="flex flex-col items-center">
                     <div className="text-xs font-black text-green-700 bg-green-500/10 w-8 h-8 rounded-full flex items-center justify-center mb-2">{step.id}</div>
                     {i !== 3 && <div className="w-[1px] h-full bg-black/5"></div>}
                   </div>
                   <div className="pb-4">
                     <h4 className="font-bold text-lg mb-2 group-hover:text-green-700 transition-colors">{step.title}</h4>
                     <p className="text-sm text-neutral-500 leading-relaxed font-normal">{step.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* WHY IT WORKS SECTION */}
        <div className="mb-40 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 py-4">
                <h3 className="text-3xl font-bold tracking-tight">Why Our <br />Process Works</h3>
                <div className="h-1 w-12 bg-green-600 mt-4"></div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    "Clear communication at every step",
                    "No hidden charges or false promises",
                    "Personalized attention for every client",
                    "Focus on results, not shortcuts"
                ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-[2rem] border border-black/5 shadow-sm">
                        <CheckCircle2 size={24} className="text-green-600 shrink-0" />
                        <span className="font-bold text-sm text-neutral-700 uppercase tracking-tight">{text}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* PROVEN TRACK RECORD HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 border-b border-black/5 pb-12">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/5 mb-6 backdrop-blur-md">
                    <FolderOpen className="w-3.5 h-3.5 text-green-700" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase">Case Studies</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a] mb-6 leading-none">
                    Proven <br/>
                    <span className="font-bold">Track Record.</span>
                </h2>
                
                <p className="text-xl text-neutral-600 leading-relaxed max-w-xl font-light">
                    Explore how we've deployed capital and code to build market leaders.
                </p>
            </div>

            <div className="hidden md:block pb-2">
                 <div className="text-right">
                    <span className="block text-5xl font-bold text-black tracking-tighter">50+</span>
                    <span className="text-[10px] text-green-600 font-bold uppercase tracking-[0.2em]">Projects Delivered</span>
                 </div>
            </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white/50 border border-white/20 overflow-hidden hover:bg-white hover:border-green-500/30 hover:shadow-2xl transition-all duration-500 rounded-3xl"
            >
              <div className="relative h-72 overflow-hidden bg-neutral-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-6 right-6 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-2xl shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
                </div>
              </div>

              <div className="p-8 pt-6 flex-grow flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[1px] w-8 bg-green-500/40 group-hover:w-12 group-hover:bg-green-500 transition-all duration-500"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-green-700/60 group-hover:text-green-600 transition-colors">
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-green-700 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-normal">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-black/5">
                  {project.tags.map((tag, idx) => (
                    <span 
                        key={idx} 
                        className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-neutral-400 bg-black/5 rounded-full group-hover:bg-green-500/10 group-hover:text-green-600 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FINAL CALL TO ACTION */}
        <div className="mt-40 bg-[#09090b] rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px]"></div>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to get started?</h3>
            <p className="text-neutral-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
               Talk to us today and experience a simple, stress-free process tailored for the Coimbatore market.
            </p>
            <a href="tel:+919080691966" className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:scale-105 shadow-xl shadow-green-900/20">
                <span>Initiate Consultation</span>
                <PhoneCall size={16} className="group-hover:rotate-12 transition-transform" />
            </a>
        </div>

      </div>
    </section>
  );
}