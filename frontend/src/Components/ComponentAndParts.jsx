import React from 'react'
import "../Style/GeneralStyling.css"
import machineforged from '../Assets/img/machineforgedcomp.jpg'
function ComponentAndParts() {
    return (
        <div className='container'>
            <div className='cp-conatiner-up pt-5'>
                <div className='h2 text-center fw-bold text mb-3 p-2'>
                    HOT FORGING COMPONENTS AND PARTS
                </div>
                <div className='p text-center text-muted'>
                    We, SHIVYA FORGE, are a Leading Manufacturer and Exporter of <br /> Forged Rings, Bearing Rings, Bearing Races, Forged Components
                    and Machined Forged Parts in Gujarat, INDIA.

                </div>
            </div>
            <div className="cp-container-bottom pb-5">
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className='m-3 p-3'>
                                <img className='img-fluid img-fixed' src="https://img2.exportersindia.com/product_images/bc-full/2021/3/4567785/force-automotive-parts-1616649764-5766618.jpeg" alt="" />
                            </div>
                            <div className='h4 text-center m-3'>
                                Forged Rings
                            </div>
                            <div className='p text-center text-muted m-3'>
                                Including Forged Rolled Rings,
                                Industrial Forged Rings,
                                Auto Forged Rings,
                                Seamless Forged Rings,
                                RX Ring Joint Gasket,
                                DX Ring Joint Gasket,
                                Ring Forged Components, SS Ring Joint Gasket
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className='m-3 p-3'>
                                <img className='img-fluid img-fixed' src="https://plus.unsplash.com/premium_photo-1661964291917-b20c2648fac6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwcGFydHN8ZW58MHx8MHx8fDA%3D" alt="" />
                            </div>
                            <div className='h4 text-center m-3'>
                                Forged Components
                            </div>
                            <div className='p text-center text-muted m-3'>


                                Various Types of Automotive Components, Agricultural Machinery Components including

                                Steering Yokes,
                                Joints,
                                Shaft Housing,
                                Collector Ring,
                                Crankshaft,

                                Clutch Hub,
                                Trunion,
                                Gear Blank,
                                Cross Lever,
                                Jack Nut
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className='m-3 p-3'>
                                <img className='img-fluid img-fixed' src={machineforged} alt="" />
                            </div>
                            <div className='h4 text-center m-3'>
                                Machine Forged Components
                            </div>
                            <div className='p text-center text-muted m-3'>
                                Including Oval Flange
                                Rocker Arm,
                                Clevis,
                                Castor Plat,
                                Axle Rod,

                                Axle Hub, Track Arm,
                                U.J. Cross,
                                Hydraulic Nut,
                                Idler Drop Arm,
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentAndParts