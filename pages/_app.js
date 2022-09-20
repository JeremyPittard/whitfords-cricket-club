import { ChakraProvider } from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import theme from "../utils/theme";
import "@fontsource/atkinson-hyperlegible";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

import { AnimatePresence } from "framer-motion";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ChakraProvider cssVarsRoot="#app" theme={theme}>
      <SkipNavLink>Skip to content</SkipNavLink>
      <NavBar />
      <SkipNavContent>
        <AnimatePresence
          key={`app-${router.asPath}`}
          onExitComplete={handleExitComplete}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </SkipNavContent>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
