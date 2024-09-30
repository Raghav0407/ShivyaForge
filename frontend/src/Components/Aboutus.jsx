import React from 'react';
import { Container } from 'react-bootstrap';
import '../Styles/Aboutus.css'; // Import the CSS file
import {AboutusPart2} from './AboutusPart2';

const Aboutus = () => {
    return (
        <>
            {/* Black Section */}
            <Container fluid className="aboutus-black-section">
                <h1 className="aboutus-title">About Us</h1>
                <h3 className="aboutus-subtitle">Welcome to Shivyaforge</h3>
                <br />
                <p className="aboutus-paragraph">
                    SHIVYA FORGE is a leading manufacturer and exporter of forged flanges, fittings, rings, bearing components, and precision machined parts based in Gujarat, India.
                </p>
            </Container>

            {/* Overlapping Containers Parent */}
            <Container fluid className="aboutus-overlapping-parent">
                {/* First Overlapping Container */}
                <div className="aboutus-container">
                    <div className="aboutus-red-stripe" /> {/* Red Stripe */}
                    <h1 className="aboutus-container-title">Who Are We</h1>
                    <p className="aboutus-paragraph-justify">
                        We, SHIVYA FORGE, are a leading manufacturer and exporter of forged flanges, forged fittings, forged rings, bearing rings,
                        bearing races, forged components, precision machined components, and CNC turned parts in Gujarat, INDIA.
                        The company management team has over 23 years of experience in the forging industry.
                        With strong knowledge and experience in commercial and technical areas, we are able to manufacture and export quality
                        products as per customer requirements at the best competitive prices.
                    </p>
                </div>

                {/* Second Overlapping Container */}
                <div className="aboutus-container">
                    <div className="aboutus-red-stripe" /> {/* Red Stripe */}
                    <h1 className="aboutus-container-title">Our Values</h1>
                    <ul className="aboutus-list">
                        <li className="aboutus-list-item"><strong>Integrity</strong>: We insist on fair and honest business relationships with our customers and business partners. By this, we can grow together.</li>
                        <li className="aboutus-list-item"><strong>Customers</strong>: We value our customers and are dedicated to providing them quality products at the best competitive prices with timely delivery. We also promptly communicate with customers at each stage of order execution.</li>
                        <li className="aboutus-list-item"><strong>Suppliers</strong>: To develop only quality product suppliers by providing the best technical know-how and strictly following required industrial requirements, committed to following agreed payment terms.</li>
                        <li className="aboutus-list-item"><strong>Employees</strong>: We respect and value the contributions of our employees and are dedicated to creating a professionally challenging and personally rewarding work environment. With teamwork, we believe in delivering exceptional results to our customers.</li>
                    </ul>
                </div>

                {/* Third Overlapping Container */}
                <div className="aboutus-container">
                    <div className="aboutus-red-stripe" /> {/* Red Stripe */}
                    <h1 className="aboutus-container-title">Quality Assurance</h1>
                    <p className="aboutus-quality-assurance">At SHIVYA FORGE, we manufacture and
                        export quality products as per customers' 
                        industrial requirements.
                        We believe in
                        ultimate customer satisfaction, in terms of
                        quality and delivery.
                    </p>
                </div>
            </Container>
            
            <AboutusPart2 />
        </>
    );
};

export default Aboutus;
