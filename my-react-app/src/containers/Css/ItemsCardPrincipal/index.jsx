import React from "react";
import { Container, ContainerListItems } from "./styles.js";
import Mais from "../../../assets/StepOne/mais.svg";

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
            <span>Aprenda HTML Do Zero com Rodolfo Mori</span>
          </button>
          <button
            type="button"
            className="btn btn-link btn-lg link-light link-underline-opacity-0"
            data-bs-toggle="modal"
            data-bs-target="#tres"
          >
            <img src={Mais} /> <span>Aprenda HTML e Faça o Primeiro Site</span>
          </button>
          <button
            type="button"
            className="btn btn-link btn-lg link-light link-underline-opacity-0"
            data-bs-toggle="modal"
            data-bs-target="#quatro"
          >
            <img src={Mais} /> <span>HTML do Zero ao Avançado</span>
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
                  width="1060"
                  height="615"
                  src="https://www.youtube.com/embed/KDab8z0K3aI?si=plg6ku2MUncd_Wgy"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
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
                  Aprenda HTML Do Zero com Rodolfo Mori
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
                  src="https://www.youtube.com/embed/tBl8jfR05rA"
                  title="Curso de HTML | Aprenda HTML em 15 minutos | Seu Primeiro site"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
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
                  Aprenda HTML e Faça o Primeiro Site
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
                  src="https://www.youtube.com/embed/KDab8z0K3aI?list=PLsFVybaG4mOBSIcGcSTLCBW5kWvjbRZlj"
                  title="🔴 APRENDA O QUE É HTML E CRIE SEU PRIMEIRO SITE - BÔNUS INCRÍVEL NO FINAL"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
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
                  HTML do Zero ao Avançado
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
                  src="https://www.youtube.com/embed/KC2WD_rXXp8"
                  title="Curso de HTML | Tornando-se um Programador do ZERO ao AVANÇADO"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
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
