// pages/_app.js
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../styles/theme";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
