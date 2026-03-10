import express from 'express';
import cors from 'cors';
import { checkRateLimit, resetRateLimit } from './middleware/rateLimit.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/subscribe', (req, res) => {
  const { name, email } = req.body;

  if (!email || !email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ 
      ok: false, 
      error: 'Invalid email format' 
    });
  }

  if (!name || name.trim().length < 2) {
    return res.status(400).json({ 
      ok: false, 
      error: 'Name is too short' 
    });
  }

  const { limited } = checkRateLimit(email);
  if (limited) {
    return res.status(429).json({ 
      ok: false, 
      error: 'Too many requests. Please try again later.' 
    });
  }

  res.status(200).json({ 
    ok: true, 
    message: 'Successfully subscribed!' 
  });
});

// Endpoint для тестов
app.post('/api/test/reset-rate-limit', (req, res) => {
  resetRateLimit();
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});