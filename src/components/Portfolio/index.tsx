import { Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section className="wrapped">
      <Container maxW="full" mt="80px">
        <Stack direction="row" justifyContent="flex-start">
          <Text
            color={useColorModeValue("gray.700", "gray.50")}
            fontSize="6xl"
            as="h2"
            fontWeight="bold"
            mb="24"
          >
            My Portfolio
          </Text>
        </Stack>
        <Projects />
      </Container>
    </section>
  );
};

export default Portfolio;
