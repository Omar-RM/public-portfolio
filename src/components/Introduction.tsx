import { Box, Button, Flex, Highlight, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <>
      <Text fontFamily={"Proxima"} fontSize={40} textAlign={"center"}>
        <Highlight query={"Omar Rico"}>
          Hello there, I am Omar Rico Software DeveloperWeb Designer?
        </Highlight>
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

      <Text fontSize={30} width={"90%"} alignSelf={"center"} mt={6}>
        Hi, I am Omar, experienced web developer with 2 yeard of experience in
        JavaScript, React. Ready to create innovatice web solutions.
      </Text>
    </>
  );
};

export default Introduction;
