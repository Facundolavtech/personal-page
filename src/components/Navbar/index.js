import { Container, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <Container as="header" width="full" maxW="full" height="72px">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="wrapped"
        width="full"
        height="full"
        margin="auto"
        paddingX={22}
      >
        <Logo />
        <Nav />
      </Stack>
    </Container>
  );
};

export default Navbar;
