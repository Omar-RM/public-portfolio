import { Card, CardBody, Image } from "@chakra-ui/react";
import React from "react";
import TecIcons from "./TecIcons";

const ProjectCard = () => {
  return (
    <Card height={"350px"} w={"250px"} margin={"3px"} padding={"5px"}>
      <Image src="#"></Image>
      <CardBody>
        <div>Game Library</div>
        <h1>
          A simple game library where the user can sort the games based on
          varius critiria such as genre, platform or rating. The application use
          an external API.
        </h1>
        <TecIcons />
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
