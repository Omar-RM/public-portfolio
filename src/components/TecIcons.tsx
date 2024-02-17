import { HStack, Icon } from "@chakra-ui/react";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  // platforms: useProjects[];
}
const TecIcons = () => {
  // const TecIcons = ({ platforms }: Props) => {

  const iconMap: { [key: string]: IconType } = {
    java: FaJava,
    javaScript: IoLogoJavascript,
    php: SiPhp,
    react: FaReact,
  };
  return (
    <HStack>
      {/* {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]}>color={"gray.500"}</Icon>
      ))} */}
      <Icon fontSize={25} as={FaJava}></Icon>
      <Icon fontSize={25} as={IoLogoJavascript}></Icon>
    </HStack>
  );
};

export default TecIcons;
