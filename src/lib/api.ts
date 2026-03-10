export type ApiResponse = 
  | { ok: true; status: 200; message: string }
  | { ok: false; status: 400; error: string }
  | { ok: false; status: 429; error: string };

const API_URL = 'http://localhost:3001';

export const subscribeToNewsletter = async (email: string, name: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        ok: true,
        status: 200,
        message: data.message || 'Successfully subscribed!',
      };
    }

    return {
      ok: false,
      status: response.status as 400 | 429,
      error: data.error || 'Something went wrong',
    };
  } catch (error) {
    return {
      ok: false,
      status: 400,
      error: 'Network error. Please check your connection.',
    };
  }
};

// Для тестов
export const resetRateLimit = async () => {
  if (import.meta.env.MODE === 'test') {
    await fetch(`${API_URL}/api/test/reset-rate-limit`, { method: 'POST' });
  }
};