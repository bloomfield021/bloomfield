import React, { useState, useEffect } from "react";
import { Lock, ShieldCheck, Fingerprint, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function ClientAccess() {
  const [showPassword, setShowPassword] = useState(false);
  const [isScanning, setIsScanning] = useState(true);

  // Simulate a "Security Scan" on page load
  useEffect(() => {
    const timer = setTimeout(() => setIsScanning(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#e5e7eb] min-h-screen flex flex-col overflow-hidden font-sans selection:bg-green-500/30">
    

      <main className="flex-1 flex items-center justify-center p-6 relative">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] border border-white shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
          
          {/* ----- Left Side: Security Branding ----- */}
          <div className="p-12 lg:p-16 flex flex-col justify-between relative bg-black text-white overflow-hidden">
            {/* Decorative Pulse Circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 blur-[80px] rounded-full -mr-20 -mt-20" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center mb-10 shadow-lg shadow-green-900/20">
                <ShieldCheck size={32} className="text-white" />
              </div>
              <h1 className="text-5xl font-light tracking-tighter leading-none mb-6">
                Secure <br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  Client Portal.
                </span>
              </h1>
              <p className="text-neutral-400 font-light leading-relaxed max-w-xs">
                Access your financial architecture, real-time analytics, and project milestones in a high-encryption environment.
              </p>
            </div>

            <div className="relative z-10 space-y-6 pt-12 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Fingerprint size={18} className="text-green-500" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">AES-256 Protocol Active</span>
              </div>
            </div>
          </div>

          {/* ----- Right Side: Login Form ----- */}
          <div className="p-12 lg:p-16 bg-white/60 relative">
            {isScanning && (
              <div className="absolute inset-0 z-50 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity duration-1000">
                <div className="relative w-24 h-24 mb-6">
                    <div className="absolute inset-0 border-2 border-green-500/20 rounded-full animate-ping" />
                    <div className="absolute inset-0 border-2 border-green-500 rounded-full animate-spin border-t-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Lock size={24} className="text-green-600" />
                    </div>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-700 animate-pulse">Initializing Secure Tunnel</p>
              </div>
            )}

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black tracking-tight mb-2">Authorize Access</h2>
              <p className="text-sm text-neutral-500">Please enter your institutional credentials.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Identity (Email)</label>
                <input 
                  type="email" 
                  placeholder="alexander@company.com"
                  className="w-full bg-black/5 border border-black/5 rounded-xl px-5 py-4 text-black focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Access Key (Password)</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••••••"
                    className="w-full bg-black/5 border border-black/5 rounded-xl px-5 py-4 text-black focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-green-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer" />
                  <span className="text-xs font-bold text-neutral-500 group-hover:text-black transition-colors">Remember Node</span>
                </label>
                <Link to="/forgot" className="text-xs font-bold text-green-700 hover:text-green-500 transition-colors">Recover Access?</Link>
              </div>

              <button className="group w-full py-5 bg-black text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-xl transition-all duration-300 flex items-center justify-center gap-3 hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/20 active:scale-95">
                <span>Enter Portal</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-black/5 text-center">
               <p className="text-xs text-neutral-400">
                 Need a corporate account? <Link to="/contact" className="text-black font-bold border-b border-green-500">Contact Infrastructure</Link>
               </p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer-lite for Login */}
      <footer className="py-8 px-6 flex justify-center opacity-40">
        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-black">
          © 2026 Bloomfield Ecosystems • All Systems Operational
        </p>
      </footer>
    </div>
  );
}