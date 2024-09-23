import React, { useState } from 'react'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import shivyalogo from '../Assets/img/shivyalogo.png'
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
      <div className='navbar1_container'>
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
      </div>
      <div className='navbar2_container'>
        <div className='nav2_t1'>
          <div className='t1_img'>
            <LogoDevIcon style={{ height: "50px", width: "50px", marginRight: "10px" }} /> </div>
          <div className='t1_text'>
            SHIVYA FORGING <br />INDIA
          </div>
        </div>
        <div className='nav2_t2'>
          <Link to="/" className='t2_link'>Home</Link>
        </div>
        <Divider orientation="vertical" flexItem variant='middle' className='nav2_div' />
        <div className='nav2_t2_new'>
          <div className='link_t2'>
            <Link to="/" className='t2_link'>Hot Forging Components and Parts</Link>
          </div>
          <div className='t2_button'>
            <ArrowDropDownIcon style={{ width: "50px", height: "50px", marginTop: "10px" }} onClick={handlePartClick} />
          </div>
        </div>
        <Divider orientation="vertical" flexItem variant='middle' className='nav2_div' />
        <div className='nav2_t2'>
          <Link to="/" className='t2_link'>Product Show</Link>
        </div>
        <Divider orientation="vertical" flexItem variant='middle' className='nav2_div' />
        <div className='nav2_t2'>
          <Link to="/" className='t2_link'>About Us</Link>
        </div>
        <Divider orientation="vertical" flexItem variant='middle' className='nav2_div' />
        <div className='nav2_t2'>
          <Link to="/" className='t2_link'>Contact Us</Link>
        </div>
        <div className='nav2_t2'>
          <Button variant="outlined" startIcon={<SendIcon />}>Get a Quote</Button>
        </div>
        {menu ? <div className='nav2_menu'><CancelIcon style={{ height: "50px", width: "50px" }} onClick={handleMenuClick} /></div> : <div className='nav2_menu'>
          <MenuIcon style={{ height: "50px", width: "50px" }} onClick={handleMenuClick} />
        </div>}


      </div>
      {
        menu ? <div className='nav2_menu_data'>
          <div className='nav2_t2_menu'>
            <Button variant="contained" startIcon={<SendIcon />} className='cross_quote' >Get a Quote</Button>
          </div>
          <Divider orientation="horizontal" flexItem variant='middle' />

          <div className='nav2_t2_menu'>
            <Link to="/" className='t2_link'>Home</Link>
          </div>
          <Divider orientation="horizontal" flexItem variant='middle' />
          <div className='nav2_t2_menu'>
            <Link to="/" className='t2_link' onClick={handlePartClick}>Hot Forging Components and Parts</Link>
          </div>
          {
            partClick ? <div className='part1_dropdown'>
              <div className='part1_text'>
                Automobile Parts
              </div>
              <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
              <div className='part1_text'>
                Construction Parts
              </div>
              <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
              <div className='part1_text'>
                Aluminium Forgings for New Energy Vehicles
              </div>
              <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
              <div className='part1_text'>
                Agricultural and Forestory Machinery Parts
              </div>
              <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
              <div className='part1_text'>
                Electric Bicycles Parts
              </div>
              <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
              <div className='part1_text'>
                Hardware Tools
              </div></div> : <></>
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
      {
        partClick ?
          <div className='part_dropdown'>
            <div className='part1_text'>
              Automobile Parts
            </div>
            <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
            <div className='part1_text'>
              Construction Parts
            </div>
            <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
            <div className='part1_text'>
              Aluminium Forgings for New Energy Vehicles
            </div>
            <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
            <div className='part1_text'>
              Agricultural and Forestory Machinery Parts
            </div>
            <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
            <div className='part1_text'>
              Electric Bicycles Parts
            </div>
            <Divider orientation="horizontal" flexItem className='nav2_div_menu' />
            <div className='part1_text'>
              Hardware Tools
            </div>
          </div> : <></>
      }

    </div>
  )
}

export default Navbar