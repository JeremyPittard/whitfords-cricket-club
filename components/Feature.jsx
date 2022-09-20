import { Box, chakra, SimpleGrid, Image } from "@chakra-ui/react";
import RegisterButton from "./RegisterButton";
import { WrappedImage } from "./WrappedImage";

const Feature = ({ img, content, title, rightImage = true, url }) => {
  if (rightImage) {
    return (
      <Box px={8} py={20} mx="auto">
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
          maxW="container.xl"
          m={"0 auto"}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              textAlign={{ base: "center", md: "left" }}
              color="brand.500"
              _dark={{ color: "brand.200" }}
              lineHeight={{ md: "shorter" }}
            >
              {title}
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              fontSize={{ md: "lg" }}
            >
              {content}
            </chakra.p>
            <RegisterButton />
          </Box>
          <Box w="full" h="full" bg="gray.200">
            <WrappedImage
              width={592}
              height={384}
              alt="#"
              src={img}
              layout="responsive"
            />
          </Box>
        </SimpleGrid>
      </Box>
    );
  } else {
    return (
      <Box px={8} py={20} mx="auto">
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
          maxW="container.xl"
          m={"0 auto"}
        >
          <Box order={{ base: "initial", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              textAlign={{ base: "center", md: "left" }}
              color="brand.500"
              lineHeight={{ md: "shorter" }}
            >
              {title}
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              fontSize={{ md: "lg" }}
            >
              {content}
            </chakra.p>
            <RegisterButton />
          </Box>
          <Box w="full" h="full" bg="gray.200">
            <WrappedImage
              width={592}
              height={384}
              alt="#"
              src={img}
              layout="responsive"
            />
          </Box>
        </SimpleGrid>
      </Box>
    );
  }
};

export default Feature;
