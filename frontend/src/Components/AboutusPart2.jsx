import "../Styles/AboutusPart2.css";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import usa from "../Assets/img/flags/us.svg";
import canada from "../Assets/img/flags/ca.svg";
import europe from "../Assets/img/flags/fr.svg";
import mexico from "../Assets/img/flags/mx.svg";
import singapure from "../Assets/img/flags/sg.svg";

export const AboutusPart2 = () => {
    return (
        <Container fluid className="aboutuspart2-container">
            <Row className="aboutuspart2-row no-gutters"> {/* Ensure no gaps between columns */}
                {/* First Column - Left */}
                <Col xs={12} md={6} className="aboutuspart2-column" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="aboutuspart2-column-content">Column 1 Content</div>
                </Col>

                {/* Second Column - Right */}
                <Col xs={12} md={6} className="aboutuspart2-column" style={{ backgroundColor: '#e9ecef' }}>
                    <div className="aboutuspart2-column-content">
                        <h1 style={{ fontWeight: "60px", textAlign: "left", marginLeft: "10px" }}>Why Choose Us</h1>
                        <p style={{ fontSize: "18px", textAlign: "justify", marginLeft: "5px" }}>
                            At SHIVYA FORGE, we prioritize ultimate customer satisfaction through quality products and timely delivery. Our commitment to integrity fosters fair relationships with customers and suppliers alike. We value our employees, promoting a rewarding work environment that drives exceptional results. Partner with us for excellence in manufacturing and service!
                        </p>
                        <h2 style={{ marginLeft: "10px", textAlign: "left" }}>Our Valued Customers</h2>
                        <div className="flag-container">
                            {/* Flag Images */}
                            <img src={usa} alt="USA Flag" className="aboutuspart2-flag" />
                            <img src={canada} alt="Canada Flag" className="aboutuspart2-flag" />
                            <img src={europe} alt="Europe Flag" className="aboutuspart2-flag" />
                            <img src={mexico} alt="Mexico Flag" className="aboutuspart2-flag" />
                            <img src={singapure} alt="Singapore Flag" className="aboutuspart2-flag" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
