import React from "react";
import {
  Box,
  Stack,
  Flex,
  HStack,
  Link,
  Divider,
  VStack,
  Icon,
  Text,
  Container,
  Heading,
} from "@chakra-ui/react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import ClubLogo from "./ClubLogo";

const Footer = () => {
  const date = new Date();
  return (
    <Box bg="brand.500">
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        maxW="container.xl"
        m={"0 auto"}
        px={{ base: 2 }}
        py={10}
      >
        <Flex justify="center">
          <ClubLogo colour="#fff" height="150" width="150" />
        </Flex>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{
            base: "12px",
            md: "16px",
          }}
          color="white"
          _dark={{
            color: "white",
          }}
          textAlign={{
            base: "center",
            md: "left",
          }}
        >
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">Contact</Link>
            <Text>
              McDonald Reserve, Marmion Ave &amp; Forest Road, Padbury WA 6025
            </Text>
          </Flex>
        </HStack>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{
            base: "12px",
            md: "16px",
          }}
          color="white"
          _dark={{
            color: "white",
          }}
          textAlign={{
            base: "center",
            md: "left",
          }}
        >
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">Photos</Link>
            <Link textTransform="uppercase">Year Book</Link>
            <Link textTransform="uppercase">Premierships</Link>
            <Link textTransform="uppercase">Register</Link>
            <Link textTransform="uppercase">Watch</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">About Us</Link>
            <Link textTransform="uppercase">Contact Us</Link>
            <Link textTransform="uppercase">Resources</Link>
          </Flex>
        </HStack>
      </Stack>
      <Divider w="95%" mx="auto" h="3.5px" borderColor={"brand.300"} />
      <VStack py={6}>
        <HStack justify="center">
          <Link>
            <Icon
              color="white"
              _hover={{ color: "brand.200" }}
              h="20px"
              w="20px"
              as={FaFacebookF}
            />
          </Link>
          <Link>
            <Icon
              color="white"
              _hover={{ color: "brand.200" }}
              h="20px"
              w="20px"
              as={FiTwitter}
            />
          </Link>
          <Link>
            <Icon
              color="white"
              _hover={{ color: "brand.200" }}
              h="20px"
              w="20px"
              as={GrInstagram}
            />
          </Link>
          <Link>
            <Icon
              color="white"
              _hover={{ color: "brand.200" }}
              h="20px"
              w="20px"
              as={FaLinkedinIn}
            />
          </Link>
        </HStack>
        <Text textAlign="center" fontSize="smaller" color="brand.200">
          &copy; {date.getFullYear()} Copyright. All rights reserved.
        </Text>
      </VStack>
      {/* <Divider w="95%" mx="auto" h="3.5px" borderColor={"brand.300"} /> */}
      <VStack py={3}>
        <HStack justify="center">
          <Container maxW="container.xl" color="brand.200" py={3}>
            <p>
              In the spirit of reconciliation the Whitfords Cricket Club
              acknowledges the Traditional Custodians of country throughout
              Australia and their connections to land, sea and community. We pay
              our respect to their Elders past and present and extend that
              respect to all Aboriginal and Torres Strait Islander peoples
              today.
            </p>
          </Container>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
