import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Acc() {
    return (
      <Router>
        <div className="body">
          <nav className="nav-container">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Accueil</Link>
              </li>
              <br />
              <li  className="nav-item">
                <Link className="nav-link" to="/about">À propos</Link>
              </li>
            </ul>
          </nav>
  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/administration" element={<Administration />} /> {/* Add Administration route */}
            <Route path="/formateur" element={<Formateur />} /> {/* Add Administration route */}
            <Route path="/career-center" element={<Career />} /> {/* Add Administration route */}
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default Acc;
  