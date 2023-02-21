import {
  Container,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Show,
  Center,
  Box,
} from "@chakra-ui/react";
import downloadCV from "../../utils/downloadCV";
import MouseScroll from "../MouseScroll";
import HeroContact from "./Contact";
import HeroPicture from "./Picture";
import SocialsHelper from "./Socials/helper";
import SocialLink from "./Socials/Link";
import HeroTitle from "./Title";

const Hero = () => {
  return (
    <Container as="section" bg="gray.800">
      <SimpleGrid
        margin="auto"
        className="wrapped"
        height="full"
        columns={{ base: 1, md: 2 }}
        overflow="hidden"
        gap={{ base: 0, md: 16 }}
        py={16}
      >
        <VStack
          spacing={8}
          alignItems={{ base: "center", md: "flex-start" }}
          justifyContent="center"
          height="full"
          gridRow={{ base: 2, md: 1 }}
        >
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <HeroTitle />
          </VStack>
          <HStack spacing={4}>
            {SocialsHelper.map((item) => {
              return (
                <SocialLink key={item.id} href={item.href} icon={item.icon} />
              );
            })}
          </HStack>
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <HeroContact />
          </VStack>
          <Button
            bg="white"
            padding={6}
            color="primary"
            margin="auto"
            onClick={downloadCV}
          >
            Download CV
          </Button>
          <Center width={{ base: "full", md: "25%" }}>
            <MouseScroll href="#articles" />
          </Center>
        </VStack>
        <Show above="md">
          <HeroPicture />
        </Show>
      </SimpleGrid>
    </Container>
  );
};

export default Hero;
