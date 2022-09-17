import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
  VisuallyHidden,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box padding={"16px"} maxW={"1300px"} m={"0 auto"}>
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 2 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href={"#"}>
            <Image
              rounded={"md"}
              alt={"Whitfords Cricket Club Logo"}
              src={"/club-logo.svg"}
              objectFit={"cover"}
              boxSize={"100px"}
            />
            <VisuallyHidden>Home</VisuallyHidden>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={"auto"} mr={32}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"md"}
            fontWeight={600}
            color={"white"}
            bg={"brand.navy"}
            as={Link}
            href={
              "https://mycricket.cricket.com.au/common/pages/public/rv/draw.aspx?entityid=1455&id=RVFIXTURE"
            }
            target="_blank"
            onClick={() => {}}
            _hover={{
              textDecoration: "none",
              color: "brand.navy",
              bg: "brand.tint",
            }}
          >
            Register To Play!
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = "gray.600";
  const linkHoverColor = "brand.navy";
  const popoverContentBgColor = "white";

  return (
    <Stack direction={"row"} spacing={4} alignItems={"center"} flex>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                target={navItem.external && "_blank"}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, external }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      target={external && "_blank"}
      _hover={{ bg: "brand.navy" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{
              color: "white",
            }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text
            transition={"all .3s ease"}
            _groupHover={{
              color: "brand.tint",
            }}
            fontSize={"md"}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"white"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, external }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        target={external && "_blank"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"gray.600"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
                target={child.exteral && "_blank"}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// const NAV_ITEMS = [
//   {
//     label: "Inspiration",
//     children: [
//       {
//         label: "Explore Design Work",
//         subLabel: "Trending Design to inspire you",
//         href: "#",
//       },
//       {
//         label: "New & Noteworthy",
//         subLabel: "Up-and-coming Designers",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "Find Work",
//     children: [
//       {
//         label: "Job Board",
//         subLabel: "Find your dream design job",
//         href: "#",
//       },
//       {
//         label: "Freelance Projects",
//         subLabel: "An exclusive list for contract work",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "Learn Design",
//     href: "#",
//   },
//   {
//     label: "Hire Designers",
//     href: "#",
//   },
// ];

const NAV_ITEMS = [
  {
    label: "Our Club",
    children: [
      {
        label: "Photos",
        subLabel: "Some highlights over the years",
        href: "#",
      },
      {
        label: "Year Book",
        subLabel: "Downloadable Copies of our yearbook",
        href: "#",
      },
      {
        label: "Premieships",
        subLabel: "Details from all of our Premieships",
        href: "#",
      },
      {
        label: "Register",
        subLabel: "sign up to play for us",
        href: "https://play.cricket.com.au/club/whitfords-cricket-club/804bfad7-86d8-eb11-a7ad-2818780da0cc",
        external: true,
      },
      {
        label: "Watch",
        subLabel: "stream our games",
        href: "https://matchcentre.aus.frogbox.live/matches?entity=1455",
        external: true,
      },
    ],
  },
  {
    label: "Calendar",
    children: [
      {
        label: "Fixtures",
        subLabel: "fixtures for upcoming matches on mycricket",
        href: "https://mycricket.cricket.com.au/common/pages/public/rv/draw.aspx?entityid=1455&id=RVFIXTURE",
      },
      {
        label: "Events",
        subLabel: "upcoming and past events",
        href: "#",
      },
    ],
  },
  {
    label: "Sponsors",
    href: "#",
  },
];

export default NavBar;
