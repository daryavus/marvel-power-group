import { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Services', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
      style={{
        paddingTop: '24px',
        paddingLeft: '257px',
        paddingRight: '253px',
      }}
    >
      <div className="flex items-center justify-between h-20">
        <a href="/" className="shrink-0">
          <img
            src={logo}
            alt="Marvel Power Group"
            style={{
              width: '145px',
              height: '55px',
              objectFit: 'contain'
            }}
          />
        </a>

        <nav className="flex items-center" style={{ gap: '66px' }}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative text-marvel-black hover:after:content-[''] hover:after:absolute hover:after:-bottom-3.5 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-marvel-yellow focus:outline-none focus:ring-2 focus:ring-marvel-yellow focus:ring-offset-2 rounded-sm transition-colors bg-transparent border-none cursor-pointer"
              style={{ fontSize: '16px' }}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};