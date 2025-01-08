import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Project from "./Project.jsx";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App(){
  return(
    <>
<Router>

<Navbar></Navbar>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/contact' element={<Contact></Contact>}></Route>
  <Route path='/project' element={<Project></Project>}></Route>




</Routes>


<Footer></Footer>

</Router>

  
    
    </>

  )
 
}

export default App;