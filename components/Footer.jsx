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
} from "@chakra-ui/react";
import NextLink from "next/link";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import ClubLogo from "./ClubLogo";
import { NextCookies } from "next/dist/server/web/spec-extension/cookies";

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
            <NextLink
              href="https://www.google.com/maps/place/Macdonald+Park,+Padbury+WA+6025"
              passHref
            >
              <Link target={"blank"} rel="noopener noreferrer">
                Come Find Us! <br />
                Macdonald Reserve, Marmion Ave &amp; Forest Road, Padbury WA
                6025
              </Link>
            </NextLink>
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
            <NextLink href="/photos" passHref>
              <Link textTransform="uppercase">Photos</Link>
            </NextLink>
            <NextLink href="/yearbook" passHref>
              <Link textTransform="uppercase">Yearbook</Link>
            </NextLink>
            <NextLink href="/premierships" passHref>
              <Link textTransform="uppercase">Premierships</Link>
            </NextLink>
          </Flex>
          <Flex justify="start" direction="column">
            <NextLink href={"mailto: test@email.com"}>
              <Link textTransform="uppercase">Contact Us</Link>
            </NextLink>
            <NextLink
              href="https://play.cricket.com.au/club/whitfords-cricket-club/804bfad7-86d8-eb11-a7ad-2818780da0cc"
              passHref
            >
              <Link
                textTransform="uppercase"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </Link>
            </NextLink>
            <NextLink
              href="https://matchcentre.aus.frogbox.live/matches?entity=1455"
              passHref
            >
              <Link
                textTransform="uppercase"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch
              </Link>
            </NextLink>
          </Flex>
        </HStack>
      </Stack>
      <Divider w="95%" mx="auto" h="3.5px" borderColor={"brand.300"} />
      <VStack py={6}>
        <HStack justify="center">
          <NextLink passHref href="#">
            <Link p={4}>
              <Icon
                color="white"
                _hover={{ color: "brand.200" }}
                h="20px"
                w="20px"
                as={FaFacebookF}
              />
            </Link>
          </NextLink>
          <NextLink passHref href="#">
            <Link p={4}>
              <Icon
                color="white"
                _hover={{ color: "brand.200" }}
                h="20px"
                w="20px"
                as={FiTwitter}
              />
            </Link>
          </NextLink>
          <NextLink passHref href="#">
            <Link p={4}>
              <Icon
                color="white"
                _hover={{ color: "brand.200" }}
                h="20px"
                w="20px"
                as={GrInstagram}
              />
            </Link>
          </NextLink>
          <NextLink passHref href="#">
            <Link p={4}>
              <Icon
                color="white"
                _hover={{ color: "brand.200" }}
                h="20px"
                w="20px"
                as={FaLinkedinIn}
              />
            </Link>
          </NextLink>
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
