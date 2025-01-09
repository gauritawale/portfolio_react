import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Education from "./Education.jsx";
import Skill  from "./Skill.jsx";
import Experience from "./Experience.jsx";
import Project from "./Project.jsx";
import Demo from "./Demo.jsx";
import Certificates from "./Certificate.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Skill></Skill>
      <Experience></Experience>
      <Project></Project>
      <Demo></Demo>
      <Certificates></Certificates>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
