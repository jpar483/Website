import { Mail, Phone, MapPin, Link as LinkIcon, Code, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 pt-24 pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left Column: Inquiry Intro & Socials */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="mb-16">
            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Inquiry</p>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-on-surface mb-8">Let's connect.</h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-md font-light">
              I am a Computer Systems Engineering student at the University of Auckland. Whether you're interested in a collaboration or just want to discuss new technology, my inbox is always open.
            </p>
          </div>
          
          <div className="space-y-12 mb-16">
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface/40 mb-6 font-sans">Social Identity</h3>
              <div className="space-y-4">
                <a href="https://www.linkedin.com/in/junha-park-04798b400/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container border border-outline-variant group-hover:border-primary transition-colors">
                    <LinkIcon size={18} className="text-on-surface-variant group-hover:text-primary" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-on-surface transition-colors">LinkedIn</span>
                </a>
                <a href="https://github.com/jpar483" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container border border-outline-variant group-hover:border-primary transition-colors">
                    <Code size={18} className="text-on-surface-variant group-hover:text-primary" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-on-surface transition-colors">GitHub</span>
                </a>
              </div>
            </section>
            
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface/40 mb-6 font-sans">Direct Communication</h3>
              <div className="p-8 bg-surface-container-low border border-outline-variant/20 space-y-8">
                <div>
                  <p className="text-[9px] font-bold text-outline uppercase tracking-widest mb-2">Official Email</p>
                  <a className="text-xl font-medium text-on-surface hover:text-primary transition-colors block break-all font-sans" href="mailto:junha7710@gmail.com">junha7710@gmail.com</a>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-outline uppercase tracking-widest mb-2">Mobile</p>
                  <a className="text-xl font-medium text-on-surface hover:text-primary transition-colors block font-sans" href="tel:02102664932">02102664932</a>
                </div>
              </div>
            </section>
          </div>
          
          
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-surface-container-low p-8 lg:p-12 border border-outline-variant/10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface mb-4">Message Dispatched</h3>
                  <p className="text-on-surface-variant max-w-xs mx-auto">Your inquiry has been received. I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-10" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-3">Full Name</label>
                      <input 
                        required
                        className="p-4 bg-transparent border border-outline-variant/30 focus:border-primary outline-none transition-colors text-on-surface text-sm" 
                        placeholder="Enter your name" 
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-3">Email Address</label>
                      <input 
                        required
                        className="p-4 bg-transparent border border-outline-variant/30 focus:border-primary outline-none transition-colors text-on-surface text-sm" 
                        placeholder="Enter your email" 
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-3">Subject of Interest</label>
                    <input 
                      required
                      className="p-4 bg-transparent border border-outline-variant/30 focus:border-primary outline-none transition-colors text-on-surface text-sm" 
                      placeholder="What are we discussing?" 
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-3">Message Detail</label>
                    <textarea 
                      required
                      className="p-4 bg-transparent border border-outline-variant/30 focus:border-primary outline-none transition-colors text-on-surface text-sm resize-none" 
                      placeholder="Provide context for your inquiry..." 
                      rows={8}
                    ></textarea>
                  </div>
                  <div className="flex justify-end pt-4">
                    <button 
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center gap-4 bg-on-surface text-background px-12 py-5 font-bold text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          Processing...
                          <Loader2 size={18} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Dispatch Message
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>     
        </div>
      </div>
    </div>
  );
}

