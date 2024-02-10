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
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="green">
        Main1
      </GridItem>
    </Grid>
  );
};
export default App;
