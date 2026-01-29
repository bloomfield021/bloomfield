import { useState } from 'react';
import { Plus, Minus, MessageCircle, HelpCircle, Landmark, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const bankFaqs = [
  {
    question: '1. What types of loans do you assist with?',
    answer: 'We assist with personal loans, home loans, business loans, vehicle loans, and mortgage loans by partnering with trusted banks and financial institutions.'
  },
  {
    question: '2. Do you charge any consultation fees?',
    answer: 'No. We offer a free initial consultation to understand your requirement and guide you properly.'
  },
  {
    question: '3. How long does it take to get loan approval?',
    answer: 'Approval time depends on the bank and your profile, but in most cases, personal and business loans are approved within 24–72 hours after document submission.'
  },
  {
    question: '4. Can I apply if my credit score is low?',
    answer: 'Yes, in some cases. We check your profile and suggest suitable bank options based on your eligibility.'
  },
  {
    question: '5. Do you help with documentation?',
    answer: 'Yes. We provide complete document support to ensure a smooth and hassle-free loan process.'
  },
  {
    question: '6. Are your services available only in Coimbatore?',
    answer: 'We primarily serve Coimbatore and nearby areas, including Gandhipuram, RS Puram, Peelamedu, and Saibaba Colony.'
  }
];

const marketingFaqs = [
  {
    question: '7. What digital marketing services do you offer?',
    answer: 'We offer SEO, social media marketing, Google Ads, online advertising, and content creation to help businesses grow online.'
  },
  {
    question: '8. How long does it take to see results from digital marketing?',
    answer: 'Results vary by service. SEO: 3–6 months. Online Ads: Immediate visibility. Social Media: Gradual growth with consistency.'
  },
  {
    question: '9. Do you work with small businesses?',
    answer: 'Yes. We specialize in helping small and local businesses in Coimbatore grow with affordable and effective strategies.'
  },
  {
    question: '10. Will I get regular updates or reports?',
    answer: 'Yes. We provide clear and easy-to-understand updates on performance and results.'
  },
  {
    question: '11. Do you offer customized plans?',
    answer: 'Absolutely. Every business is different, so we create custom plans based on your goals and budget.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState('bank-0');

  const toggleFAQ = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="relative py-32 bg-[#e5e7eb] text-[#1a1a1a] overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LEFT: STICKY HEADER */}
            <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6 backdrop-blur-md">
                        <HelpCircle className="w-3.5 h-3.5 text-green-700" />
                        <span className="text-[10px] font-bold tracking-[0.2em] text-green-700 uppercase">Support Center</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-[#1a1a1a] mb-6 leading-none">
                        Frequently Asked <br/>
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-700">Questions.</span>
                    </h2>
                    
                    <p className="text-lg text-neutral-600 mb-10 leading-relaxed font-light">
                        Clarity is key to partnership. Here are the answers to the most frequent questions regarding our operational protocols.
                    </p>

                    <div className="p-8 rounded-[2rem] bg-white border border-white shadow-xl shadow-green-900/5 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/5 rounded-full"></div>
                        
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                                <MessageCircle size={22} />
                            </div>
                            <div>
                                <h4 className="font-bold text-black">Still Have Questions?</h4>
                                <p className="text-xs text-green-600 font-bold uppercase tracking-wider">Expert response in 24h</p>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-500 mb-6 font-medium leading-relaxed">If you need more clarity or personal guidance, contact us today for a free consultation.</p>
                        <button 
                            onClick={() => window.location.href = 'tel:+919080691966'}
                            className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest text-[10px] rounded-xl hover:bg-neutral-800 transition-all duration-300 active:scale-95 relative z-10 flex items-center justify-center gap-2"
                        >
                            Contact Support <ArrowRight size={14} className="text-green-400" />
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT: ACCORDION LIST */}
            <div className="lg:col-span-8 space-y-16">
                
                {/* Bank Loan Section */}
                <div>
                    <div className="flex items-center gap-3 mb-8 px-2">
                        <Landmark className="text-green-600" size={24} />
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] text-black/40">Bank Loan Services – FAQ</h3>
                    </div>
                    <div className="divide-y divide-black/5 border-t border-b border-black/5">
                        {bankFaqs.map((faq, idx) => {
                            const id = `bank-${idx}`;
                            return (
                            <div key={id} className="group transition-all duration-500">
                                <button
                                    onClick={() => toggleFAQ(id)}
                                    className={`w-full py-8 flex items-center justify-between text-left transition-all duration-500 px-6 -mx-6 rounded-[1.5rem] ${openIndex === id ? 'bg-white shadow-lg shadow-green-900/5 my-2' : 'hover:bg-white/40'}`}
                                >
                                    <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${openIndex === id ? 'text-green-700' : 'text-neutral-700 group-hover:text-black'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`ml-6 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${openIndex === id ? 'rotate-180 bg-green-600 border-green-600 text-white' : 'bg-transparent border-black/10 text-neutral-400'}`}>
                                        {openIndex === id ? <Minus size={16} /> : <Plus size={16} />}
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out px-6 -mx-6 ${openIndex === id ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                                    <div className="max-w-2xl pt-2 flex gap-4">
                                        <div className="mt-1.5 shrink-0"><CheckCircle2 size={16} className="text-green-600" /></div>
                                        <p className="text-neutral-500 leading-relaxed text-base">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>

                {/* Digital Marketing Section */}
                <div>
                    <div className="flex items-center gap-3 mb-8 px-2">
                        <Zap className="text-green-600" size={24} />
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] text-black/40">Digital Marketing Services – FAQ</h3>
                    </div>
                    <div className="divide-y divide-black/5 border-t border-b border-black/5">
                        {marketingFaqs.map((faq, idx) => {
                            const id = `market-${idx}`;
                            return (
                            <div key={id} className="group transition-all duration-500">
                                <button
                                    onClick={() => toggleFAQ(id)}
                                    className={`w-full py-8 flex items-center justify-between text-left transition-all duration-500 px-6 -mx-6 rounded-[1.5rem] ${openIndex === id ? 'bg-white shadow-lg shadow-green-900/5 my-2' : 'hover:bg-white/40'}`}
                                >
                                    <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${openIndex === id ? 'text-green-700' : 'text-neutral-700 group-hover:text-black'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`ml-6 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${openIndex === id ? 'rotate-180 bg-green-600 border-green-600 text-white' : 'bg-transparent border-black/10 text-neutral-400'}`}>
                                        {openIndex === id ? <Minus size={16} /> : <Plus size={16} />}
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out px-6 -mx-6 ${openIndex === id ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                                    <div className="max-w-2xl pt-2 flex gap-4">
                                        <div className="mt-1.5 shrink-0"><CheckCircle2 size={16} className="text-green-600" /></div>
                                        <p className="text-neutral-500 leading-relaxed text-base">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
}