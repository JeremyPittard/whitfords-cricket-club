import { chakra, Box, Flex, Stack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const CTA = ({ firstLine, secondLine, link, secondLink }) => {
  return (
    <Flex
      bg="#white"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg="white">
        <Box
          maxW="7xl"
          w={{ md: "3xl", lg: "4xl" }}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            color="brand.500"
          >
            <chakra.span display="block">{firstLine}</chakra.span>
            <chakra.span display="block" color="blue.500">
              {secondLine}
            </chakra.span>
          </chakra.h2>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mt={{ base: 8, lg: 0 }}
            flexShrink={{ lg: 0 }}
          >
            <NextLink href={link} passHref>
              <Link
                w={["full", , "auto"]}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                shadow="md"
                color="white"
                bg="brand.500"
                _hover={{
                  bg: "brand.200",
                  color: "brand.500",
                }}
              >
                Get started
              </Link>
            </NextLink>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};
export default CTA;
