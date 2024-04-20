import React from "react";
import { Menu } from "../../components/Menu/index.jsx";
import {
  ContainerHome,
  ContainerMenu,
  Container,
  TextCenter,
} from "./styles.js";

import Logo from "../../assets/Sol.png";
import PlanetaHtml from "../../assets/Planeta 1.png";

export function Home() {
  return (
    <Container>
      <ContainerMenu>
        <Menu />
      </ContainerMenu>

      <ContainerHome>
        <TextCenter src={Logo} />
        <div className="Planeta1">
          <a href="/html1">
            <img src={PlanetaHtml} /> <h1>HTML</h1>
          </a>
        </div>
        <div className="Planeta2"></div>
        <div className="Planeta3"></div>
        <div className="Planeta4"></div>
      </ContainerHome>
    </Container>
  );
}
