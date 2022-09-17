import { useState, useEffect } from "react";

const useFetch = (fileName: string) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      await fetch(`survey-data/${fileName}.json`)
        .then((res) => res.json())
        .then((jsonData) => setResponse(jsonData))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };
    fetchData();
  }, [fileName]);

  return { response, error, isLoading };
};

export default useFetch;
