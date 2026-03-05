import { useState } from 'react';
import { ContactForm } from './ContactForm';
import { SectionIndicator } from './SectionIndicator';
import { LineBlock } from './LineBlock';
import { Container } from './Container';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative bg-marvel-black text-white"
      style={{
        paddingTop: 'clamp(40px, 6vw, 100px)',
      }}
    >
      <div className="hidden md:block">
        <SectionIndicator
          currentSection="contact"
          position="top"
          top="331px"
          color="white"
        />
      </div>

      <Container>
        <div
          className="flex flex-col md:flex-row justify-between"
          style={{
            gap: 'clamp(52px, 7vw, 110px)',
          }}
        >
          <div
            style={{
              maxWidth: '554px',
              width: '100%',
            }}
          >
            <h2
              className="font-alata"
              style={{
                fontSize: 'clamp(41px, 10vw, 90px)',
                lineHeight: 'clamp(56px, 11vw, 100px)',
                marginBottom: 'clamp(26px, 4vw, 40px)',
              }}
            >
              Contact
            </h2>

            <div
              className="bg-marvel-yellow"
              style={{
                width: 'clamp(60px, 10vw, 100px)',
                height: 'clamp(4px, 0.8vw, 6px)',
                marginBottom: 'clamp(25px, 4vw, 40px)',
              }}
            />

            <div>
              <p
                className="font-sofia font-bold"
                style={{
                  fontSize: 'clamp(22px, 5vw, 34px)',
                  lineHeight: 'clamp(33px, 5.5vw, 42px)',
                }}
              >
                <span className="text-white">Email us here:</span>
                <br />
                <span className="text-marvel-yellow break-all">
                  <a
                    href="mailto:info@marvelpowergroup.com"
                    className="text-marvel-yellow hover:underline break-all"
                  >
                    info@marvelpowergroup.com
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div>
            {!isSubmitted ? (
              <>
                <p
                  className="font-sofia font-bold text-white"
                  style={{
                    fontSize: 'clamp(21px, 5vw, 35px)',
                    lineHeight: 'clamp(32px, 5.5vw, 42px)',
                    marginTop: 'clamp(0px, 4vw, 53px)',
                    marginBottom: 'clamp(28px, 4vw, 41px)',
                  }}
                >
                  Stay in the loop <br /> by getting on <br /> our mailing list
                </p>

                <ContactForm onSuccess={() => setIsSubmitted(true)} />
              </>
            ) : (
              <>
                <p
                  className="font-sofia font-bold text-white"
                  style={{
                    fontSize: 'clamp(21px, 5vw, 35px)',
                    lineHeight: 'clamp(32px, 5.5vw, 42px)',
                    marginTop: 'clamp(0px, 4vw, 53px)',
                    marginBottom: 'clamp(28px, 4vw, 41px)',
                  }}
                >
                  Thank you. Your info has been successfully sent
                </p>

                <p className="font-sofia text-white" style={{ marginBottom: 'clamp(40px, 15vw, 220px)' }}>
                  You can contact us{' '}
                  <a
                    href="mailto:info@marvelpowergroup.com"
                    className="text-marvel-yellow underline break-all"
                  >
                    info@marvelpowergroup.com
                  </a>{' '}
                  if you need additional assistance
                </p>
              </>
            )}
          </div>
        </div>

        <div className="hidden md:block">
          <LineBlock
            color="white"
            style={{
              marginTop: 'clamp(20px, 1vw, 20px)',
              paddingBottom: '94px',
            }}
            showScrollText={false}
          />
        </div>
      </Container>
    </section>
  );
};