import { useEffect, useRef } from 'react';
import { ArrowRight, Globe, ShieldCheck, Zap } from 'lucide-react';
import HeroImage from '../assests/bloomfield.png'; 

export default function Hero() {
  const canvasRef = useRef(null);

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
      
      // Lines: Subtle Dark Grey
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
    >
      {/* -------------------- BACKGROUND LAYERS -------------------- */}
      {/* Grid pattern: Darker grey lines for the light background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-100" />
      
      {/* Soft Ambient Glow (White) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/50 blur-[120px] rounded-full pointer-events-none"></div>

      {/* -------------------- CONTENT -------------------- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Top Badge (Darkened for visibility) */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 bg-white/40 backdrop-blur-md shadow-sm mt-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/20 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500/60"></span>
            </span>
            <span className="text-[10px] font-bold text-green-700/60 tracking-[0.25em] uppercase">
                Bloomfield Ecosystem 2.0
            </span>
        </div>

        {/* Main Headline (Clean Dark Typography) */}
        <h1 className="text-6xl md:text-8xl lg:text-6xl font-light text-[#1a1a1a] tracking-tighter leading-[0.9] mb-8">
          Easy Bank Loans &  <br />
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-500 to-neutral-800">
            Result-Driven Digital Marketing in Coimbatore
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-lg md:text-xl text-neutral-600 mb-12 leading-relaxed font-normal">
          From finding the right bank loan to growing your business online — we make the process simple, clear, and stress-free.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <button 
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto px-10 py-5 bg-[#1a1a1a] hover:bg-black text-white font-bold text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-xl"
          >
            Talk to an Expert Today
          </button>
          <button 
            onClick={() => scrollToSection('work')}
            className="w-full sm:w-auto px-10 py-5 bg-transparent border border-black/10 text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-black/5 transition-all flex items-center justify-center gap-2"
          >
            View Demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* -------------------- FEATURE STRIP -------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 w-full max-w-5xl border-t border-black/5 pt-12">
            <div className="flex flex-col items-center gap-3">
                <Globe className="w-5 h-5 text-neutral-800" />
                <h3 className="text-black font-bold text-sm tracking-widest uppercase">Global Access</h3>
                <p className="text-neutral-500 text-xs">Access 40+ markets seamlessly.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-neutral-800" />
                <h3 className="text-black font-bold text-sm tracking-widest uppercase">Secured Assets</h3>
                <p className="text-neutral-500 text-xs">Institutional-grade encryption.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Zap className="w-5 h-5 text-neutral-800" />
                <h3 className="text-black font-bold text-sm tracking-widest uppercase">Low Latency</h3>
                <p className="text-neutral-500 text-xs">Sub-12ms execution engine.</p>
            </div>
        </div>

      </div>

      {/* -------------------- HERO IMAGE INTEGRATION -------------------- */}
      <div className="relative w-full max-w-7xl mt-20 md:-mb-48 z-10 perspective-[2000px] px-6">
        <div className="relative rounded-t-2xl overflow-hidden border-t border-l border-r border-black/5 bg-white shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.15)] transform rotate-x-12">
            <img 
                src={HeroImage} 
                alt="Dashboard Preview" 
                className="w-full h-auto object-cover opacity-90"
            />
            {/* Gradient Overlay to fade into the grey background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#e5e7eb] via-transparent to-transparent"></div>
            
            {/* Scanline - Dark Version */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-green-300/60 shadow-[0_0_10px_rgba(0,0,0,0.1)] animate-scan"></div>
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