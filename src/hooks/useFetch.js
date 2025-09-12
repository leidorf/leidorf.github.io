import { useState, useEffect, useRef } from "react";

export function useFetch(url, transformFn) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const transformRef = useRef(transformFn);
  useEffect(() => {
    transformRef.current = transformFn;
  }, [transformFn]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        const transformed = transformRef.current
          ? transformRef.current(jsonData)
          : jsonData;

        if (isMounted) {
          setData(transformed);
          setLoading(false);
        }
      } catch (err) {
        console.error("fetch error:", err);
        if (isMounted) {
          setError("Error fetching data. Please try again later.");
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
