import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'


function Navbar(){
    return(
        <>
         <header className="mt-0">
      <div className="container-fluid">
        <div className="row bg-light py-2">
          <div className="col-md-9 d-flex flex-wrap">
            <ul className="d-flex align-items-center text-secondary me-4" style={{ listStyleType: 'none' }}>
              <li className="pt-2 pb-0 fs-5 me-2">
                <ion-icon name="navigate-circle-outline"></ion-icon>
              </li>
              <li className="pt-2 pb-0 fs-6">
                <NavLink
                  to="https://www.google.com/maps/place/Jeur(Ba),+Ahmednagar,+414601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-decoration-none nav-link"
                >
                  Jeur(Ba), Ahmednagar, 414601
                </NavLink>
              </li>
            </ul>

            <ul className="d-flex align-items-center text-secondary me-4" style={{ listStyleType: 'none' }}>
              <li className="pt-2 pb-0 fs-5 me-2">
                <ion-icon name="call"></ion-icon>
              </li>
              <li className="pt-2 pb-0 fs-6">
                <NavLink
                  to="tel:+918766778916"
                  className="text-decoration-none text-secondary nav-link"
                >
                  +91 8766778916
                </NavLink>
              </li>
            </ul>

            <ul className="d-flex align-items-center text-secondary" style={{ listStyleType: 'none' }}>
              <li className="pt-2 pb-0 fs-5 me-2">
                <ion-icon name="mail"></ion-icon>
              </li>
              <li className="pt-2 pb-0 fs-6">
                <NavLink
                  to="mailto:gauritawale04@gmail.com"
                  className="text-decoration-none text-secondary nav-link"
                >
                  gauritawale04@gmail.com
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-3 d-flex justify-content-end align-items-center fs-4">
            <ul className="d-flex" style={{ listStyleType: 'none' }}>
              <li>
                <NavLink
                  to="https://www.linkedin.com/in/gauri-tawale-gauritawale/?locale=en_US"
                  className="icon1 text-secondary ms-5 mt-5"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://wa.me/918766778916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon1 text-secondary ms-5 mt-5"
                >
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://github.com/gauritawale"
                  className="icon1 text-secondary ms-5 me-5 mt-5"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-5" to="#">
            <img
              src="/img/logo2.png"
              height="75px"
              width="70px"
              className="img-fluid img-thumbnail p-0 mt-1 navbar-brand-logo"
              alt="Logo"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 ms-5 mb-lg-0 mt-3">
              <li className="nav-item">
                <NavLink className="nav-link fs-5 ms-3" to="#home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 ms-3" to="#about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 ms-3" to="#skill">Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 ms-3" to="#experience">Experience</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 ms-3" to="#project">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 ms-3" to="#demo">Demo's</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 ms-3" to="#certificate">Certificates</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 ms-3" to="#services">Services</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link fs-5 ms-3" to="#contact">
                  <ion-icon name="person"></ion-icon> Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>

        
        </>
    )
}
export default Navbar;