import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import Main from "./components/MBody";
import MBody from "./components/MBody";
const App = () => {
  return (
    <Grid
      margin={"auto"}
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg={"red"} w={"80%"} margin={"auto"}>
        <NavBar />
      </GridItem>
      <Show above="xlg">
        <GridItem area="aside" w={"100px"} border={"1px solid grey"}>
          <Aside></Aside>
        </GridItem>
      </Show>
      <GridItem
        area="main"
        w={"90%"}
        margin={"auto"}
        border={"1px solid green"}
      >
        <MBody />
      </GridItem>
    </Grid>
  );
};
export default App;
