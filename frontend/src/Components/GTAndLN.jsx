import React from 'react'
import "../Styles/GeneralStyling.css"

const GTAndLN = () => {
    return (
        <div className='container'>
            <div className='row pt-5 pb-5'>
                <div className="col">
                    <div className="gt-header m-3">
                        <div className="row g-0">
                            <div className='fs-5 col-3 fw-bold text-start d-flex align-items-center mt-3 mb-3'>
                                Get In Touch
                            </div>
                            <div className='col-9 mt-3 mb-3'>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className='p text-muted m-3'>
                    We specialize in steel, aluminum hot die forging manufacturing. The products Products applied to automobile transmission systems, gearbox systems, braking systems, fluid hydraulic systems, construction machinery, electrical machinery, and other forging parts.
                    </div>
                    <form action="" className='row g-4 m-3'>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder='Name'/>
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control" placeholder='Email'/>
                        </div>
                        <div className="col-md-6">
                            <input type="number" className="form-control" placeholder='Phone'/>
                        </div>
                        <div className="col-md-6">
                            <select className="form-control" >
                                <option selected>Select your question</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <textarea className="form-control" placeholder='Message'></textarea>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center">
                            <button class="btn btn-secondary" >Send Your Message</button>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <div className="ln-header m-3">
                        <div className="row g-0">
                            <div className='fs-5 col-3 fw-bold text-start d-flex align-items-center mt-3 mb-3'>
                                Latest News
                            </div>
                            <div className='col-9 mt-3 mb-3'>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row m-3">
                            <div className="col shadow">
                                <div className='mt-3'>
                                    <img className='img-fluid img-fixed' src="https://www.carparts.com/blog/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/06/automotive-battery-cable-300x300.jpg.webp" alt="" />
                                </div>
                                <div className='p-3 fw-bold mt-3 mb-3'>
                                    Reasonable Choice Of New Energy Gear Shift Forging And Heat Treatment Process
                                </div>
                            </div>
                            <div className="col shadow">
                                <div className='mt-3'>
                                    <img className='img-fluid img-fixed' src="https://www.carparts.com/blog/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/06/automotive-battery-cable-300x300.jpg.webp" alt="" />
                                </div>
                                <div className='p-3 fw-bold mt-3 mb-3'>
                                    Reasonable Choice Of New Energy Gear Shift Forging And Heat Treatment Process
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default GTAndLN