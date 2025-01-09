import React from "react";

function Contact(){
    return(
        <>
        <section id="contact" style={{ overflow: "hidden" }}>
  <div className="container">
    <div className="row">
      <div className="col-md-12 mt-3">
        <h3 className="mt-5 animate-title text-center">📞 Contact Me</h3>

        <p className="text-center text-secondary mt-3" style={{ color: "#e6a466" }}>
          "Don’t just contact, collaborate to create!"
        </p>
      </div>
    </div>

    <div className="row bg-warning mt-4 rounded pb-4" style={{ boxShadow: "0px 0px 7px 0px orange" }}>
      <div className="col-md-6">
        <img
          src="img/contact.gif"
          height="100%"
          width="100%"
          className="img-fluid pt-5"
          alt="Contact"
        />
      </div>

      <div className="col-md-6 mt-5">
        <form action="https://api.web3forms.com/submit" method="POST">
          <div className="row mt-2">
            <input type="hidden" name="access_key" value="d028be84-74f7-4fe7-84fd-f4b53251dff3" />

            <div className="col-md-12 text-start">
              <label className="text-white" htmlFor="name">
                Enter Your Name:
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                className="form-control"
                required
              />
              <br />
            </div>

            <div className="col-md-12 text-start">
              <label className="text-white" htmlFor="email">
                Enter Your Email:
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="form-control"
                required
              />
              <br />
            </div>

            <div className="col-md-12 text-start">
              <label className="text-white" htmlFor="message">
                Message:
              </label>
              <br />
              <textarea
                id="message"
                name="message"
                placeholder="Enter Message"
                aria-placeholder="Enter Message"
                className="form-control"
                required
              />
              <br />
            </div>
            <br />

            <div className="col-md-12 text-start">
              <button type="submit" className="text-warning btn btn-light mt-4">
                <ion-icon name="paper-plane-outline" className="me-2"></ion-icon>Submit
              </button>
            </div>
          </div>
        </form>

        <div className="row mt-2">
          <div className="col-md-4 d-flex align-items-center">
            <ion-icon name="mail-outline" className="me-2 text-danger"></ion-icon>
            <a href="mailto:gauritawale04@gmail.com" className="text-white text-decoration-none">
              gauri.tawale04
            </a>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <ion-icon name="logo-linkedin" className="me-2 text-primary"></ion-icon>
            <a href="https://www.linkedin.com/in/gauri-tawale-gauritawale/" className="text-white text-decoration-none">
              LinkedIn
            </a>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <ion-icon name="logo-github" className="me-2 text-dark"></ion-icon>
            <a href="https://github.com/gauritawale" className="text-white text-decoration-none">
              GitHub
            </a>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-4 d-flex align-items-center">
            <a href="img/Gauri Tawale.pdf" download="Gauri_Tawale_Resume.pdf">
              <button className="btn text-warning bg-white">
                <ion-icon name="document-outline" className="me-2 text-warning"></ion-icon>Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        
        </>
    )
}

export default Contact;