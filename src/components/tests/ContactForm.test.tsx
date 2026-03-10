import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '../ContactForm';

describe('ContactForm', () => {
  const mockOnSuccess = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal('fetch', vi.fn());
  });

  it('показывает сообщение об ошибке при 429', async () => {
    const user = userEvent.setup();
    
    // Мок для 429
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: false,
      status: 429,
      json: async () => ({ error: 'Too many requests. Please try again later.' })
    } as Response);
    
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
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ message: 'Successfully subscribed!' })
    } as Response);
    
    render(<ContactForm onSuccess={mockOnSuccess} />);
    
    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'test@test.com');
    await user.click(screen.getByRole('button', { name: /send/i }));
    
    await waitFor(() => {
      expect(screen.getByRole('status')).toHaveTextContent('Successfully subscribed!');
    });
  });

  it('обрабатывает сетевую ошибку', async () => {
    const user = userEvent.setup();
    
    // Мок для сетевой ошибки
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'));
    
    render(<ContactForm onSuccess={mockOnSuccess} />);
    
    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'test@test.com');
    await user.click(screen.getByRole('button', { name: /send/i }));
    
    await waitFor(() => {
      expect(screen.getByRole('status')).toHaveTextContent('Network error');
    });
  });
});