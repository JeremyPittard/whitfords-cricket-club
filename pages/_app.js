import { ChakraProvider } from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import theme from "../utils/theme";

import NavBar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider cssVarsRoot="#app" theme={theme}>
      <SkipNavLink>Skip to content</SkipNavLink>
      <NavBar />
      <SkipNavContent>
        <Component {...pageProps} />
      </SkipNavContent>
    </ChakraProvider>
  );
}

export default MyApp;
