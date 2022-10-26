import React from "react";
import Header from "../Header/Header";
import { useLoaderData } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import EachCard from "../EachCard/EachCard";
const Topics = () => {
  let { data } = useLoaderData();

  return (
    <div>
      <Header></Header>
      <Container className="my-5">
        <Row>
          {data.map((eachData) => (
            <Col
              lg={3}
              md={6}
              sm={12}
              key={eachData.id}
              className=" d-flex justify-content-center my-4"
            >
              <EachCard data={eachData}></EachCard>
              {console.log(eachData.id)}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Topics;
