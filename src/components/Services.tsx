import arrowIcon from '../assets/arrow-icon.svg';

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
        paddingLeft: '257px',
        paddingRight: '253px',
        paddingTop: '100px',
        paddingBottom: '127px',
      }}
    >
      <h2
        className="font-alata text-marvel-black"
        style={{
          fontSize: '90px',
          lineHeight: '80px',
          marginBottom: '62px',
          letterSpacing: '-1px',
        }}
      >
        Services
      </h2>

      <div
        className="bg-white"
        style={{
          width: '100px',
          height: '6px',
          marginBottom: '40px',
        }}
      />

      <p
        className="font-sofia text-marvel-black"
        style={{
          fontSize: '16px',
          lineHeight: '1.5',
          maxWidth: '837px',
          marginBottom: '47px',
        }}
      >
        Our clients are at the forefront of energy transition and innovation.
        Their task is complex: balance reliability and cost effectiveness with new customer demands,
        investment decisions, decarbonization goals and an evolving menu of new technologies.
        We understand the task and bring deep expertise to addressing these challenges.
      </p>

      <div
        className="flex"
        style={{
          gap: '30px',
          marginBottom: '67px',
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-1"
            style={{
              width: '300px',
            }}
          >
            <h3
              className="font-alata text-marvel-black"
              style={{
                height: '103px',
                maxWidth: '280px',
                fontSize: '38px',
                fontWeight: 'bold',
                marginBottom: '13px',
                lineHeight: 1.2,
              }}
            >
              {service.title}
            </h3>

            <ol
              className="font-sofia text-marvel-black marker:text-white"
              style={{
                fontSize: '16px',
                lineHeight: 1.4,
                marginBottom: '33px',
                marginLeft: '20px',
                listStyle: 'initial',
                listStyleType: 'square',
              }}
            >
              {service.items.map((item, idx) => (
                <li key={idx} style={{ fontSize: '16px', marginBottom: '8px' }}>
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
                marginLeft: '20px',
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
          fontSize: '16px',
          lineHeight: '1.5',
          maxWidth: '840px',
        }}
      >
        Our clients are time constrained and under-resourced. Agendas shift,
        budgets move and priorities change. We understand. We are agile,
        creative and immediately responsive to your various working styles,
        governance requirements and evolving needs.
      </p>
    </section>
  );
};