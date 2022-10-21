import { Heading, Text } from "@chakra-ui/react";

const HeroTitle = () => {
  return (
    <>
      <Heading
        as="h1"
        color="white"
        fontSize={{ base: 38, md: 46 }}
        fontWeight={700}
        textAlign={{ base: "center", md: "left" }}
      >
        Facundo Lavagnino
      </Heading>
      <Text
        color="whiteAlpha.800"
        fontWeight={500}
        fontSize={{ base: 20, md: 24 }}
        textAlign={{ base: "center", md: "left" }}
      >
        Full Stack Engineer & Technical Writer
      </Text>
    </>
  );
};

export default HeroTitle;
