import { Facebook, Instagram, Mail, ArrowRight, Linkedin, Twitter } from 'lucide-react';
import Logo from '../assests/BFlogo.webp'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      Icon: Facebook, 
      href: "https://www.facebook.com/profile.php?id=61587002387647", 
      label: "Facebook" 
    },
    { 
      Icon: Instagram, 
      href: "https://www.instagram.com/bloomfieldrealtors/", 
      label: "Instagram" 
    },
    { 
      Icon: Linkedin, 
      href: "https://www.linkedin.com/in/bloomfield-undefined-b934273ab/", 
      label: "LinkedIn" 
    },
    { 
      Icon: Twitter, 
      href: "https://x.com/bloomfieldrealtors", // Updated with your handle logic
      label: "X" 
    }
  ];

  return (
    <footer className="relative bg-[#09090b] text-white border-t border-white/10 overflow-hidden pt-20" itemScope itemType="https://schema.org/WPFooter">
      
      {/* ----------------- Background Elements ----------------- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* ----------------- Top Section: Grid ----------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-8">
            <div className="mb-8">
              <img src={Logo} alt="Bloomfield Logo" className="h-12 w-auto brightness-0 invert" /> 
            </div>
            <p className="text-neutral-400 mb-8 leading-relaxed max-w-sm">
              We help you get easy bank loans and grow your business online. Our experts in Coimbatore make finance and digital marketing simple for everyone.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-green-500 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-green-500 mb-8">Get Help</h4>
            <div className="space-y-4">
              <a 
                href="mailto:bloomfieldrealtors@gmail.com" 
                className="group flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:bg-green-500/10 group-hover:text-green-500 transition-all">
                  <Mail size={16} />
                </div>
                <span className="text-sm">bloomfieldrealtors@gmail.com</span>
              </a>
              <div className="text-neutral-500 text-xs mt-4">
                <p>Coimbatore, Tamil Nadu</p>
                <p className="mt-1">Mon — Sat: 10:00am - 8:00pm</p>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-green-500 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-neutral-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-neutral-700 group-hover:bg-green-500 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-green-500 mb-8">Business Updates</h4>
            <p className="text-xs text-neutral-500 mb-4">Get the latest tips on loans and marketing.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-4 bg-neutral-900 border border-white/10 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-green-500 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-white/5 hover:bg-green-500 hover:text-black rounded text-white transition-all duration-300">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ----------------- Bottom Section ----------------- */}
        <div className="border-t border-white/10 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-neutral-500 text-sm">
            © {currentYear} Bloomfield Financial & Digital. Based in Coimbatore.
          </p>
          
          <div className="flex gap-8">
            {['Privacy', 'Terms'].map((link) => (
               <a key={link} href="/" className="text-xs font-medium text-neutral-500 hover:text-green-500 uppercase tracking-wider transition-colors">
                 {link}
               </a>
            ))}
          </div>
        </div>
      </div>

      {/* ----------------- Watermark ----------------- */}
      <div className="pointer-events-none select-none absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 opacity-[0.03]">
         <h1 className="text-[15vw] font-bold text-center text-white whitespace-nowrap translate-y-[20%]">
            COIMBATORE
         </h1>
      </div>
    </footer>
  );
}