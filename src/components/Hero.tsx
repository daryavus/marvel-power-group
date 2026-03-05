import heroBackground from '../assets/hero-bg.png';
import plugIcon from '../assets/plug-icon.svg';
import { SectionIndicator } from './SectionIndicator';
import { LineBlock } from './LineBlock';
import { Container } from './Container';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroBackground} />
          <source media="(min-width: 768px)" srcSet={heroBackground} />
          <img
            src={heroBackground}
            alt="Фоновое изображение города"
            className="w-full h-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="hidden md:block">
        <SectionIndicator
          currentSection="hero"
          position="top"
          top="459px"
          color="white"
        />
      </div>

      <Container className="flex-1 flex flex-col">
        <div
          className="text-white w-full"
          style={{
            marginTop: 'clamp(120px, 60vh, 400px)',
          }}
        >
          <h1
            className="font-alata"
            style={{
              fontSize: 'clamp(50px, 10vw, 115px)',
              lineHeight: 'clamp(59px, 11vw, 130px)',
              marginBottom: 'clamp(16px, 4vw, 40px)',
              textAlign: 'center',
            }}
          >
            Marvel Power Group
          </h1>

          <p
            className="font-sofia font-light mx-auto"
            style={{
              fontSize: 'clamp(14px, 3vw, 22px)',
              lineHeight: 'clamp(20px, 4vw, 35px)',
              marginBottom: 'clamp(25px, 8vw, 79px)',
              letterSpacing: '0.4px',
              textAlign: 'center',
            }}
          >
            Marvel Power Group is a boutique consulting firm with a fresh,
            markets-based approach to value creation. We offer services to
            clients in energy, water, manufacturing and transportation sectors.
          </p>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-1 bg-marvel-yellow text-marvel-black font-semibold hover:bg-opacity-90 transition-colors mx-auto"
            style={{
              width: '190px',
              height: '48px',
              fontSize: '14px',
              marginBottom: '70px',
            }}
          >
            CONTACT US
            <img
              src={plugIcon}
              alt=""
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </button>
        </div>

        <div 
          className="hidden md:block w-full"
          style={{
            marginTop: 'clamp(35px, 10vw, 35px)',
            marginBottom: 'clamp(30px, 5vw, 50px)',
          }}
        >
          <LineBlock
            color="white"
          />
        </div>
      </Container>
    </section>
  );
};