import { useEffect, useState } from 'react';

const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { ...opts, signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Неверный код ответа сервера ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      }, (error) => {
        if (error.name === 'AbortError') {
          return;
        }
        setError(error);
        setLoading(false);
      });
    return () => {
      controller.abort();
      setData(null);
      setLoading(true);
      setError(null);
    }
  }, [url, opts]);

  return [data, loading, error];
};

export default useJsonFetch;

