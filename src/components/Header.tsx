import { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import logoWhite from '../assets/logo-white.svg';
import plugIcon from '../assets/plug-icon.svg';
import { Container } from './Container';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = ['About', 'Services', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 78;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsMobileMenuOpen(false);
    }
  };

  const isMobileMenuActive = isMobileMenuOpen;
  const bgColor = isMobileMenuActive ? 'bg-marvel-black' : isScrolled ? 'bg-white' : 'bg-transparent';
  const logoToUse = isMobileMenuActive ? logoWhite : logo;
  const textColor = isMobileMenuActive ? 'text-white' : 'text-marvel-black';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor}`}
      style={{
        paddingTop: 'clamp(20px, 4vw, 58px)',
        paddingBottom: 'clamp(20px, 4vw, 40px)',
        height: '78px',
      }}
    >
      <Container className="flex items-center justify-between h-full">
        <a href="/" className="shrink-0">
          <img
            src={logoToUse}
            alt="Marvel Power Group"
            style={{
              width: 'clamp(100px, 20vw, 145px)',
              height: 'auto',
              objectFit: 'contain',
              transition: 'all 0.3s ease',
            }}
          />
        </a>

        <nav
          className="hidden md:flex items-center"
          style={{ gap: '70px' }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`relative ${textColor} hover:after:content-[''] hover:after:absolute hover:after:-bottom-3.5 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-marvel-yellow focus:outline-none focus:ring-2 focus:ring-marvel-yellow focus:ring-offset-2 rounded-sm transition-colors bg-transparent border-none cursor-pointer`}
              style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
              ? 'rotate-45 translate-y-[4px] bg-white'
              : `${isMobileMenuActive ? 'bg-white' : 'bg-marvel-black'}`
              }`}
          />
          <span
            className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ${isMobileMenuOpen
              ? '-rotate-45 -translate-y-[4px] bg-white'
              : `${isMobileMenuActive ? 'bg-white' : 'bg-marvel-black'}`
              }`}
          />
        </button>
      </Container>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white z-40 md:hidden"
          style={{
            top: '78px',
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl text-marvel-black hover:text-marvel-yellow transition-colors"
                style={{
                  fontSize: '40px',
                }}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 bg-marvel-yellow text-marvel-black px-6 py-3 rounded-md font-semibold text-lg"
              style={{
                  marginTop: '80px',
                }}
            >
              CONTACT US
              <img src={plugIcon} alt="Изображение розетной вилки" className="w-5 h-5" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};