import { ArrowUpRight, ArrowRight, BookOpen, ShieldCheck, Zap, PhoneCall, CheckCircle2 } from "lucide-react";

const trendingArticles = [
  {
    title: "Boosting Your FinTech UX: Trust in the Age of Automation",
    category: "Design Systems",
    description: "Discover key design strategies to improve usability and engagement in financial apps, focusing on trust and clarity through micro-interactions.",
    author: "Jane Doe",
    date: "Jan 12, 2026",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Scaling E-Commerce Platforms for Peak Performance",
    category: "Architecture",
    description: "Essential steps to build scalable online stores that handle traffic peaks and global payment rails.",
    author: "John Smith",
    date: "Jan 05, 2026",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
  }
];

export default function Blog() {
  return (
    <section className="relative py-32 bg-[#e5e7eb] text-[#1a1a1a] overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-green-700 uppercase">Knowledge Base</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-8">
              Latest Insights & <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-700">Helpful Guides.</span>
            </h2>
            <p className="text-xl text-neutral-600 font-light leading-relaxed max-w-2xl">
              Explore our blog for simple, practical information on bank loans and digital marketing. We share easy-to-understand guides to help individuals make better financial decisions and help businesses grow online.
            </p>
          </div>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          
          {/* Main Content Area: Topic Modules */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Bank Loan Module */}
            <div className="bg-white/70 backdrop-blur-md p-10 rounded-[3rem] border border-white shadow-xl group">
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center text-white shadow-lg">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Bank Loan Blog Topics</h3>
               </div>
               
               <div className="space-y-6 mb-10">
                  {[
                    "How to Get a Personal Loan in Coimbatore – Eligibility & Documents",
                    "Home Loan Process in Coimbatore: Step-by-Step Guide",
                    "Business Loan Options for Small Businesses in Coimbatore",
                    "Personal Loan vs Business Loan – Which Is Right for You?",
                    "Documents Required for Mortgage Loan in Coimbatore"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-center justify-between group/item cursor-pointer border-b border-black/5 pb-4">
                      <span className="text-neutral-700 font-medium group-hover/item:text-green-700 transition-colors pr-4">{topic}</span>
                      <ArrowUpRight size={18} className="text-neutral-300 group-hover/item:text-green-600 transition-all group-hover/item:translate-x-1 group-hover/item:-translate-y-1 shrink-0" />
                    </div>
                  ))}
               </div>
               
               <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl text-green-700">
                  <CheckCircle2 size={18} className="shrink-0" />
                  <p className="text-sm font-bold">Helpful guides to avoid confusion and choose the right loan.</p>
               </div>
            </div>

            {/* Digital Marketing Module */}
            <div className="bg-white/70 backdrop-blur-md p-10 rounded-[3rem] border border-white shadow-xl group">
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white shadow-lg">
                    <Zap size={28} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Digital Marketing Blog Topics</h3>
               </div>
               
               <div className="space-y-6 mb-10">
                  {[
                    "How Digital Marketing Helps Small Businesses in Coimbatore",
                    "SEO Tips to Rank Your Business on Google in Coimbatore",
                    "Social Media Marketing Strategies That Actually Work",
                    "SEO vs Google Ads: Which Is Better for Your Business?",
                    "How Content Marketing Builds Trust and Leads"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-center justify-between group/item cursor-pointer border-b border-black/5 pb-4">
                      <span className="text-neutral-700 font-medium group-hover/item:text-green-700 transition-colors pr-4">{topic}</span>
                      <ArrowUpRight size={18} className="text-neutral-300 group-hover/item:text-green-600 transition-all group-hover/item:translate-x-1 group-hover/item:-translate-y-1 shrink-0" />
                    </div>
                  ))}
               </div>

               <div className="flex items-center gap-3 p-4 bg-black/5 rounded-2xl text-black">
                  <ArrowRight size={18} className="shrink-0 text-green-600" />
                  <p className="text-sm font-bold">Actionable strategies focused on real business growth.</p>
               </div>
            </div>
          </div>

          {/* Side Feed: Trending Articles & SEO Meta */}
          <div className="lg:col-span-5 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-4 ml-4">Featured Reads</h4>
            
            {trendingArticles.map((post, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-[2rem] bg-white/40 border border-white/60 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-full md:w-32 h-32 shrink-0 rounded-2xl overflow-hidden shadow-inner bg-neutral-200">
                  <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Thumbnail" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] font-black text-green-600 uppercase tracking-widest mb-2">{post.category}</span>
                  <h4 className="text-lg font-bold leading-tight mb-3 group-hover:text-green-700 transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-tighter">{post.date}</span>
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}

     
          </div>
        </div>

        {/* Blog CTA Section */}
        <div className="relative rounded-[4rem] bg-white p-12 lg:p-24 overflow-hidden shadow-2xl border border-white text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 text-green-700 mb-8 px-4 py-1 rounded-full bg-green-50 border border-green-100">
                    <BookOpen size={20} />
                    <span className="font-bold uppercase tracking-[0.3em] text-[10px]">Blog CTA</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-black leading-tight">
                    Need expert guidance <br /> instead of guessing?
                </h3>
                <p className="text-xl text-neutral-500 mb-12 font-light leading-relaxed">
                    Don't navigate the complex world of finance or digital growth alone. Contact us today for professional support and results-oriented strategies.
                </p>
                <a href="tel:+919080691966" className="group inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-2xl hover:shadow-green-900/20 active:scale-95">
                    Get Professional Support <PhoneCall size={16} className="group-hover:rotate-12 transition-transform" />
                </a>
            </div>
        </div>

      </div>
    </section>
  );
}