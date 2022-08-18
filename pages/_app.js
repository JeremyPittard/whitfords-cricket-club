import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";

import NavBar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <SkipNavLink>Skip to content</SkipNavLink>
      <NavBar />
      <SkipNavContent>
        <Component {...pageProps} />
      </SkipNavContent>
    </ChakraProvider>
  );
}

export default MyApp;
