import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
// import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
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
