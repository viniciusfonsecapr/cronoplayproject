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

      <ContainerHome>
        <TextCenter src={MensagemSol} />

        <AstronaultGuy src={Astronauta} />

        <div className="Planeta1">
          <a href="/html-page">
            <img src={PlanetaHtml} /> <h1>HTML</h1>
          </a>
        </div>
        <div className="Planeta2">
          <a href="/css-page">
            <img src={PlanetaCss} /> <h1>CSS</h1>
          </a>
        </div>
        <div className="Planeta3">
          <a href="#">
            <img src={PlanetaJavaScript} /> <h1>JAVASCRIPT</h1>
          </a>
        </div>
      </ContainerHome>
      <Cloud>
        <img src={Nuvem} alt="Imagem-de-uma-nevoa" />
      </Cloud>
    </Container>
  );
}
