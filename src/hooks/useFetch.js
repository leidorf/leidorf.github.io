import { useEffect, useState } from "react";

export const useFetch = (fetchFn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchFn(signal);
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          const msg = err.message;
          setError(msg);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getData();

    return () => abortController.abort();
  }, [fetchFn]);

  return { data, isLoading, error };
};
