import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionIndicator } from '../SectionIndicator';

describe('SectionIndicator', () => {
  it('shows active section label', () => {
    render(
      <SectionIndicator 
        currentSection="about" 
        position="top" 
        top="350px" 
        color="black" 
      />
    );
    
    // Проверяем, что все номера секций отображаются
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
    
    // Проверяем, что только активная секция показывает лейбл
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.queryByText('Services')).not.toBeInTheDocument();
    expect(screen.queryByText('Contact')).not.toBeInTheDocument();
  });

  it('applies correct color classes to container', () => {
    const { rerender } = render(
      <SectionIndicator 
        currentSection="hero" 
        color="white" 
        top="100px"
      />
    );
    
    // Проверяем, что родительский div имеет класс text-white
    const container = screen.getByText('01').closest('div[class*="absolute"]');
    expect(container).toHaveClass('text-white');
    
    // Меняем на чёрный
    rerender(
      <SectionIndicator 
        currentSection="hero" 
        color="black" 
        top="100px"
      />
    );
    
    // Проверяем, что родительский div имеет класс text-marvel-black
    const blackContainer = screen.getByText('01').closest('div[class*="absolute"]');
    expect(blackContainer).toHaveClass('text-marvel-black');
  });

  it('applies correct line color based on color prop', () => {
    render(
      <SectionIndicator 
        currentSection="hero" 
        color="white" 
        top="100px"
      />
    );
    
    // Проверяем, что линия имеет класс bg-white
    const lines = document.querySelectorAll('.bg-white');
    expect(lines.length).toBeGreaterThan(0);
  });
});