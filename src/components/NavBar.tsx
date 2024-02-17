import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePersonPin } from "react-icons/md";
const NavBar = () => {
  return (
    <Flex
      position="static"
      bg="gray.800"
      width="100%"
      justify={"space-between"}
      wrap={"wrap"}
      gap="2"
      h={"50px"}
      alignItems={"center"}
    >
      <Heading paddingX={"20px"} as="h1">
        Omar Rico
      </Heading>
      <Spacer></Spacer>
      <HStack marginTop="1px" spacing={"150px"}>
        <Text>
          <Icon boxSize={"25px"} marginTop={"2px"} viewBox="0 0 20 19">
            <MdOutlinePersonPin />
          </Icon>
          <a href="#">About Me</a>
        </Text>
        <Text>
          <Icon boxSize={"30px"} paddingTop={"2px"} viewBox="0 0 20 19">
            <FaRegFolderOpen />
          </Icon>
          <a href="#">Projects</a>
        </Text>
        <Box>
          <Text>
            <Icon boxSize={"30px"} paddingTop={"2px"} viewBox="0 0 20 19">
              <MdOutlineEmail />
            </Icon>
            <a href="#">Contact</a>
          </Text>
        </Box>
      </HStack>

      <Spacer></Spacer>
    </Flex>
  );
};

export default NavBar;
