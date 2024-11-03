import React from 'react';
import VoitureItem from './Voiture'; 

const VoitureList = () => {
  const voitures = [
    { matricule: 'uio865', marque: 'Toyota', image: '/images/img1.jpg', carburant: 'diesel', prixAchat: 300000 },
    { matricule: '4566tr', marque: 'Honda', image: '/images/img2.jpg', carburant: 'Diesel', prixAchat: 550000 },
    { matricule: '998iuyt', marque: 'honda', image: '/images/img3.jpg', carburant: 'Essence', prixAchat: 60000 },
    { matricule: 'un890', marque: 'Nissan', image: '/images/img4.jpg', carburant: 'Essence', prixAchat: 220000 },
  ];

  const totalVoitures = voitures.length;

  const totalParMarque = voitures.reduce((acc, voiture) => {
    acc[voiture.marque] = (acc[voiture.marque] || 0) + 1;
    return acc;
  }, {});

  const voitureMaxPrix = voitures.reduce((max, voiture) => 
    (voiture.prixAchat > max.prixAchat ? voiture : max), voitures[0]
  );

  return (
    <div className="container">
      <h1 className="mt-4">Liste des Voitures</h1>
      <div className="row">
        {voitures.map((voiture, index) => (
          <VoitureItem key={index} {...voiture} />
        ))}
      </div>
      <div className="stats mt-4">
        <h2>Total des voitures: {totalVoitures}</h2>
        <h2>Nombre total des voitures par marque:</h2>
        <ul>
          {Object.entries(totalParMarque).map(([marque, count]) => (
            <li key={marque}>{marque}: {count}</li>
          ))}
        </ul>
        <h2>Voiture avec le prix maximal:</h2>
        <VoitureItem {...voitureMaxPrix} />
      </div>
    </div>
  );
};

export default VoitureList;
