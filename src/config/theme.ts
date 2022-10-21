import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "668px",
    md: "992px",
    lg: "1312px",
  },
  components: {
    Container: {
      baseStyle: {
        maxWidth: "unset",
        padding: 0,
        margin: 0,
      },
    },
  },
  colors: {
    primary: "#ff014f",
    secondary: "#85F4FF",
  },
});

export default theme;
