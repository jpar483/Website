import { motion } from 'motion/react';
import { PHILOSOPHY, TIMELINE, SKILLS, SOCIAL_LINKS } from '../constants';
import { SkillBar } from '../components/ProjectComponents';
import { TimelineEntry } from '../components/Timeline';
import { Cpu, Brain, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-8 pb-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center gap-16 pt-24 mb-section-gap">
        <div className="flex-1 space-y-8">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Computer Systems Engineer</p>
          <h1 className="text-7xl font-bold tracking-tight leading-[1.1]">
            Bridging embedded systems and intelligent software architectures.
          </h1>
          <p className="text-xl text-secondary leading-relaxed max-w-2xl">
            Computer Systems Engineering student at the University of Auckland with experience in embedded systems, AI integration, and data-driven applications. Skilled in Java, Python, and C, with hands-on experience in PCB design, machine learning, and mechanical fabrication.
          </p>
          <div className="flex items-center gap-8 pt-4">
            <Link to="/contact" className="px-10 py-4 bg-primary text-on-primary font-bold uppercase tracking-widest rounded-lg hover:bg-blue-600 transition-colors">
              Get in Touch
            </Link>
            <Link to="/portfolio" className="flex items-center gap-2 font-bold text-on-surface hover:text-primary transition-colors group uppercase tracking-widest text-xs">
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        <div className="relative flex-1 max-w-md">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border-subtle bg-surface-dim">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD938rAnu-bAIn6O0O6-6G-I0V1J8yA7x4h8Y2G9X8N7r4z0v-qP3r9w" 
              alt="Junha Park" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 bg-surface-dim/80 backdrop-blur-xl border border-border-subtle rounded-xl max-w-[200px]">
             <p className="text-lg font-bold text-on-surface">2028</p>
             <p className="text-xs font-bold text-secondary uppercase tracking-widest mt-1">Expected Graduation</p>
          </div>
        </div>
      </section>

      {/* Technical Philosophy */}
      <section className="mb-section-gap grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-border-subtle pt-24">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Technical Philosophy</h2>
          <p className="text-secondary leading-relaxed">
            I focus on the intersection of hardware and software. By leveraging embedded systems and AI integration, I aim to create efficient, data-driven applications that solve real-world complexities through elegant engineering solutions.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Cpu className="text-primary w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold">Embedded Innovation</h3>
          <p className="text-secondary leading-relaxed">
            Expertise in C and PCB design to build responsive, low-level systems for hardware-software integration.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Brain className="text-primary w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold">AI & Intelligence</h3>
          <p className="text-secondary leading-relaxed">
            Integrating machine learning models and data-driven logic into functional software frameworks using Python and Java.
          </p>
        </div>
      </section>

      {/* Academic & Project Tenure */}
      <section className="mb-section-gap border-t border-border-subtle pt-24">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl font-semibold whitespace-nowrap">Academic & Project Tenure</h2>
          <div className="h-px flex-grow bg-border-subtle"></div>
        </div>
        
        <div className="space-y-12">
          {TIMELINE.slice(0, 2).map(item => (
            <TimelineEntry key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Skills & Contact Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Tech Skills */}
        <div className="md:col-span-4 p-10 bg-surface-dim border border-border-subtle rounded-2xl">
          <h3 className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-10">Technical Skills</h3>
          <div className="space-y-10">
            <SkillBar skill={{ name: 'Java & Python', level: '90%', percentage: 90 }} />
            <SkillBar skill={{ name: 'Embedded C & PCB', level: '85%', percentage: 85 }} />
          </div>
        </div>

        {/* Design Principle */}
        <div className="md:col-span-4 p-10 bg-surface border border-border-subtle rounded-2xl flex flex-col justify-center gap-8 italic">
          <div className="flex gap-2 text-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L5 12L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 8L19 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-2xl font-serif text-on-surface-variant leading-relaxed">
            "Engineering is not just about solving problems; it's about optimizing the bridge between the physical and digital worlds."
          </p>
          <p className="text-xs font-bold text-secondary uppercase tracking-widest not-italic border-t border-border-subtle pt-6">
            — Design Principle
          </p>
        </div>

        {/* Let's Connect */}
        <div className="md:col-span-4 p-10 bg-surface-dim border border-border-subtle rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Let's Connect</h3>
          <p className="text-secondary text-base mb-10">Open to internship opportunities and collaborative research projects.</p>
          <div className="space-y-6">
            <a href={SOCIAL_LINKS.email} className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-background border border-border-subtle flex items-center justify-center group-hover:border-primary transition-colors">
                <Mail className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <span className="text-secondary italic">junha7710@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-background border border-border-subtle flex items-center justify-center group-hover:border-primary transition-colors">
                <Phone className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <span className="text-secondary">02102664932</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-background border border-border-subtle flex items-center justify-center group-hover:border-primary transition-colors">
                <MapPin className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <span className="text-secondary">Auckland, NZ</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
