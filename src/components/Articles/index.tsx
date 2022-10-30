import { useState, useEffect } from "react";
import { HStack, Icon, Skeleton, Text, VStack } from "@chakra-ui/react";
import Article from "./Article";
import { MdError } from "react-icons/md";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticles = () => {
      fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@flavtech"
      )
        .then((res) => {
          res.json().then((res) => {
            if (res.status === "error") {
              return setError(true);
            }
            setArticles(res.items);
          });
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => setLoading(false));
    };

    fetchArticles();
  }, []);

  if (error) {
    return (
      <HStack
        spacing={4}
        mt={14}
        width="full"
        justifyContent="flex-start"
        color="red.500"
      >
        <Icon as={MdError} />
        <Text fontSize={20} fontWeight={600}>
          An error occurred while trying to load the articles
        </Text>
      </HStack>
    );
  }

  if (loading || !articles) {
    return (
      <VStack spacing={10} mt={14}>
        {new Array(4).fill(4).map((_, index) => {
          return <Skeleton key={index} width="full" height={300} />;
        })}
      </VStack>
    );
  }

  return (
    <VStack spacing={10} mt={14}>
      {articles.map((item) => {
        return <Article key={item.title} article={item} />;
      })}
    </VStack>
  );
};

export default Articles;
