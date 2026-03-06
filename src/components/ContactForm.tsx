import React, { useState, useId } from 'react';
import plugIcon from '../assets/plug-icon.svg';
import { subscribeToNewsletter } from '../lib/api';

interface ContactFormProps {
  onSuccess: () => void;
}

type StatusType = 'idle' | 'loading' | 'success' | 'error' | 'rate-limit';

export const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [status, setStatus] = useState<StatusType>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const formId = useId();
  const nameId = `name-${formId}`;
  const emailId = `email-${formId}`;
  const nameErrorId = `name-error-${formId}`;
  const emailErrorId = `email-error-${formId}`;
  const statusId = `form-status-${formId}`;

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    setStatus('loading');

    try {
      const response = await subscribeToNewsletter(email, name);

      if (response.ok) {
        setStatus('success');
        setStatusMessage(response.message);
        setTimeout(() => onSuccess(), 1500);
      } else {
        if (response.status === 429) {
          setStatus('rate-limit');
        } else {
          setStatus('error');
        }
        setStatusMessage(response.error);
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: 'clamp(290px, 50vw, 445px)', marginBottom: '68px', fontSize: '14px' }}
      aria-label="Newsletter subscription form"
      noValidate
    >
      <div
        id={statusId}
        className={`p-3 mb-4 rounded ${status === 'success' ? 'bg-green-500/20 text-green-200' :
            status === 'rate-limit' ? 'bg-yellow-500/20 text-yellow-200' :
              status === 'error' ? 'bg-red-500/20 text-red-200' :
                'hidden'
          }`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {status !== 'idle' && status !== 'loading' && statusMessage}
      </div>

      <div style={{ marginBottom: 'clamp(10px, 2vw, 15px)' }}>
        <label htmlFor={nameId} className="sr-only">
          Name
        </label>
        <input
          type="text"
          id={nameId}
          placeholder="NAME *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => {
            const newErrors = validate();
            setErrors(prev => ({ ...prev, name: newErrors.name }));
          }}
          disabled={status === 'loading' || status === 'success'}
          className="w-full bg-white text-marvel-black font-semibold disabled:opacity-50"
          style={{
            height: '48px',
            width: 'clamp(290px, 50vw, 445px)',
            padding: '18px 20px',
            border: errors.name ? '2px solid #ff6b6b' : 'none',
            color: '#000000',
          }}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? nameErrorId : undefined}
          aria-required="true"
        />
        {errors.name && (
          <p
            id={nameErrorId}
            className="text-red-400 text-sm mt-1"
            role="alert"
          >
            {errors.name}
          </p>
        )}
      </div>

      <div style={{ marginBottom: 'clamp(10px, 2vw, 15px)' }}>
        <label htmlFor={emailId} className="sr-only">
          Email
        </label>
        <input
          type="email"
          id={emailId}
          placeholder="E-MAIL *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {
            const newErrors = validate();
            setErrors(prev => ({ ...prev, email: newErrors.email }));
          }}
          disabled={status === 'loading' || status === 'success' || status === 'rate-limit'}
          className="w-full bg-white text-marvel-black font-semibold disabled:opacity-50"
          style={{
            height: '48px',
            width: 'clamp(290px, 50vw, 445px)',
            padding: '18px 20px',
            border: errors.email ? '2px solid #ff6b6b' : 'none',
            color: '#000000',
          }}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? emailErrorId : undefined}
          aria-required="true"
        />
        {errors.email && (
          <p
            id={emailErrorId}
            className="text-red-400 text-sm mt-1"
            role="alert"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success' || status === 'rate-limit'}
          className="flex items-center gap-1 bg-marvel-yellow text-marvel-black font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-marvel-yellow"
          style={{
            height: '48px',
            padding: 'clamp(16px, 2vw, 17px) clamp(64px, 8vw, 100px)',
            fontSize: '16px',
          }}
          aria-busy={status === 'loading'}
        >
          {status === 'loading' ? 'SENDING...' : 'SEND'}
          {status !== 'loading' && <img src={plugIcon} alt="" className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>
    </form>
  );
};