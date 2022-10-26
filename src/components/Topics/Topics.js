import React from "react";
import Header from "../Header/Header";
import { useLoaderData } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import EachCard from "../EachCard/EachCard";
const Topics = () => {
  let { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <Header></Header>
      <Container className="my-5">
        <Row>
          {data.map(() => (
            <Col sm={6} className=" d-flex justify-content-center my-4">
              <EachCard></EachCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Topics;
