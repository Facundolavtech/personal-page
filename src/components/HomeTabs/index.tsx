import {
  Center,
  Icon,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs as ChakraTabs,
  Text,
} from "@chakra-ui/react";
import Articles from "../Articles";
import Projects from "../Projects";
import Technologies from "../Technologies";
import Tabs from "./tabs";

const HomeTabs = () => {
  return (
    <Stack className="wrapped" my={12} as="section" id="articles">
      <ChakraTabs defaultIndex={0} variant="enclosed-colored">
        <TabList display="flex" flexWrap="wrap" gap={3}>
          {Tabs.map((t) => {
            return (
              <Tab
                key={t.title}
                width={{ base: "full", md: "auto" }}
                bg="white"
                color="gray.800"
                borderRadius={6}
                _selected={{ color: "white", bg: "gray.800" }}
              >
                <Center gap={4}>
                  <Icon as={t.icon} />
                  <Text>{t.title}</Text>
                </Center>
              </Tab>
            );
          })}
        </TabList>
        <TabPanels>
          <TabPanel>
            <Articles />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
          <TabPanel>
            <Technologies />
          </TabPanel>
        </TabPanels>
      </ChakraTabs>
    </Stack>
  );
};

export default HomeTabs;
