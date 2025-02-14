import React from "react";
import "./Home.css"; // Assuming you have some CSS for styling
import Boutton from "./Boutton";

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="banner">
        <h1>La Belle Cuisine</h1>
        <p>Une expérience gastronomique exceptionnelle</p>
        <Boutton />
      </div>

      {/* Presentation Section */}
      <div className="container-presentation">
        <div className="chef">
          <img src="3.png" alt="Chef Étoilé" />
          <h3>Chef Étoilé</h3>
          <p>Cuisine raffinée par notre chef renommé</p>
        </div>
        <div className="horaires">
          <img src="2.png" alt="Horaires" />
          <h3>Horaires</h3>
          <p>Ouvert du Mardi au Dimanche</p>
        </div>
        <div className="emplacement">
          <img src="4.png" alt="Emplacement" />
          <h3>Emplacement</h3>
          <p>Au cœur de la ville</p>
        </div>
      </div>

      {/* Specialities Section */}
      <div className="specialite">
        <h1>Nos spécialités</h1>
      </div>
    </div>
  );
};

export default Home;
