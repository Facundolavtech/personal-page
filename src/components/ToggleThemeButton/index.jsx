import { Button, useColorMode, Icon, Text } from "@chakra-ui/react";
import { WiDaySunny, WiMoonWaningCrescent3 } from "react-icons/wi";

const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const icon =
    colorMode === "light" ? (
      <>
        <Icon as={WiDaySunny} mr="2" />
        <Text>Light</Text>
      </>
    ) : (
      <>
        <Icon as={WiMoonWaningCrescent3} mr="2" />
        <Text>Dark</Text>
      </>
    );

  return (
    <Button onClick={toggleColorMode} minW="24">
      {icon}
    </Button>
  );
};

export default ToggleThemeButton;
