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
      <nav className="navbar navbar-dark  border-3 ms-4 mt-4 fixed-top">
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
            className="offcanvas offcanvas-start bg-dark"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header mx-auto">
              <nav className=" bg-body-tertiary">
                <div className="bg-dark">
                  <a className="" href="#">
                    <img
                      src={Logo}
                      alt="Logo"
                      width="130"
                      height="130"
                      className="me-5"
                    />
                  </a>
                </div>
              </nav>

              <button
                type="button"
                className="btn-close ps-5 ms-5"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <ul className="navbar-nav  w-50 mx-auto mb-5 ">
              <li className="nav-item mt-2 p-2 mb-3 bg-primary rounded-pill">
                <a
                  className="nav-link active ps-3"
                  aria-current="page"
                  href="/"
                >
                  Trilha
                </a>
              </li>

              <li className="nav-item mb-3 p-2 bg-primary rounded-pill">
                <a className="nav-link  ps-3" href="/">
                  Desafios
                </a>
              </li>
              <li className="nav-item mb-3 p-2 bg-primary rounded-pill">
                <a className="nav-link  ps-3" href="/">
                  Conquistas
                </a>
              </li>
              <li className="nav-item mb-3 p-2 bg-primary rounded-pill">
                <a className="nav-link  ps-3" href="/">
                  Mais
                </a>
              </li>
            </ul>

            <div className=" d-flex flex-row bg-dark text-light mt-1 mx-auto">
              <img
                src={Logo}
                alt="Logo"
                width="100"
                height="100"
                className=""
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
      </nav>
    </>
  );
}
