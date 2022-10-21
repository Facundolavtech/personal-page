import { Box } from "@chakra-ui/react";
import Image from "next/image";

const HeroPicture = () => {
  return (
    <Box
      position="relative"
      borderRadius="full"
      width={{ base: 300, md: 500 }}
      height={{ base: 480, md: 580 }}
      overflow="hidden"
      margin="auto"
      gridRow={{ base: 1, md: 1 }}
    >
      <Image
        layout="fill"
        objectFit="contain"
        style={{
          filter: "grayscale(30%)",
        }}
        src="/assets/img/hero-img.png"
        alt="Personal picture"
      />
    </Box>
  );
};

export default HeroPicture;
