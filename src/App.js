import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Navbar from './Navbar';
// import Footer from './Footer';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Project from './Project';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/project" element={<Project></Project>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
