import { Box, Image } from "@chakra-ui/react";

const HeroPicture = () => {
  return (
    <Box
      position="relative"
      borderRadius="full"
      maxW="full"
      overflow="hidden"
      margin="auto"
      gridRow={{ base: 1, md: 1 }}
    >
      <Image
        objectFit="contain"
        style={{
          filter: "grayscale(60%)",
        }}
        src="/assets/img/hero-img.png"
        alt="Personal picture"
      />
    </Box>
  );
};

export default HeroPicture;
