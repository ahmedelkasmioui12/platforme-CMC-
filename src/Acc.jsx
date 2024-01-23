import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./App.css";
import Home from "./Home";
import About from "./about";
import Administration from "./administration";
import Formateur from "./formateur";
import Career from "./Career center";
import Contact from "./contact";

function Acc() {
  return (
    <Router>
      <div className="div1">

        <nav className="nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="logo"><img src="src\Avery Davis.png" alt="Your Image" class="left-image" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">À propos</Link>
            </li>

          </ul>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/formateur" element={<Formateur />} />
          <Route path="/career-center" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Acc;
