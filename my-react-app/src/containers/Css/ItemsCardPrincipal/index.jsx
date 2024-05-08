import React from "react";
import { Container, ContainerListItems } from "./styles.js";
import Mais from "../../../assets/stepOne/mais.svg";

export function ItemsCardPrincipal() {
  return (
    <>
      <Container>
        <ContainerListItems>
          <h1 className="title">Missão 1</h1>
          <button
            type="button"
            className="btn btn-link btn-lg link-light link-underline-opacity-0"
            data-bs-toggle="modal"
            data-bs-target="#introducao"
          >
            <img src={Mais} /> <span>Introdução</span>
          </button>
          <button
            type="button"
            className="btn btn-link btn-lg link-light link-underline-opacity-0"
            data-bs-toggle="modal"
            data-bs-target="#dois"
          >
            <img src={Mais} />{" "}
            <span>Menu ANIMADO com HTML + CSS + JavaScript</span>
          </button>
          <button
            type="button"
            className="btn btn-link btn-lg link-light link-underline-opacity-0"
            data-bs-toggle="modal"
            data-bs-target="#tres"
          >
            <img src={Mais} /> <span>Criando um site de Portfólio do ZERO</span>
          </button>
          <button
            type="button"
            className="btn btn-link btn-lg link-light link-underline-opacity-0"
            data-bs-toggle="modal"
            data-bs-target="#quatro"
          >
            <img src={Mais} /> <span> Criando um site de Portfólio do ZERO pt. 2</span>
          </button>
        </ContainerListItems>

        <div
          className="modal fade"
          id="introducao"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Aula de Introdução
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
              <iframe 
              width="930" 
              height="523" 
              src="https://www.youtube.com/embed/yjmhSn0j8ac?list=PLsFVybaG4mOAXJTzysk9-d3OeROyWhhvs" 
              title="CURSO DE CSS DO ZERO - APRENDA NA PRÁTICA - TUTORIAL COMPLETO" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
              ></iframe>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="dois"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                Menu ANIMADO com HTML + CSS + JavaScript
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
              <iframe 
              width="930" 
              height="523" 
              src="https://www.youtube.com/embed/01NubIe9Pao?list=PLsFVybaG4mOAXJTzysk9-d3OeROyWhhvs" 
              title="Menu ANIMADO com HTML + CSS + JavaScript | Passo a passo | Simplificando Programação" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
              ></iframe>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="tres"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                Criando um site de Portfólio do ZERO
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
              <iframe 
              width="930" 
              height="523" 
              src="https://www.youtube.com/embed/JaOnoBTVKec?list=PLsFVybaG4mOAXJTzysk9-d3OeROyWhhvs" 
              title="LIVE #43 Criando um site de Portfólio do ZERO | Consiga seu primeiro emprego como Programador" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
              ></iframe>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="quatro"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                Criando um site de Portfólio do ZERO pt. 2
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
              <iframe 
              width="930" 
              height="523" 
              src="https://www.youtube.com/embed/iBgeXW79kLI?list=PLsFVybaG4mOAXJTzysk9-d3OeROyWhhvs" 
              title="LIVE #44 Criando um site de Portfólio do ZERO pt. 2 | Consiga seu primeiro emprego como Programador" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
              ></iframe>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
