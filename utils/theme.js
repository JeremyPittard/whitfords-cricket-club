import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e8e7ef",
      100: "#bbb8ce",
      200: "#c8c1fc",
      300: "#5f5a8d",
      400: "#322b6c",
      500: "#1b135c",
      600: "#181153",
      700: "#160f4a",
      800: "#130d40",
      900: "#100b37",
    },
  },
  fonts: {
    heading: `"Atkinson Hyperlegible",serif`,
    body: `"Atkinson Hyperlegible",serif`,
  },
});

export default theme;
