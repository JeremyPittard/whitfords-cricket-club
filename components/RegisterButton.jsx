import { Button, Link } from "@chakra-ui/react";

const RegisterButton = () => {
  return (
    <Button
      display={{ base: "none", md: "inline-flex" }}
      fontSize={"md"}
      fontWeight={600}
      color={"white"}
      bg={"brand.500"}
      as={Link}
      textTransform={"uppercase"}
      href={
        "https://mycricket.cricket.com.au/common/pages/public/rv/draw.aspx?entityid=1455&id=RVFIXTURE"
      }
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {}}
      _hover={{
        textDecoration: "none",
        color: "brand.500",
        bg: "brand.200",
      }}
    >
      Register To Play!
    </Button>
  );
};
export default RegisterButton;
