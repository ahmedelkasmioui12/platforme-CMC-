import React, { useState } from "react";

function Formateur() {
  const formateursData = [
    { id: 1, nom: "M.Farah Karrouche", description: "Formatrice full stack", email: "farah@example.com", professionnel: "Full Stack" },
    { id: 2, nom: "M.Oussama El Haij", description: "Formateur full stack", email: "oussama@example.com", professionnel: "Full Stack" },
    { id: 3, nom: "M.Kamal Boughida", description: "Formateur full stack", email: "kamal@example.com", professionnel: "Full Stack" },
    { id: 4, nom: "M.Karima Mekaoui", description: "Formatrice réseau système", email: "karima@example.com", professionnel: "Réseau Système" },
    { id: 5, nom: "M.John Smith", description: "Web Developer", email: "john@example.com", professionnel: "Web Development" },
    { id: 6, nom: "M.Alice Johnson", description: "Data Scientist", email: "alice@example.com", professionnel: "Data Science" },
    { id: 7, nom: "M.Bob Anderson", description: "Network Engineer", email: "bob@example.com", professionnel: "Networking" },
    { id: 8, nom: "M.Lisa Davis", description: "Software Engineer", email: "lisa@example.com", professionnel: "Software Engineering" },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [formateurs, setFormateurs] = useState(formateursData);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredFormateurs = formateursData.filter((formateur) =>
      formateur.nom.toLowerCase().includes(query.toLowerCase())
    );
    setFormateurs(filteredFormateurs);
  };

  return (
    <div>
      <div className="table-container">
        <label htmlFor="">Entrer le nom et prenom de formateur </label>
        <input className="dd"
          type="text"
          placeholder="Search by name"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <table className="custom-table" border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Description</th>
              <th>Email</th>
              <th>Professionnel</th>
            </tr>
          </thead>
          <tbody>
            {formateurs.map((formateur) => (
              <tr key={formateur.id}>
                <td>{formateur.id}</td>
                <td>{formateur.nom}</td>
                <td>{formateur.description}</td>
                <td>{formateur.email}</td>
                <td>{formateur.professionnel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Formateur;
