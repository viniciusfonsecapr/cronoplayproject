import React from "react";
import { Container, ContainerDiv, AlignLi } from "./styles.js";
import { Menu } from "../../components/Menu/index.jsx";
import { FasesHtml } from "./FasesHtml/index.jsx";

export function Html() {
  return (
    <>
      <Container>
        <Menu></Menu>
        <ContainerDiv>
          <h1>Missão 1</h1>
          <ul>
            <li>
              <div />
            </li>
            <li>
              <div />
            </li>
            <li>
              <div />
            </li>
            <li>
              <div />
            </li>
          </ul>
        </ContainerDiv>
        <FasesHtml />
      </Container>
    </>
  );
}
