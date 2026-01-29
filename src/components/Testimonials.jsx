import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Suresh K.",
    company: "Coimbatore",
    role: "Personal Loan Client",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Easy and stress-free loan process",
    content: "I was confused about choosing the right bank for my personal loan. They guided me clearly and helped me get quick approval without any stress. Very professional and trustworthy.",
    rating: 5,
  },
  {
    name: "Lakshmi R.",
    company: "Coimbatore",
    role: "Home Loan Client",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Good support from start to finish",
    content: "They helped me with my home loan documentation and bank process. Everything was explained clearly and approval was faster than I expected. Highly recommended.",
    rating: 5,
  },
  {
    name: "Prakash M.",
    company: "Coimbatore",
    role: "Business Owner",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Best support for business loan",
    content: "As a small business owner, I needed funding quickly. Their guidance helped me choose the right bank and the process was smooth. Very reliable service.",
    rating: 5,
  },
  {
    name: "Anitha S.",
    company: "Coimbatore",
    role: "Entrepreneur",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Digital marketing that actually works",
    content: "My business visibility improved after starting SEO and social media marketing. I started getting genuine leads within a few months. Honest work and good communication.",
    rating: 5,
  },
  {
    name: "Ramesh P.",
    company: "Coimbatore",
    role: "Business Consultant",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "One place for loans and digital growth",
    content: "I liked the fact that they provide both loan services and digital marketing. Very convenient and trustworthy. Great experience overall.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative bg-white/70 backdrop-blur-md rounded-[2.5rem] p-8 border border-white hover:border-green-500/30 shadow-xl shadow-green-900/5 transition-all duration-500 w-full max-w-md mx-auto">
      <div className="absolute top-8 right-8 text-green-500/10 group-hover:text-green-500/20 transition-colors">
        <Quote className="w-12 h-12 fill-current" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-green-600 fill-current" />
          ))}
        </div>

        <h4 className="text-black font-bold text-lg mb-4 leading-tight group-hover:text-green-700 transition-colors">
          "{testimonial.title}"
        </h4>

        <p className="text-neutral-600 mb-8 leading-relaxed font-light italic">
          {testimonial.content}
        </p>

        <div className="flex items-center border-t border-black/5 pt-6">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-green-500/10 grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div>
            <h5 className="text-black font-black tracking-tight">— {testimonial.name}</h5>
            <p className="text-[10px] font-bold text-green-700 uppercase tracking-widest">
              {testimonial.company} • {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-[#e5e7eb] text-[#1a1a1a] overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24 flex flex-col lg:flex-row items-end justify-between gap-8 border-b border-black/5 pb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-green-700 uppercase">
                Client Reviews
              </span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-[#1a1a1a] mb-6 leading-none">
              What Our <br/>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-700">
                Clients Say.
              </span>
            </h2>
            
            <p className="text-xl text-neutral-500 font-light leading-relaxed">
              We believe in honest guidance, simple processes, and real results. Here’s what our clients from Coimbatore say about working with us.
            </p>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4 mb-2">
            {["Transparent guidance", "Quick response", "Reliable support", "Real results"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-black/5 shadow-sm">
                    <CheckCircle2 size={14} className="text-green-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">{item}</span>
                </div>
            ))}
          </div>
        </div>

        {/* Scrolling Section */}
        <div className="relative h-[650px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative h-[650px] overflow-hidden">
              <div className="absolute flex flex-col gap-10 animate-scroll hover:[animation-play-state:paused]">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <TestimonialCard key={`col1-${i}`} testimonial={t} />
                ))}
              </div>
            </div>

            <div className="relative h-[650px] overflow-hidden">
              <div className="absolute flex flex-col gap-10 animate-scroll hover:[animation-play-state:paused] [animation-direction:reverse]">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <TestimonialCard key={`col2-${i}`} testimonial={t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section - Why Clients Recommend Us */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
                <h3 className="text-3xl font-bold tracking-tight text-black mb-4">Why Clients Recommend Us</h3>
                <div className="h-1 w-12 bg-green-600"></div>
            </div>
            <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { label: "Transparent guidance", desc: "Honest advice at every stage" },
                        { label: "Quick response & personal attention", desc: "No delays, direct communication" },
                        { label: "Reliable bank support", desc: "Strong institutional partnerships" },
                        { label: "Real results, no false promises", desc: "Measurable outcomes for growth" }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-6 bg-white rounded-3xl border border-black/5 shadow-sm group hover:border-green-500/20 transition-all">
                            <CheckCircle2 className="text-green-600 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-1">{item.label}</h4>
                                <p className="text-xs text-neutral-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

       
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
}