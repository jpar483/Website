import { motion } from 'motion/react';

const builds = [
  {
    title: 'Magnetic Motor',
    type: 'Industrial Fabrication',
    description: 'High-torque pneumatic system designed for high-volume material processing. Engineered for structural durability and repetitive stress resistance.',
    method: 'MIG Welding & Metal Fabrication',
    material: 'A36 Structural Steel',
    image:'/Motor.jpg',
    aspect: '16/9'
  },
  {
    title: 'Precision Mechanical Clamp',
    type: 'Sub-Micron Machining',
    description: 'A bespoke toolroom fixture engineered for high-accuracy milling operations. Developed with tolerance specifications of ±0.005mm to ensure perfect repeatability.',
    method: 'Lathe Work & 4-Axis Milling',
    material: '6061-T6 Aluminum',
    image:'/Clamp.jpg',
    aspect: '4/3',
    reverse: true
  },
  {
    title: 'Custom LED Display',
    type: 'Electro-Mechanical',
    description: 'A seamless fusion of additive manufacturing and embedded systems. Features a custom PCB and a 3D-printed enclosure optimized for thermal dissipation and light diffusion.',
    tags: ['3D Printing', 'PCB Design', 'Microcontroller'],
    image:'/LED.jpg',
    aspect: '21/9'
  },
  {
    title: 'HolePunch',
    type: 'Electro-Mechanical',
    description: 'A seamless fusion of additive manufacturing and embedded systems. Features a custom PCB and a 3D-printed enclosure optimized for thermal dissipation and light diffusion.',
    tags: ['3D Printing', 'PCB Design', 'Microcontroller'],
    image:'/HolePunch.jpg',
    aspect: '21/9'
  },
  {
    title: 'ToolBox + Tools',
    type: 'Electro-Mechanical',
    description: 'A seamless fusion of additive manufacturing and embedded systems. Features a custom PCB and a 3D-printed enclosure optimized for thermal dissipation and light diffusion.',
    tags: ['3D Printing', 'PCB Design', 'Microcontroller'],
    images: ['/ToolBox.jpg', '/Tools.jpg'],
    aspect: '21/9'
  }
];

export default function Fabrication() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-24 pb-32">
      <header className="mb-24 max-w-3xl">
        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">Physical Computing & Hardware</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">Fabrication Projects.</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          A gallery of industrial engineering and custom hardware builds. Exploring the intersection of mechanical precision, structural integrity, and electronic integration through professional fabrication methods.
        </p>
      </header>

      <div className="space-y-40">
        {builds.map((build, idx) => (
          <section key={build.title} className={build.reverse ? 'bg-surface-container-low/50 -mx-8 px-8 py-24 border-y border-outline-variant/10' : ''}>
            <div className={`grid grid-cols-12 gap-8 lg:gap-16 items-center ${build.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`col-span-12 lg:col-span-8 ${build.reverse ? 'lg:order-2' : ''}`}>
                <div className="relative bg-surface-container border border-outline-variant/10 rounded-xl overflow-hidden group">
  <div className="flex flex-col">
    {(build.images ? build.images : [build.image]).map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`${build.title} ${i + 1}`}
        className="w-full object-cover"
      />
    ))}
  </div>
</div>
              </div>
              <div className={`col-span-12 lg:col-span-4 space-y-6 ${build.reverse ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{build.type}</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">{build.title}</h2>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                  {build.description}
                </p>
                
                {build.method && (
                  <div className="space-y-4 pt-6 border-t border-outline-variant/30">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Method</span>
                      <span className="text-xs font-bold text-on-surface">{build.method}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Material</span>
                      <span className="text-xs font-bold text-on-surface">{build.material}</span>
                    </div>
                  </div>
                )}
                
                {build.tags && (
                  <div className="flex flex-wrap gap-2 pt-4">
                    {build.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[9px] uppercase font-bold tracking-[0.15em] rounded-full border border-outline-variant/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
