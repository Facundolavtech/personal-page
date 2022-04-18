import { Stack } from "@chakra-ui/react";
import NavLink from "./NavLink";
import Links from "./Links";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Stack direction="row" alignItems="center" spacing="10">
          {Links.map((link) => (
            <NavLink text={link.text} key={link.id} />
          ))}
        </Stack>
      </ul>
    </nav>
  );
};

export default Nav;
