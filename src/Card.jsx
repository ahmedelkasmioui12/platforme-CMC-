import React, { useState } from "react";

function Card({ image, title, description, name }) {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="back2">
            <div className="card" onClick={toggleDescription}>
                <img className="card-image" src={image} alt={title} />
                <div className="card-content">
                    <h3>{name}</h3>
                    {showDescription && (
                        <div className="card-description">
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
