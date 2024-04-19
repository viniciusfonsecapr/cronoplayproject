import React from "react";
import Logo from "../../assets/logoDevPlay.png";
import { logout, STORAGE_KEY } from "../../utils/auth";
import { ColorBackground } from "./styles";
function onSubmit() {
  logout();
  window.location.href = "/login";
}

const user = JSON.parse(localStorage.getItem(STORAGE_KEY));

export function Menu() {
  return (
    <>
      <nav class="navbar navbar-dark  border-3 ms-4 mt-4 fixed-top">
        <div class="container-fluid ">
          <ColorBackground>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </ColorBackground>
          <div
            class="offcanvas offcanvas-start bg-dark"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header mx-auto">
              <nav class=" bg-body-tertiary">
                <div class="bg-dark">
                  <a class="" href="#">
                    <img
                      src={Logo}
                      alt="Logo"
                      width="130"
                      height="130"
                      class="me-5"
                    />
                  </a>
                </div>
              </nav>

              <button
                type="button"
                class="btn-close ps-5 ms-5"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <ul class="navbar-nav  w-50 mx-auto mb-5 ">
              <li class="nav-item mt-2 p-2 mb-3 bg-primary rounded-pill">
                <a class="nav-link active ps-3" aria-current="page" href="/">
                  Trilha
                </a>
              </li>

              <li class="nav-item mb-3 p-2 bg-primary rounded-pill">
                <a class="nav-link  ps-3" href="#">
                  Desafios
                </a>
              </li>
              <li class="nav-item mb-3 p-2 bg-primary rounded-pill">
                <a class="nav-link  ps-3" href="#">
                  Conquistas
                </a>
              </li>
              <li class="nav-item mb-3 p-2 bg-primary rounded-pill">
                <a class="nav-link  ps-3" href="#">
                  Mais
                </a>
              </li>
            </ul>

            <div class=" d-flex flex-row bg-dark text-light mt-1 mx-auto">
              <img src={Logo} alt="Logo" width="100" height="100" class="" />
              <div class="d-flex flex-column  ms-5 text-uppercase fw-bold">
                <p class="m-auto ">{user.name}</p>
                <p class="m-auto ">Nivel 5</p>
              </div>
            </div>

            <button
              onClick={onSubmit}
              type="button"
              class="btn btn-secondary mt-5 mx-auto w-50 "
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
