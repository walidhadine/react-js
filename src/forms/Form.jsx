import React, { useState } from "react";
export default function Form() {
  const [name, setName] = useState(""); // state pour le nom
  const [age, setAge] = useState("");   // state pour l'âge

  // Fonction pour gérer la soumission
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Créer l'objet à envoyer
    const formData = {
      name: name,
      age: age,
    };

    // Pour l'instant on l'affiche dans la console
    console.log("Données envoyées :", formData);

    // Ici tu pourrais envoyer les données à une API avec fetch :
    /*
    fetch('https://exemple.com/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log("Réponse API :", data))
    .catch(err => console.error(err));
    */

    // Réinitialiser le formulaire après envoi
    setName("");
    setAge("");
  };

  return (
    <div>
      <h3>Formulaire</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="number"
          placeholder="Âge"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
