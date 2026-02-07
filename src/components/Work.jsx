import { 
  ArrowUpRight, 
  FolderOpen, 

  Zap, 
  BarChart3, 
  Landmark, 

  CheckCircle2,
 
  HelpCircle,
  MessageCircle
} from 'lucide-react';

const projects = [
  {
    title: 'Easy Loan App',
    category: 'Bank Loan Help',
    description: 'A simple dashboard that helps people manage over $5M in daily loan approvals.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Simple', 'Safe', 'Fast'],
  },
  {
    title: 'Store Growth Plan',
    category: 'Digital Marketing',
    description: 'Updated an online store to handle 10,000 customers at the same time.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Sales', 'Traffic', 'Design'],
  },
  {
    title: 'Business Trust Look',
    category: 'Branding',
    description: 'Created a new professional look for an investment firm to build client trust.',
    image: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Trust', 'Logo', 'Style'],
  },
  {
    title: 'Leads Machine',
    category: 'SEO Strategy',
    description: 'Built a high-speed website that helped a business get 40% more customers.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Ranking', 'Speed', 'Results'],
  },
  {
    title: 'Global Ad Launch',
    category: 'Online Advertising',
    description: 'A marketing plan that helped a new bank start successfully in Asian markets.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Ads', 'Global', 'Content'],
  },
  {
    title: 'Simple Health App',
    category: 'Mobile Design',
    description: 'Designed an easy-to-use mobile app for tracking health and fitness data.',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Mobile', 'User-Friendly', 'Safe'],
  }
];

export default function Work() {

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919080691966?text=Hi Bloomfield, I saw your work and want to discuss a project.`, "_blank");
  };

  return (
    <section id="work" className="relative py-32 bg-[#e5e7eb] text-[#1a1a1a] overflow-hidden font-sans" itemScope itemType="https://schema.org/CollectionPage">
      
      {/* SEO / GEO / AEO METADATA */}
      <meta itemProp="name" content="Bloomfield Work Portfolio | Coimbatore Business Success" />
      <meta itemProp="description" content="See our past work in bank loan assistance and digital marketing. We help Coimbatore businesses grow and find funding." />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-[95%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION: HEADER */}
        <div className="mb-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-8 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-green-700 uppercase">Our Recent Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a] mb-8 leading-none">
              Simple Steps. <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-700">
                Easy Growth. Real Success.
              </span>
            </h2>
            <p className="text-xl text-neutral-600 font-light leading-relaxed max-w-2xl">
              We help every client with a simple plan. Whether you need a loan or a better website in **Coimbatore**, we make the process easy and clear for you.
            </p>
        </div>

        {/* WORK PROCESS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-40">
          
          {/* LOAN PROCESS */}
          <div className="bg-white/70 backdrop-blur-md p-10 rounded-[3rem] border border-white shadow-xl">
             <div className="flex items-center gap-4 mb-10 pb-6 border-b border-black/5">
                <div className="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center text-white">
                  <Landmark size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">How we help with Loans</h3>
             </div>
             
             <div className="space-y-12">
               {[
                 { id: "1", title: "Talk to Us", desc: "We listen to your needs for a home, business, or personal loan." },
                 { id: "2", title: "Pick a Bank", desc: "We find the best bank in Coimbatore with the lowest interest rates for you." },
                 { id: "3", title: "Paperwork", desc: "We help you get all your documents ready so the bank says 'Yes' quickly." },
                 { id: "4", title: "Get Money", desc: "We follow up until the money is safely in your bank account." }
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
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white">
                  <BarChart3 size={24} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">How we grow your brand</h3>
             </div>
             
             <div className="space-y-12">
               {[
                 { id: "1", title: "Market Check", desc: "We look at your business and competitors in Coimbatore." },
                 { id: "2", title: "Create a Plan", desc: "We choose the best SEO and social media strategy for your goals." },
                 { id: "3", title: "Start Work", desc: "We build your ads and website to attract new customers." },
                 { id: "4", title: "See Growth", desc: "We show you easy reports that prove your business is growing." }
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

        {/* NEW INTERACTIVE SECTION 1: WHY IT WORKS (AEO Targeted) */}
        <div className="mb-40 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 py-4">
                <h3 className="text-3xl font-bold tracking-tight">Why Choose <br />Bloomfield?</h3>
                <div className="h-1 w-12 bg-green-600 mt-4"></div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    "Honest talk at every step",
                    "No hidden fees or extra costs",
                    "Personal help for every customer",
                    "Focus on making you more money"
                ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-[2rem] border border-black/5 shadow-sm hover:scale-105 transition-all">
                        <CheckCircle2 size={24} className="text-green-600 shrink-0" />
                        <span className="font-bold text-sm text-neutral-700 uppercase tracking-tight">{text}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* CASE STUDIES HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 border-b border-black/5 pb-12">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/5 mb-6 backdrop-blur-md">
                    <FolderOpen className="w-3.5 h-3.5 text-green-700" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase">Success Stories</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a] mb-6 leading-none">
                    Proven <br/>
                    <span className="font-bold">Track Record.</span>
                </h2>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-xl font-light">
                    See how we have helped local businesses in Coimbatore find funding and grow online.
                </p>
            </div>
            <div className="hidden md:block pb-2">
                 <div className="text-right">
                    <span className="block text-5xl font-bold text-black tracking-tighter">50+</span>
                    <span className="text-[10px] text-green-600 font-bold uppercase tracking-[0.2em]">Success Projects</span>
                 </div>
            </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
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
                  loading="lazy"
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

        {/* NEW INTERACTIVE SECTION 2: QUICK HELP (GEO Focused) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          <div className="p-10 bg-white/60 border border-white rounded-[3rem] hover:bg-white transition-all">
            <HelpCircle className="text-green-600 mb-6" size={32} />
            <h4 className="text-xl font-bold mb-4">Have a Question?</h4>
            <p className="text-sm text-neutral-500 mb-6">Our Coimbatore team is ready to answer questions about eligibility, interest rates, or SEO rankings.</p>
            <button onClick={handleWhatsApp} className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-green-600 hover:gap-4 transition-all">
              Chat with an Expert <ArrowUpRight size={14}/>
            </button>
          </div>
          <div className="p-10 bg-white/60 border border-white rounded-[3rem] hover:bg-white transition-all">
            <Zap className="text-green-600 mb-6" size={32} />
            <h4 className="text-xl font-bold mb-4">Fast Start</h4>
            <p className="text-sm text-neutral-500 mb-6">Start your loan application or marketing audit today. We move at the speed of your business.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-green-600 hover:gap-4 transition-all">
              Initiate Process <ArrowUpRight size={14}/>
            </button>
          </div>
        </div>

        {/* FINAL CALL TO ACTION */}
        <div className="bg-[#09090b] rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px]"></div>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to get started?</h3>
            <p className="text-neutral-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
               Contact us today to experience a stress-free process designed for Coimbatore business owners.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={handleWhatsApp}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#07ad44] text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300 hover:scale-105"
              >
                <span>WhatsApp Us</span>
                <MessageCircle size={16} />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300 hover:bg-green-600 hover:text-white"
              >
                <span>Contact Page</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
        </div>

      </div>
    </section>
  );
}