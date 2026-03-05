import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

export const Container = ({ 
  children, 
  className = '', 
  style,
  as: Component = 'div' 
}: ContainerProps) => {
  return (
    <Component
      className={className}
      style={{
        maxWidth: '1130px',
        padding: '0 15px',
        width: '100%',
        margin: '0 auto',
        ...style
      }}
    >
      {children}
    </Component>
  );
};