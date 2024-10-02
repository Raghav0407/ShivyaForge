import React from 'react';
import '../Styles/Poster.css'; // Make sure to create this CSS file for styling
import posterphoto from '../Assets/img/poster_back.avif'
import { Link } from 'react-router-dom';
function Poster() {
  return (
    <div className="poster-container">
      <img src={posterphoto} alt="Poster" className="poster-image" />
      <div className="poster-content">
        <h1 className="poster-heading">Ready to Forge A Partnership With Shivyaforge</h1>
        <p className="poster-description">Get in Touch Today for Expert Solution Tailored to Your Needs</p>
        <Link to="/contactus"><button className="poster-button">Get In Touch</button></Link>
      </div>
    </div>
  );
}

export default Poster;
