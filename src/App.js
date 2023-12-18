import logo from "./logo.svg";
import "./App.css";
import name from "./name";
import price from "./price";
import description from "./description";
import image from "./orangina.jpg";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}FCFA</Card.Text>
        <Button variant="primary">AJOUTER AU PANNIER</Button>
      </Card.Body>
    </Card>
  );
}

export default App;
