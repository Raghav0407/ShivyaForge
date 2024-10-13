import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import shivyalogo from '../Assets/img/logo.png'
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import '../Styles/Navbar.css'
const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const [partClick, setPartClick] = useState(false);

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
      <div className='navbar2_container'>
        <div className='nav2_t2_img'>
          <img src={shivyalogo} alt='/' className='t1_img' />
        </div>
        <div className='nav2_t2'>
          <Link to="/" className='t2_link'>Home</Link>
        </div>
        <div className='nav2_t2' style={{ position: 'relative' }}>
          <div className='t2_link' onClick={handlePartClick}> Forging Products</div>
          {partClick && (
            <div className='part_dropdown' style={{ position: 'absolute', top: '100%', left: 0 }}>
              <div className='part1_text'>
                <Link to='/components/forgedrings' style={{ textDecoration: "none", color: "inherit" }}>Forged Rings</Link></div>
              <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
              <div className='part1_text'>
                <Link to='/components/forgedcomp' style={{ textDecoration: "none", color: "inherit" }}>Forged Components</Link></div>
            </div>
          )}
        </div>
        <div className='nav2_t2'>
          <Link to="/productshow" className='t2_link'>Product Show</Link>
        </div>
        <div className='nav2_t2'>
          <Link to="/productshow" className='t2_link'>Agent and Distributor</Link>
        </div>
        <div className='nav2_t2'>
          <Link to="/aboutus" className='t2_link'>About Us</Link>
        </div>
        <div className='nav2_t2'>
          <Link to="/contactus" className='t2_link'>Contact Us</Link>
        </div>
        {/* <div className='nav2_t2'>
          <Link to='/contactus'><Button variant="contained" startIcon={<SendIcon />} style={{ backgroundColor: "orange", marginRight: "20px", color: "black", fontFamily: "Montserrat, sans-serif" }}>Get a Quote</Button></Link>
        </div> */}
        {menu ? <div className='nav2_menu'><CancelIcon style={{ height: "50px", width: "50px", color: "black" }} onClick={handleMenuClick} /></div> : <div className='nav2_menu'>
          <MenuIcon style={{ height: "50px", width: "50px", color: "black" }} onClick={handleMenuClick} />
        </div>}


      </div>
      {
        menu ? <div className='nav2_menu_data'>
          <div className='nav2_t2_menu'>
            <Link to='/contactus'><Button variant="contained" startIcon={<SendIcon />} className='cross_quote' style={{
              backgroundColor: "orange"
            }}>Get a Quote</Button></Link>
          </div>
          <Divider orientation="horizontal" flexItem variant='middle' />

          <div className='nav2_t2_menu'>
            <Link to="/" className='t2_link'>Home</Link>
          </div>
          <Divider orientation="horizontal" flexItem variant='middle' />
          <div className='nav2_t2_menu'>
            <div className='t2_link' onClick={handlePartClick}>Hot Forging Components</div>
          </div>
          {
            partClick ? <div className='part1_dropdown'>
              <div className='part1_text'>
                <Link to='/components/forgedrings' style={{ textDecoration: "none", color: "inherit" }}>Forged Rings</Link>
              </div>
              <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
              <div className='part1_text'>
                <Link to='/components/forgedcomp' style={{ textDecoration: "none", color: "inherit" }}>Forged Components</Link>
              </div>
              <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
              <div className='part1_text'>
                <Link to='/components/machforgedcomp' style={{ textDecoration: "none", color: "inherit" }}> Machine Forged Components    </Link>          </div>
            </div> : <></>
          }
          <Divider orientation="horizontal" flexItem variant='middle' className='nav2_div_menu' />
          <div className='nav2_t2_menu'>
            <Link to="/productshow" className='t2_link'>Product Show</Link>
          </div>
          <Divider orientation="horizontal" flexItem variant='middle' className='nav2_div_menu' />
          <div className='nav2_t2_menu'>
            <Link to="/aboutus" className='t2_link'>About Us</Link>
          </div>
          <Divider orientation="horizontal" flexItem variant='middle' className='nav2_div_menu' />
          <div className='nav2_t2_menu'>
            <Link to="/contactus" className='t2_link'>Contact Us</Link>
          </div>
        </div> : <></>
      }

    </div>
  )
}

export default Navbar;