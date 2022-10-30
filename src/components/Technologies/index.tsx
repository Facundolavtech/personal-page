import { Icon, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import TechsHelper from "./helper";

const Technologies = () => {
  return (
    <SimpleGrid spacingX={8} spacingY={12} mt={14} minChildWidth="100px">
      {TechsHelper.map((item) => {
        return (
          <VStack
            spacing={4}
            key={item.label}
            alignItems="center"
            textAlign="center"
          >
            <Icon as={item.icon} width={8} height={8} />
            <Text color="gray.600">{item.label}</Text>
          </VStack>
        );
      })}
    </SimpleGrid>
  );
};

export default Technologies;
