import aboutImage from '../assets/about-img.jpg';
import { SectionIndicator } from './SectionIndicator';
import { Container } from './Container';

export const About = () => {
  return (
    <section 
      id="about"
      className="relative"
      style={{
        paddingTop: 'clamp(40px, 6vw, 93px)',
        paddingBottom: 'clamp(60px, 9vw, 140px)',
      }}
    >
      <div className="hidden xl:block">
        <SectionIndicator 
          currentSection="about" 
          position="top"
          top="350px"
          color="black"
        />
      </div>

      <Container>
        <h2 
          className="font-alata text-marvel-black"
          style={{
            fontSize: 'clamp(40px, 10vw, 90px)',
            lineHeight: 'clamp(56px, 11vw, 100px)',
            marginBottom: 'clamp(26px, 4vw, 50px)',
          }}
        >
          About Us
        </h2>

        <div 
          className="bg-marvel-yellow"
          style={{
            width: 'clamp(60px, 10vw, 100px)',
            height: 'clamp(4px, 0.8vw, 6px)',
            marginBottom: 'clamp(34px, 5vw, 55px)',
          }}
        />

        <div 
          className="flex flex-col md:flex-row"
          style={{
            gap: 'clamp(21px, 5vw, 68px)',
          }}
        >
          <div 
            className="w-full md:w-auto"
            style={{
              maxWidth: '481px',
            }}
          >
            <img 
              src={aboutImage} 
              alt="About Marvel Power Group"
              className="w-full h-auto object-cover"
              style={{
                maxHeight: '315px',
              }}
            />
          </div>

          <div 
            className="flex-1 font-sofia font-light text-marvel-black"
            style={{
              fontSize: 'clamp(13px, 2.5vw, 16px)',
              lineHeight: 'clamp(20px, 4vw, 27px)',
              letterSpacing: '0.1px',
              maxWidth: '490px',
            }}
          >
            <p style={{ marginBottom: 'clamp(17px, 3vw, 20px)' }}>
              Our dynamic, solutions-oriented team brings decades
              of relevant transactional, analytical and regulatory experience to supporting our clients' unique agendas.
            </p>
            
            <p style={{ marginBottom: 'clamp(17px, 3vw, 20px)' }}>
              We are experienced practitioners who have run companies, successfully originated and closed complex deals, advocated and negotiated favorable policy and advanced technological innovation and climate leadership.
            </p>
            
            <p>
              We specialize in structuring balanced solutions for all affected stakeholders and uncovering economic opportunities in otherwise opaque environments.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};