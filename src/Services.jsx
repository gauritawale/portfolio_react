function Services() {
    return (
        <>
            <section id="services" className="mt-5" style={{ overflow: "hidden" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-3 text-center">
                            <h3 className="mt-5 animate-title text-center">🔗 Services</h3>
                            <p className="text-center text-secondary mt-3 mb-5" style={{ color: "#e6a466" }}>
                                "Unlock the potential of innovative technology with services designed to meet your unique needs. From creating dynamic websites to delivering seamless user experiences, I am committed to transforming your ideas into reality."
                            </p>

                            <div id="services">
                                <div className="row mb-5">
                                    <div className="col-md-4 mt-3">
                                        <div className="card shadow-sm">
                                            <img
                                                src="https://chools.in/wp-content/uploads/f5.gif"
                                                className="card-img-top img-fluid mx-auto d-block"
                                                alt="Full Stack Development GIF"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-warning text-center">Full Stack Development</h5>
                                                <p className="card-text text-center">
                                                    Master the art of building modern applications by learning both frontend and backend technologies.
                                                    Become proficient in technologies like React, Django, and Flask to create complete web solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mt-3">
                                        <div className="card shadow-sm">
                                            <img
                                                src="https://miro.medium.com/v2/resize:fit:1360/1*zVnWJtyGOX_kUIDm6ccCfQ.gif"
                                                className="card-img-top img-fluid mx-auto d-block"
                                                alt="Backend Development GIF"
                                            />
                                            <div className="card-body mt-2">
                                                <h5 className="card-title text-warning text-center mt-4">Backend Development</h5>
                                                <p className="card-text text-center mt-3">
                                                    Backend development serves as the backbone of web applications, driving their logic, data management, and functionality.
                                                    Mastering backend technologies allows developers to build robust systems that effectively handle user requests,
                                                    process data.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mt-3">
                                        <div className="card shadow-sm">
                                            <img
                                                src="img/abcd.gif" // Ensure this is a valid path
                                                className="card-img-top img-fluid mx-auto d-block"
                                                alt="Frontend Development GIF"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-warning text-center">Frontend Development</h5>
                                                <p className="card-text text-center">
                                                    Master technologies like HTML, CSS, JavaScript, and frameworks such as React and Angular to design seamless user experiences.
                                                    Build visually appealing and interactive applications that captivate users.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 mt-3">
                                        <div className="card shadow-sm">
                                            <img
                                                src="https://cdn.dribbble.com/users/48223/screenshots/1887714/media/73692fcbd0bb70600176ac88277175d3.gif"
                                                className="card-img-top img-fluid mx-auto d-block"
                                                alt="Responsive Design GIF"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-warning text-center">Responsive Design</h5>
                                                <p className="card-text text-center">
                                                    Learn the art of crafting responsive and mobile-friendly websites that adapt seamlessly to any device or screen size.
                                                    Master tools like CSS Flexbox, Grid, and media queries, and frameworks like Bootstrap.
                                                    Create designs that offer consistent, user-friendly experiences across desktops, tablets, and smartphones.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mt-3">
                                        <div className="card shadow-sm">
                                            <img
                                                src="https://cdn-icons-gif.flaticon.com/11257/11257224.gif"
                                                className="card-img-top img-fluid mx-auto d-block"
                                                alt="Database Management GIF"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-warning text-center">Database Management</h5>
                                                <p className="card-text text-center">
                                                    Gain expertise in managing, organizing, and optimizing data using modern database technologies.
                                                    Master relational databases like MySQL and PostgreSQL.
                                                    Learn to design efficient schemas, write complex queries, and ensure data security for scalable applications.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mt-3">
                                        <div className="card shadow-sm pb-5">
                                            <img
                                                src="https://miro.medium.com/v2/resize:fit:1400/1*8QoNE7NqYqqlJrn_8MoIkQ.gif"
                                                className="card-img-top img-fluid mx-auto d-block"
                                                alt="Cloud & DevOps GIF"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-warning text-center">Cloud & DevOps</h5>
                                                <p className="card-text text-center">
                                                    Embrace the power of cloud computing and DevOps practices to streamline application deployment and scalability.
                                                    Learn to work with platforms like AWS, and Google Cloud.
                                                    Build, deploy, and manage applications efficiently while fostering collaboration and automation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Services;
