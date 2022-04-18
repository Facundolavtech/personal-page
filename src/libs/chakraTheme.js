import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  styles: {
    global: {
      body: {
        background: "#EFFFFD",
      },
    },
  },
  colors: {
    primary: "#42C2FF",
    secondary: "#85F4FF",
    tertiary: "#B8FFF9",
  },
  fontWeights: {
    bold: 700,
    medium: 500,
    normal: 400,
    light: 300,
  },
  sizes: {
    link: "13px",
  },
});

export default theme;
