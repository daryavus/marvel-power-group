import aboutImage from '../assets/about-img.jpg';
import { SectionIndicator } from './SectionIndicator';

export const About = () => {
  return (
    <section
      id="about"
      className="relative"
      style={{
        paddingLeft: '257px',
        paddingRight: '253px',
        paddingTop: '93px',
        paddingBottom: '127px',
      }}
    >
      <SectionIndicator 
        currentSection="about" 
        position="top"
        top="335px"
        color="black"
      />

      <h2
        className="font-alata text-marvel-black"
        style={{
          fontSize: '90px',
          lineHeight: '88px',
          marginBottom: '50px',
          letterSpacing: '-2px',
        }}
      >
        About Us
      </h2>

      <div
        className="bg-marvel-yellow"
        style={{
          width: '100px',
          height: '6px',
          marginBottom: '55px',
        }}
      />

      <div
        className="flex"
        style={{
          gap: '68px',
        }}
      >
        <div
          className="flex-1"
          style={{
            width: '486px',
            height: '315px',
          }}>
          <img
            src={aboutImage}
            alt="About Marvel Power Group"
            className="w-full h-auto"
          />
        </div>

        <div
          className="flex-1"
          style={{
            fontSize: '16px',
            width: '490px',
            height: '315px',
            marginRight: '65px',
          }}>
          <p className="font-sofia text-marvel-black">
            Our dynamic, solutions-oriented team brings decades of relevant transactional, analytical and regulatory experience to supporting our clients’ unique agendas.
            <br />
            <br />
            We are experienced practitioners who have run companies, successfully originated and closed complex deals, advocated and negotiated favorable policy and advanced technological innovation and climate leadership.
            <br />
            <br />
            We specialize in structuring balanced solutions for all affected stakeholders and uncovering economic opportunities in otherwise opaque environments.
          </p>
        </div>
      </div>
    </section>
  );
};