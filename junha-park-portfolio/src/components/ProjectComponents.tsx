import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Skill, Project } from '../types';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="group">
      <div className="flex justify-between mb-4 items-end">
        <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{skill.name}</span>
        <span className="text-xs font-bold text-primary">{skill.level}</span>
      </div>
      <div className="h-1.5 w-full bg-surface-bright rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>
    </div>
  );
}

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const isExternal = project.link?.startsWith('http');
  const Component = isExternal ? 'a' : 'div';
  const extraProps = isExternal ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("group cursor-pointer", large ? "md:col-span-8" : "md:col-span-4")}
    >
      <Component {...extraProps}>
        <div className={cn(
          "relative overflow-hidden border border-border-subtle rounded-xl bg-surface-dim mb-8",
          large ? "aspect-[16/9]" : "aspect-[4/5]"
        )}>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
            <span className="px-8 py-3 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest rounded-lg">
              View Project
            </span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-semibold text-on-surface group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">{project.date}</span>
          </div>
          <p className="text-base text-secondary leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </Component>
    </motion.article>
  );
}
