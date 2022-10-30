import { FC } from "react";
import {
  Badge,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";

interface IArticle {
  link: string;
  title: string;
  thumbnail: string;
  categories: string[];
}

type Props = {
  article: IArticle;
};

const Article: FC<Props> = ({ article }) => {
  const { title, link, categories, thumbnail } = article;

  return (
    <Link href={link} passHref>
      <Stack
        as="a"
        target="_blank"
        maxWidth="full"
        _hover={{ cursor: "pointer" }}
        padding={8}
        border="1px solid rgba(0,0,0,0.1)"
        borderRadius={6}
        bg="none"
        gridGap={10}
        alignItems="flex-start"
        direction={{ base: "column", md: "row" }}
      >
        <Image
          src={thumbnail}
          alt={title}
          width={{ base: "full", md: "30%" }}
        />
        <VStack
          spacing={6}
          alignItems="flex-start"
          width={{ base: "full", md: "70%" }}
        >
          <Heading fontWeight={700} fontSize={{ base: 26, md: 32 }}>
            {title}
          </Heading>
          <Wrap spacing={4}>
            {categories.map((cat) => {
              return (
                <WrapItem key={cat}>
                  <Badge colorScheme="gray" padding={2}>
                    {cat}
                  </Badge>
                </WrapItem>
              );
            })}
          </Wrap>
        </VStack>
      </Stack>
    </Link>
  );
};

export default Article;
