interface LineBlockProps {
  color?: 'white' | 'black';
  className?: string;
  style?: React.CSSProperties;
  showScrollText?: boolean;
  scrollText?: string;
}

export const LineBlock = ({ 
  color = 'white', 
  className = '', 
  style,
  showScrollText = true,
  scrollText = 'Scroll for more'
}: LineBlockProps) => {
  const lineColor = color === 'white' ? 'bg-white' : 'bg-marvel-black';
  const textColor = color === 'white' ? 'text-white' : 'text-marvel-black';

  return (
    <div className={`w-full ${className}`} style={style}>
      <div
        className="relative w-full"
        style={{ height: 'clamp(60px, 10vw, 100px)' }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-marvel-yellow"
          style={{
            width: '1px',
            height: '100%',
            top: 0
          }}
        />

        <div
          className={`absolute ${lineColor}`}
          style={{
            width: '1px',
            height: 'clamp(10px, 2vw, 15px)',
            bottom: 0,
            left: 'clamp(50px, 268px, 268px)',
          }}
        />
        <div
          className={`absolute ${lineColor}`}
          style={{
            width: '1px',
            height: 'clamp(10px, 2vw, 15px)',
            bottom: 0,
            right: 'clamp(50px, 268px, 268px)',
          }}
        />

        <div
          className={`absolute ${lineColor}`}
          style={{
            width: '1px',
            height: 'clamp(10px, 2vw, 15px)',
            bottom: 0,
            left: 0
          }}
        />
        <div
          className={`absolute ${lineColor}`}
          style={{
            width: '1px',
            height: 'clamp(10px, 2vw, 15px)',
            bottom: 0,
            right: 0
          }}
        />
      </div>

      {showScrollText && (
        <p
          className={`text-center font-light ${textColor}`}
          style={{
            fontSize: 'clamp(10px, 2vw, 12px)',
            marginTop: 'clamp(15px, 3vw, 23px)',
            letterSpacing: '0.5px'
          }}
        >
          {scrollText}
        </p>
      )}
    </div>
  );
};