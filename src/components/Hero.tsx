import heroBackground from '../assets/hero-bg.png';
import plugIcon from '../assets/plug-icon.svg';
import { SectionIndicator } from './SectionIndicator';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen"
      style={{
        paddingLeft: '257px',
        paddingRight: '253px',
      }}
    >
      <SectionIndicator
        currentSection="hero"
        position="top"
        top="479px"
      />

      <div className="absolute inset-0 -z-10">
        <img
          src={heroBackground}
          alt=""
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="flex-1 flex flex-col justify-center" >
        <div className="text-white" style={{
          marginTop: '420px',
        }}>
          <h1
            className="font-alata"
            style={{
              fontSize: '115px',
              lineHeight: '130px',
              marginBottom: '31px',
              textAlign: 'center',
              letterSpacing: '-2px',
            }}
          >
            Marvel Power Group
          </h1>

          <p
            className="font-sofia font-light"
            style={{
              fontSize: '22px',
              lineHeight: '35px',
              marginBottom: '80px',
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
            }}
          >
            CONTACT US
            <img src={plugIcon} alt="" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        className="w-full"
        style={{
          marginTop: '106px',
        }}
      >
        <div
          className="relative w-full"
          style={{ height: '100px' }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 bg-marvel-yellow"
            style={{
              width: '1px',
              height: '100px',
              top: 0
            }}
          />

          <div
            className="absolute bg-white"
            style={{
              width: '1px',
              height: '15px',
              bottom: 0,
              left: '261px'
            }}
          />

          <div
            className="absolute bg-white"
            style={{
              width: '1px',
              height: '15px',
              bottom: 0,
              right: '261px'
            }}
          />

          <div
            className="absolute bg-white"
            style={{
              width: '1px',
              height: '15px',
              bottom: 0,
              left: 0
            }}
          />

          <div
            className="absolute bg-white"
            style={{
              width: '1px',
              height: '15px',
              bottom: 0,
              right: 0
            }}
          />
        </div>

        <p
          className="text-white text-center font-light"
          style={{
            fontSize: '12px',
            marginTop: '14px',
            marginBottom: '55px',
            letterSpacing: '0.5px'
          }}
        >
          Scroll for more
        </p>
      </div>
    </section>
  );
};