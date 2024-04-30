import React from "react";
import { Container, ContainerCardMission } from "./styles.js";
import { Menu } from "../../components/Menu/index.jsx";
import { FasesHtml } from "./FasesHtml/index.jsx";
import { BarraProgresso } from "./BarraProgresso/index.jsx";
import { ItemsMenu } from "./ItemsCardPrincipal/index.jsx";

export function Html() {
  return (
    <>
      <Container>
        <Menu></Menu>
        <BarraProgresso />

        <ContainerCardMission>
          <h1>Missão 1</h1>
          <ItemsMenu />
        </ContainerCardMission>

        <FasesHtml />
      </Container>
    </>
  );
}
