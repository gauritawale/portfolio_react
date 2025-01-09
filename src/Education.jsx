import React from "react";

const Education = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-5 animate-title text-center">
              🧑🏼‍🎓 <span className="highlight">Education</span>
            </h3>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          {/* Post Graduation Card */}
          <div className="col-md-4 mb-4">
            <div className="card education-card text-center p-4 shadow-lg border-0">
              <ion-icon name="bookmark" className="fs-1 icon"></ion-icon>
              <div className="card-body">
                <h5 className="card-title">Post Graduation<br />(2019-2022)</h5>
                <h6 className="card-text">Mumbai University</h6>
                <p className="mb-0 text-muted">Passed the examination in 2022</p>
              </div>
            </div>
          </div>

          {/* Graduation Card */}
          <div className="col-md-4 mb-4">
            <div className="card education-card text-center p-4 shadow-lg border-0">
              <ion-icon name="bookmarks" className="fs-1 icon"></ion-icon>
              <div className="card-body">
                <h5 className="card-title">Graduation<br />(2022-2025)</h5>
                <h6 className="card-text">Savitribai Phule Pune University</h6>
                <p className="mb-0 text-muted">Passed the examination in 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
