import React, { useEffect, useState } from 'react'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import shivyalogo from '../Assets/img/logo.png'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CancelIcon from '@mui/icons-material/Cancel';
import '../Styles/Navbar.css'
const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const [partClick, setPartClick] = useState(false);
  const [navbarBg,setNavbarBg] = useState('transparent');

  useEffect(()=>{
   
      const handleScroll = () => {
        const scrollPosition = window.scrollY; // Get the current scroll position
        if (scrollPosition > 100) { // Change color after scrolling down 100 pixels
          setNavbarBg('grey'); // Change to your desired color
        } else {
          setNavbarBg('transparent'); // Change back to original color
        }
      };
  
      window.addEventListener('scroll', handleScroll); // Add scroll listener
  
      return () => {
        window.removeEventListener('scroll', handleScroll); 
    }
  },[])
  const handleMenuClick = () => {
    console.log(menu, "click")
    setMenu(!menu);
  }
  const handlePartClick = () => {
    console.log(partClick, "partClicked")
    setPartClick(!partClick);
  }
  return (
    <div className='navbar_container'>
      {/* <div className='navbar1_container'>
        <div className='nav1_t1'>
          More Details for Hot Forging?
        </div>
        <div className='nav1_t2'>
          <div className='icon_t2'><PhoneEnabledIcon style={{ height: "20px", width: "20px", marginRight: "5px", marginTop: "5px", color: "white" }} /></div>
          <div className='t2_link'><a href='' alt="#" className='link_t2'>+86 23456789987</a></div>
        </div>
        <div className='nav1_t3'>
          <div className='icon_t2'><MailOutlineIcon style={{ height: "20px", width: "20px", marginRight: "5px", marginTop: "5px", color: "white" }} /></div>
          <div className='t2_link'>  <a href='' alt="#" className='link_t2'>info@shivyaforge.com</a> </div>
        </div>
      </div> */}
      <div className='navbar2_container'>
        <div className='nav2_t2_img'>
          <img src={shivyalogo} alt='/' className='t1_img' />
        </div>
        <div className='nav2_t2'>
          <Link to="/" className='t2_link'>Home</Link>
        </div>
        <div className='nav2_t2' style={{ position: 'relative' }}>
          <Link to="/" className='t2_link' onClick={handlePartClick}>Hot Forging Components</Link>
          {partClick && (
            <div className='part_dropdown' style={{ position: 'absolute', top: '100%', left: 0 }}>
              <div className='part1_text'>Forged Rings</div>
              <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
              <div className='part1_text'>Forged Components</div>
            </div>
          )}
        </div>
        <div className='nav2_t2'>
          <Link to="/" className='t2_link'>Product Show</Link>
        </div>
        <div className='nav2_t2'>
          <Link to="/" className='t2_link'>About Us</Link>
        </div>
        <div className='nav2_t2'>
          <Link to="/" className='t2_link'>Contact Us</Link>
        </div>
        <div className='nav2_t2'>
          <Button variant="contained" startIcon={<SendIcon />} style={{ backgroundColor: "orange", marginRight: "20px",color:"black",fontFamily: "Montserrat, sans-serif"}}>Get a Quote</Button>
        </div>
        {menu ? <div className='nav2_menu'><CancelIcon style={{ height: "50px", width: "50px", color: "black" }} onClick={handleMenuClick} /></div> : <div className='nav2_menu'>
          <MenuIcon style={{ height: "50px", width: "50px", color: "black" }} onClick={handleMenuClick} />
        </div>}


      </div>
      {
        menu ? <div className='nav2_menu_data'>
          <div className='nav2_t2_menu'>
            <Button variant="contained" startIcon={<SendIcon />} className='cross_quote' style={{
              backgroundColor: "orange"
            }}>Get a Quote</Button>
          </div>
          <Divider orientation="horizontal" flexItem variant='middle' />

          <div className='nav2_t2_menu'>
            <Link to="/" className='t2_link'>Home</Link>
          </div>
          <Divider orientation="horizontal" flexItem variant='middle' />
          <div className='nav2_t2_menu'>
            <Link to="/" className='t2_link' onClick={handlePartClick}>Hot Forging Components</Link>
          </div>
          {
            partClick ? <div className='part1_dropdown'>
              <div className='part1_text'>
                Forged Rings
              </div>
              <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
              <div className='part1_text'>
                Forged Parts
              </div>
            </div> : <></>
          }
          <Divider orientation="horizontal" flexItem variant='middle' className='nav2_div_menu' />
          <div className='nav2_t2_menu'>
            <Link to="/" className='t2_link'>Product Show</Link>
          </div>
          <Divider orientation="horizontal" flexItem variant='middle' className='nav2_div_menu' />
          <div className='nav2_t2_menu'>
            <Link to="/" className='t2_link'>About Us</Link>
          </div>
          <Divider orientation="horizontal" flexItem variant='middle' className='nav2_div_menu' />
          <div className='nav2_t2_menu'>
            <Link to="/" className='t2_link'>Contact Us</Link>
          </div>
        </div> : <></>
      }

    </div>
  )
}

export default Navbar;