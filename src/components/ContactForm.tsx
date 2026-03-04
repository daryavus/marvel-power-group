import { useState } from 'react';
import plugIcon from '../assets/plug-icon.svg';

interface ContactFormProps {
  onSuccess: () => void;
}

export const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      // API вызов
      onSuccess();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '445px' }}>
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="NAME *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-white text-marvel-black font-semibold placeholder:font-semibold placeholder:uppercase"
          style={{
            height: '48px',
            padding: '18px 20px',
            border: errors.name ? '2px solid #ff6b6b' : 'none',
            color: '#000000',
            fontSize: '12px',
          }}
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <input
          type="email"
          placeholder="E-MAIL *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white text-marvel-black font-semibold placeholder:font-semibold placeholder:uppercase"
          style={{
            height: '48px',
            padding: '18px 20px',
            border: errors.email ? '2px solid #ff6b6b' : 'none',
            color: '#000000',
            fontSize: '12px',
          }}
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center gap-1 bg-marvel-yellow text-marvel-black font-semibold hover:bg-opacity-90 transition-colors"
          style={{
            height: '48px',
            padding: '19px 100px',
            fontSize: '13px',
          }}
        >
          SEND
          <img src={plugIcon} alt="" className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};