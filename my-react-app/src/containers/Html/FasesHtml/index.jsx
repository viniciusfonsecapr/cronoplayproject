import React from "react";
import { Container, AlignLi } from "./styles.js";

export function FasesHtml() {
  return (
    <>
      <Container>
        <AlignLi>
          <ul>
            <a href="/html-page">
              <li>1</li>
            </a>
            <a>
              <li>2</li>
            </a>
            <a>
              <li>3</li>
            </a>

            <a>
              <li>4</li>
            </a>
          </ul>
        </AlignLi>
      </Container>
    </>
  );
}
