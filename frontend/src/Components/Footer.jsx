import React,{useEffect, useRef} from 'react'
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
      <div className='footer1_container'>
        <div className='footer1_header'>
          Quick Links
        </div>
        <div className='footer1_list'>
          <div className='list1_icon'>
            <ArrowForwardIosIcon style={{height:"15px",width:"15px"}}/>
          </div>
          <div className='list1_text'>
            <Link to="/" className='icon_list1'>Home</Link>
          </div>
        </div>
        <div className='footer1_list'>
          <div className='list1_icon'>
          <ArrowForwardIosIcon style={{height:"15px",width:"15px"}}/>
          </div>
          <div className='list1_text'>
            <Link to="/" className='icon_list1'>Hot Forging Components and Parts</Link>
          </div>
        </div>
        <div className='footer1_list'>
          <div className='list1_icon'>
          <ArrowForwardIosIcon style={{height:"15px",width:"15px"}}/>
          </div>
          <div className='list1_text'>
            <Link to="/" className='icon_list1'>Product Show</Link>
          </div>
        </div>
        <div className='footer1_list'>
          <div className='list1_icon'>
          <ArrowForwardIosIcon style={{height:"15px",width:"15px"}}/>
          </div>
          <div className='list1_text'>
            <Link to="/" className='icon_list1'>About Us</Link>
          </div>
        </div>
        <div className='footer1_list'>
          <div className='list1_icon'>
          <ArrowForwardIosIcon style={{height:"15px",width:"15px"}}/>
          </div>
          <div className='list1_text'>
            <Link to="/" className='icon_list1'>Contact Us</Link>
          </div>
        </div>
      </div>
      <div className='footer2_container'>
      <div className='footer1_header'>
        Contact Information
      </div>
      <div className='footer1_list'>
      K-401, Krish Gold, Ankur Chokadi <br/>New India Colony,Ankur Tenament Nikol, <br/>Ahmedabad, Gujarat 382350
      </div>
      </div>
      <div className='footer3_container'>
        <div className='footer1_header'>
          Locate Us
        </div>
        <div id="map" ref={mapRef}>
        </div>        
      </div>
    </div>
    <div className='copyright_footer'>
      <hr/>
      <div className='copyright_text'>
        Copyright &copy; 2024 Shivya Forging Pvt Ltd., | Powered by India
      </div>
    </div>
    </div>
  )
}

export default Footer