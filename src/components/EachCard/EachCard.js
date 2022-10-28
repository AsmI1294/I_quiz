import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./EachCard.css";
const EachCard = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }} bg={"dark"} text={"white"}>
      <Card.Img
        variant="top"
        src={data.logo}
        className="border border-secondary rounded shadow-lg"
      />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>Number of questions: {data.total}</Card.Text>
        <Button variant="info" className="w-100">
          <Link to={`/quizes/${data.id}`} className="deco text-dark">
            Go to Quiz
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EachCard;
