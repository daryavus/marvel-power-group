import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '../ContactForm';

// Мокаем API
vi.mock('../../lib/api', () => ({
  subscribeToNewsletter: vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    message: 'Successfully subscribed!'
  })
}));

describe('ContactForm', () => {
  const mockOnSuccess = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows validation errors and connects them with aria-describedby', async () => {
    const user = userEvent.setup();
    render(<ContactForm onSuccess={mockOnSuccess} />);
    
    // Нажимаем Send без заполнения полей
    const submitButton = screen.getByRole('button', { name: /send/i });
    await user.click(submitButton);
    
    // Проверяем, что ошибки появились
    const nameError = await screen.findByText('Name is required');
    const emailError = await screen.findByText('Email is required');
    
    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    
    // Проверяем связь через aria-describedby
    const nameInput = screen.getByLabelText('Name', { selector: 'input' });
    const emailInput = screen.getByLabelText('Email', { selector: 'input' });
    
    expect(nameInput).toHaveAttribute('aria-invalid', 'true');
    expect(nameInput).toHaveAttribute('aria-describedby');
    expect(emailInput).toHaveAttribute('aria-invalid', 'true');
    expect(emailInput).toHaveAttribute('aria-describedby');
    
    // ID ошибки должен соответствовать aria-describedby
    const describedById = nameInput.getAttribute('aria-describedby');
    const errorElement = document.getElementById(describedById!);
    expect(errorElement).toHaveTextContent('Name is required');
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    render(<ContactForm onSuccess={mockOnSuccess} />);
    
    // Вводим некорректный email
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'invalid-email');
    
    // Уходим с поля (blur)
    await user.tab();
    
    // Проверяем ошибку
    const emailError = await screen.findByText('Email is invalid');
    expect(emailError).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('aria-invalid', 'true');
  });
});