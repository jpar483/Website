import { Trophy, Construction, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-24 pb-32">
      {/* Header Section */}
      <header className="grid grid-cols-12 gap-8 mb-24">
        <div className="col-span-12 md:col-span-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Experience & Education</h1>

        </div>
        <div className="col-span-12 md:col-span-4 flex items-end justify-end">
          <div className="text-right border-l border-outline/30 pl-8 py-2">
            <span className="text-[10px] block uppercase text-outline font-bold tracking-widest mb-1">Current Location</span>
            <span className="text-2xl font-bold text-white">West Harbour, Auckland, NZ</span>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Sidebar: Key Stats & Narrative */}
        <aside className="md:col-span-4 space-y-16">
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-10 pb-4 border-b border-outline-variant/30">Highlights</h2>
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <Trophy size={20} className="text-primary mt-1" />
                <div>
                  <span className="text-[10px] text-outline uppercase tracking-widest block mb-1 font-bold">Awards</span>
                  <span className="text-sm font-semibold text-on-surface">3rd Place — ECSE Design Competition 2025</span>
                </div>
              </div>
              {/* <div className="flex items-start gap-5">
                <Construction size={20} className="text-primary mt-1" />
                <div>
                  <span className="text-[10px] text-outline uppercase tracking-widest block mb-1 font-bold">Technical Skills</span>
                  <span className="text-sm font-semibold text-on-surface">Manufacturing & Fabrication</span>
                </div>
              </div> */}
              <div className="flex items-start gap-5">
                <GraduationCap size={20} className="text-primary mt-1" />
                <div>
                  <span className="text-[10px] text-outline uppercase tracking-widest block mb-1 font-bold">Academic Mentorship</span>
                  <span className="text-sm font-semibold text-on-surface">NCEA Level 1 Tutoring</span>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-surface-container-low p-10 border border-outline-variant/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">Fabrication Expertise</h3>
            <div className="space-y-4 text-sm text-on-surface-variant">
              <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Lathe machining, milling, drilling</p>
              <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> MIG welding, metal cutting</p>
              <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> 3D printing & Iterative design</p>
            </div>
          </div>

        </aside>

        {/* Main Timeline Track */}
        <div className="md:col-span-8">
          {/* Education Section */}
          <section className="mb-24">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-12 flex items-center gap-4">
              <GraduationCap size={18} className="text-primary" />
              Academic Background
            </h2>
            <div className="grid grid-cols-1 gap-12">
              <div className="p-10 border border-outline-variant/30 bg-surface-container-low hover:border-primary/50 transition-colors group relative">
                <div className="absolute top-0 right-0 bg-primary px-6 py-1.5 text-on-primary font-bold text-[10px] uppercase tracking-widest">Current</div>
                <span className="text-[10px] font-bold text-outline uppercase block mb-6">2024 — Present</span>
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Bachelor of Engineering (Honours) Computer Systems</h3>
                <p className="text-lg text-primary font-medium mb-6">University of Auckland</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">Focused on the integration of hardware and software architectures, embedded systems, and advanced computational logic. Special interest in real-time processing and control systems.</p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="relative">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-16 flex items-center gap-4">
              <Briefcase size={18} className="text-primary" />
              Work & Project Experience
            </h2>
            <div className="relative pl-12 timeline-line">
              {/* Competition Item */}
              <div className="relative mb-20 group">
                <div className="absolute -left-[3.15rem] top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-[6px] ring-background group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(173,198,255,0.6)]"></div>
                <div className="mb-4">
                  <span className="inline-block text-[10px] bg-primary/10 text-primary border border-primary/20 px-3 py-1 font-bold uppercase tracking-widest mb-4">Achievement</span>
                  <h3 className="text-2xl font-bold text-white leading-tight">ECSE Design Competition 2025</h3>
                  <div className="text-lg text-primary mt-1 font-medium">3rd Place Finish</div>
                </div>
                <p className="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                  Was part of team that developed an interactive Chatbot, with AI integration, mechanical movement, user recognition and many more. Created through combination of electrical and software engineering from embedded systems to programming.
                </p>
              </div>

              {/* Tutoring Item */}
              <div className="relative mb-20 group">
                <div className="absolute -left-[3.1rem] top-1.5 w-3 h-3 rounded-full border border-outline bg-background group-hover:border-primary transition-colors duration-300"></div>
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-outline uppercase tracking-widest block mb-4">2023 — 2024</span>
                  <h3 className="text-2xl font-bold text-white leading-tight">Calculus and Physics Tutoring</h3>
                  <div className="text-xs text-on-surface-variant mt-1 font-bold uppercase tracking-wide">NCEA Level 1 Academic Support 2023 - 2024</div>
                </div>
                <p className="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                  Provided specialized academic mentorship for NCEA level 1 students mainly targeted at calculus and physics.
                </p>
              </div>

              {/* Fabrication Skillsets */}
              <div className="relative group">
                <div className="absolute -left-[3.1rem] top-1.5 w-3 h-3 rounded-full border border-outline bg-background group-hover:border-primary transition-colors duration-300"></div>
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-outline uppercase tracking-widest block mb-4">2021 - Present</span>
                  <h3 className="text-2xl font-bold text-white">Manufacturing & Iterative Design</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                       Machining
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Precision lathe work, industrial milling, and complex drilling operations for custom mechanical assemblies.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                       Fabrication
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Expert metal fabrication including MIG welding and high-tolerance cutting for structural components.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
