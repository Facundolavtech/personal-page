import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";
import { FaCode } from "react-icons/fa";

const Projects = () => {
  const [projects] = useState([
    {
      title: "PHP With app & landing design services",
      content: "Awesome trading app",
      link: "https://facebook.com",
      technologies: ["PHP", "JavaScript", "React"],
    },
    {
      title: "PHP With app & landing design services",
      content: "Awesome trading app",
      link: "https://facebook.com",
      technologies: ["PHP", "JavaScript", "React"],
    },
    {
      title: "PHP With app & landing design services",
      content: "Awesome trading app",
      link: "https://facebook.com",
      technologies: ["PHP", "JavaScript", "React"],
    },
    {
      title: "PHP With app & landing design services",
      content: "Awesome trading app",
      link: "https://facebook.com",
      technologies: ["PHP", "JavaScript", "React"],
    },
  ]);

  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing="8">
      {projects.map((item, index) => (
        <Link href={item.link} key={index}>
          <a target="_blank">
            <Box
              direction="column"
              boxShadow="5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"
              borderRadius="lg"
              transition="box-shadow .4s"
              bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
              _hover={{
                boxShadow: "2xl",
              }}
              p="8"
            >
              <Image
                src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-03.jpg"
                objectFit="contain"
                borderRadius="lg"
              />
              <Text
                textTransform="uppercase"
                color="primary"
                mt="8"
                fontWeight={500}
                letterSpacing="1px"
                fontSize="12px"
              >
                {item.technologies.join(", ")}
              </Text>
              <Text
                fontWeight={600}
                fontSize="23px"
                lineHeight="34px"
                mt="8"
                as="h3"
                color="gray.700"
                transition="color .4s"
                _hover={{ color: "primary" }}
                wordBreak="break-word"
              >
                {item.title}
              </Text>
              <Stack direction="row" mt="8" spacing="8">
                <Button
                  borderRadius="lg"
                  bg="gray.800"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8"
                  py="6"
                  role="group"
                  transition="box-shadow .2s"
                  _hover={{
                    boxShadow: "xl",
                  }}
                >
                  <Text
                    color="white"
                    fontWeight={600}
                    fontSize="md"
                    textTransform="uppercase"
                    mr="2"
                    _groupHover={{
                      color: "primary",
                    }}
                  >
                    Visit
                  </Text>
                  <Icon
                    _groupHover={{
                      color: "primary",
                    }}
                    as={MdOpenInNew}
                    color="white"
                    fontSize="md"
                  />
                </Button>
                <Button
                  borderRadius="lg"
                  bg="gray.800"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="8"
                  py="6"
                  role="group"
                  transition="box-shadow .2s"
                  _hover={{
                    boxShadow: "xl",
                  }}
                >
                  <Text
                    color="white"
                    fontWeight={600}
                    fontSize="md"
                    textTransform="uppercase"
                    mr="2"
                    _groupHover={{
                      color: "primary",
                    }}
                  >
                    Code
                  </Text>
                  <Icon
                    _groupHover={{
                      color: "primary",
                    }}
                    as={FaCode}
                    color="white"
                    fontSize="md"
                  />
                </Button>
              </Stack>
            </Box>
          </a>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default Projects;
