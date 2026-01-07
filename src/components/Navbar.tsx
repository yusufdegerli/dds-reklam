import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Users, Briefcase, Layers, Star, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navBackgroundClass = scrolled 
    ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-white/5 py-2' 
    : 'bg-transparent py-4';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Ana Sayfa', path: '/', icon: <Home size={18} /> },
    { name: 'Hakkımızda', path: '/about', icon: <Users size={18} /> },
    { name: 'Hizmetlerimiz', path: '/services', icon: <Briefcase size={18} /> },
    { name: 'Projelerimiz', path: '/projects', icon: <Layers size={18} /> },
    { name: 'Referanslarımız', path: '/references', icon: <Star size={18} /> },
    { name: 'İletişim', path: '/contact', icon: <Phone size={18} /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <Link to="/" className="text-2xl font-bold tracking-wider group-hover:scale-105 transition-transform duration-300">
              <span className="text-white">DDS</span>
              <span className="text-brand-red drop-shadow-[0_0_8px_rgba(224,2,14,0.5)]">REKLAM</span>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group overflow-hidden flex items-center gap-2 ${
                      isActive ? 'text-brand-red bg-brand-red/10' : 'text-brand-gray hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-2xl">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 block px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-brand-white bg-brand-red/20 border-l-4 border-brand-red pl-2'
                  : 'text-brand-gray hover:text-white hover:bg-white/5 hover:translate-x-2'
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;