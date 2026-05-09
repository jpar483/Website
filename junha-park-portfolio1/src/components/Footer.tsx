import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-10 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link to="/" className="text-xl font-black tracking-tighter text-primary">
            JUNHA PARK
          </Link>
          <span className="text-[10px] uppercase tracking-[0.3em] text-outline">Computer Systems Engineer</span>
        </div>

        
        <p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
          © {currentYear} Junha Park.
        </p>
      </div>
    </footer>
  );
}
