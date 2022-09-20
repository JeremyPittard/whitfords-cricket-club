import { Box, chakra, Flex, Icon, SimpleGrid } from "@chakra-ui/react";
import { WrappedImage } from "./WrappedImage";
import { dummySponsors } from "../utils/dummyData";

const Sponsor = (props) => {
  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        w={"full"}
        h={"52"}
        position={"relative"}
      >
        <WrappedImage
          layout="fill"
          alt="#"
          src={"/img/impi.jpg"}
          objectFit="contain"
        />
      </Flex>
      <chakra.h3 mb={2} color="brand.500" fontWeight={"semibold"}>
        {props.title}
      </chakra.h3>
      {props.showDetails && (
        <>
          <chakra.p
            fontSize="sm"
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            {props.children}
          </chakra.p>
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
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            _light={{
              color: "gray.900",
            }}
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
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
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
