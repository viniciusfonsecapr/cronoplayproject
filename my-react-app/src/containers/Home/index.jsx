import React from "react";
import { Menu } from "../../components/Menu/index.jsx";
import {
  ContainerHome,
  Container,
  TextCenter,
  Cloud,
  AstronaultGuy,
} from "./styles.js";

import MensagemSol from "../../assets/Sol.png";
import Nuvem from "../../assets/Nevoa.png";
import PlanetaHtml from "../../assets/Planeta 1.png";
import PlanetaCss from "../../assets/Planeta 2.png";
import PlanetaJavaScript from "../../assets/Planeta 3.png";
import Astronauta from "../../assets/astronauta.gif";

export function Home() {
  return (
    <Container>
      <Menu />
      <TextCenter src={MensagemSol} />
      <ContainerHome>
        <AstronaultGuy src={Astronauta} />

        <div className="Planeta1">
          <a href="/html-page">
            <img src={PlanetaHtml} /> HTML
          </a>
        </div>
        <div className="Planeta2">
          <a href="/css-page">
            <img src={PlanetaCss} /> CSS
          </a>
        </div>
        <div className="Planeta3">
          <a href="#">
            <img src={PlanetaJavaScript} /> JAVASCRIPT
          </a>
        </div>
      </ContainerHome>
      <Cloud>
        <img src={Nuvem} alt="Imagem-de-uma-nevoa" />
      </Cloud>
    </Container>
  );
}
