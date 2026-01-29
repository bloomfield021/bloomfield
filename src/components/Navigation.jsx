import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {  X, ArrowRight, Lock, LayoutGrid } from "lucide-react";
import logo from "../assests/BFlogo.webp"; 

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" }, 
    { name: "Contact", path: "/contact" },
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
              <div className={`absolute inset-0 bg-green-500 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full`}></div>
              <img
                src={logo}
                alt="Bloomfield Logo"
                className={`transition-all duration-500 object-contain ${
                  scrolled ? "h-16 sm:h-20" : "h-24 sm:h-28 lg:h-32"
                }`}
              />
            </div>
          </Link>

          {/* ----- CENTER: NAVIGATION ----- */}
          <div className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative group py-2 text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300
                  ${isActive ? "text-green-700" : "text-neutral-500 hover:text-black"}
                `}
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {/* Animated Underline */}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-green-600 transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-1/2"
                    }`} />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ----- RIGHT: UTILITY ----- */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/login" 
              className="p-3 rounded-full hover:bg-black/5 transition-colors group"
              title="Client Access"
            >
              <Lock className="w-5 h-5 text-neutral-500 group-hover:text-green-600 transition-colors" />
            </Link>

            <Link
              to="/contact"
              className="group relative flex items-center gap-3 bg-black text-white px-7 py-4 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-green-500/20 active:scale-95"
            >
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">
                Get Funded
              </span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform text-green-400" />
              
              {/* Button Shine Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </div>

          {/* ----- MOBILE TOGGLE ----- */}
          <button
            className="xl:hidden p-3 rounded-2xl bg-black/5 hover:bg-black/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7 text-black" /> : <LayoutGrid className="w-7 h-7 text-black" />}
          </button>
        </div>
      </div>

      {/* ----- MOBILE MENU (Full Screen Overlay) ----- */}
      <div
        className={`fixed inset-0 bg-white z-[-1] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center px-8 relative">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-green-500/5 blur-[120px] rounded-full"></div>
            
            <div className="flex flex-col gap-6 w-full max-w-md relative z-10">
                {navLinks.map((link, idx) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) => `
                            text-5xl sm:text-7xl font-bold tracking-tighter transition-all duration-500
                            ${isActive ? "text-green-600 pl-4" : "text-neutral-300 hover:text-black hover:pl-4"}
                        `}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                        {link.name}
                    </NavLink>
                ))}
                
                <div className="h-[1px] w-full bg-neutral-100 my-8"></div>
                
                <div className="flex flex-col gap-4">
                    <Link to="/login" className="flex items-center gap-4 text-xl font-medium text-neutral-500 hover:text-green-600 transition-colors">
                        <Lock className="w-6 h-6 text-green-600" /> Secure Login
                    </Link>
                    <Link to="/contact" className="w-full bg-black text-white text-center py-6 rounded-3xl text-lg font-black uppercase tracking-widest shadow-xl shadow-green-900/10 active:scale-95 transition-transform">
                        Initiate Partnership
                    </Link>
                </div>
            </div>

            <p className="absolute bottom-12 text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
                Bloomfield Ecosystems 2026
            </p>
        </div>
      </div>
    </nav>
  );
}