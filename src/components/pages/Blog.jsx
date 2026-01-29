import React, { useEffect, useState } from "react";
import { Calendar, User, ArrowRight, ArrowUpRight } from "lucide-react"; 
import Lenis from "@studio-freight/lenis";

const blogs = [
  {
    title: "Boosting Your FinTech UX",
    description: "Discover key design strategies to improve usability and engagement in financial apps.",
    author: "Jane Doe",
    date: "Oct 1, 2025",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["FinTech", "UI/UX", "Design"],
  },
  {
    title: "Scaling E-Commerce Platforms",
    description: "Learn the essential steps to build scalable and high-performance online stores.",
    author: "John Smith",
    date: "Sep 20, 2025",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["E-Commerce", "Next.js", "Stripe"],
  },
  {
    title: "Memorable Brand Identity",
    description: "Tips and best practices for designing a logo and brand system that stands out.",
    author: "Emily Clark",
    date: "Sep 15, 2025",
    image: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Branding", "Logo", "Marketing"],
  },
];

const popularNews = [
  {
    title: "AI in FinTech: Revolutionizing Banking UX",
    description: "Learn how AI is shaping the future of financial applications.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Technology"
  },
  {
    title: "Top E-Commerce Trends 2025",
    description: "Discover strategies to maximize sales and customer retention online.",
    image: "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Market"
  },
  {
    title: "The Power of Branding in Startups",
    description: "Tips for building a strong brand identity that stands out.",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Strategy"
  },
];

export default function BlogSectionClassic() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

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
    <div className="bg-[#f8f9fa] selection:bg-green-500/30 antialiased font-sans">
      
      {/* Institutional Blog Header */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-10">
               <div className="h-[1px] w-12 bg-green-600"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-green-700">Knowledge Corridor</span>
            </div>
            <h2 className="text-6xl md:text-[11rem] font-bold tracking-tighter leading-[0.8] mb-12 text-[#0a0a0a]">
              Deep <br /> <span className="text-neutral-300">Insights.</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl font-light leading-relaxed">
              Analyzing the intersection of institutional finance and high-velocity digital engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[3rem] overflow-hidden border border-black/[0.03] hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-700 flex flex-col"
              >
                <div className="h-72 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md text-[9px] font-black uppercase tracking-widest text-white rounded-full border border-white/10">
                      #{blog.tags[0]}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-6 text-[9px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-6">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-green-600" /> {blog.date}</span>
                    <span className="flex items-center gap-1.5"><User size={12} className="text-green-600" /> {blog.author}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-6 tracking-tight leading-none group-hover:text-green-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-10 flex-1 font-light tracking-wide">{blog.description}</p>
                  
                  <button className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-black group-hover:text-green-600 transition-all">
                    Transmit Article <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute w-96 h-96 bg-green-400/5 rounded-full blur-[120px] pointer-events-none transition-transform duration-500 ease-out"
          style={{ transform: `translate(${cursorPos.x - 200}px, ${cursorPos.y - 200}px)` }}
        />
      </section>

      {/* Popular News Section - Deep Dark Terminal Style */}
      <section className="relative py-40 bg-[#09090b] text-white overflow-hidden rounded-t-[4rem]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b border-white/5 pb-16">
            <div className="max-w-2xl">
               <span className="text-[9px] font-black uppercase tracking-[0.5em] text-green-500 mb-4 block">Market Terminal</span>
               <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
                 Global <span className="text-neutral-700 italic font-extralight">Pulse.</span>
               </h2>
            </div>
            <button className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
                Browse Archive <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {popularNews.map((news, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={news.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="News" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                </div>
                <div className="px-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-green-500 block mb-4">{news.category}</span>
                  <h3 className="text-2xl font-bold mb-6 tracking-tight group-hover:text-green-400 transition-colors leading-tight">{news.title}</h3>
                  <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-500/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}