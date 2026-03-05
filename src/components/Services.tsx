import arrowIcon from '../assets/arrow-icon.svg';
import { SectionIndicator } from './SectionIndicator';
import { Container } from './Container';

export const Services = () => {
  const services = [
    {
      title: 'Enterprise Strategy',
      items: [
        'Procurement and investment diligence',
        'Customer engagement and retention',
        'Renewable, DER, and EV program structuring',
        'Reliability planning and reporting'
      ]
    },
    {
      title: 'Wholesale Power',
      items: [
        'Commodity advisory and RFPs',
        'Energy, capacity, REC, RIN, and LCFS placement',
        'Enterprise PPA structuring',
        'Contract extensions and re-packaging'
      ]
    },
    {
      title: 'Market Development',
      items: [
        'New venture setup',
        'Demand planning and acquisition',
        'Project development and regulatory support',
        'Partnership structuring'
      ]
    }
  ];

  return (
    <section
      id="services"
      className="relative bg-marvel-yellow"
      style={{
        paddingTop: 'clamp(40px, 6vw, 100px)',
        paddingBottom: 'clamp(62px, 9vw, 128px)',
      }}
    >
      <div className="hidden md:block">
        <SectionIndicator 
          currentSection="services" 
          position="top"
          top="489px"
          color="black"
        />
      </div>

      <Container>
        <h2
          className="font-alata text-marvel-black"
          style={{
            fontSize: 'clamp(40px, 10vw, 90px)',
            lineHeight: 'clamp(56px, 11vw, 80px)',
            marginBottom: 'clamp(27px, 6vw, 62px)',
          }}
        >
          Services
        </h2>

        <div
          className="bg-white"
          style={{
            width: 'clamp(60px, 10vw, 100px)',
            height: 'clamp(4px, 0.8vw, 6px)',
            marginBottom: 'clamp(25px, 4vw, 40px)',
          }}
        />

        <p
          className="font-sofia text-marvel-black"
          style={{
            fontSize: 'clamp(13px, 2.5vw, 16px)',
            lineHeight: 'clamp(20px, 4vw, 27px)',
            maxWidth: '837px',
            marginBottom: 'clamp(39px, 5vw, 50px)',
          }}
        >
          Our clients are at the forefront of energy transition and innovation.
          Their task is complex: balance reliability and cost effectiveness with new customer demands,
          investment decisions, decarbonization goals and an evolving menu of new technologies.
          We understand the task and bring deep expertise to addressing these challenges.
        </p>

        <div
          className="flex flex-col md:flex-row"
          style={{
            gap: 'clamp(30px, 2vw, 43px)',
            marginBottom: 'clamp(43px, 6vw, 64px)',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1"
            >
              <h3
                className="font-alata text-marvel-black"
                style={{
                  fontSize: 'clamp(27px, 4vw, 40px)',
                  fontWeight: 'bold',
                  lineHeight: 'clamp(20px, 4vw, 43px)',
                  letterSpacing: '0.9px',
                  marginBottom: 'clamp(16px, 3vw, 25px)',
                  maxWidth: '280px',
                }}
              >
                {service.title}
              </h3>

              <ol
                className="font-sofia text-marvel-black marker:text-white"
                style={{
                  fontSize: 'clamp(13px, 2.5vw, 16px)',
                  lineHeight: 'clamp(20px, 4vw, 23px)',
                  marginBottom: 'clamp(13px, 4vw, 35px)',
                  listStyle: 'initial',
                  listStyleType: 'square',
                  paddingLeft: 'clamp(16px, 3vw, 20px)',
                }}
              >
                {service.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>
                    {item}
                  </li>
                ))}
              </ol>

              <a
                href="#"
                className="block"
                style={{
                  width: '43px',
                  height: '10px',
                  marginLeft: 'clamp(10px, 2vw, 20px)',
                }}
              >
                <img
                  src={arrowIcon}
                  alt=""
                  className="w-full h-full"
                />
              </a>
            </div>
          ))}
        </div>

        <p
          className="font-sofia text-marvel-black"
          style={{
            fontSize: 'clamp(13px, 2.5vw, 16px)',
            lineHeight: 'clamp(20px, 4vw, 27px)',
            maxWidth: '841px',
          }}
        >
          Our clients are time constrained and under-resourced. Agendas shift,
          budgets move and priorities change. We understand. We are agile,
          creative and immediately responsive to your various working styles,
          governance requirements and evolving needs.
        </p>
      </Container>
    </section>
  );
};