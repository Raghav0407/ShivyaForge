import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Footer.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import leaflet from 'leaflet'

const Footer = () => {
  const mapRef = useRef(null);
  const isMapInitialized = useRef(false); // Add this to track if map is already initialized

  useEffect(() => {
    if (!isMapInitialized.current) {
      // Initialize the map only if it hasn't been initialized yet
      mapRef.current = leaflet.map('map').setView([23.056839320922737, 72.67482013068677], 13);
      leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(mapRef.current);

      const marker = leaflet.marker([23.056839320922737, 72.67482013068677]).addTo(mapRef.current);

      isMapInitialized.current = true; // Mark the map as initialized
    }
  }, []);
  return (
    <div className='footerhead_container'>
      <div className='footer_container'>
      
        <div className='footer2_container'>
          <div className='footer1_header'>
            Contact
          </div>
          <div className='footer1_list'>
            <div className='list1_icon'>
              <ArrowForwardIosIcon style={{ height: "15px", width: "15px" }} />
            </div>
            <div className='list1_text'>
              <Link to="info@shivyaforge.com" className='icon_list1'>Email : info@shivyaforge.com</Link>
            </div>
          </div>
          <div className='footer1_list'>
            <div className='list1_icon'>
              <ArrowForwardIosIcon style={{ height: "15px", width: "15px" }} />
            </div>
            <div className='list1_text'>
              <Link to="https://www.shivyaforge.com" className='icon_list1'>Website : www.shivyaforge.com</Link>
            </div>
          </div>
        </div>
        <div className='footer3_container'>
          <div className='footer1_header'>
            Locate Us
          </div>
          <div id="map" ref={mapRef}>
          </div>
        </div>
        <div className='footer1_container'>
          <div className='footer1_header'>
            Quick Links
          </div>
          <div className='footer1_list'>
            <div className='list1_icon'>
              <ArrowForwardIosIcon style={{ height: "15px", width: "15px" }} />
            </div>
            <div className='list1_text'>
              <Link to="/" className='icon_list1'>Home</Link>
            </div>
          </div>
        
          <div className='footer1_list'>
            <div className='list1_icon'>
              <ArrowForwardIosIcon style={{ height: "15px", width: "15px" }} />
            </div>
            <div className='list1_text'>
              <Link to="components/forgedrings" className='icon_list1'>Forging Products</Link>
            </div>
          </div>
          <div className='footer1_list'>
            <div className='list1_icon'>
              <ArrowForwardIosIcon style={{ height: "15px", width: "15px" }} />
            </div>
            <div className='list1_text'>
              <Link to="/productshow" className='icon_list1'>Product Show</Link>
            </div>
          </div>
          <div className='footer1_list'>
            <div className='list1_icon'>
              <ArrowForwardIosIcon style={{ height: "15px", width: "15px" }} />
            </div>
            <div className='list1_text'>
              <Link to="/" className='icon_list1'>Agents and Distributors</Link>
            </div>
          </div>
          <div className='footer1_list'>
            <div className='list1_icon'>
              <ArrowForwardIosIcon style={{ height: "15px", width: "15px" }} />
            </div>
            <div className='list1_text'>
              <Link to="/aboutus" className='icon_list1'>About Us</Link>
            </div>
          </div>
          <div className='footer1_list'>
            <div className='list1_icon'>
              <ArrowForwardIosIcon style={{ height: "15px", width: "15px" }} />
            </div>
            <div className='list1_text'>
              <Link to="/contactus" className='icon_list1'>Contact Us</Link>
            </div>
          </div>
        </div>
      
      </div>
     
    </div>
  )
}

export default Footer