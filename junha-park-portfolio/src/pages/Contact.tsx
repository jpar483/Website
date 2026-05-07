import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { SOCIAL_LINKS } from '../constants';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20 pb-40">
      <header className="mb-section-gap">
        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Inquiry & Collaboration</p>
        <h1 className="text-6xl font-bold tracking-tight mb-8">Get in Touch</h1>
        <p className="text-xl text-secondary leading-relaxed max-w-2xl">
          Interested in discussing embedded systems, AI integration, or technical fabrication? My door is always open for engineering collaborations and internship opportunities.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-10">
            <a href={SOCIAL_LINKS.email} className="flex gap-6 items-start group">
              <div className="w-14 h-14 rounded-2xl bg-surface-dim border border-border-subtle flex items-center justify-center text-primary group-hover:border-primary transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">Email Address</p>
                <p className="text-2xl font-semibold group-hover:text-primary transition-colors">junha7710@gmail.com</p>
              </div>
            </a>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-surface-dim border border-border-subtle flex items-center justify-center text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">Phone Number</p>
                <p className="text-2xl font-semibold">02102664932</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-surface-dim border border-border-subtle flex items-center justify-center text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">Location</p>
                <p className="text-2xl font-semibold">Auckland, New Zealand</p>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-border-subtle flex gap-8">
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-surface-dim p-12 border border-border-subtle rounded-3xl">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-background border border-border-subtle p-4 rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-background border border-border-subtle p-4 rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-xs font-bold text-secondary uppercase tracking-widest">Project Inquiry Type</label>
              <select className="w-full bg-background border border-border-subtle p-4 rounded-xl focus:border-primary focus:outline-none transition-colors appearance-none">
                <option>Internship / Career Opportunity</option>
                <option>Academic Collaboration</option>
                <option>Engineering Project Consultation</option>
                <option>Other / General Inquiry</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-secondary uppercase tracking-widest">Message Detail</label>
              <textarea 
                rows={6}
                placeholder="How can we collaborate?"
                className="w-full bg-background border border-border-subtle p-4 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button className="w-full py-5 bg-primary text-on-primary font-bold uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-3">
               Deliver Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
