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
      width={"1040px"}
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" maxWidth={"140px"} border={"1px solid grey"}>
          <Aside></Aside>
        </GridItem>
      </Show>
      <GridItem area="main" width={"900px"} border={"1px solid green"}>
        <MBody />
      </GridItem>
    </Grid>
  );
};
export default App;
