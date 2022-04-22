import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
