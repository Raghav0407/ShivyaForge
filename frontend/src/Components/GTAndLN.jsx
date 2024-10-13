import React, { useState } from 'react'
import "../Styles/GeneralStyling.css"
import manufacture from '../Assets/img/manufacture.jpg'
import engineering from '../Assets/img/engineering.jpg'

const GTAndLN = () => {
    const [data,setData] = useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })

    const onChange=(e)=>{
        const {name,value} = e.target;
        setData({...data,[name]:value});
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        const mailtoLink = `mailto:info@shivyaforge.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
    
        // Open the user's email client
        window.location.href = mailtoLink;
    
        // Clear the form
        setData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
    }
    return (
        <div className='container'>
            <div className='row pt-5 pb-5'>
                <div className="col">
                    <div className="gt-header m-3">
                        <div className="row g-0">
                            <div className='fs-6 col-3 fw-bold text-start d-flex align-items-center mt-3 mb-3' style={{ color: 'orange' }}>
                                Get In Touch
                            </div>
                            <div className='col-9 mt-3 mb-3'>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='p text-muted m-1 col'>
                            At <span className='fw-bold'>SHIVYA FORGE</span>, we Manufacture and
    Export <span className='fw-bold'>Quality Products</span> as per Customers /
    Industrial requirements. We believe in
    ultimate customer satisfaction, in terms of
                            <span className='fw-bold'>Quality</span> and <span className='fw-bold'>Delivery</span>.
                        </div>
                        <form onSubmit={onSubmit} className='row g-2 m-1 col'>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder='Name' name="name" value={data.name} onChange={onChange}/>
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" placeholder='Email' name="email" value={data.email} onChange={onChange}/>
                            </div>
                            <div className="col-md-6">
                                <input type="number" className="form-control" placeholder='Phone' name="phone" value={data.phone} onChange={onChange} />
                            </div>
                            <div className="col-md-12">
                                <textarea className="form-control" placeholder='Message' name="message" value={data.message} onChange={onChange}></textarea>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                                <button class="btn btn-secondary" style={{ background: 'orange' }} type='submit'>Send Your Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col">
                    <div className="ln-header m-3">
                        <div className="row g-0">
                            <div className='fs-6 col-8 fw-bold text-start d-flex align-items-center mt-3 mb-3' style={{ color: 'orange' }}>
                                Our Values
                            </div>
                            <div className='col-4 mt-3 mb-3'>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row m-3">
                            <div className="col p">
                                We insist on fair and
                                honest business
                                relationship with our
                                Customers and
                                business partners. By
                                this we can grow
                                together.
                            </div>
                            <div className="col p">
                                We value our
                                Customers and
                                dedicated to provide
                                them quality products
                                at best competitive
                                prices with timely
                                delivery. Also to
                                promptly
                                communicate with
                                Customers at each
                                stage of order
                                execution.
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default GTAndLN