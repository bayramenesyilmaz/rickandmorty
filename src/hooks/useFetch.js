import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (!response) {
          throw new Error("Network response was not ok");
        }
        const json = await response.data;
        setData(json);

        setTimeout(() => {
          setLoading(false);
        }, 500);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
