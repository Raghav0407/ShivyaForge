import React from 'react';
import Button from 'react-bootstrap/Button';
import "../Styles/HotForging.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Hotforging = (props) => {
    const { flag, btn_name, img, title, description } = props;

    return (
        <Container className="animated-container" style={{ marginLeft: 'auto', marginRight: 'auto', width: "90%", height: "auto" }}>
            <Row className="flex-wrap">
                {/* Conditional rendering based on flag */}
                {flag ? (
                    <>
                        <Col xs={12} md={6} className="hot-forging-animated-col" style={{ backgroundColor: 'white', padding: "20px" }}>
                            <Row style={{ justifyContent: 'center' }}>
                                <Button variant="primary" style={{ marginRight: "30px", marginTop: "30px" }}>
                                    {btn_name}
                                </Button>
                            </Row>
                            <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image src={img} alt="Hot-Die" style={{ height: 'auto', padding: '20px', marginRight: "30px" }} />
                            </Row>
                        </Col>

                        <Col xs={12} md={6} className="hot-forging-animated-col" style={{ backgroundColor: 'white', padding: "20px" }}>
                            <Row style={{ marginTop: "30px" }}>
                                <h1>{title}</h1>
                            </Row>
                            <Row>
                                <p style={{ textAlign: 'justify', fontSize: "13px", color: "grey" }}>
                                    {description}
                                </p>
                            </Row>
                        </Col>
                    </>
                ) : (
                    <>
                        <Col xs={12} md={6} className="hot-forging-animated-col" style={{ backgroundColor: 'white', padding: "20px" }}>
                            <Row style={{ marginTop: "30px" }}>
                                <h1>{title}</h1>
                            </Row>
                            <Row>
                                <p style={{ textAlign: 'justify', fontSize: "13px", color: "grey" }}>
                                    {description}
                                </p>
                            </Row>
                        </Col>

                        <Col xs={12} md={6} className="hot-forging-animated-col" style={{ backgroundColor: 'white', padding: "20px" }}>
                            <Row style={{ justifyContent: 'center' }}>
                                <Button variant="primary" style={{ marginRight: "30px", marginTop: "30px" }}>
                                    {btn_name}
                                </Button>
                            </Row>
                            <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image src={img} alt="Hot-Die" style={{ height: 'auto', padding: '20px', marginRight: "30px" }} />
                            </Row>
                        </Col>
                    </>
                )}
            </Row>
        </Container>
    );
}
