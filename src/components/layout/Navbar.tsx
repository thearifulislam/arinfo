import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/Blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">
            Ari<span className="text-[rgb(56,132,255)]">ful</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-black transition-colors ${
                location.pathname === link.path
                  ? 'text-[rgb(56,132,255)]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="primary-button text-sm"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
  className="md:hidden text-white focus:outline-none mr-1" // Added mr-1 for 4px right margin
  onClick={toggleMenu}
  aria-label="Toggle menu"
>
  {isOpen ? (
    <X className="h-6 w-6" />
  ) : (
    <Menu className="h-6 w-6" />
  )}
</button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-dark-card z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold text-white">
              Ari<span className="text-[rgb(56,132,255)]">ful</span>
            </span>
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[rgb(56,132,255)]'
                    : 'text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="primary-button text-center mt-4"
            >
              Hire Me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;