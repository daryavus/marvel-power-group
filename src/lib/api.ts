export type ApiResponse = 
  | { ok: true; status: 200; message: string }
  | { ok: false; status: 400; error: string }
  | { ok: false; status: 429; error: string };

const attempts = new Map<string, number[]>();

export const subscribeToNewsletter = async (email: string, name: string): Promise<ApiResponse> => {
  await new Promise(resolve => setTimeout(resolve, 300));

  if (!email || !email.includes('@')) {
    return { ok: false, status: 400, error: 'Invalid email format' };
  }

  if (!name || name.length < 2) {
    return { ok: false, status: 400, error: 'Name is too short' };
  }

  const now = Date.now();
  const userAttempts = attempts.get(email) || [];
  const recentAttempts = userAttempts.filter(time => now - time < 60000);
  
  if (recentAttempts.length >= 3) {
    return { ok: false, status: 429, error: 'Too many requests. Please try again later.' };
  }

  attempts.set(email, [...recentAttempts, now]);
  return { ok: true, status: 200, message: 'Successfully subscribed!' };
};

// Для тестов
export const resetRateLimit = () => attempts.clear();