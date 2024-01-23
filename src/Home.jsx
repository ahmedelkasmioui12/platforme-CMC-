import React from "react";
import { Link } from "react-router-dom";
import './App.css';

function Home() {
  return (
    <>
      <div className="back" >
      <h1 >
            Decouvrire notre etablisement 
          </h1>
        <div className="container1">
          
        <Link to="/administration" className="link">
          <img className="image" src="src/administration.jpg" alt="admi" />
          <h2>Administration</h2>
        </Link>

        <Link to="/formateur" className="link">
          <img className="image" src="src\formateure.jpg" alt="image" />
          <h2>Formateur</h2>
        </Link>

        <Link to="/career-center" className="link">
          <img className="image" src="src/orientation.jpg" alt="image" />
          <h2>Career center</h2>
        </Link>
        </div>
      </div>
      <div className="back"> 
      <div class="image-text-container">
        <img src="src\images.png" alt="Your Image" class="left-image" />
        <div class="right-text">
          <h2>Cité des metiéres et des competence Oriental </h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quas iusto minima sequi sunt unde, tempore, eos illum optio consequatur harum beatae natus? Ipsum corporis nam voluptatem deserunt. Itaque, blanditiis..</p>
        </div></div>
      </div>


    </>

  );
}

export default Home;
