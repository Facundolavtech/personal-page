import {
  Container,
  Stack,
  Heading,
  Text,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <section className="wrapped">
      <Container mt="80px" maxW="full">
        <Stack
          direction={["column-reverse", "column-reverse", "row"]}
          justifyContent="space-between"
          spacing="8"
        >
          <Stack flex="0.9" spacing="4">
            <Box
              p="8"
              bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
              borderRadius="md"
              boxShadow="5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"
              lineHeight="64px"
            >
              <Heading as="h1" color="gray.700" size="2xl" lineHeight="64px">
                Hi, i'm{" "}
                <Text color="primary" as="span">
                  Facundo Lavagnino
                </Text>
              </Heading>
              <Text color="gray.700" fontSize="2xl" as="h2" fontWeight="bold">
                Frontend and Blockchain Engineer
              </Text>
            </Box>
            <Box
              p="8"
              bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
              borderRadius="md"
              boxShadow="5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"
            >
              <Button>Download CV</Button>
              <Button>Contact Me</Button>
            </Box>
          </Stack>
          <Stack flex="1.1">
            <Box
              p="8"
              bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
              borderRadius="md"
              boxShadow="5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"
            >
              <Image
                src="/assets/img/facundo.png"
                alt="Hero ilustration"
                objectFit="cover"
                w="full"
                h="full"
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </section>
  );
};

export default Hero;
