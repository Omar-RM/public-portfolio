import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import test from "../assets/gameLibrary.png";

import TecIcons from "./TecIcons";

// interface Props {
//   project: Project;
// }

const ProjectCard = () => {
  return (
    <Card height={"400px"} w={"250px"} margin={"3px"} padding={"10px"}>
      <Image borderRadius={5} src={test}></Image>
      <CardBody>
        <Heading fontSize={"1xl"}>Game Library</Heading>
        <Text marginTop={2} textAlign={"justify"} fontSize={13}>
          <h1>
            A simple game library where the user can sort the games based on
            varius critiria such as genre, platform or rating. The application
            use an external API.
          </h1>
        </Text>
        <Box marginTop={4}>
          <TecIcons />
        </Box>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
