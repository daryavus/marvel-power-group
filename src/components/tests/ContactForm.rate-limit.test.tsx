import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '../ContactForm';

// Простой мок API
vi.mock('../../lib/api', () => ({
  subscribeToNewsletter: vi.fn()
}));

import { subscribeToNewsletter } from '../../lib/api';

describe('ContactForm', () => {
  const mockOnSuccess = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('показывает сообщение об ошибке при 429', async () => {
    const user = userEvent.setup();
    
    // Мок для 429
    vi.mocked(subscribeToNewsletter).mockResolvedValue({
      ok: false,
      status: 429,
      error: 'Too many requests. Please try again later.'
    });
    
    render(<ContactForm onSuccess={mockOnSuccess} />);
    
    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'test@test.com');
    await user.click(screen.getByRole('button', { name: /send/i }));
    
    await waitFor(() => {
      expect(screen.getByRole('status')).toHaveTextContent('Too many requests');
    });
  });

  it('показывает успех при 200', async () => {
    const user = userEvent.setup();
    
    // Мок для 200
    vi.mocked(subscribeToNewsletter).mockResolvedValue({
      ok: true,
      status: 200,
      message: 'Successfully subscribed!'
    });
    
    render(<ContactForm onSuccess={mockOnSuccess} />);
    
    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'test@test.com');
    await user.click(screen.getByRole('button', { name: /send/i }));
    
    await waitFor(() => {
      expect(screen.getByRole('status')).toHaveTextContent('Successfully subscribed!');
    });
  });
});