import React from "react";

function Project(){
    return(
        <>
        <section id="project" style={{ overflow: "hidden" }}>
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-12 mt-3">
        <h3 className="mt-5 animate-title text-center">🎯 My Projects</h3>
        <p className="text-center text-secondary mt-3" style={{ color: "#e6a466" }}>
          "Chit-chat is free, let the code shine."
        </p>
      </div>
    </div>

    <div className="row project mt-2">
      <div className="col-md-6" style={{ marginTop: "40px" }}>
        <img
          src="img/project.png"
          height="100%"
          width="100%"
          className="img-fluid mt-5"
          alt="Project"
        />
      </div>

      <div className="col-md-6 mt-5 text-center">
        <p className="mt-2">For Detailed Work-</p>
        <a href="https://github.com/gauritawale">
          <svg
            width="25px"
            height="25px"
            className="text-primary svg-icon2"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="2000"
            data-aos-once="true"
            viewBox="0 0 256 249"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
          >
            <g fill="#161614">
              {/* Add SVG paths here */}
            </g>
          </svg>
        </a>
        <p>
          <a
            href="https://github.com/gauritawale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-decoration-none"
          >
            gauritawale
          </a>
        </p>
        <button
          className="btn btn-warning text-white"
          data-bs-toggle="modal"
          data-bs-target="#projectModal"
        >
          Project Snapshot ➡
        </button>

        <p
          className="text-secondary mt-3"
          style={{ textAlign: "justify" }}
        >
          My journey began with creating interactive, responsive websites
          using HTML, CSS, and JavaScript, where I honed my skills in designing
          visually appealing and user-friendly interfaces. I have developed
          landing pages, internal portals, and dynamic UI components, ensuring
          each project adheres to the principles of simplicity and efficiency.
          During my courses, I contributed to real-world applications,
          collaborating with teams to deliver seamless user experiences.
          Currently learning the React framework to build more efficient and
          scalable web applications. Additionally, I am expanding my expertise
          in backend development with frameworks like Django.
        </p>
      </div>
    </div>
  </div>

  <div className="modal fade w-100" id="projectModal" tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg w-100" style={{ maxWidth: '100%', margin: 0 }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="projectModalLabel">Project Snapshots</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body" style={{ overflow: 'scroll', maxHeight: '500px' }}>
            <div className="row">

              {/* Portfolio */}
              <div className="col-12 mt-5 mb-3 text-secondary text-center">
                <h6>My Project: Software Company Project</h6>
                <h6>Website Details: Multipage Website</h6>
                <h6>Skills: HTML, CSS, Bootstrap, JavaScript, Ajax, Python, Django</h6>
                <a href="https://gauritawale.github.io/GauriPortfolio/">
                  <button className="btn btn-warning text-white mb-3">Link Here |→</button>
                </a>
                <img src="img/software company.png" className="img-fluid border border-warning border-3 p-5 rounded" alt="Project 7" />
              </div>
              <hr className="mt-4" />

              {/* Furniture Project */}
              <div className="col-12 mt-5 mb-3 text-secondary text-center">
                <h6>My Project: Furniture Project Website</h6>
                <h6>Website Details: Multiple Webpage, Dynamic Website</h6>
                <h6>Skills: HTML, CSS, Bootstrap, Python, Django</h6>
                <h6>Database: MySQL</h6>
                <a href="https://www.youtube.com/channel/UCD2J2fB_aAHqHdjV1RRJTbg">
                  <button className="btn btn-warning text-white mb-3">See In Videos |→</button>
                </a>
                <img src="img/furniture.png" className="img-fluid border border-warning border-3 p-3 rounded shadow-lg" alt="Project 7" />
              </div>
              <hr className="mt-4" />

              {/* Paradise Hotel Project */}
              <div className="col-12 mt-5 mb-3 text-secondary text-center">
                <h6>My Project: Paradise Hotel Website</h6>
                <h6>Website Details: Multiple Webpage, Dynamic Website</h6>
                <h6>Skills: HTML, CSS, Bootstrap, Python, Django</h6>
                <h6>Database: MySQL</h6>
                <a href="https://www.youtube.com/channel/UCD2J2fB_aAHqHdjV1RRJTbg">
                  <button className="btn btn-warning text-white mb-3">See In Videos |→</button>
                </a>
                <img src="img/paradise.png" className="img-fluid border border-warning border-3 p-3 rounded shadow-lg" alt="Project 6" />
              </div>
              <hr className="mt-4" />

              {/* Samatha Pathasantha Website */}
              <div className="col-12 mt-5 mb-3 text-secondary text-center">
                <h6>My Project: Samatha Pathasantha Website</h6>
                <h6>Website Details: Multiple Webpage, Dynamic Website</h6>
                <h6>Skills: HTML, CSS, Bootstrap, React, API Used</h6>
                <a href="https://www.youtube.com/channel/UCD2J2fB_aAHqHdjV1RRJTbg">
                  <button className="btn btn-warning text-white mb-3">See In Videos |→</button>
                </a>
                <img src="img/react.png" className="img-fluid border border-warning border-3 p-3 rounded shadow-lg" alt="Project 7" />
              </div>
              <hr className="mt-4" />

              {/* Construction Website Project */}
              <div className="col-12 mt-5 mb-3 text-secondary text-center">
                <h6>My Project: Construction Website</h6>
                <h6>Website Details: Multiple Webpage, Static Website</h6>
                <h6>Skills: HTML, CSS, Bootstrap</h6>
                <a href="https://www.youtube.com/channel/UCD2J2fB_aAHqHdjV1RRJTbg">
                  <button className="btn btn-warning text-white mb-3">See In Videos |→</button>
                </a>
                <img src="img/botstrap3.png" className="img-fluid border border-warning border-3 p-3 rounded shadow-lg" alt="Project 5" />
              </div>
              <hr className="mt-4" />

              {/* Coffee Shop Website Project */}
              <div className="col-12 mt-5 mb-3 text-secondary text-center">
                <h6>My Project: Coffee Shop Website</h6>
                <h6>Website Details: Multiple Webpage, Static Website</h6>
                <h6>Skills: HTML, CSS, Bootstrap</h6>
                <a href="https://www.youtube.com/channel/UCD2J2fB_aAHqHdjV1RRJTbg">
                  <button className="btn btn-warning text-white mb-3">See In Videos |→</button>
                </a>
                <img src="img/bootstrap2.png" className="img-fluid border border-warning border-3 p-3 rounded shadow-lg" alt="Project 4" />
              </div>
              <hr className="mt-4" />

              {/* Food Website Project */}
              <div className="col-12 mt-5 mb-3 text-secondary text-center">
                <h6>My Project: Food Website</h6>
                <h6>Website Details: Single Webpage, Static Website</h6>
                <h6>Skills: HTML, CSS, Bootstrap</h6>
                <a href="https://www.youtube.com/channel/UCD2J2fB_aAHqHdjV1RRJTbg">
                  <button className="btn btn-warning text-white mb-3">See In Videos |→</button>
                </a>
                <br />
                <img src="img/bootstrap1.png" className="img-fluid border border-warning border-3 p-3 rounded shadow-lg" alt="Project 3" />
              </div>
              <hr className="mt-4" />

              {/* IT Industry Project */}
              <div className="col-12 mt-5 mb-3 text-secondary text-center">
                <h6>My Project: IT Industry</h6>
                <h6>Website Details: Multiple Webpage, Static Website</h6>
                <h6>Skills: HTML, CSS</h6>
                <a href="https://gauritawale.github.io/IT-Industry/">
                  <button className="btn btn-warning text-white mb-3">Link Here |→</button>
                </a>
                <img src="img/website css 2.png" className="img-fluid border border-warning border-3 p-3 rounded shadow-lg" alt="Project 2" />
              </div>
              <hr className="mt-4" />

              {/* Fox University Project */}
              <div className="col-12 mt-5 mb-3 text-center text-secondary border border-0 border-bottom-dark">
                <h6>My Project: Fox University</h6>
                <h6>Website Details: Single Webpage, Static Website</h6>
                <h6>Skills: HTML, CSS</h6>
                <a href="gauritawale.github.io/Fox-University/">
                  <button className="btn btn-warning text-white mb-3">Link Here |→</button>
                </a>
                <img src="img/css website 1.png" className="img-fluid border border-warning border-3 p-3 rounded shadow-lg" alt="Project 1" />
              </div>
              <hr className="mt-4" />

              {/* Portfolio */}
              <div className="col-12 mt-5 mb-3 text-secondary text-center">
                <h6>My Project: Portfolio Website</h6>
                <h6>Website Details: Single Website</h6>
                <h6>Skills: HTML, CSS, Bootstrap, Web3Forms</h6>
                <a href="https://gauritawale.github.io/GauriPortfolio/">
                  <button className="btn btn-warning text-white mb-3">Link Here |→</button>
                </a>
                <img src="img/portfolio.png" className="img-fluid border border-warning border-3 p-5 rounded" alt="Project 7" />
              </div>
              <hr className="mt-4" />

              {/* Furniture Project */}
              <div className="col-12 mt-5 mb-3 text-secondary text-center">
                <h6>My Project: Furniture Project Website</h6>
                <h6>Website Details: Multiple Webpage, Dynamic Website</h6>
                <h6>Skills: HTML, CSS, Bootstrap, Python, Django</h6>
                <h6>Database: MySQL</h6>
                <a href="https://www.youtube.com/channel/UCD2J2fB_aAHqHdjV1RRJTbg">
                  <button className="btn btn-warning text-white mb-3">See In Videos |→</button>
                </a>
                <img src="img/furniture.png" className="img-fluid border border-warning border-3 p-3 rounded shadow-lg" alt="Project 7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>


        
        </>
    )
}
export default Project;