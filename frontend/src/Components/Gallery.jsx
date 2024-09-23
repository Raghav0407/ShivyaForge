import React, { useState } from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import { FaSearch, FaTimes, FaLink } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Gallery.css';
import img1 from '../Assets/img/gallimg1.webp';
import img2 from '../Assets/img/gallimg2.webp';
import img3 from '../Assets/img/gallimg3.webp';
import img4 from '../Assets/img/gallimg4.webp';

const images = [img1, img2, img3, img4];

const Gallery = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShowCarousel = (index) => {
    setCurrentIndex(index);
    setShowCarousel(true);
  };

  const handleCloseCarousel = () => setShowCarousel(false);

  const handleLinkClick = (index) => {
    alert(`Link clicked for image ${index + 1}`);
  };

  return (
    <div className='gallery-container'>
      <Container>
        <Row className="justify-content-center">
          {images.map((img, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="gallery-item">
              <Image src={img} alt={`Image ${index + 1}`} className="gallery-image" />
              <div className="gallery-icon-container">
                <FaSearch 
                  className="gallery-search-icon" 
                  onClick={() => handleShowCarousel(index)} 
                />
                <FaLink 
                  className="gallery-link-icon" 
                  onClick={() => handleLinkClick(index)} 
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {showCarousel && (
        <div className="gallery-carousel-overlay">
          <FaTimes className="gallery-close-icon" onClick={handleCloseCarousel} />
          <Carousel
            activeIndex={currentIndex}
            onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}
            className="image-carousel"
            interval={1000}
          >
            {images.map((img, index) => (
              <Carousel.Item key={index}>
                <Image src={img} alt={`Image ${index + 1}`} className="carousel-image" fluid />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Gallery;
