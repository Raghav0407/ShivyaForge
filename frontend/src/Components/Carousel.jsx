import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import  first from "../Assets/img/first.jpg";
import  second from "../Assets/img/second.jpg";
import  third from "../Assets/img/third.jpg";
import  fourth from "../Assets/img/fourth.jpg";


function Carousels() {
  return (

    <Carousel data-bs-theme="dark">
      
      <Carousel.Item interval={1500}>
        <img src={first} alt="first" style={{width:"100%",height:"75vh" ,objectFit:"fit"}}/>
        {/* <Carousel.Caption>
        <img src={logo} alt="img"className='logo_animation'/>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={1500}>
      <img src={second} alt="second" style={{width:"100%",height:"75vh",objectFit:"fit"}}/>
        {/* <Carousel.Caption>
        <img src={logo} alt="img"className='logo_animation'/>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={1500}>
      <img src={third} alt="third" style={{width:"100%",height:"75vh",objectFit:"fit"}}/>
        {/* <Carousel.Caption>
        <img src={logo} alt="fourth"className='logo_animation'/>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={1500}>
      <img src={fourth} alt="fourth" style={{width:"100%",height:"75vh",objectFit:"fit"}}/>
        {/* <Carousel.Caption>
        <img src={logo} alt="fourth"className='logo_animation'/>
        </Carousel.Caption> */}
      </Carousel.Item>

      </Carousel>
  );
}

export default Carousels;