import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 block"
          >
            Computer Systems Engineer
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-on-surface mb-8 max-w-4xl leading-[1.15] tracking-tight"
          >
            Innovating at the intersection of Hardware & Software
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 font-light leading-relaxed"
          >
            Computer Systems Engineering student at the University of Auckland with expertise in embedded systems, AI integration, and data-driven applications.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            {/* <Link 
              to="/contact" 
              className="px-10 py-4 bg-primary text-on-primary font-bold rounded hover:brightness-110 transition-all shadow-xl shadow-primary/10 uppercase tracking-widest text-sm"
            >
              Get in Touch
            </Link> */}
            <Link 
              to="/portfolio" 
              className="text-xs font-bold text-primary flex items-center gap-2 hover:translate-x-1 transition-transform group uppercase tracking-[0.2em]"
            >
              VIEW PROJECTS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-outline-variant/20">
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-on-surface tracking-tight">Academic & Project Tenure</h2>
          <div className="w-16 h-1 bg-primary-container mt-4"></div>
        </div>
        
        <div className="space-y-16">
          {/* Timeline Item 1 */}
          <div className="relative pl-12 timeline-line">
            <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(173,198,255,0.6)]"></div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-3">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">2024 — PRESENT</span>
                <h4 className="text-sm font-bold text-primary mt-1">University of Auckland</h4>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="text-xl font-bold text-on-surface mb-4">Computer Systems Engineering Student</h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Pursuing a degree in Computer Systems Engineering, focusing on the synergy between electronic hardware and complex software systems. Developing foundational and advanced skills in system architecture and digital logic.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['System Design', 'Algorithms', 'Engineering Ethics'].map(tag => (
                    <span key={tag} className="bg-surface-container/50 px-3 py-1 text-[10px] font-bold text-on-surface rounded border border-outline-variant/30 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative pl-12 timeline-line">
            <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full border-2 border-outline-variant bg-background"></div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-3">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">2025</span>
                <h4 className="text-sm font-bold text-primary mt-1">Hardware-Software Integration</h4>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="text-xl font-bold text-on-surface mb-4">Embedded Systems Project</h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Designed and fabricated a custom PCB for embedded applications. Integrated C programming into microcontrollers: AtMega328p to process real-time energy data.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['PCB Design', 'Embedded Systems', 'Mechanical Fabrication'].map(tag => (
                    <span key={tag} className="bg-surface-container/50 px-3 py-1 text-[10px] font-bold text-on-surface rounded border border-outline-variant/30 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Skills Bento Preview */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-low p-8 border border-outline-variant/30 rounded-xl">
            <h4 className="text-[10px] font-bold text-on-surface-variant mb-8 uppercase tracking-[0.2em]">Technical Expertise</h4>
            <div className="space-y-8">
              {[
                { label: 'Software Engineering', value: '80%' },
                { label: 'Electrical Engineering', value: '85%' },
                { label: 'Fabrication', value: '90%' }
              ].map(skill => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-3">
                    <span className="text-xs font-bold text-on-surface">{skill.label}</span>
                    <span className="text-xs font-bold text-primary">{skill.value}</span>
                  </div>
                  <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.value }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-primary h-full shadow-[0_0_12px_rgba(173,198,255,0.3)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between border border-outline-variant/30 shadow-2xl">
            <div>
              <h4 className="text-lg font-bold text-on-surface mb-2">Let's Connect</h4>
              <p className="text-sm text-on-surface-variant">Open to internship opportunities and collaborative research projects.</p>
            </div>
            <div className="space-y-4 mt-8">
              <a href="mailto:junha7710@gmail.com" className="flex items-center gap-4 group">
                <span className="p-2 bg-background rounded border border-outline-variant/30 text-primary group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">junha7710@gmail.com</span>
              </a>
              <div className="flex items-center gap-4">
                <span className="p-2 bg-background rounded border border-outline-variant/30 text-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <span className="text-sm font-medium text-on-surface">02102664932</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="p-2 bg-background rounded border border-outline-variant/30 text-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <span className="text-sm font-medium text-on-surface">West Harbour, Auckland, NZ</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
