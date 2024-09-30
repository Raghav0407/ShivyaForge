import React from 'react'
import '../Styles/Banner.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Banner = (props) => {
  return (
    <div className='banner_container'>
        <div className='banner_header'>
            {props.title}
        </div>
        <div className='banner_data'>
           {props.data}
        </div>
        <div>
           <Link to='/contactus'><Button className='banner_button'>Get In Touch</Button></Link> 
        </div>
    </div>
  )
}

export default Banner