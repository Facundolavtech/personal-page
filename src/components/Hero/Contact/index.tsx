import { HStack, Icon, Text } from "@chakra-ui/react";
import { MdEmail, MdLocationOn } from "react-icons/md";

const HeroContact = () => {
  return (
    <>
      <HStack
        alignItems="center"
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <Icon as={MdEmail} color="primary" />
        <Text color="white" fontWeight={500}>
          flavagnino8@gmail.com
        </Text>
      </HStack>
      <HStack
        width="full"
        direction="row"
        alignItems="center"
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <Icon as={MdLocationOn} color="primary" />
        <Text color="white" fontWeight="semibold">
          Buenos Aires, Argentina
        </Text>
      </HStack>
    </>
  );
};

export default HeroContact;
