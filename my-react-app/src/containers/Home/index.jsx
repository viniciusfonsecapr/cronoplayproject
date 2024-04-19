import React from "react";
import { Menu } from "../../components/Menu/index.jsx";
import {
  ContainerHome,
  ContainerMenu,
  Container,
  LogoCenter,
} from "./styles.js";

import Logo from "../../assets/logoDevPlay.png";

export function Home() {
  return (
    <Container>
      <ContainerMenu>
        <Menu />
      </ContainerMenu>

      {/* Logo central apenas para ter algo no restante pode apagar */}
      <LogoCenter src={Logo} />

      <ContainerHome />
    </Container>
  );
}
