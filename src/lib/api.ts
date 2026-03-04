export type ApiResponse = 
  | { ok: true; status: 200; message: string }
  | { ok: false; status: 400; error: string }
  | { ok: false; status: 429; error: string };

export const subscribeToNewsletter = async (email: string, name: string): Promise<ApiResponse> => {
  await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 300));

  if (!email || !email.includes('@')) {
    return {
      ok: false,
      status: 400,
      error: 'Invalid email format'
    };
  }

  if (!name || name.length < 2) {
    return {
      ok: false,
      status: 400,
      error: 'Name is too short'
    };
  }

  if (Math.random() > 0.1) {
    return {
      ok: true,
      status: 200,
      message: 'Successfully subscribed!'
    };
  }

  return {
    ok: false,
    status: 400,
    error: 'Something went wrong. Please try again.'
  };
};