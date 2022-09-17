import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  background,
  color,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import ClubLogo from "./ClubLogo";

const Logo = () => {
  return <ClubLogo props={{ colour: "white", height: "200", width: "200" }} />;
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"brand.navy"}
      color={"white"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "brand.tint",
        color: "brand.navy",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const date = new Date();
  return (
    <Box
      // bg={useColorModeValue("gray.50", "gray.900")}
      bg={"brand.navy"}
      color={"white"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={"sm"}>
              © {date.getFullYear()} Whitfords Cricket Club
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>The Club</ListHeader>
            <Link href={"#"}>Photo's</Link>
            <Link href={"#"}>Year Book</Link>
            <Link href={"#"}>Premieships</Link>
            <Link
              href={
                "https://play.cricket.com.au/club/whitfords-cricket-club/804bfad7-86d8-eb11-a7ad-2818780da0cc"
              }
              target="_blank"
            >
              Register
            </Link>
            <Link
              href={"https://matchcentre.aus.frogbox.live/matches?entity=1455"}
              target="_blank"
            >
              Watch
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support Us</ListHeader>
            <Link href={"#"}>Sponsors</Link>
            <Link href={"#"}>Fixtures</Link>
            <Link href={"#"}>Events</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={"blackAlpha.100"}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={"brand.navy"}
                color="white"
                _hover={{
                  bg: "brand.tint",
                  color: "brand.navy",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container maxW="container.xl" color="brand.tint" pb={6}>
        <p>
          In the spirit of reconciliation the Whitfords Cricket Club
          acknowledges the Traditional Custodians of country throughout
          Australia and their connections to land, sea and community. We pay our
          respect to their Elders past and present and extend that respect to
          all Aboriginal and Torres Strait Islander peoples today.
        </p>
      </Container>
    </Box>
  );
};

export default Footer;
