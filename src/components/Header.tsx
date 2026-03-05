import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.svg';
import logoWhite from '../assets/logo-white.svg';
import plugIcon from '../assets/plug-icon.svg';
import { Container } from './Container';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      lastFocusedElementRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (lastFocusedElementRef.current) {
        lastFocusedElementRef.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const focusableElements = document.querySelectorAll<HTMLElement>(
      '.mobile-menu button, .mobile-menu a, .mobile-menu [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    window.addEventListener('keydown', handleTabKey);

    // Устанавливаем фокус на первый элемент меню
    setTimeout(() => {
      firstFocusable.focus();
    }, 100);

    return () => window.removeEventListener('keydown', handleTabKey);
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
        <a href="/" className="shrink-0" aria-label="Marvel Power Group homepage">
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
          aria-label="Main navigation"
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
          ref={menuButtonRef}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50 focus:outline-none focus:ring-2 focus:ring-marvel-yellow focus:ring-offset-2 rounded-sm"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
              ? 'rotate-45 translate-y-[4px] bg-white'
              : `${isMobileMenuActive ? 'bg-white' : 'bg-marvel-black'}`
              }`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ${isMobileMenuOpen
              ? '-rotate-45 -translate-y-[4px] bg-white'
              : `${isMobileMenuActive ? 'bg-white' : 'bg-marvel-black'}`
              }`}
            aria-hidden="true"
          />
        </button>
      </Container>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 bg-white z-40 md:hidden mobile-menu"
          style={{
            top: '78px',
            left: 0,
            right: 0,
            bottom: 0,
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl text-marvel-black hover:text-marvel-yellow transition-colors focus:outline-none focus:ring-2 focus:ring-marvel-yellow focus:ring-offset-2 rounded-sm"
                style={{
                  fontSize: '40px',
                }}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 bg-marvel-yellow text-marvel-black px-6 py-3 rounded-md font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-marvel-yellow"
              style={{
                marginTop: '80px',
              }}
            >
              CONTACT US
              <img src={plugIcon} alt="" className="w-5 h-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};