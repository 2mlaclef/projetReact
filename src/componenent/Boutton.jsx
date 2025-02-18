import Button from "react-bootstrap/Button";
import "./Home.css";

function Boutton() {
  return (
    <>
      <div className="d-flex gap-2 mb-2 justify-content-center">
        <Button variant="primary" className="btn-responsive">
          Réservez une table
        </Button>
      </div>
    </>
  );
}

export default Boutton;
