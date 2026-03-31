// Custom hook for handling data fetching logic and state
import { useState, useEffect } from 'react';

export const useFetch = (fetchFn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const executeFetch = async () => {
      try {
        setLoading(true);
        const result = await fetchFn();
        setData(result);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    executeFetch();
  }, [fetchFn]);

  return { data, loading, error };
};
