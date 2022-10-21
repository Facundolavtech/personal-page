import { Box, Icon } from "@chakra-ui/react";
import Link from "next/link";

const SocialLink = ({ href, icon }) => {
  return (
    <Link href={href} passHref>
      <Box
        width={30}
        as="a"
        target="_blank"
        height={30}
        borderRadius={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={2}
        bg="white"
        color="gray.600"
        _hover={{ opacity: 0.8, cursor: "pointer" }}
      >
        <Icon as={icon} />
      </Box>
    </Link>
  );
};

export default SocialLink;
