import Button from "react-bootstrap/Button";
import './Home.css'

function Boutton() {
  return (
    <>
      <div className="d-flex gap-2 mb-2 ">
        <Button
          variant="primary"
          size="lg"
          style={{ color: "white", fontSize: "1.5rem", borderRadius: "2rem" }}
        >
          Réservez une table
        </Button>
      </div>
    </>
  );
}

export default Boutton;
