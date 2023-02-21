import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tablist: {
    borderBottom: 0,
    borderBottomWidth: 0,
  },
  tabpanel: {
    padding: 0,
  },
});

export const tabsTheme = defineMultiStyleConfig({ baseStyle });
