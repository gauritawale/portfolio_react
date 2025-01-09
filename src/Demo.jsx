import React from "react";

function Demo(){
    return (
        <>
        <section style={{'overflow':'hidden'}}>
        <div  className="container">
  <div className="row">
    <h3 className="mt-5 animate-title text-center">💡 Demo's</h3>
    <p className="text-center text-secondary mt-3 mb-5" style={{ color: "#e6a466" }}>
      "Snapshots speak louder than words, let the demos do the talking."
    </p>
    <div className="row demo mb-5">
      <div className="col-md-6 mt-5">
        <img
          src="img/demo.gif"
          alt="Demo"
          className="demo_images"
          height="100%"
          width="120%"
          style={{ overflow: "hidden" }}
        />
      </div>
      <div className="col-md-6 text-center">
        <button
          className="btn btn-warning text-white demo_button"
          style={{ marginTop: "250px" }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#demoOffcanvas"
          aria-controls="demoOffcanvas"
        >
          View Demos |→
        </button>
      </div>
    </div>
  </div>
  <div className="row">
    {/* Off-canvas */}
    <div
      className="offcanvas offcanvas-start w-100"
      tabIndex="-1"
      id="demoOffcanvas"
      aria-labelledby="demoOffcanvasLabel"
    >
      <div className="offcanvas-header">
        {/* <h5 className="offcanvas-title" id="demoOffcanvasLabel">Project Demos</h5> */}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        {/* Demo images with captions */}
        <div className="img-container">
          <figure className="mb-4 text-center">
            <figcaption className="mt-2 text-warning fs-5 fw-bold fst-italic text-center">
              HTML Demo
            </figcaption>
            <img
              src="img/html demo.png"
              className="img-fluid border border-warning border-3 p-1 rounded shadow mt-4"
              alt="HTML Demo"
              height="60px"
            />
            <a
              href="https://www.youtube.com/channel/UCD2J2fB_aAHqHdjV1RRJTbg"
              aria-label="View YouTube Demos"
            >
              <button className="btn btn-warning text-white mt-5">
                Let's See Demos |→
              </button>
            </a>
          </figure>
          <hr className="mt-4" />

          <figure className="mb-4 text-center">
            <figcaption className="mt-2 text-warning fs-5 fw-bold fst-italic text-center">
              CSS Demo
            </figcaption>
            <img
              src="img/cssdemo.png"
              className="img-fluid border border-warning border-3 p-1 rounded shadow mt-4"
              alt="CSS Demo"
            />
            <a
              href="https://www.youtube.com/channel/UCD2J2fB_aAHqHdjV1RRJTbg"
              aria-label="View YouTube Demos"
            >
              <button className="btn btn-warning text-white mt-5">
                Let's See Demos |→
              </button>
            </a>
          </figure>
          <hr className="mt-4" />

          <figure className="mb-4 text-center">
            <figcaption className="mt-2 text-warning fs-5 fw-bold fst-italic text-center">
              Animation Demo
            </figcaption>
            <img
              src="img/animation.png"
              className="img-fluid border border-warning border-3 p-1 rounded shadow mt-4"
              alt="Animation Demo"
            />
            <a
              href="https://www.youtube.com/channel/UCD2J2fB_aAHqHdjV1RRJTbg"
              aria-label="View YouTube Demos"
            >
              <button className="btn btn-warning text-white mt-5">
                Let's See Demos |→
              </button>
            </a>
          </figure>
          <hr className="mt-4" />

          <figure className="mb-4 text-center">
            <figcaption className="mt-2 text-warning fs-5 fw-bold fst-italic text-center">
              JavaScript Demo
            </figcaption>
            <img
              src="img/javascript.png"
              className="img-fluid border border-warning border-3 p-1 rounded shadow mt-4"
              alt="JavaScript Demo"
            />
            <a
              href="https://www.youtube.com/channel/UCD2J2fB_aAHqHdjV1RRJTbg"
              aria-label="View YouTube Demos"
            >
              <button className="btn btn-warning text-white mt-5">
                Let's See Demos |→
              </button>
            </a>
          </figure>
          <hr className="mt-4" />

          <figure className="mb-4 text-center">
            <figcaption className="mt-2 text-warning fs-5 fw-bold fst-italic text-center">
              JQuery Demo
            </figcaption>
            <img
              src="img/jquery.png"
              className="img-fluid border border-warning border-3 p-1 rounded shadow mt-4"
              alt="JavaScript Demo"
            />
            <a
              href="https://www.youtube.com/channel/UCD2J2fB_aAHqHdjV1RRJTbg"
              aria-label="View YouTube Demos"
            >
              <button className="btn btn-warning text-white mt-5">
                Let's See Demos |→
              </button>
            </a>
          </figure>
        </div>
      </div>
    </div>
  </div>
</div>




        </section>
        
        </>
    )
}
export default Demo;