import React, { useState } from 'react';
import './voiture.css'; 

const VoitureItem = ({ matricule, marque, carburant, prixAchat, image, onDelete }) => {
  const [filter, setFilter] = useState('none');

  // Fonction pour appliquer le filtre en niveaux de gris
  const applyGrayscale = () => setFilter('grayscale(100%)');

  return (
    <div className="col-md-4 mb-4">
      <div className="card voiture-card"> {/* Ajout de classe personnalisée */}
        <img 
          src={image} 
          alt={marque} 
          className="card-img-top voiture-image" // Ajout de classe personnalisée
          style={{ filter }} 
        />
        <div className="card-body">
          <h5 className="card-title">{marque}</h5>
          <p className="card-text">Matricule: {matricule}</p>
          <p className="card-text">Carburant: {carburant}</p>
          <p className="card-text">Prix d'Achat: {prixAchat} MAD</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-success btn-sm" onClick={applyGrayscale}>
              Appliquer Grayscale
            </button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoitureItem;
