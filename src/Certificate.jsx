import React from 'react';

function Certificates() {
  return (
    <section id="certificate" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3 text-center">
            <h3 className="mt-5 animate-title text-center">🎗️ Achievements & Certificates</h3>

            <p className="text-center text-secondary mt-3 mb-5" style={{ color: '#e6a466' }}>
              "Words can wait, let the certificates prove their worth."
            </p>

            <div className="certificates">
              <img
                src="https://cdn-icons-gif.flaticon.com/11870/11870992.gif"
                width="20%"
                height="20%"
                className="img-fluid certify"
                alt="Certificate Gif"
              />

              <div className="text-center mb-5 mt-2">
                <button
                  className="btn btn-warning text-white mb-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#certificatesCollapse"
                  aria-expanded="false"
                  aria-controls="certificatesCollapse"
                >
                  View Certificates |→
                </button>
              </div>
            </div>

            {/* Collapsible certificates section */}
            <div className="collapse mt-4" id="certificatesCollapse">
              <div className="card card-body">
                <div id="certificates-container" className="row">
                  <div className="col-md-4 text-center mt-3">
                    <div className="card rounded shadow">
                      <img
                        src="img/html.jpg"
                        className="img-fluid certificate-img"
                        alt="HTML Certificate"
                      />
                    </div>
                  </div>

                  <div className="col-md-4 text-center mt-3">
                    <div className="card rounded shadow">
                      <img
                        src="img/css.jpg"
                        className="img-fluid certificate-img"
                        alt="CSS Certificate"
                      />
                    </div>
                  </div>

                  <div className="col-md-4 text-center mt-3">
                    <div className="card rounded shadow">
                      <img
                        src="img/bootstrap.jpg"
                        className="img-fluid certificate-img rounded-top"
                        alt="Bootstrap Certificate"
                        style={{ height: '220px' }}
                      />
                    </div>
                  </div>

                  <div className="col-md-4 text-center mt-3">
                    <div className="card rounded shadow">
                      <img
                        src="img/javascript.jpg"
                        className="img-fluid certificate-img rounded-top"
                        alt="Javascript Certificate"
                        style={{ height: '220px' }}
                      />
                    </div>
                  </div>

                  <div className="col-md-4 text-center mt-3">
                    <div className="card rounded shadow">
                      <img
                        src="img/jquery.jpg"
                        className="img-fluid certificate-img rounded-top"
                        alt="Jquery Certificate"
                        style={{ height: '220px' }}
                      />
                    </div>
                  </div>

                  <div className="col-md-4 text-center mt-3">
                    <div className="card rounded shadow">
                      <img
                        src="img/json.jpg"
                        className="img-fluid certificate-img rounded-top"
                        alt="JSON Certificate"
                        style={{ height: '220px' }}
                      />
                    </div>
                  </div>

                  <div className="col-md-4 text-center mt-3">
                    <div className="card rounded shadow">
                      <img
                        src="img/Ajax.jpg"
                        className="img-fluid certificate-img rounded-top"
                        alt="AJAX Certificate"
                        style={{ height: '220px' }}
                      />
                    </div>
                  </div>

                  <div className="col-md-4 text-center mt-3">
                    <div className="card rounded shadow">
                      <img
                        src="img/react.jpg"
                        className="img-fluid certificate-img rounded-top"
                        alt="React Certificate"
                        style={{ height: '220px' }}
                      />
                    </div>
                  </div>

                  <div className="col-md-4 text-center mt-3">
                    <div className="card rounded shadow">
                      <img
                        src="img/django.jpg"
                        className="img-fluid certificate-img rounded-top"
                        alt="Django Certificate"
                        style={{ height: '220px' }}
                      />
                    </div>
                  </div>

                  <div className="col-md-4 text-center mt-3">
                    <div className="card rounded shadow">
                      <img
                        src="img/python icp.png"
                        className="img-fluid certificate-img rounded-top"
                        alt="Python Certificate"
                      />
                    </div>
                  </div>

                  <div className="col-md-4 text-center mt-3">
                    <div className="card rounded shadow">
                      <img
                        src="img/Android.png"
                        className="img-fluid certificate-img rounded-top"
                        alt="Android Certificate"
                        style={{ height: '280px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="mt-5 animate-title text-center">👩🏼‍💻 Inspiration Behind My Skills</h3>
        <p className="text-center text-secondary mt-3 mb-5" style={{ color: '#e6a466' }}>
          "The mentors who guided me are the true architects of my skills and growth."
        </p>
        <div className="certificates">
          <div className="row justify-content-center align-items-center text-center mb-5">
            <div className="col-md-8 text-center">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide mb-5"
                data-bs-ride="carousel"
                data-bs-interval="2000"
              >
                <div className="carousel-inner">
                  {/* Rahul Sir */}
                  <div className="carousel-item active text-center">
                    <img
                      src="img/rahul_sir.png"
                      className="d-block mx-auto rounded-circle"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      alt="Rahul Sir"
                    />
                    <h5 className="mt-3 text-warning">MR.RAHUL MISAL</h5>
                    <h6 className="text-secondary">Founder & CEO At A2Z IT HUB PVT LTD</h6>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                      <span className="text-warning">"Rahul Sir </span>provided me with a comprehensive
                      foundation in frontend development. He taught me the core technologies that form the
                      backbone of web development.
                    </p>
                  </div>
                  {/* Nilesh Sir */}
                  <div className="carousel-item text-center">
                    <img
                      src="img/nilesh_sir.png"
                      className="d-block mx-auto rounded-circle"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      alt="Nilesh Sir"
                    />
                    <h5 className="mt-3 text-warning">MR.NILESH BORKAR</h5>
                    <h6 className="text-secondary">Co-Founder At A2Z IT HUB PVT LTD</h6>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                      <span className="text-warning">"Nilesh Sir </span> played an important role in
                      guiding me through backend development using Python and frameworks like Django. He
                      introduced me to the fundamentals of Python.
                    </p>
                  </div>
                </div>
              </div>

              {/* Add custom CSS for smooth transitions */}
              <style>
                {`
                  .carousel-item {
                    transition: transform 1s ease-in-out;
                  }
                `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
