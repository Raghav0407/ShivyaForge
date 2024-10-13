import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import data from '../Assets/data/CardData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/CardComponent.css';
import image1 from "../Assets/img/Automobile1.jpeg";
import image2 from "../Assets/img/Bearing2.png";
import image3 from "../Assets/img/GearBox3.jpeg";
import image4 from "../Assets/img/EarthMoving4.jpg";
import image5 from "../Assets/img/Valves5.jpeg";
import image6 from "../Assets/img/OliAndGas6.jpeg";
import image7 from "../Assets/img/Power7.jpeg";
import image8 from "../Assets/img/IronSteel8.webp";
import image9 from "../Assets/img/Mechanical9.jpeg";
import first from '../Assets/img/14.jpg';
import second from '../Assets/img/15.jpg';
import third from '../Assets/img/16.jpg';
import fourth from '../Assets/img/17.jpg';
import fifth from '../Assets/img/18.jpg';

function CardComponent() {
  const images = [first,second,third,fourth,fifth];

  return (
    <Container className="cardcomponent-container" fluid>
      <div className="heading-container">
        <h2 className="heading" style={{ color: "orange" }}>Industries We Serve</h2>
        <p style={{ color: "grey", fontWeight: "500" }}>Discover the Diverse Application of our Products</p>
      </div>
      <Row className="d-flex justify-content-center">
        {data && data.map((item, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="cardcomponent-wrapperc">
            <Card
              title={item.title}
              photo={images[item.photo]}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardComponent;
