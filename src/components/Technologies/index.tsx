import { SimpleGrid } from "@chakra-ui/react";
import TechnologiesList from "./technologies";
import Technology from "./Technology";

const Technologies = () => {
  return (
    <SimpleGrid spacingX={8} spacingY={12} mt={14} minChildWidth="100px">
      {TechnologiesList.map((technology) => {
        return <Technology technology={technology} key={technology.label} />;
      })}
    </SimpleGrid>
  );
};

export default Technologies;
