import { useEffect, useState } from "react";
import config from "../../config";

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchArticles = async () => {
      try {
        const response = await fetch(config.articles, {
          signal: abortController.signal,
        });
        const articles = await response.json();

        setArticles(articles.items);
      } catch {
        if (!abortController.signal.aborted) {
          setError(true);
        }
      }

      setLoading(false);
    };

    fetchArticles();

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    articles,
    loading,
    error,
  };
};

export default useArticles;
