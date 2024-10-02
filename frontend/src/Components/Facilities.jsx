import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import data from '../Assets/data/FacilitiesData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/CardComponent.css';
import image1 from "../Assets/img/cuttingshop.jpg";
import image2 from "../Assets/img/dieshop.jpg";
import image3 from "../Assets/img/opendie.jpg";
import image4 from "../Assets/img/closeddie.jpg";
import image5 from "../Assets/img/ringrolling.jpg";
import image6 from "../Assets/img/heattreatment.jpg";
import image7 from "../Assets/img/annealing.webp";
import image8 from "../Assets/img/machineshop.jpg";
import image9 from "../Assets/img/Mechanical9.jpeg";


function Facilities() {
  const images =[image1,image2,image3,image4,image5,image6,image7,image8,image9];

  return (
    <Container className="cardcomponent-container" fluid>
      <div className="heading-container">
        <h2 className="heading">Facilities Served By Us</h2>
        <p style={{color:"grey",fontWeight:"500"}}>Experience the qualities provided by us to our clients</p>
      </div>
      <Row>
        {data && data.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="cardcomponent-wrapper">
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

export default Facilities;
