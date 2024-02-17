import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProjectContainer from "./ProjectContainer";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={2}
        spacing={5}
      >
        <ProjectContainer>
          <ProjectCard />
        </ProjectContainer>
      </SimpleGrid>
    </>
  );
};

export default ProjectGrid;
