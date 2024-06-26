import React from "react";
import Logo from "../../assets/logoDevPlay.png";
import Profile from "../../assets/male-avatar.svg";
import { logout, STORAGE_KEY } from "../../utils/auth";
import { ColorBackground, Container } from "./styles";
function onSubmit() {
  logout();
  window.location.href = "/login";
}

const user = JSON.parse(localStorage.getItem(STORAGE_KEY));

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-dark  border-3 ms-4 mt-4 fixed-top">
        <Container>
          <div className="container-fluid ">
            <ColorBackground>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </ColorBackground>
            <div
              className="offcanvas offcanvas-start menu-color"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header mx-auto">
                <nav className="">
                  <div className="">
                    <a className="" href="#">
                      <img src={Logo} alt="Logo" className="me-5 w-50 h-50" />
                    </a>
                  </div>
                </nav>

                <button
                  type="button"
                  className="btn-close ps-5 ms-2 bg-body botao-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <ul className="navbar-nav  w-50 mx-auto mb-5 ">
                <li className="nav-item mt-2 p-2 mb-3 rounded-pill">
                  <a
                    className="nav-link active ps-3"
                    aria-current="page"
                    href="/"
                  >
                    Trilha
                  </a>
                </li>

                <li className="nav-item mb-3 p-2 rounded-pill">
                  <a className="nav-link  ps-3" href="/">
                    Desafios
                  </a>
                </li>
                <li className="nav-item mb-3 p-2  rounded-pill">
                  <a className="nav-link  ps-3" href="/">
                    Conquistas
                  </a>
                </li>
                <li className="nav-item mb-3 p-2  rounded-pill">
                  <a className="nav-link  ps-3" href="/">
                    Mais
                  </a>
                </li>
              </ul>

              <div className=" d-flex flex-row text-light mt-1 mx-auto">
                <img
                  src={Profile}
                  alt="imagem-de-perfil"
                  className="profile-image"
                />
                <div className="d-flex flex-column  ms-5 text-uppercase fw-bold">
                  <p className="m-auto ">{user.name}</p>
                  <p className="m-auto ">Nivel 45</p>
                </div>
              </div>

              <button
                onClick={onSubmit}
                type="button"
                className="btn btn-secondary mt-5 mx-auto w-50 "
              >
                Logout
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}
