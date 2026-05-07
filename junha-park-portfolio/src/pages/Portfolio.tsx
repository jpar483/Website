import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectComponents';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CATEGORIES = ['all', 'robotics', 'embedded', 'software', 'fabrication'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = PROJECTS.filter(p => 
    activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-8 py-20 pb-40">
      <header className="mb-section-gap">
        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Engineering Showcase</p>
        <h1 className="text-6xl font-bold tracking-tight mb-8">Selected Projects</h1>
        
        <div className="flex flex-wrap gap-4 mt-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border",
                activeCategory === cat 
                  ? "bg-primary border-primary text-on-primary" 
                  : "bg-surface-dim border-border-subtle text-secondary hover:border-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-24">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            large={index % 3 === 0} 
          />
        ))}
      </div>

      {/* Lab Note CTA */}
      <section className="mt-40 p-20 bg-primary/5 border border-primary/20 rounded-3xl text-center space-y-8">
        <h2 className="text-4xl font-bold">Interested in the technical methodology?</h2>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          Detailed lab reports, PCB schematics, and repository access are available upon request for specific engineering inquiries.
        </p>
        <button className="px-12 py-5 bg-primary text-on-primary font-bold uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-colors">
          Request Documentation
        </button>
      </section>
    </div>
  );
}
