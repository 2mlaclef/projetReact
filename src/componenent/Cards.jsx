import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Cards.css";

function Cards() {
    return (
      <div className="cartes">
        <div>
          <Card className="cart" style={{ width: "27rem" }}>
            <Card.Img variant="top" src="public/plat1.jpg" />
            <Card.Body>
              <Card.Title>Saumon en Croûte</Card.Title>
              <Card.Text>
                Saumon frais, épinards, sauce hollandaiseSaumon frais, épinards,
                sauce hollandaise
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="cart" style={{ width: "27rem" }}>
            <Card.Img variant="top" src="public/plat2.jpg" />
            <Card.Body>
              <Card.Title>Filet Mignon</Card.Title>
              <Card.Text>Sauce au poivre, légumes de saison</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="cart" style={{ width: "27rem" }}>
            <Card.Img variant="top" src="public/plat2.jpg" />
            <Card.Body>
              <Card.Title>Dessert du Chef</Card.Title>
              <Card.Text>Création unique quotidienne</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
}

export default Cards;
