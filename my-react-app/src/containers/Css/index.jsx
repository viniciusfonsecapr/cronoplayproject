import React from "react";
import { Container, ContainerCardMission } from "./styles.js";
import { Menu } from "../../components/Menu/index.jsx";
import { FasesCss } from "./FasesCss/index.jsx";
import { BarraProgresso } from "./BarraProgresso/index.jsx";
import { ItemsCardPrincipal } from "./ItemsCardPrincipal/index.jsx";

import Astronault from "../../assets/StepOneCss/AstronaultCss.gif";

export function Css() {
  return (
    <>
      <Container>
        <Menu></Menu>
        <BarraProgresso />
        <img src={Astronault} id="Astronalta" />

        <ContainerCardMission>
          <ItemsCardPrincipal />
        </ContainerCardMission>

        <FasesCss />
      </Container>
    </>
  );
}
