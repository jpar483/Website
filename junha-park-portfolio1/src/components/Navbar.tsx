import { Link, useLocation } from 'react-router-dom';
import { Moon, Menu, X, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Fabrication', path: '/fabrication' },
  //{ name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto relative">
        <Link to="/" className="text-xl font-black tracking-tighter text-primary">
          JUNHA PARK
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium text-sm tracking-wide transition-all duration-300 relative py-1 ${
                location.pathname === link.path
                  ? 'text-on-surface border-b-2 border-primary-container'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="p-2.5 bg-surface-container rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container-high transition-all">
            <Moon size={20} />
          </button>
          <a
            href="/Junha Park CV.pdf"
            download
            className="px-6 py-2.5 bg-primary-container text-on-primary-container text-xs font-bold rounded hover:brightness-110 transition-all shadow-lg shadow-primary-container/20 flex items-center gap-2 uppercase tracking-widest"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button className="p-2 bg-surface-container rounded border border-outline-variant text-on-surface">
            <Moon size={18} />
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-b border-outline-variant"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-semibold ${
                    location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-outline-variant/30" />
              <a
                href="/Junha_Park_CV.pdf"
                download
                className="w-full px-6 py-4 bg-primary-container text-on-primary-container text-sm font-bold rounded uppercase tracking-widest flex justify-center items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
