import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      w={"full"}
      h={"80vh"}
      backgroundImage={
        "url(https://scontent.fper7-1.fna.fbcdn.net/v/t1.6435-9/78670300_788679748241928_4534034749177462784_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=AYYw9vNLDcgAX8Aziye&_nc_ht=scontent.fper7-1.fna&oh=00_AT-ZU3aCKq2Frpdwv7UtkI0kS7EkeIhvH-liT6QImIlaOw&oe=6323C938)"
      }
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
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
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
