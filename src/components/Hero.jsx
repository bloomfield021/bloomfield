import { useEffect, useRef } from 'react';
import { Globe, ShieldCheck, Zap, MessageCircle, PhoneCall } from 'lucide-react';
import HeroImage from '../assests/bloomfield.png'; 

export default function Hero() {
  const canvasRef = useRef(null);

  // --- REDIRECTION HELPERS ---
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Bloomfield, I am interested in your bank loan and digital marketing services.");
    window.open(`https://wa.me/919080691966?text=${msg}`, "_blank");
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // -------------------------------------------------------
  // BACKGROUND: "The Network" (Slate/Grey Particles)
  // -------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w, h;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 1,
    }));

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)'; 
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-start pt-32 items-center bg-[#e5e7eb] overflow-hidden"
      itemScope 
      itemType="https://schema.org/WebPage"
    >
      {/* SEO / GEO / AEO METADATA */}
      <meta itemProp="name" content="Bloomfield | Bank Loans & Digital Marketing Coimbatore" />
      <meta itemProp="description" content="Easy bank loans and expert digital marketing services in Coimbatore. We help you find capital and grow your business online." />

      {/* -------------------- BACKGROUND LAYERS -------------------- */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-100" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/50 blur-[120px] rounded-full pointer-events-none"></div>

      {/* -------------------- CONTENT -------------------- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Top Badge (AEO Targeted) */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 bg-white/40 backdrop-blur-md shadow-sm mt-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/20 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-green-700 tracking-[0.25em] uppercase">
                Official Business Support • Coimbatore
            </span>
        </div>

        {/* Main Headline (AEO/GEO Optimized) */}
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-light text-[#1a1a1a] tracking-tighter leading-[0.95] mb-8">
          Get Easy <span className="font-bold">Bank Loans</span> & <br />
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-800">
            Grow Your Business Online.
          </span>
        </h1>

        {/* Subtext (Simple English) */}
        <p className="max-w-2xl text-lg md:text-xl text-neutral-600 mb-12 leading-relaxed font-normal">
          We help you find the best bank loans and make your brand famous on Google. Simple process, fast results, and no stress.
        </p>

        {/* Action Buttons (Interactions) */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <button 
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-10 py-5 bg-[#00b445] hover:bg-green-600 text-white font-bold text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-10 py-5 bg-[#1a1a1a] border border-black/10 text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-black transition-all flex items-center justify-center gap-2"
          >
            Contact Experts <PhoneCall className="w-4 h-4" />
          </button>
        </div>

        {/* -------------------- FEATURE STRIP (AEO Trust Signals) -------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 w-full max-w-5xl border-t border-black/5 pt-12">
            <div className="flex flex-col items-center gap-3">
                <Globe className="w-5 h-5 text-green-600" />
                <h3 className="text-black font-bold text-sm tracking-widest uppercase">Local Expertise</h3>
                <p className="text-neutral-500 text-xs">Best Loan Agents in Coimbatore.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <h3 className="text-black font-bold text-sm tracking-widest uppercase">100% Safe</h3>
                <p className="text-neutral-500 text-xs">Secure handling of your documents.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Zap className="w-5 h-5 text-green-600" />
                <h3 className="text-black font-bold text-sm tracking-widest uppercase">Fast Process</h3>
                <p className="text-neutral-500 text-xs">Quick approvals and rapid growth.</p>
            </div>
        </div>

      </div>

      {/* -------------------- HERO IMAGE INTEGRATION -------------------- */}
      <div className="relative w-full max-w-5xl mt-20 md:-mb-48 z-10 perspective-[2000px] px-6">
        <div className="relative rounded-t-2xl overflow-hidden border-t border-l border-r border-black/5 bg-white shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.15)] transform rotate-x-12">
            <img 
                src={HeroImage} 
                alt="Bloomfield Digital Marketing and Bank Loan Dashboard Coimbatore" 
                className="w-full h-auto object-cover opacity-90"
            />
            {/* Gradient Overlay to fade into the grey background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#e5e7eb] via-transparent to-transparent"></div>
            
            {/* Scanline - Green Version */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-green-500/60 shadow-[0_0_10px_rgba(34,197,94,0.4)] animate-scan"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
            animation: scan 8s linear infinite;
        }
      `}</style>

    </section>
  );
}