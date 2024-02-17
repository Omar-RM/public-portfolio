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

const MBody = () => {
  return (
    <>
      <Box w={"100%"} margin={"3px"} padding={"20px"}>
        <div>
          <h1>Hello there, I am Omar Rico</h1>
          <h2>Software Developer &#8226; Web Designer?</h2>
        </div>
        <div>
          <a href="#">Linkedin</a> <a href="#">Github</a> <a href="#">Mail</a>
        </div>
        <div>
          <h2>
            Hi, I am Omar, experienced web developer with 2 yeard of experience
            in JavaScript, React. Ready to create innovatice web solutions.
          </h2>
        </div>
      </Box>

      <ProjectGrid />
    </>
  );
};

export default MBody;
