import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import first from "../Assets/img/mainphoto.jpg";
import second from "../Assets/img/second.jpg";
import third from "../Assets/img/third.jpg";
import fourth from "../Assets/img/mainphoto2.jpg";
import '../Styles/Carousels.css'; // Import a separate CSS file for styles

function Carousels() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1500}>
        <img src={first} alt="first" style={{ width: "100%", height: "75vh", objectFit: "cover" }} />
        <Carousel.Caption className="custom-caption">
          <h1 className="carousel-heading">Precision Engineering for Custom Forgings</h1>
          <p className="carousel-text">Tailored forging solutions crafted with unmatched accuracy to meet your exact specifications.</p>
          <button className="carousel-btn">Get In Touch</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img src={second} alt="second" style={{ width: "100%", height: "75vh", objectFit: "cover" }} />
        <Carousel.Caption className="custom-caption">
          <h1 className="carousel-heading">Durable, High-Quality Forging Solutions</h1>
          <p className="carousel-text">Forged products built to last, delivering exceptional strength and reliability.</p>
          <button className="carousel-btn">Get In Touch</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img src={third} alt="third" style={{ width: "100%", height: "75vh", objectFit: "cover" }} />
        <Carousel.Caption className="custom-caption">
          <h1 className="carousel-heading">Expert Craftsmanship in Every Forge</h1>
          <p className="carousel-text">Skilled artisans ensure superior workmanship and attention to detail in every forging process.</p>
          <button className="carousel-btn">Get In Touch</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img src={fourth} alt="fourth" style={{ width: "100%", height: "75vh", objectFit: "cover" }} />
        <Carousel.Caption className="custom-caption">
          <h1 className="carousel-heading">Innovative Forging Technology for All Industries</h1>
          <p className="carousel-text">Leveraging cutting-edge technology to provide advanced forging solutions across multiple sectors.</p>
          <button className="carousel-btn">Get In Touch</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
