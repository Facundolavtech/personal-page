import {
  Container,
  Stack,
  Heading,
  Text,
  Image,
  Box,
  Button,
  Icon,
  SimpleGrid,
  Hide,
} from "@chakra-ui/react";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Hero = () => {
  return (
    <section className="wrapped">
      <Container mt="80px" maxW="full">
        <SimpleGrid
          spacing="8"
          columns={[1, 1, 1, 2]}
          gridTemplateRows="minmax(50px, auto) 1fr"
        >
          <Stack flex="1.1" spacing="8">
            <Box
              p="8"
              bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
              borderRadius="md"
              boxShadow="5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"
            >
              <Heading as="h1" color="gray.700" size="2xl" lineHeight="64px">
                Hi, i'm{" "}
                <Text color="primary" as="span">
                  Facundo Lavagnino
                </Text>
              </Heading>
              <Text
                color="gray.700"
                fontSize="2xl"
                as="h2"
                fontWeight="bold"
                mt="4"
              >
                Frontend and Blockchain Engineer
              </Text>
              <Text mt="4">
                Frontend and Blockchain developer based in Argentina, i love
                interfaces and
              </Text>
              <Stack mt="4">
                <Stack direction="row" alignItems="center">
                  <Icon as={MdEmail} fontSize="xl" color="primary" />
                  <Text color="gray.600" fontWeight="semibold">
                    flavagnino8@gmail.com
                  </Text>
                </Stack>
                <Stack direction="row" alignItems="center" mt="4">
                  <Icon as={MdLocationOn} fontSize="xl" color="primary" />
                  <Text color="gray.600" fontWeight="semibold">
                    Buenos Aires, Argentina
                  </Text>
                </Stack>
              </Stack>
            </Box>
            <Stack
              p="8"
              bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
              borderRadius="md"
              boxShadow="5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"
            >
              <Stack mb="4">
                <Text fontWeight="normal" color="gray.500" fontSize="lg">
                  Download my curriculum or contact me
                </Text>
              </Stack>
              <Stack alignItems="center" direction="row" spacing="8">
                <Button
                  bg="white"
                  boxShadow="lg"
                  color="primary"
                  flex="1"
                  py="6"
                >
                  Download CV
                </Button>
                <Button
                  bg="white"
                  boxShadow="lg"
                  color="primary"
                  flex="1"
                  py="6"
                >
                  Contact Me
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Hide breakpoint="(max-width: 1024px)">
            <Stack flex="0.9" align="stretch">
              <Box
                p="8"
                h="full"
                bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
                borderRadius="md"
                boxShadow="5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"
              >
                <Image
                  src="/assets/img/hero.png"
                  alt="Hero ilustration"
                  objectFit="contain"
                  w="full"
                  h="full"
                />
              </Box>
            </Stack>
          </Hide>
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default Hero;
