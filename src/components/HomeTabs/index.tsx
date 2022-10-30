import {
  HStack,
  Icon,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { AiFillAppstore } from "react-icons/ai";
import { RiArticleFill } from "react-icons/ri";
import { GrStackOverflow } from "react-icons/gr";
import Articles from "../Articles";
import Projects from "../Projects";
import Technologies from "../Technologies";

const HomeTabs = () => {
  return (
    <Stack className="wrapped" my={12} as="section">
      <Tabs
        isLazy
        defaultIndex={0}
        variant="enclosed-colored"
        borderBottomWidth={0}
      >
        <TabList display="flex" gap={3}>
          <Tab
            bg="white"
            color="gray.800"
            borderRadius={6}
            _selected={{ color: "white", bg: "gray.800" }}
          >
            <HStack spacing={4}>
              <Icon as={RiArticleFill} />
              <Text>Articles</Text>
            </HStack>
          </Tab>
          <Tab
            bg="white"
            color="gray.800"
            borderRadius={6}
            _selected={{ color: "white", bg: "gray.800" }}
          >
            <HStack width="full" height="full" spacing={4}>
              <Icon as={AiFillAppstore} />
              <Text>Projects</Text>
            </HStack>
          </Tab>
          <Tab
            bg="white"
            color="gray.800"
            borderRadius={6}
            _selected={{ color: "white", bg: "gray.800" }}
          >
            <HStack spacing={4}>
              <Icon as={GrStackOverflow} />
              <Text>Tech Stack</Text>
            </HStack>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding={0}>
            <Articles />
          </TabPanel>
          <TabPanel padding={0}>
            <Projects />
          </TabPanel>
          <TabPanel padding={0}>
            <Technologies />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default HomeTabs;
