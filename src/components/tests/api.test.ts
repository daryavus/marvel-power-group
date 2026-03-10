import { describe, it, expect, beforeEach } from 'vitest';
import { subscribeToNewsletter, resetRateLimit } from '../../lib/api';

describe('API', () => {
  beforeEach(async () => {
    await resetRateLimit();
  });

  it('возвращает 429 после 3 попыток', async () => {
    const email = 'test@example.com';
    const name = 'John Doe';
    
    // 3 успешных
    for (let i = 0; i < 3; i++) {
      const res = await subscribeToNewsletter(email, name);
      expect(res.status).toBe(200);
    }
    
    // 4я - 429
    const res = await subscribeToNewsletter(email, name);
    expect(res.status).toBe(429);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.error).toBe('Too many requests. Please try again later.');
    }
  }, 10000);
});