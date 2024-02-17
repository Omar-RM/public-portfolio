import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import ProjectContainer from "./ProjectContainer";
import ProjectCard from "./ProjectCard";
import ProjectGrid from "./ProjectGrid";
import Introduction from "./Introduction";

const MBody = () => {
  return (
    <>
      <Box w={"100%"} margin={"3px"} padding={"20px"}>
        <Introduction />
      </Box>

      <ProjectGrid />
    </>
  );
};

export default MBody;
