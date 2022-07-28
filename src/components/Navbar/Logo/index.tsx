import { Stack, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center">
      <Image
        boxSize="100px"
        objectFit="contain"
        src="/assets/img/logo.png"
        alt="Facundo Lavagnino"
      />
    </Stack>
  );
};

export default Logo;
