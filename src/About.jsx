import React from "react";

function About() {
  return (
    <>
    <section id="about" style={{ overflow: "hidden" }}>
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-5 animate-title text-center">👩🏼‍💻Personal Profile</h3>
            <p
              className="text-center text-secondary mt-3"
              style={{ color: "#e6a466" }}
            >
              "My personal profile which can be describes me"
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 about-container text-center">
            <h3 className="text-warning">Gauri Tawale</h3>
            <p className="fs-5">Full Stack Python Developer</p>
            <p className="text-center">(March 2024 - September 2024)</p>

            <p
              id="aboutText"
              className="mt-2 p-2"
              style={{ textAlign: "justify" }}
            >
              Hello, I'm <font color="orange">`Gauri Tawale`</font>, a passionate
              Front End developer with a deep love for frontend technologies. I
              also gain knowledge about backend technologies. Through dedicated
              learning and hands-on experience, I can develop my skills and
              transform my passion into a career.
              <br />
              <br />
              I have completed my Post Graduation in{" "}
              <font color="blue">`Government Polytechnic in Ahmednagar`</font>{" "}
              and currently pursuing a Bachelor's degree in Computer Science.
              <br />
              <br />
              Currently, I am a BE student and gaining knowledge about languages
              in Computer Science.
              <span id="moreText" style={{ display: "none" }}>
                <br />
                <br />
                Now I am learning about{" "}
                <font color="green">`Python`</font> in backend technologies and
                gaining knowledge about that language most efficiently. During
                my course at{" "}
                <font color="red">`A2Z Infotech & A2Z IT Hub Private Ltd.`</font>{" "}
                I had the opportunity to develop myself in real-world projects,
                gaining the most knowledge about computer languages. This
                experience not only satisfied my technical career but also
                helped me become better at what I do and understand the IT
                industry.
                <br />
                <br />
                I have completed my Post Graduation in Government Polytechnic in
                Ahmednagar and currently pursuing a Bachelor's degree in
                Computer Science.
                <br />
                <br />
              </span>
            </p>
            <button
              id="readMoreBtn"
              className="btn btn-warning text-white mt-3"
              style={{ cursor: "pointer" }}
            >
              More About Me |→
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
