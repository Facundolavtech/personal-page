import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const NavLink = ({ text }) => {
  return (
    <li>
      <NextLink href={`#${text.toLowerCase()}`} passHref>
        <Link
          color="gray.500"
          transition="color .2s"
          textTransform="uppercase"
          letterSpacing="1px"
          fontSize="13px"
          _hover={{
            color: "gray.700",
          }}
          fontWeight="500"
        >
          {text}
        </Link>
      </NextLink>
    </li>
  );
};

export default NavLink;
