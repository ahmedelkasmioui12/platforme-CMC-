import React from "react";

function Career() {
  return (
    <div className="card-container" style={{marginTop:'90px'}}>
      {/* Card 1 */}
      <div className="card border-primary " style={{ maxWidth: "18rem" }}>
        <img src="src/8.jpg"  className="image" alt="Image 1" />
        <div className="card-body text-primary">
          <h5 className="card-title">M.Meryem el madbouh </h5>
          <p className="card-text">068058157</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
        <img src="src/im1.jpg"  className="image" alt="Image 2" />
        <div className="card-body text-primary">
          <h5 className="card-title">M.Ahlem sahlaoui</h5>
          <p className="card-text">345633</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
        <img src="src/3.jpg"  className="image" alt="Image 3" />
        <div className="card-body text-primary">
          <h5 className="card-title">Aymen Alaya</h5>
          <p className="card-text">24579009874.</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
        <img src="src/4.jpg"  className="image" alt="Image 4" />
        <div className="card-body text-primary">
          <h5 className="card-title">Mohmed bodima </h5>
          <p className="card-text">8876§1654</p>
        </div>
      </div>
    </div>
  );
}

export default Career;
