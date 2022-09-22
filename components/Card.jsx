import { Box, Flex, HStack, chakra, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { WrappedImage } from "./WrappedImage";

const Card = ({
  title,
  img,
  isDownload = true,
  link,
  linkText,
  description,
}) => {
  return (
    <Flex
      maxW="md"
      width={"full"}
      mx="auto"
      bg="white"
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    >
      <Box w={1 / 3} position={"relative"}>
        <WrappedImage alt="#" src={img} layout="fill" objectFit={"cover"} />
      </Box>

      <Box w={2 / 3} p={{ base: 4, md: 4 }}>
        <chakra.h1 fontSize="2xl" fontWeight="bold" color="brand.500">
          {title}
        </chakra.h1>

        <chakra.p mt={2} fontSize="md" color="gray.600">
          {description}
        </chakra.p>

        <Flex mt={3} alignItems="center" justifyContent="flex-end">
          <NextLink passHref href={link}>
            <Link
              px={2}
              py={1}
              bg="white"
              fontSize="sm"
              color="brand.500"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              download={isDownload}
              target={isDownload ? "_parent" : "_self"}
              _hover={{
                bg: "brand.200",
              }}
              _focus={{
                bg: "brand.200",
              }}
            >
              {isDownload ? "Download" : linkText}
            </Link>
          </NextLink>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Card;
