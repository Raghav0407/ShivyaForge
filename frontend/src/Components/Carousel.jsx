import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import first from "../Assets/img/first.jpg";
import second from "../Assets/img/second.jpg";
import third from "../Assets/img/third.jpg";
import fourth from "../Assets/img/fourth.jpg";
import '../Styles/Carousels.css'; // Import a separate CSS file for styles

function Carousels() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1500}>
        <img src={first} alt="first" style={{ width: "100%", height: "75vh", objectFit: "cover" }} />
        <Carousel.Caption className="custom-caption">
          <h1 className="carousel-heading">Big Heading One</h1>
          <p className="carousel-text">This is some descriptive text for the first image.</p>
          <button className="carousel-btn">Click Here</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img src={second} alt="second" style={{ width: "100%", height: "75vh", objectFit: "cover" }} />
        <Carousel.Caption className="custom-caption">
          <h1 className="carousel-heading">Big Heading Two</h1>
          <p className="carousel-text">This is some descriptive text for the second image.</p>
          <button className="carousel-btn">Click Here</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img src={third} alt="third" style={{ width: "100%", height: "75vh", objectFit: "cover" }} />
        <Carousel.Caption className="custom-caption">
          <h1 className="carousel-heading">Big Heading Three</h1>
          <p className="carousel-text">This is some descriptive text for the third image.</p>
          <button className="carousel-btn">Click Here</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img src={fourth} alt="fourth" style={{ width: "100%", height: "75vh", objectFit: "cover" }} />
        <Carousel.Caption className="custom-caption">
          <h1 className="carousel-heading">Big Heading Four</h1>
          <p className="carousel-text">This is some descriptive text for the fourth image.</p>
          <button className="carousel-btn">Get In Touch</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
