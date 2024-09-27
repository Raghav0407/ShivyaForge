import React from 'react'
import forgesol from '../Assets/img/forgesol.jpg'
import '../Styles/OurForgingSolutions.css'
import forgedrings from '../Assets/img/forged_rings.jpg'
import bearingrings from '../Assets/img/bearingring.jpg'
import bearingraces from '../Assets/img/bearingrace.webp'
import forgedcomponents from '../Assets/img/forgedcomponent.jpg'
import machineforged from '../Assets/img/machineforged.webp'
export const OurForgingSolutions = () => {
    return (
        <div className='ofs_container'>
            <div className='ofs_header'>
                <div className='header_style'>Our Forging Solutions</div>
                <div className='header2_style'>
                    Forging Solutions for Machine Tools, Heavy Electrical, Earth Moving, Oil <br />Exploration, and Railway Traction.
                    Led by experienced Technocrats
                </div>
            </div>
            <div className='ofs_data'>
                <div className='data_img1'>
                    <img src={forgedrings} alt='/' className='img1_org' />
                    <label className='img_label'>Forged Rings</label>
                </div>
                <div className='data_img1'>
                    <img src={bearingrings} alt='/' className='img1_org' />
                    <label className='img_label'>Bearing Rings</label>
                </div>
                <div className='data_img1'>
                    <img src={bearingraces} alt='/' className='img1_org' />
                    <label className='img_label'>Bearing Races</label>
                </div>
                <div className='data_img1'>
                    <img src={forgedcomponents} alt='/' className='img1_org' />
                    <label className='img_label'>Forged Components</label>
                </div>
                <div className='data_img1'>
                    <img src={machineforged} alt='/' className='img1_org' />
                    <label className='img_label'>Machine Forged Parts</label>
                </div>

            </div>

        </div>
    )
}
