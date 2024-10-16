import React from 'react'
import forgesol from '../Assets/img/forgesol.jpg'
import '../Styles/OurForgingSolutions.css'
import forgedrings from '../Assets/img/forged_rings.jpg'
import bearingrings from '../Assets/img/bearingring.jpg'
import bearingraces from '../Assets/img/bearingrace.webp'
import forgedcomponents from '../Assets/img/forgedcomponent.jpg'
import machineforged from '../Assets/img/machineforged.webp'
import first from '../Assets/img/19.jpg'
import second from '../Assets/img/20.jpg'
import third from '../Assets/img/21.jpg'
 const OurForgingSolutions = () => {
    return (
        <div className='ofs_container'>
            <div className='ofs_header'>
                <div className='header_style' style={{color:"orange"}}>Our Customized Forging Solutions</div>
                <div className='header2_style'>
                Customized Forging Solutions for Automotive, Agricultural Machinery, Bearings, Oil <br/>
                and Gas, Gears & Transmission and other Mechanical Industries.
                </div>
            </div>
            <div className='ofs_data'>
                <div className='data_img1'>
                    <img src={first} alt='/' className='img1_org' />
                    <label className='img_label'>Forged Rings</label>
                </div>
                <div className='data_img1'>
                    <img src={second} alt='/' className='img1_org' />
                    <label className='img_label'>Forged Components</label>
                </div>
                <div className='data_img1'>
                    <img src={third} alt='/' className='img1_org' />
                    <label className='img_label'>Machined Forged Parts</label>
                </div>

            </div>

        </div>
    )
}

export default OurForgingSolutions;