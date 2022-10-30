import { VStack } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./Project/Card";

const Projects = () => {
  return (
    <VStack spacing={10} mt={14}>
      <ProjectCard
        title="Redtrader Academy"
        description="Redtrader is a company specialized in providing educational
              services and trading tools, they have services such as academies,
              training and automated bots, my job was to carry out the complete
              design, architecture and development from scratch. Using
              technologies such as React, NestJS, PostgreSQL Database, Docker."
        page="https://redtraderacademy.com"
        code="https://redtraderacademy.com"
      />
      <ProjectCard
        title="Redtrader Academy"
        description="Redtrader is a company specialized in providing educational
              services and trading tools, they have services such as academies,
              training and automated bots, my job was to carry out the complete
              design, architecture and development from scratch. Using
              technologies such as React, NestJS, PostgreSQL Database, Docker."
        page="https://redtraderacademy.com"
      />
      <ProjectCard
        title="Redtrader Academy"
        description="Redtrader is a company specialized in providing educational
              services and trading tools, they have services such as academies,
              training and automated bots, my job was to carry out the complete
              design, architecture and development from scratch. Using
              technologies such as React, NestJS, PostgreSQL Database, Docker."
        page="https://redtraderacademy.com"
      />
    </VStack>
  );
};

export default Projects;
