import { FC } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";

type Props = {
  title: string;
  description: string;
  page: string;
  code?: string;
};

const ProjectCard: FC<Props> = ({ title, description, page, code }) => {
  return (
    <Stack
      width="full"
      padding={10}
      border="1px solid rgba(0,0,0,0.1)"
      borderRadius={6}
      bg="gray.800"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={8} rowGap={8}>
        <Box>
          <Image
            objectFit="contain"
            borderRadius={6}
            src="/assets/img/redtrader.png"
            alt="Redtrader Project"
          />
        </Box>
        <VStack spacing={8} alignItems="flex-start">
          <VStack spacing={4} alignItems="flex-start">
            <Heading
              color="white"
              fontWeight={700}
              fontSize={{ base: 32, md: 42 }}
            >
              {title}
            </Heading>
            <Text color="whiteAlpha.700" fontSize={{ base: 18, md: 20 }}>
              {description}
            </Text>
          </VStack>
          <HStack spacing={4}>
            <Link href={page} passHref>
              <Button
                as="a"
                target="_blank"
                _hover={{ cursor: "pointer" }}
                padding={5}
                bg="none"
                color="white"
                border="1px solid rgba(255,255,255,.2)"
                iconSpacing={3}
                rightIcon={<Icon as={MdOpenInNew} width={4} height={4} />}
              >
                Open App
              </Button>
            </Link>
            {code && (
              <Link href={code} passHref>
                <Button
                  as="a"
                  target="_blank"
                  _hover={{ cursor: "pointer" }}
                  padding={5}
                  bg="none"
                  color="white"
                  border="1px solid rgba(255,255,255,.2)"
                  iconSpacing={3}
                  rightIcon={<Icon as={BsGithub} width={4} height={4} />}
                >
                  Code
                </Button>
              </Link>
            )}
          </HStack>
        </VStack>
      </SimpleGrid>
    </Stack>
  );
};

export default ProjectCard;
