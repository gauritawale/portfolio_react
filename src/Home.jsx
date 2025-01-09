import React from "react";

function Home() {
    return (
        <>
        <section id="home" style={{ overflow: "hidden" }}>
            <div className="container-fluid main" style={{ overflow: "hidden" }}>
                <div className="row mt-3">
                    <div className="col-md-12 mt-5">
                        <h2 className="h11">Gauri</h2>
                        <h1 className="h12">
                            <span style={{ textShadow: "2px 0px 0px rgb(7, 39, 204)" }}>
                                Full Stack Python
                            </span>{" "}
                            <span style={{ textShadow: "2px 0px 0px rgb(15, 3, 82)" }}>
                                Developer
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Home;
