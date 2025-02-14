import Card from "react-bootstrap/Card";
import "./Cards.css";

function Cards() {
  return (
    <div className="cartes">
      {/* Carte 1 */}
      <Card className="cart" style={{ width: "100%" }}>
        <Card.Img variant="top" src="plat1.jpg" alt="Saumon en Croûte" />
        <Card.Body>
          <Card.Title>Saumon en Croûte</Card.Title>
          <Card.Text>
            Saumon frais, épinards, sauce hollandaiseSaumon frais, épinards,
            sauce hollandaise
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Carte 2 */}
      <Card className="cart" style={{ width: "100%" }}>
        <Card.Img variant="top" src="plat2.jpg" alt="Filet Mignon" />
        <Card.Body>
          <Card.Title>Filet Mignon</Card.Title>
          <Card.Text>Sauce au poivre, légumes de saison</Card.Text>
        </Card.Body>
      </Card>

      {/* Carte 3 */}
      <Card className="cart" style={{ width: "100%" }}>
        <Card.Img variant="top" src="plat2.jpg" alt="Dessert du Chef" />
        <Card.Body>
          <Card.Title>Dessert du Chef</Card.Title>
          <Card.Text>Création unique quotidienne</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
