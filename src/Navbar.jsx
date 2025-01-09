import React from "react";


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
                <a
                  href="https://www.google.com/maps/place/Jeur(Ba),+Ahmednagar,+414601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-decoration-none nav-link"
                >
                  Jeur(Ba), Ahmednagar, 414601
                </a>
              </li>
            </ul>

            <ul className="d-flex align-items-center text-secondary me-4" style={{ listStyleType: 'none' }}>
              <li className="pt-2 pb-0 fs-5 me-2">
                <ion-icon name="call"></ion-icon>
              </li>
              <li className="pt-2 pb-0 fs-6">
                <a
                  href="tel:+918766778916"
                  className="text-decoration-none text-secondary nav-link"
                >
                  +91 8766778916
                </a>
              </li>
            </ul>

            <ul className="d-flex align-items-center text-secondary" style={{ listStyleType: 'none' }}>
              <li className="pt-2 pb-0 fs-5 me-2">
                <ion-icon name="mail"></ion-icon>
              </li>
              <li className="pt-2 pb-0 fs-6">
                <a
                  href="mailto:gauritawale04@gmail.com"
                  className="text-decoration-none text-secondary nav-link"
                >
                  gauritawale04@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 d-flex justify-content-end align-items-center fs-4">
            <ul className="d-flex" style={{ listStyleType: 'none' }}>
              <li>
                <a
                  href="https://www.linkedin.com/in/gauri-tawale-gauritawale/?locale=en_US"
                  className="icon1 text-secondary ms-5 mt-5"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918766778916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon1 text-secondary ms-5 mt-5"
                >
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gauritawale"
                  className="icon1 text-secondary ms-5 me-5 mt-5"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            <img
              src="/img/logo.png"
              height="75px"
              width="70px"
              className="img-fluid img-thumbnail p-0 mt-1 navbar-brand-logo"
              alt="Logo"
            />
          </a>
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
                <a className="nav-link fs-5 ms-3" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 ms-3" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 ms-3" href="#skill">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 ms-3" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 ms-3" href="#project">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 ms-3" href="#demo">Demo's</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 ms-3" href="#certificate">Certificates</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 ms-3" href="#services">Services</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fs-5 ms-3" href="#contact">
                  <ion-icon name="person"></ion-icon> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>

        
        </>
    );
}
export default Navbar;