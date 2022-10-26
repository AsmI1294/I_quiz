import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const EachCard = ({ data }) => {
  console.log(data);
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
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EachCard;
