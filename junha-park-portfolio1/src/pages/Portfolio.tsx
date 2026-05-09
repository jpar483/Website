import { Code, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const skills = [
  { name: 'Microcontroller Programming', level: 'Advanced', progress: '95%' },
  { name: 'LLM / Prompt Design', level: 'Advanced', progress: '92%' },
  { name: 'PCB Design & Simulation', level: 'Proficient', progress: '88%' },
  { name: 'Machine Learning', level: 'Proficient', progress: '85%' },
  { name: 'Mechanical Fabrication', level: 'Proficient', progress: '82%' },
  { name: 'Software Architecture', level: 'Advanced', progress: '90%' },
];

const projects = [
  {
    id: 'winnie-the-boht',
    title: 'Winnie the Boht',
    date: 'AUG 2025',
    description: 'Interactive embedded robot featuring servo control, AI-driven face and speech detection, and custom 3D printed components.',
    image: 'IMG_0698.jpg',
    size: 'large',
    githubUrl: 'https://github.com/jpar483'
  },
  {
    id: 'smart-energy-monitor',
    title: 'Smart Energy Monitor',
    date: 'JUL - OCT 2025',
    description: 'End-to-end PCB design with ATmega architecture, C firmware development, and usage visualization.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDePhH5KYC7kQXTt9cnf421vsgCQlrl9NYhza4-HBnT1-qsI-y9BJFwOy-APJmQQHb1P3wJF061SO9tA9wDBHoSWvPmrlR7nc6_Lbv56FuxA2ti0rf8_mj5LWuyim-pmrnuOH_LR0fC_c6KwbXIh2GOdSgk98GV07uv9e5AUK2cMI_nB4pcyGAEgVYG3JOtSzhX9iE4gbd8w5p0lefRu1ra5rhLPq8KDhB7ZwlgzoVMPBVGUcCq7hXs6qJFxW7vwbLA33xNvuj0E2w',
    size: 'small',
    githubUrl: 'https://github.com/jpar483'
  },
  {
    id: 'roastworks',
    title: 'RoastWorks Dashboards',
    date: 'AUG 2025',
    description: 'Python + PyQt6 automation suite featuring forecasting models and integrated AI chatbot functionality.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8qi1I4wJrlVKg_mc7-btvZKLz-5T4-79GETRmhOYizbwV4XxEKhd6ph3OO5iVXH4xyVD68cIV_YNExjLf_jV65L82rICT_4m3cTwYyBzjrAq5Ho_SUjTXu9jS3q_4qXrsGZxQoWhMbyttGY4FPpI_RXvunBmHmTBVQN0fxzr224w6JVmaEr8HdUM57V9-g2SffmS9Qw9QXdvTmku-ppQkw8aDxldZqZT7TchgLq8oZUDommLcT0Igt4O5vbLaGnfXjRY3EppxvcM',
    size: 'medium',
    githubUrl: 'https://github.com/jpar483'
  },
  {
    id: 'java-nav',
    title: 'Java Navigation & Search',
    date: '2024 - 2026',
    tag: 'WIP',
    description: 'Android application development utilizing XML for UI and implementing BFS algorithms for optimized path finding.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Q5_aPYCnFl2KC_X9ZwTxusiKSgHEAonOsXdUcWJnJevs6qDLWph_uNktw6kC0enVaERBODK0_So3JxLBMR6kNoAFgzhz18Osemi1baw95aE0za3cm551VVwOGoVNElTikyWbQ1d6vYqMnVqZfUVUDwSHJw8RzjR3EeoKXH1u407tHWlOosKsCcVMfdOYupTNiWp0pPt2y7Ap_X2qvXG-adtjr1oWF8GiS4e0NqComQxEliIr8oQYt4jk_b63VE5gDNAFpZeH8rE',
    size: 'medium',
    githubUrl: 'https://github.com/jpar483'
  }
];

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-16 pb-24">
      {/* Header Section */}
      <header className="max-w-4xl mb-24">
        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-6">Engineering & Innovation</p>
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-8 tracking-tight">
          Integrating Hardware Precision with Intelligent Systems.
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          A multidisciplinary engineer focused on embedded systems, AI integration, and technical product design. Bridging the gap between physical fabrication and digital intelligence.
        </p>
      </header>

      {/* Technical Proficiency Section */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-2xl font-bold text-on-surface whitespace-nowrap tracking-tight">Technical Proficiency</h2>
          <div className="h-px flex-grow bg-outline-variant/20"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
          {skills.map(skill => (
            <div key={skill.name}>
              <div className="flex justify-between mb-4 items-end">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{skill.name}</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{skill.level}</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.progress }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <Category list={['JAVA','XML','PYTHON', 'C', 'VHDL', 'PYQT6']} title="Programming" />
          <Category list={['MATLAB', 'ALTIUM', 'FUSION 360', 'QUESTASIM', 'LTSPICE', 'PROTEUS', 'QUARTUS']} title="Engineering Tools" />
          <Category list={['OLLAMA', 'FIGMA']} title="Design & AI Tools" />
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section>
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-2xl font-bold text-on-surface whitespace-nowrap tracking-tight">Portfolio Selection</h2>
          <div className="h-px flex-grow bg-outline-variant/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* Fabrication Banner */}
      <div className="mt-40 bg-surface-container-low border border-outline-variant/20 rounded-xl p-12 md:p-20 flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-8 tracking-tight">Physical Fabrication Projects</h3>
        <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
          Hands-on engineering projects including welding (automated can crusher), high-precision machining, and custom LED hardware systems.
        </p>
        <Link to="/fabrication" className="px-10 py-4 bg-primary text-on-primary text-[10px] font-bold rounded-lg hover:brightness-110 transition-all uppercase tracking-[0.2em]">
          View Fabrication Projects
        </Link>
      </div>
    </div>
  );
}

function Category({ title, list }: { title: string, list: string[] }) {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {list.map(item => (
          <span key={item} className="px-4 py-2 bg-surface-container-high text-on-surface text-[10px] font-bold rounded-lg border border-outline-variant/20 uppercase tracking-widest">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, date, description, image, size, tag, id, githubUrl }: any) {
  const isLarge = size === 'large';
  const isWide = size === 'medium';

  return (
    <motion.article 
      whileHover={{ y: -5 }}
      className={`group cursor-pointer ${isLarge ? 'md:col-span-8' : isWide ? 'md:col-span-12 lg:col-span-6' : 'md:col-span-4'}`}
    >
      <Link to={`/portfolio/${id}`}>
        <div className={`relative overflow-hidden border border-outline-variant/20 rounded-xl bg-surface-container-lowest mb-6 aspect-video ${isLarge ? 'md:aspect-[16/9]' : 'md:aspect-[4/5]'}`}>
          <img 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
            src={image} 
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
            <span className="px-8 py-3 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest rounded-lg">View Case Study</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-start mb-4 gap-4">
            <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors tracking-tight">
              {title} {tag && <span className="ml-2 px-2 py-0.5 text-[9px] bg-primary/10 text-primary border border-primary/20 rounded-full">{tag}</span>}
            </h3>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex-shrink-0 pt-1">{date}</span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2 md:line-clamp-none">{description}</p>
        </div>
      </Link>
      {/* Button row — outside Link so the GitHub icon doesn't trigger case study navigation */}
      <div className="mt-8 flex items-center gap-4">
        <Link to={`/portfolio/${id}`}>
          <button className="px-6 py-2.5 bg-primary text-on-primary text-[10px] font-bold rounded-lg hover:brightness-110 transition-colors uppercase tracking-[0.2em]">View Case Study</button>
        </Link>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary transition-all"
            aria-label="View GitHub repository"
          >
            <Code size={18} />
          </a>
        )}
      </div>
    </motion.article>
  );
}