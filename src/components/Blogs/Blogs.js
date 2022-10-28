import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Blogs = () => {
  return (
    <Container>
      <p className="text-center display-3 bg-info fw-semibold text-secondary">
        Answer to few Questions
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p className=" text-secondary fw-bold fs-2">
              What is the purpose of react router?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            React Router is a JavaScript framework that lets us handle client
            and server-side routing in React applications. It enables the
            creation of single-page web or mobile apps that allow navigating
            without refreshing the page.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p className=" text-secondary fw-bold fs-2">
              How does context API work?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. We can also pass states in its range.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p className=" text-secondary fw-bold fs-2">
              What is useref hook in react?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Blogs;
