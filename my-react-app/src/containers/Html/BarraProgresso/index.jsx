import React from "react";
import { Container, ContainerProgressBar } from "./styles.js";

export function BarraProgresso() {
  return (
    <>
      <Container>
        <ContainerProgressBar>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "25%" }}
            >
              25%
            </div>
            <h6>BARRA DE PROGRESSO</h6>
          </div>
        </ContainerProgressBar>
      </Container>
    </>
  );
}
