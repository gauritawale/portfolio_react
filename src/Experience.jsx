import React, { useState } from "react";

const Experience = () => {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);

  const toggleDetails1 = () => setShowDetails1(!showDetails1);
  const toggleDetails2 = () => setShowDetails2(!showDetails2);

  return (
    <section id="experience" style={{ overflow: "hidden" }}>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12 mt-3">
            <h3 className="mt-5 animate-title text-center">💫 Experience</h3>
            <p
              className="text-center text-secondary mt-3"
              style={{ color: "#e6a466" }}
            >
              "Skilled in developing responsive web applications, designing
              intuitive user interfaces, and optimizing backend functionalities."
            </p>
          </div>
        </div>

        <div className="experience p-3 pb-5 mt-2">
          {/* First Experience */}
          <div className="row mt-5">
            <div className="col-md-3">
              <p className="text-warning ms-5 text-center">
                15/01/2024 - 01/03/2024
              </p>
            </div>
            <div className="col-md-9 text-center">
              <p className="text-secondary">
                Frontend Developer Intern - A2Z Infotech & A2Z IT Hub Pvt. Ltd.
              </p>
              <button
                className="btn btn-warning text-white"
                onClick={toggleDetails1}
              >
                {showDetails1 ? "Hide details |←" : "View in details |→"}
              </button>

              {/* Hidden details for first experience */}
              {showDetails1 && (
                <div className="mt-2">
                  <p className="text-secondary">
                    During this internship, I focused on frontend development,
                    working with HTML, CSS, JavaScript, and React to create
                    user-friendly interfaces and responsive designs.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Second Experience */}
          <div className="row mt-3">
            <div className="col-md-3">
              <p className="text-warning ms-5 text-center">
                05/03/2024 - 30/09/2024
              </p>
            </div>
            <div className="col-md-9 text-center">
              <p className="text-secondary">
                Full Stack Python Developer - A2Z Infotech & A2Z IT Hub Pvt.
                Ltd.
              </p>
              <button
                className="btn btn-warning text-white"
                onClick={toggleDetails2}
              >
                {showDetails2 ? "Hide details |←" : "View in details |→"}
              </button>

              {/* Hidden details for second experience */}
              {showDetails2 && (
                <div className="mt-2">
                  <p className="text-secondary">
                    As a Full Stack Python Developer, I was involved in both
                    frontend and backend development using Python, Django,
                    React, and more. Worked on optimizing web functionalities
                    and building full-stack applications.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
