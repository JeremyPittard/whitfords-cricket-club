import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  chakra,
} from "@chakra-ui/react";
import WrappedImage from "./WrappedImage";

const ImageCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        w="xs"
        bg="white"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
        onClick={onOpen}
        tabIndex="0"
        cursor={"pointer"}
      >
        <Box w={"full"} h={56} position="relative">
          <WrappedImage
            layout="fill"
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1588594887963-563f4ba24bcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="avatar"
          />
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW={"container.xl"}
          w={"container.xl"}
          height="container.md"
        >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="fnduisfbudisfuids" position={"relative"}>
            <WrappedImage
              layout="fill"
              src="https://images.unsplash.com/photo-1588594887963-563f4ba24bcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="avatar"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageCard;
