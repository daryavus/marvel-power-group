import { useState, useCallback } from 'react';

interface RateLimitRecord {
  count: number;
  firstAttempt: number;
}

export const useRateLimit = (limit: number = 3, timeWindow: number = 60000) => {
  const [records, setRecords] = useState<Map<string, RateLimitRecord>>(new Map());

  const checkRateLimit = useCallback((key: string): boolean => {
    const now = Date.now();
    const record = records.get(key);

    if (!record) {
      setRecords(new Map(records.set(key, { count: 1, firstAttempt: now })));
      return true;
    }

    if (now - record.firstAttempt > timeWindow) {
      setRecords(new Map(records.set(key, { count: 1, firstAttempt: now })));
      return true;
    }

    if (record.count >= limit) {
      return false;
    }

    setRecords(new Map(records.set(key, { 
      count: record.count + 1, 
      firstAttempt: record.firstAttempt 
    })));
    return true;
  }, [records, limit, timeWindow]);

  return { checkRateLimit };
};