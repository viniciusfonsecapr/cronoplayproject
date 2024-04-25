import React from "react";
import { Menu } from "../../components/Menu/index.jsx";
import {
  ContainerHome,
  ContainerMenu,
  Container,
  TextCenter,
  Curiosity,
} from "./styles.js";

import Logo from "../../assets/Sol.png";
import PlanetaHtml from "../../assets/Planeta 1.png";
import PlanetaCss from "../../assets/Planeta 2.png";
import PlanetaJavaScript from "../../assets/Planeta 3.png";

export function Home() {
  return (
    <Container>
      <ContainerMenu>
        <Menu />
      </ContainerMenu>

      <ContainerHome>
        <TextCenter src={Logo} />
        <div className="Planeta1">
          <a href="/atv-html">
            <img src={PlanetaHtml} /> <h1>HTML</h1>
          </a>
        </div>
        <div className="Planeta2">
          <a href="/css1">
            <img src={PlanetaCss} /> <h1>CSS</h1>
          </a>
        </div>
        <div className="Planeta3">
          <a href="/javascript1">
            <img src={PlanetaJavaScript} /> <h1>JAVASCRIPT</h1>
          </a>
        </div>
        <div className="Planeta4"></div>

        <Curiosity>
          <h2>Newsletter do Dia!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            eligendi asperiores dolores veniam optio aliquam ullam architecto
            itaque deserunt accusamus laborum, voluptatibus quod molestiae
            voluptatem vel sunt aut quam vitae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            eligendi asperiores dolores veniam optio aliquam ullam architecto
            itaque deserunt accusamus laborum, voluptatibus quod molestiae
            voluptatem vel sunt aut quam vitae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            eligendi asperiores dolores veniam optio aliquam ullam architecto
            itaque deserunt accusamus laborum, voluptatibus quod molestiae
            voluptatem vel sunt aut quam vitae?
          </p>
        </Curiosity>
      </ContainerHome>
    </Container>
  );
}
