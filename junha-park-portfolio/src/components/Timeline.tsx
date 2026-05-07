import { TimelineItem } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function TimelineEntry({ item }: { item: TimelineItem }) {
  return (
    <div className="relative pl-12 pb-16 last:pb-0 border-l border-border-subtle ml-3">
      {/* Circle marker */}
      <div className={cn(
        "absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4",
        item.current ? "bg-primary border-primary/20" : "bg-background border-border-subtle"
      )} />
      
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-secondary uppercase tracking-[0.1em]">
            {item.date}
          </span>
          <h3 className="text-3xl font-semibold text-on-surface">
            {item.title}
          </h3>
          <p className="text-xl text-primary font-medium">
            {item.subtitle}
          </p>
        </div>
        
        <p className="text-base text-secondary leading-relaxed max-w-2xl">
          {item.description}
        </p>
        
        {item.tags && (
          <div className="flex flex-wrap gap-2 mt-2">
            {item.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-surface-bright/50 text-xs font-bold rounded-full border border-border-subtle uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
