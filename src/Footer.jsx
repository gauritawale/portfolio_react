import React from "react";

function Footer(){
    return(

        <>
        <section style={{ overflow: "hidden" }}>
  <div className="container-fluid bg-dark mt-3 pb-0 mb-0">
    <div className="row">
      <div className="col-md-12 text-center">
        <p className="text-light fst-italic pt-2 mt-5">Copyright © 2024 Gauri Tawale</p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <ul className="list-unstyled d-flex justify-content-center">
          <li className="ms-2">
            <a href="https://wa.me/8766778916" target="_blank" rel="noopener noreferrer" className="text-white footer-icon">
              <ion-icon name="logo-whatsapp" className="fs-3"></ion-icon>
            </a>
          </li>
          <li className="ms-2">
            <a href="https://www.linkedin.com/in/gauri-tawale-gauritawale/" target="_blank" rel="noopener noreferrer" className="text-white footer-icon">
              <ion-icon name="logo-linkedin" className="fs-3"></ion-icon>
            </a>
          </li>
          <li className="ms-2">
            <a href="https://github.com/gauritawale" target="_blank" rel="noopener noreferrer" className="text-white footer-icon">
              <ion-icon name="logo-github" className="fs-3"></ion-icon>
            </a>
          </li>
          <li className="ms-2">
            <a href="mailto:gauritawale04@gmail.com" className="text-white footer-icon">
              <ion-icon name="mail" className="fs-3"></ion-icon>
            </a>
          </li>
          <li className="ms-2">
            <a href="tel:+8766778916" className="text-white footer-icon">
              <ion-icon name="tablet-portrait" className="fs-3"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col-md-11"></div>
      <div className="col-md-1 text-end mb-5 pe-5 pb-5 mb-5">
        <button id="scrollTopBtn" className="btn btn-white bg-white text-dark border-0 rounded p-2">
          <ion-icon name="caret-up" className="fs-6"></ion-icon>
        </button>
      </div>
    </div>
  </div>
</section>


        </>
    )
}
export default Footer;