import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: ({ colorMode }) => {
      const isLightMode = colorMode === "light";
      return {
        body: {
          backgroundColor: isLightMode && "#f8fffe",
        },
      };
    },
  },
  colors: {
    primary: "#ff014f",
    secondary: "#85F4FF",
    tertiary: "#B8FFF9",
  },
  // fontWeights: {
  //   bold: 700,
  //   medium: 500,
  //   normal: 400,
  //   light: 300,
  // },
  // sizes: {
  //   link: "13px",
  // },
});

export default theme;
