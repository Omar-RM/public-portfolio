import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Introduction = () => {
  return (
    <>
      <Text>
        <h2>Hello there, I am Omar Rico</h2>
        <h1>Software Developer &#8226; Web Designer?</h1>
      </Text>
      <Box width={"100%"}>
        <Flex margin="auto" width="35%" justify={"space-between"}>
          <Button borderRadius={20}>
            <a href="#">Linkedin</a>
          </Button>
          <Button borderRadius={20}>
            <a href="#">Github</a>
          </Button>
          <Button borderRadius={20}>
            <a href="#">Mail</a>
          </Button>
        </Flex>
      </Box>

      <Text>
        <h2>
          Hi, I am Omar, experienced web developer with 2 yeard of experience in
          JavaScript, React. Ready to create innovatice web solutions.
        </h2>
      </Text>
    </>
  );
};

export default Introduction;
