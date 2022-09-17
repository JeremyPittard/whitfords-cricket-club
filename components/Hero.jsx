import {
  Stack,
  Flex,
  Button,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      w={"full"}
      h={"80vh"}
      backgroundImage={"url(/img/macdonald-reserve.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading
            as="h1"
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Whitfords Cricket Club
          </Heading>
          <Stack direction={"row"}>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"brand.navy"}
              href={"#"}
              _hover={{
                bg: "brand.tint",
                color: "brand.navy",
              }}
            >
              Register To Play!
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
