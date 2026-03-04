import { useState } from 'react';
import { ContactForm } from './ContactForm';
import { SectionIndicator } from './SectionIndicator';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative bg-marvel-black text-white"
      style={{
        paddingLeft: '257px',
        paddingRight: '253px',
        paddingTop: '100px',
        paddingBottom: '90px',
      }}
    >
      <SectionIndicator 
        currentSection="contact" 
        position="top"
        top="316px"
      />

      <div
        className="flex"
        style={{
          gap: '111px',
        }}
      >
        <div className="flex-1">
          <h2
            className="font-alata"
            style={{
              fontSize: '90px',
              lineHeight: '100px',
              marginBottom: '34px',
              letterSpacing: '-2px',
            }}
          >
            Contact
          </h2>

          <div
            className="bg-marvel-yellow"
            style={{
              width: '100px',
              height: '6px',
              marginBottom: '40px',
            }}
          />

          <p
            className="font-sofia font-bold"
            style={{
              fontSize: '34px',
              lineHeight: '36px',
            }}
          >
            <span className="text-white">Email us here:</span>
            <br />
            <span className="text-marvel-yellow">
              <a
                  href="mailto:info@marvelpowergroup.com"
                  className="text-marvel-yellow underline"
                >
                  info@marvelpowergroup.com
                </a>
            </span>
          </p>
        </div>

        <div className="flex-1" style={{ marginTop: '45px' }}>
          {!isSubmitted ? (
            <>
              <p
                className="font-sofia font-bold text-white"
                style={{
                  fontSize: '34px',
                  lineHeight: '41px',
                  marginBottom: '41px',
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
                  fontSize: '34px',
                  lineHeight: '36px',
                  marginBottom: '49px',
                }}
              >
                Thank you. Your info has been successfully sent
              </p>

              <p className="font-sofia text-white" style={{ marginBottom: '200px' }}>
                You can contact us{' '}
                <a
                  href="mailto:info@marvelpowergroup.com"
                  className="text-marvel-yellow underline"
                >
                  info@marvelpowergroup.com
                </a>{' '}
                if you need additional assistance
              </p>
            </>
          )}
        </div>
      </div>

      <div
        className="w-full"
        style={{
          marginTop: '90px',
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
      </div>
    </section>
  );
};