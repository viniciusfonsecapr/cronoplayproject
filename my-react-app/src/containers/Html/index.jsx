import React from "react";
import { Container, ContainerCardMission } from "./styles.js";
import { Menu } from "../../components/Menu/index.jsx";
import { FasesHtml } from "./FasesHtml/index.jsx";
import { BarraProgresso } from "./BarraProgresso/index.jsx";
import { ItemsCardPrincipal } from "./ItemsCardPrincipal/index.jsx";

import Astronault from "../../assets/stepOne/astronault.gif";

export function Html() {
  return (
    <>
      <Container>
        <Menu></Menu>
        <BarraProgresso />
        <img src={Astronault} id="Astronalta" />

        <ContainerCardMission>
          <ItemsCardPrincipal />
        </ContainerCardMission>

        <FasesHtml />
      </Container>
    </>
  );
}
