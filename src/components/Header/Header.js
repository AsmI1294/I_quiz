import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";
const Header = () => {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block carouselImg"
          src="https://media.istockphoto.com/photos/question-mark-neon-lightning-on-brick-wall-picture-id1309966143?b=1&k=20&m=1309966143&s=170667a&w=0&h=b9d61PO49TS9Q7pDnBN63vcVJT4bQUL5v5PSAdiaq-w="
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="display-1">Welcome to IQuiz</h2>
          <p className="fs-4"> Test your knowledge! How fit are you?</p>
          <p className="fs-4">
            Just Remember! knowledge is power and power brings Money
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
