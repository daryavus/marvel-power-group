import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Hero } from '../Hero';

describe('Hero', () => {
  const mockScrollIntoView = vi.fn();
  
  beforeEach(() => {
    // Мокаем scrollIntoView
    Element.prototype.scrollIntoView = mockScrollIntoView;
    
    // Мокаем getElementById для контакт секции
    document.getElementById = vi.fn().mockReturnValue({
      scrollIntoView: mockScrollIntoView
    });
  });

  it('scrolls to contact section when CTA button is clicked', async () => {
    const user = userEvent.setup();
    render(<Hero />);
    
    // Находим кнопку CONTACT US
    const contactButton = screen.getByRole('button', { name: /contact us/i });
    expect(contactButton).toBeInTheDocument();
    
    // Кликаем по кнопке
    await user.click(contactButton);
    
    // Проверяем, что scrollIntoView был вызван
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('renders with correct heading hierarchy', () => {
    render(<Hero />);
    
    // Проверяем, что заголовок - h1
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Marvel Power Group');
    
    // Проверяем, что подзаголовок не является заголовком (простой параграф)
    const subheading = screen.getByText(/Marvel Power Group is a boutique consulting firm/i);
    expect(subheading.tagName).not.toBe('H2');
    expect(subheading.tagName).not.toBe('H3');
  });
});