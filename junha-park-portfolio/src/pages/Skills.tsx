import { SKILLS } from '../constants';
import { SkillBar } from '../components/ProjectComponents';
import { motion } from 'motion/react';
import { Terminal, Database, Layers, Workflow, GitBranch, TerminalSquare } from 'lucide-react';

const TECH_STACK = [
  { group: 'Languages', items: ['C / C++', 'Python', 'Java', 'Assembly (Atmega)'] },
  { group: 'Frameworks', items: ['PyQt6', 'React', 'Node.js', 'Express'] },
  { group: 'Engineering Tools', items: ['Altium Designer', 'LTSpice', 'Proteus', 'SolidWorks'] },
  { group: 'AI & Data', items: ['TensorFlow', 'OpenCV', 'Pandas', 'NumPy'] },
];

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20 pb-40">
      <header className="mb-section-gap">
        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Technical Competency</p>
        <h1 className="text-6xl font-bold tracking-tight mb-8">Skill Blueprint</h1>
        <p className="text-xl text-secondary leading-relaxed max-w-2xl">
          A balanced proficiency between low-level hardware control and high-level software intelligence.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Core Skills Column */}
        <section className="md:col-span-12 lg:col-span-7 space-y-12">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xs font-black text-on-surface uppercase tracking-[0.4em] whitespace-nowrap">Core Proficiencies</h2>
            <div className="h-px flex-grow bg-border-subtle"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {SKILLS.map(skill => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </section>

        {/* Tech Stack Column */}
        <section className="md:col-span-12 lg:col-span-5 space-y-12 bg-surface-dim p-12 border border-border-subtle rounded-3xl">
          <div className="flex items-center gap-4 mb-4 text-primary">
            <TerminalSquare className="w-6 h-6" />
            <h2 className="text-xl font-bold">The Stack</h2>
          </div>
          
          <div className="space-y-10">
            {TECH_STACK.map(stack => (
              <div key={stack.group} className="space-y-4">
                <h3 className="text-xs font-bold text-secondary uppercase tracking-widest">{stack.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map(item => (
                    <span key={item} className="px-4 py-2 bg-background border border-border-subtle rounded-lg text-sm text-on-surface-variant">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Philosophy Section */}
      <section className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold leading-tight">Iterative Design & Precision Manufacturing</h2>
          <p className="text-lg text-secondary leading-relaxed">
            Beyond coding, I possess deep hands-on expertise in physical prototyping. From high-precision milling and lathe operations to advanced metal fabrication using MIG welding.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-surface-dim border border-border-subtle rounded-xl text-center">
                <span className="block text-2xl font-bold mb-2">0.02mm</span>
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">Milling Precision</span>
            </div>
            <div className="p-6 bg-surface-dim border border-border-subtle rounded-xl text-center">
                <span className="block text-2xl font-bold mb-2">MIG</span>
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">Welding Specialist</span>
            </div>
          </div>
        </div>
        <div className="aspect-video bg-surface-bright rounded-3xl overflow-hidden grayscale brightness-75 hover:grayscale-0 transition-all duration-700">
           <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8qi1I4wJrlVKg_mc7-btvZKLz-5T4-79GETRmhOYizbwV4XxEKhd6ph3OO5iVXH4xyVD68cIV_YNExjLf_jV65L82rICT_4m3cTwYyBzjrAq5Ho_SUjTXu9jS3q_4qXrsGZxQoWhMbyttGY4FPpI_RXvunBmHmTBVQN0fxzr224w6JVmaEr8HdUM57V9-g2SffmS9Qw9QXdvTmku-ppQkw8aDxldZqZT7TchgLq8oZUDommLcT0Igt4O5vbLaGnfXjRY3EppxvcM" 
            alt="Manufacturing Site" 
            className="w-full h-full object-cover"
           />
        </div>
      </section>
    </div>
  );
}
