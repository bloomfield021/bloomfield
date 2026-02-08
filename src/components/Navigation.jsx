import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  X, ArrowRight, Lock, LayoutGrid, ChevronDown, 
  Search, BarChart3, Landmark, ShieldCheck,
} from "lucide-react";
import logo from "../assests/BFlogo.webp"; 

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
    setMobileServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    { name: "Bank Loan Support", path: "/loans", icon: Landmark, desc: "Personal & Business funding." },
    { name: "SEO Services", path: "/seopage", icon: Search, desc: "Dominate Coimbatore search results." },
    { name: "Digital Marketing", path: "/marketingpage", icon: BarChart3, desc: "Full-funnel brand growth." },
    { name: "Financial Consulting", path: "/consultingpage", icon: ShieldCheck, desc: "Expert capital strategy." },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        scrolled ? "py-3" : "py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div 
          className={`flex justify-between items-center transition-all duration-500 rounded-[2rem] px-8 ${
            scrolled 
            ? "bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/20 py-2" 
            : "bg-transparent py-0"
          }`}
        >
          {/* ----- LEFT: LOGO ----- */}
          <Link to="/" className="flex items-center group relative z-10">
            <div className="relative transition-all duration-500 transform group-hover:scale-105">
              <div className="absolute inset-0 bg-green-500 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full"></div>
              <img
                src={logo}
                alt="Bloomfield Logo"
                className={`transition-all duration-500 object-contain ${
                  scrolled ? "h-16 sm:h-20" : "h-24 sm:h-28 lg:h-32"
                }`}
              />
            </div>
          </Link>

          {/* ----- CENTER: NAVIGATION (Desktop) ----- */}
          <div className="hidden xl:flex items-center gap-10">
            {navLinks.slice(0, 2).map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `text-[12px] font-bold uppercase tracking-[0.2em] transition-colors ${isActive ? "text-green-700" : "text-neutral-500 hover:text-black"}`}
              >
                {link.name}
              </NavLink>
            ))}

            {/* SERVICES DROPDOWN (Desktop) */}
            <div 
              className="relative group py-6"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              {/* Main Services Link */}
              <Link 
                to="/services" 
                className={`flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] transition-colors ${location.pathname.startsWith('/services') ? "text-green-700" : "text-neutral-500 hover:text-black"}`}
              >
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${showServices ? "rotate-180" : ""}`} />
              </Link>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[650px] bg-white rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.1)] border border-neutral-100 p-8 grid grid-cols-2 gap-4 transition-all duration-500 ease-out ${showServices ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}>
                {serviceItems.map((item) => (
                  <Link key={item.name} to={item.path} className="flex items-start gap-4 p-5 rounded-3xl hover:bg-green-50/50 transition-all group/item border border-transparent hover:border-green-100">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover/item:bg-green-600 group-hover/item:text-white transition-all duration-500 shadow-sm">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-black mb-1">{item.name}</h4>
                      <p className="text-[11px] text-neutral-400 leading-tight font-medium">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `text-[12px] font-bold uppercase tracking-[0.2em] transition-colors ${isActive ? "text-green-700" : "text-neutral-500 hover:text-black"}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* ----- RIGHT: UTILITY ----- */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="p-3 rounded-full hover:bg-black/5 transition-colors group">
              <Lock className="w-5 h-5 text-neutral-500 group-hover:text-green-600 transition-colors" />
            </Link>
            <Link to="/contact" className="group relative flex items-center gap-3 bg-black text-white px-7 py-4 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-green-500/20 active:scale-95">
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">Initiate Growth</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform text-green-400" />
            </Link>
          </div>

          {/* ----- MOBILE TOGGLE ----- */}
          <button className="xl:hidden p-3 rounded-2xl bg-black/5 hover:bg-black/10 transition-colors relative z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-7 h-7 text-black" /> : <LayoutGrid className="w-7 h-7 text-black" />}
          </button>
        </div>
      </div>

      {/* ----- MOBILE MENU ----- */}
      <div className={`fixed inset-0 bg-white z-[40] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="h-full flex flex-col justify-start pt-32 pb-12 items-center px-8 relative overflow-y-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-green-500/5 blur-[120px] rounded-full"></div>
            
            <div className="flex flex-col gap-4 w-full max-w-md relative z-10">
                {navLinks.slice(0, 2).map((link) => (
                   <NavLink key={link.name} to={link.path} className="text-5xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors">{link.name}</NavLink>
                ))}
                
                {/* MOBILE SERVICES ACCORDION */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between group">
                    <Link 
                      to="/services" 
                      className={`text-5xl font-bold tracking-tighter transition-colors ${location.pathname.startsWith('/services') ? "text-green-600" : "text-neutral-300 hover:text-black"}`}
                    >
                      Services
                    </Link>
                    <button 
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`p-2 transition-transform duration-500 ${mobileServicesOpen ? "rotate-180 text-green-600" : "text-neutral-300"}`}
                    >
                      <ChevronDown size={32} />
                    </button>
                  </div>
                  
                  <div className={`grid transition-all duration-500 ease-in-out ${mobileServicesOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden flex flex-col gap-4 pl-4 border-l-2 border-green-100">
                      {serviceItems.map((item) => (
                        <Link key={item.name} to={item.path} className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                            <item.icon size={18} />
                          </div>
                          <span className="text-xl font-bold text-neutral-500 group-hover:text-black">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {navLinks.slice(2).map((link) => (
                   <NavLink key={link.name} to={link.path} className="text-5xl font-bold tracking-tighter text-neutral-300 hover:text-black transition-colors">{link.name}</NavLink>
                ))}
                
                <div className="h-[1px] w-full bg-neutral-100 my-8"></div>
                
                <div className="flex flex-col gap-4">
                    <Link to="/login" className="flex items-center gap-4 text-xl font-medium text-neutral-500">
                        <Lock className="w-6 h-6 text-green-600" /> Secure Login
                    </Link>
                    <Link to="/contact" className="w-full bg-black text-white text-center py-6 rounded-3xl text-lg font-black uppercase tracking-widest shadow-xl shadow-green-900/10 active:scale-95 transition-transform">Initiate Partnership</Link>
                </div>
            </div>

            <p className="mt-auto pt-10 text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">Bloomfield Ecosystems 2026</p>
        </div>
      </div>
    </nav>
  );
}