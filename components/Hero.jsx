import {
  Box,
  chakra,
  Flex,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import RegisterButton from "./RegisterButton";
import { WrappedImage } from "./WrappedImage";

const Hero = ({ title, img, isLarge, hideButton }) => {
  return (
    <chakra.header>
      <Box
        w="full"
        h={isLarge ? "container.sm" : "sm"}
        backgroundImage={img}
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.400"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["3xl", , "5xl"]}
              fontWeight="bold"
              color="white"
              textTransform="uppercase"
            >
              {title}
            </Heading>
            {!hideButton && <RegisterButton />}
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
};

export default Hero;
