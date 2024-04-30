import React from "react";
import { Container } from "./styles.js";
import DiamondIcon from "../../../assets/stepOne/diamond.svg";

export function ItemsMenu() {
  return (
    <>
      <Container>
        <button
          type="button"
          className="btn btn-link btn-lg link-light link-underline-opacity-0"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={DiamondIcon} className="mx-3" /> Introdução
        </button>

        <div
          className="modal fade"
          id="exampleModal"
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
      </Container>
    </>
  );
}
