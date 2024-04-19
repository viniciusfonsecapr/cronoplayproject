import React from "react";
import { Menu } from "../../components/Menu/index.jsx";
import { ContainerHome, ContainerMenu, Container } from "./styles.js";

export function Home() {
  return (
    <Container>
      <ContainerMenu>
        <Menu />
      </ContainerMenu>

      <ContainerHome />
    </Container>
  );
}
