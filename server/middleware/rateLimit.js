const rateLimit = new Map();

const cleanupInterval = 60 * 1000;
setInterval(() => {
  const now = Date.now();
  for (const [email, timestamps] of rateLimit.entries()) {
    const recent = timestamps.filter(t => now - t < 60000);
    if (recent.length === 0) {
      rateLimit.delete(email);
    } else {
      rateLimit.set(email, recent);
    }
  }
}, cleanupInterval);

export const checkRateLimit = (email) => {
  const now = Date.now();
  const attempts = rateLimit.get(email) || [];
  const recentAttempts = attempts.filter(t => now - t < 60000);
  
  if (recentAttempts.length >= 3) {
    return { limited: true, attempts: recentAttempts };
  }
  
  rateLimit.set(email, [...recentAttempts, now]);
  return { limited: false, attempts: recentAttempts };
};

// Для тестов
export const resetRateLimit = () => rateLimit.clear();