import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
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
import RegisterButton from "./RegisterButton";
import { NAV_ITEMS } from "../utils/navData";

import NextLink from "next/link";
import { WrappedImage } from "./WrappedImage";

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
          <NextLink href={"/"} passHref>
            <Link>
              <WrappedImage
                rounded={"md"}
                alt={"Whitfords Cricket Club Logo"}
                src={"/club-logo.svg"}
                objectFit={"cover"}
                boxSize={"100px"}
                width="100px"
                height={"100px"}
              />
              <VisuallyHidden>Home</VisuallyHidden>
            </Link>
          </NextLink>

          <Flex display={{ base: "none", md: "flex" }} ml={"auto"} mr={32}>
            <DesktopNav navItems={NAV_ITEMS} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <RegisterButton />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
};

const DesktopNav = ({ navItems }) => {
  const linkColor = "gray.600";
  const linkHoverColor = "brand.500";
  const popoverContentBgColor = "white";

  return (
    <Stack direction={"row"} spacing={4} alignItems={"center"} flex>
      {navItems.map((navItem) => (
        <Box key={"b" + navItem.label}>
          {navItem.children ? (
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
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
                      <DesktopSubNav key={`d-${child.label}`} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          ) : (
            <NextLink
              href={navItem.href ?? "#"}
              target={navItem.external && "_blank"}
              passHref
            >
              <Link
                p={2}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </NextLink>
          )}
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, external }) => {
  return (
    <NextLink passHref href={href}>
      <Link
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        target={external && "_blank"}
        _hover={{ bg: "brand.500" }}
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
                color: "brand.200",
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
            <Icon color={"brand.200"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};

const MobileNav = ({ navItems }) => {
  return (
    <Stack bg={"white"} p={4} display={{ md: "none" }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={`m-${navItem.label}`} {...navItem} />
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
              <NextLink passHref href={child.href} key={`c-${child.label}`}>
                <Link
                  py={2}
                  href={child.href}
                  target={child.exteral && "_blank"}
                >
                  {child.label}
                </Link>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default NavBar;
