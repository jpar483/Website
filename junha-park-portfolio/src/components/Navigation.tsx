import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SOCIAL_LINKS } from '../constants';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border-subtle">
      <div className="flex justify-between items-center h-24 px-8 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-black tracking-tighter text-primary">
          JUNHA PARK
        </Link>
        
        <div className="hidden md:flex gap-10 items-center">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "font-semibold tracking-[0.05em] transition-all duration-300",
                  isActive 
                    ? "text-primary border-b-2 border-primary pb-1" 
                    : "text-secondary hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <button className="ml-4 px-8 py-3 bg-primary text-on-primary text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors uppercase tracking-widest">
            Download CV
          </button>
        </div>
        
        <div className="md:hidden">
          <button className="text-primary">
            {/* Menu icon placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  const links = [
    { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
    { label: 'GitHub', href: SOCIAL_LINKS.github },
    { label: 'Email', href: SOCIAL_LINKS.email },
    { label: 'Portfolio', href: SOCIAL_LINKS.portfolio },
  ];

  return (
    <footer className="w-full py-16 bg-surface-dim border-t border-border-subtle mt-32">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-10">
        <span className="text-lg font-black tracking-tighter text-primary uppercase">JUNHA PARK</span>
        
        <div className="flex gap-10">
          {links.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="text-xs font-bold text-secondary hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <p className="text-xs font-medium text-secondary/60 uppercase tracking-widest">
          © {new Date().getFullYear()} JUNHA PARK. ENGINEERED WITH PRECISION.
        </p>
      </div>
    </footer>
  );
}
