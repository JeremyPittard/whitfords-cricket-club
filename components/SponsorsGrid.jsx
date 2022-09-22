import {
  Box,
  chakra,
  Flex,
  Icon,
  SimpleGrid,
  HStack,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { WrappedImage } from "./WrappedImage";
import { dummySponsors } from "../utils/dummyData";
import { GrInstagram, GrMapLocation } from "react-icons/gr";
import { FaFacebookF, FaMapMarkedAlt } from "react-icons/fa";
import { FiLink, FiPhoneForwarded, FiTwitter, FiMail } from "react-icons/fi";

const Sponsor = ({
  title,
  img,
  showDetails,
  children,
  website,
  facebook,
  insta,
  email,
  address,
  phone,
  twitter,
}) => {
  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        w={"full"}
        h={"52"}
        position={"relative"}
      >
        <WrappedImage layout="fill" alt="#" src={img} objectFit="contain" />
      </Flex>
      <chakra.h3 mb={2} color="brand.500" fontWeight={"bold"}>
        {title}
      </chakra.h3>
      {showDetails && (
        <>
          <chakra.p fontSize="sm" color="gray.600">
            {children}
          </chakra.p>
          <HStack justify="flex-start">
            {/* ************************************************************************ website link ******************************************************************** */}
            {website && (
              <NextLink passHref href={website}>
                <Link pr={4} pl={{ base: 4, md: 0 }} py={4} target="_blank">
                  <Icon
                    color="brand.500"
                    _hover={{ color: "brand.200" }}
                    h="20px"
                    w="20px"
                    as={FiLink}
                  />
                </Link>
              </NextLink>
            )}
            {/* ************************************************************************ facebook link ******************************************************************** */}
            {facebook && (
              <NextLink passHref href={facebook}>
                <Link pr={4} pl={{ base: 4, md: 0 }} py={4} target="_blank">
                  <Icon
                    color="brand.500"
                    _hover={{ color: "brand.200" }}
                    h="20px"
                    w="20px"
                    as={FaFacebookF}
                  />
                </Link>
              </NextLink>
            )}
            {/* ************************************************************************ twitter link *********************************************************************** */}
            {twitter && (
              <NextLink passHref href="#">
                <Link pr={4} pl={{ base: 4, md: 0 }} py={4} target="_blank">
                  <Icon
                    color="brand.500"
                    _hover={{ color: "brand.200" }}
                    h="20px"
                    w="20px"
                    as={FiTwitter}
                  />
                </Link>
              </NextLink>
            )}
            {/* ************************************************************************ insta link *********************************************************************** */}
            {insta && (
              <NextLink passHref href={insta}>
                <Link pr={4} pl={{ base: 4, md: 0 }} py={4} target="_blank">
                  <Icon
                    color="brand.500"
                    _hover={{ color: "brand.200" }}
                    h="20px"
                    w="20px"
                    as={GrInstagram}
                  />
                </Link>
              </NextLink>
            )}
            {/* ************************************************************************ email link *********************************************************************** */}

            {email && (
              <NextLink passHref href={`mailto:${email}`}>
                <Link pr={4} pl={{ base: 4, md: 0 }} py={4} target="_blank">
                  <Icon
                    color="brand.500"
                    _hover={{ color: "brand.200" }}
                    h="20px"
                    w="20px"
                    as={FiMail}
                  />
                </Link>
              </NextLink>
            )}
            {/* ************************************************************************ phone link *********************************************************************** */}
            {phone && (
              <NextLink passHref href={`tel:${phone}`}>
                <Link pr={4} pl={{ base: 4, md: 0 }} py={4} target="_blank">
                  <Icon
                    color="brand.500"
                    _hover={{ color: "brand.200" }}
                    h="20px"
                    w="20px"
                    as={FiPhoneForwarded}
                  />
                </Link>
              </NextLink>
            )}
            {/* ************************************************************************ address link *********************************************************************** */}
            {address && (
              <NextLink passHref href={address}>
                <Link pr={4} pl={{ base: 4, md: 0 }} py={4} target="_blank">
                  <Icon
                    color="brand.500"
                    _hover={{ color: "brand.200" }}
                    h="20px"
                    w="20px"
                    as={FaMapMarkedAlt}
                  />
                </Link>
              </NextLink>
            )}
          </HStack>
        </>
      )}
    </Box>
  );
};

const SponsorsGrid = ({ showDetails, sponsorsList = dummySponsors }) => {
  return (
    <Flex
      bg="white"
      p={20}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        px={8}
        py={20}
        mx="auto"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        w="100%"
      >
        <Box
          textAlign={{
            lg: "center",
          }}
        >
          <chakra.p
            mt={2}
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            fontWeight="bold"
            color={"brand.500"}
            lineHeight={8}
          >
            Our Sponsors
          </chakra.p>
          <chakra.p
            mt={4}
            pb={6}
            maxW="2xl"
            fontSize="xl"
            mx={{
              lg: "auto",
            }}
            color="gray.600"
          >
            Support the people that support us.
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 3,
            lg: 4,
          }}
          spacingX={{
            base: 16,
            lg: 24,
          }}
          spacingY={20}
          mt={6}
        >
          {sponsorsList.map((sponsor, index) => {
            return (
              <Sponsor
                key={`sponsor_${index}`}
                showDetails={showDetails}
                title={sponsor.name}
                img={sponsor.image}
                website={sponsor.website}
                facebook={sponsor.facebook}
                insta={sponsor.facebook}
                email={sponsor.email}
                address={sponsor.address}
                phone={sponsor.phone}
                twitter={sponsor.twitter}
              >
                {sponsor.description}
              </Sponsor>
            );
          })}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default SponsorsGrid;
