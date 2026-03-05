import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '../Header';

// Мокаем скролл
beforeEach(() => {
  window.scrollTo = vi.fn();
  // Мокаем getElementById для навигации
  document.getElementById = vi.fn().mockReturnValue({
    getBoundingClientRect: () => ({ top: 0 }),
  });
});

describe('Header', () => {
  it('closes mobile menu on ESC key and returns focus to menu button', async () => {
    const user = userEvent.setup();
    render(<Header />);
    
    // Открываем меню
    const menuButton = screen.getByLabelText('Open menu');
    await user.click(menuButton);
    
    // Проверяем, что меню открылось
    await waitFor(() => {
      expect(screen.getByRole('dialog', { name: /mobile navigation menu/i })).toBeInTheDocument();
    });
    
    // Нажимаем ESC
    await user.keyboard('{Escape}');
    
    // Проверяем, что меню закрылось
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    }, { timeout: 2000 });
    
    // Проверяем, что фокус вернулся на кнопку
    expect(menuButton).toHaveFocus();
  });

  it('traps focus within mobile menu when open', async () => {
    const user = userEvent.setup();
    render(<Header />);
    
    // Открываем меню
    await user.click(screen.getByLabelText('Open menu'));
    
    // Даём время для установки фокуса
    await waitFor(() => {
      // Получаем все кнопки в мобильном меню
      const mobileMenu = screen.getByRole('dialog');
      const mobileButtons = within(mobileMenu).getAllByRole('button');
      
      // Первый элемент должен быть в фокусе
      expect(mobileButtons[0]).toHaveFocus();
    }, { timeout: 2000 });
    
    // Тестируем focus trap
    const mobileMenu = screen.getByRole('dialog');
    const mobileButtons = within(mobileMenu).getAllByRole('button');
    
    // Tab до последнего элемента
    for (let i = 1; i < mobileButtons.length; i++) {
      await user.tab();
      expect(mobileButtons[i]).toHaveFocus();
    }
    
    // Следующий Tab должен вернуть фокус на первый элемент
    await user.tab();
    expect(mobileButtons[0]).toHaveFocus();
    
    // Проверяем Shift+Tab
    await user.keyboard('{Shift>}{Tab}{/Shift}');
    expect(mobileButtons[mobileButtons.length - 1]).toHaveFocus();
  });
});