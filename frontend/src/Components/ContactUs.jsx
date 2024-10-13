import React, { useState } from 'react'
import '../Styles/ContactUs.css';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'
const ContactUs = () => {
    const [data,setData] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    });

    const submitChange = ((e)=>{
    //  e.preventDefault();
     const {name,value} = e.target;
     setData({
        ...data,[name]:value
     })
     console.log(data);

    })

    const submitButton = (e) => {
        e.preventDefault();
    
        // Construct the mailto link
        const mailtoLink = `mailto:info@shivyaforge.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
    
        // Open the user's email client
        window.location.href = mailtoLink;
    
        // Clear the form
        setData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      };
    return (
        <div className='contactus_container'>
            <div className='contain_header'>
                <div className='first_header'>
                    <div className='first_image'>
                        <MailIcon style={{ width: "60px", height: "60px", color: "orange" }} />
                    </div>
                    <div className='first_text'>
                        Have any Questions?<br />info@shivyaforge.com
                    </div>
                </div>
                <div className='first_header'>
                    <div className='first_image'>
                        <SendToMobileIcon style={{ width: "60px", height: "60px", color: "orange" }} />
                    </div>
                    <div className='first_text'>
                        Mobile<br />7600554583
                    </div>
                </div>
                <div className='first_header'>
                    <div className='first_image'>
                        <CallIcon style={{ width: "60px", height: "60px", color: "orange" }} />
                    </div>
                    <div className='first_text'>
                        Telephone<br />7600554583
                    </div>
                </div>
            </div>
            <div className='contain_footer'>
                <div className='contain_left'>
                    <div className='left_top'>
                        <div className='left_top1'>
                            Get in Touch With Us
                        </div>
                        <div className='left_top2'>
                            If you got any questions, please do not hesitate to send us a message.<br />
                            We reply within 24 hours!
                        </div>
                    </div>
                    <div className='left_top'>
                        <div className='left_top1'>
                            Our Factory
                        </div>
                        <div className='left_top2'>
                        K-401, Krish Gold, Ankur Chokadi, New India Colony, Ankur Tenament, Nikol, Ahmedabad, Gujarat 382350
                        </div>
                    </div>
                    <div className='left_top'>
                        <div className='left_top3'>
                            Our Profiles in social media:
                        </div>
                        <div className='left_top4'>
                            <div className='left_top4_img'>
                               <Link to="https://www.facebook.com/shivyaforge"><FacebookIcon /></Link>
                            </div>
                            <div className='left_top4_img'>
                               <Link to="https://shivyaforge.com/"> <GoogleIcon /></Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='contain_right'>
                    <form className='message_form' onSubmit={submitButton}>
                        <div className='inputname'>
                            <label for="name">Name:</label>
                            <input type='text' id="name" name="name" value={data.name} placeholder='Enter Your Name' onChange={submitChange}/>
                        </div>
                        <div className='inputname'>
                            <label for="email">Email:</label>
                            <input type='email' id="email" name="email"  value={data.email} placeholder='Enter Email' onChange={submitChange}/>
                        </div>
                        <div className='inputname'>
                            <label for="subject">Subject:</label>
                            <input type='text' id="subject" name="subject" value={data.subject} placeholder='Enter Subject' onChange={submitChange}/>
                        </div>
                        <div className='inputname'>
                            <label for="message">Message:</label>
                            <textarea id="message" rows="5" cols="30"  value={data.message}  name="message" placeholder='Enter your message' onChange={submitChange}></textarea>
                        </div>
                      <div className='inputname'>
                        <Button variant='contained' type="submit" style={{width:"40%",margin:"auto",background:"orange"}}>
                            Submit
                        </Button>
                      </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ContactUs