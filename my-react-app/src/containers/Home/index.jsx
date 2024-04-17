import React from "react";

import { Container, ContainerItems } from "./styles.js";

export function Home() {
  return (
    <Container>
      <ContainerItems>
        <h1>
          Home foda vai vir aqui futuramente, por enquanta ela é a principal,
          para acessar as demais /login ou /register
        </h1>
      </ContainerItems>
    </Container>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);