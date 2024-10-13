import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Carousels.css'; // Import a separate CSS file for styles
import no1 from '../Assets/img/2.jpg'
import no0 from '../Assets/img/1.jpg';
import n1 from '../Assets/img/3.jpg';
import n2 from '../Assets/img/4.jpg';
import no2 from '../Assets/img/8.jpg'
import no3 from '../Assets/img/9.jpg'
import n3 from '../Assets/img/5.jpg';
import n4 from '../Assets/img/6.jpg'
import n5 from '../Assets/img/7.jpg'
import n6 from '../Assets/img/10.jpg';
import n7 from '../Assets/img/11.jpg'
import n8 from '../Assets/img/12.jpg'

function Carousels() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1500}>
        <div style={{display:"flex",flexDirection:"row"}}>
        <img src={no1} alt="first1" style={{  height: "65vh",border:"2px solid orange"}} id="first"/>
        <img src={n2} alt="first3" style={{ height: "65vh",border:"2px solid orange"}} id="second"/>
        <img src={n1} alt="first1" style={{  height: "65vh" ,border:"2px solid orange"}} id="second"/>
        <img src={no0} alt="first3" style={{ height: "65vh",border:"2px solid orange"}} id="second"/>
        </div>
        
        <Carousel.Caption className="custom-caption">
          <h1 className="carousel-heading">Manufacturer and Exporter of <br/>Forged Components</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
      <div style={{display:"flex",flexDirection:"row"}}>
        <img src={n3} alt="first1" style={{  height: "65vh",border:"2px solid orange"}} id="first" />
        <img src={n4} alt="first3" style={{ height: "65vh",border:"2px solid orange"}} id="second"/>
        <img src={no2} alt="first1" style={{  height: "65vh" ,border:"2px solid orange"}}id="second" />
        <img src={n5} alt="first3" style={{ height: "65vh",border:"2px solid orange"}} id="second"/>
        </div>
        <Carousel.Caption className="custom-caption">
          <h1 className="carousel-heading">Manufacturer and Exporter of  <br/>Machined Forged Parts</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
      <div style={{display:"flex",flexDirection:"row"}}>
        <img src={n7} alt="first1" style={{  height: "65vh",border:"2px solid orange"}} id="first" />
        <img src={n6} alt="first3" style={{ height: "65vh",border:"2px solid orange"}} id="second" />
        <img src={n8} alt="first1" style={{  height: "65vh" ,border:"2px solid orange"}} id="second" />
        <img src={no3} alt="first3" style={{ height: "65vh",border:"2px solid orange"}} id="second" />
        </div>
        <Carousel.Caption className="custom-caption">
          <h1 className="carousel-heading">Manufacturer and Exporter of  <br/>Forged Rings</h1>
        </Carousel.Caption>
      </Carousel.Item>

     
    </Carousel>
  );
}

export default Carousels;
