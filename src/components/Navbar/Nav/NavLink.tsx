import NextLink from "next/link";
import { Link, useColorModeValue } from "@chakra-ui/react";

interface INavLinkProps {
  text: string;
  key: string | number;
}

const NavLink = ({ text }: INavLinkProps) => {
  return (
    <li>
      <NextLink href={`#${text.toLowerCase()}`} passHref>
        <Link
          color={useColorModeValue("gray.500", "gray.50")}
          transition="color .2s"
          textTransform="uppercase"
          letterSpacing="1px"
          fontSize="13px"
          _hover={{
            color: useColorModeValue("gray.700", "gray.200"),
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
