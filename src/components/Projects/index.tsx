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
        cover="/assets/img/redtrader.png"
      />
      <ProjectCard
        title="OX Soccer"
        description="OX Soccer is an nft token soccer video game project that arose from the idea of ​​combining the world of nft and blockchain technology with a video game. The project was discontinued due to internal problems of the development team, but it was possible to make an MVP for the initial sale of ERC721 stadiums, the MVP consists of landing, marketplace and an api to save the information of each NFT. The technologies that were used were NextJS, Moralis, Hardhat, Solidity, NodeJS."
        page="https://oxsoccer.vercel.app"
        cover="/assets/img/oxsoccer.png"
      />
    </VStack>
  );
};

export default Projects;
