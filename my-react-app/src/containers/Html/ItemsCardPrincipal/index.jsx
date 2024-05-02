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
            <img src={Mais} /> Introdução
          </button>
          <button
            type="button"
            className="btn btn-link btn-lg link-light link-underline-opacity-0"
            data-bs-toggle="modal"
            data-bs-target="#dois"
          >
            <img src={Mais} /> Dois
          </button>
          <button
            type="button"
            className="btn btn-link btn-lg link-light link-underline-opacity-0"
            data-bs-toggle="modal"
            data-bs-target="#tres"
          >
            <img src={Mais} /> Tres
          </button>
          <button
            type="button"
            className="btn btn-link btn-lg link-light link-underline-opacity-0"
            data-bs-toggle="modal"
            data-bs-target="#quatro"
          >
            <img src={Mais} /> Quatro
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
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
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
                  Aula Dois
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
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
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
                  Aula Tres
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
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
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
                  Aula Quatro
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
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
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
