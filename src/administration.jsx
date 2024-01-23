import React, { useState } from "react";
import Card from "./Card";

function Administration() {
  const data = [
    {
      image: "src/img2.jpg",
      name: "M.Najlae korakich",
      title: "Madame la directrice",
      description: "Description de la directrice",
    },
    {
      image: "src/img2.jpg",
      name: "M.Najlae korakich",
      title: "Madame la directrice",
      description: "Description de la directrice",
    }, {
      image: "src/img2.jpg",
      name: "M.Najlae korakich",
      title: "Madame la directrice",
      description: "Description de la directrice",
    }, {
      image: "src/img2.jpg",
      name: "M.Najlae korakich",
      title: "Madame la directrice",
      description: "Description de la directrice",
    }, {
      image: "src/img2.jpg",
      name: "M.Najlae korakich",
      title: "Madame la directrice",
      description: "Description de la directrice",
    },
  ];

  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleCardClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="card-container">
      {data.map((person, index) => (
        <Card
          key={index}
          image={person.image}
          title={person.title}
          description={person.description}
          name={person.name} 
          onClick={() => handleCardClick(person)}
        />
      ))}
    </div>
  );
}

export default Administration;
