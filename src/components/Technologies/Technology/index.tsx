import { FC } from "react";
import { Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

type Props = {
  technology: {
    label: string;
    icon: IconType;
  };
};

const Technology: FC<Props> = ({ technology }) => {
  return (
    <VStack
      spacing={4}
      key={technology.label}
      alignItems="center"
      textAlign="center"
    >
      <Icon as={technology.icon} width={8} height={8} />
      <Text color="gray.600">{technology.label}</Text>
    </VStack>
  );
};

export default Technology;
