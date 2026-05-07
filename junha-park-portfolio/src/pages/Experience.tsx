import { TIMELINE } from '../constants';
import { TimelineEntry } from '../components/Timeline';
import { motion } from 'motion/react';

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20 pb-40">
      <header className="mb-section-gap">
        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Professional Tenure</p>
        <h1 className="text-6xl font-bold tracking-tight mb-8">Experience & Education</h1>
        <p className="text-xl text-secondary leading-relaxed max-w-2xl">
          A track record of academic excellence and practical engineering application. From University of Auckland to competitive design challenges and technical fabrication.
        </p>
      </header>

      <section className="space-y-12 max-w-4xl">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-xs font-black text-on-surface uppercase tracking-[0.4em] whitespace-nowrap">Full Career Timeline</h2>
          <div className="h-px flex-grow bg-border-subtle"></div>
        </div>
        
        <div className="space-y-2">
          {TIMELINE.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TimelineEntry item={item} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { label: 'Academic Standing', value: 'First Class Honors', detail: 'Consistent top tier performance at UoA' },
          { label: 'Competitive Edge', value: '3rd Place', detail: 'ECSE Design Competition, 2025' },
          { label: 'Technical Depth', value: 'Embedded Focus', detail: 'Specialized in Hardware Integration' },
        ].map((stat, i) => (
          <div key={i} className="p-10 bg-surface-dim border border-border-subtle rounded-2xl space-y-4">
             <p className="text-xs font-bold text-primary uppercase tracking-widest">{stat.label}</p>
             <p className="text-3xl font-bold">{stat.value}</p>
             <p className="text-sm text-secondary leading-relaxed">{stat.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
