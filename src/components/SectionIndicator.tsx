interface SectionIndicatorProps {
  currentSection: 'hero' | 'about' | 'services' | 'contact';
  position?: 'top' | 'bottom';
  top?: string;
  bottom?: string;
  color?: 'white' | 'black';
}

export const SectionIndicator = ({ 
  currentSection, 
  position = 'top', 
  top, 
  bottom,
  color = 'white'
}: SectionIndicatorProps) => {
  const sections = [
    { number: '01', label: 'Home', section: 'hero' },
    { number: '02', label: 'About', section: 'about' },
    { number: '03', label: 'Services', section: 'services' },
    { number: '04', label: 'Contact', section: 'contact' },
  ];

  const textColor = color === 'white' ? 'text-white' : 'text-marvel-black';
  const lineColor = color === 'white' ? 'bg-white' : 'bg-marvel-black';

  return (
    <div 
      className={`absolute right-0 flex flex-col items-end ${textColor}`}
      style={{ 
        top: position === 'top' ? top : 'auto',
        bottom: position === 'bottom' ? bottom : 'auto',
      }}
    >
      {sections.map((section) => {
        const isActive = section.section === currentSection;
        
        return (
          <div 
            key={section.number}
            className="flex items-center gap-3"
            style={{ marginBottom: '25px' }}
          >
            <span 
              className="font-sofia"
              style={{ 
                fontSize: '8px',
              }}
            >
              {section.number}
            </span>
            <span 
              className="font-sofia"
              style={{ 
                fontSize: '12px',
              }}
            >
              {isActive ? section.label : ''}
            </span>
            
            <div 
              className={lineColor}
              style={{
                width: isActive ? '60px' : '21px',
                height: '1px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};