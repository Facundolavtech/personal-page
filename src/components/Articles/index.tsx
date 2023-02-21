import { HStack, Icon, Spinner, Text, VStack } from "@chakra-ui/react";
import Article from "./Article";
import { MdError } from "react-icons/md";
import useArticles from "../../hooks/useArticles";

const Articles = () => {
  const { articles, loading, error } = useArticles();

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

  if (articles && !loading) {
    return (
      <VStack spacing={10} mt={14}>
        {articles.map((item) => (
          <Article key={item.title} article={item} />
        ))}
      </VStack>
    );
  }

  return (
    <VStack mt={14}>
      <Spinner size="lg" color="gray.800" />
    </VStack>
  );
};

export default Articles;
