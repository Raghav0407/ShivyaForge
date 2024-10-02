import "../Styles/AboutusPart2.css";
import React ,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import usa from "../Assets/img/flags/us.svg";
import canada from "../Assets/img/flags/ca.svg";
import europe from "../Assets/img/flags/fr.svg";
import mexico from "../Assets/img/flags/mx.svg";
import singapure from "../Assets/img/flags/sg.svg";
import { Button } from '@mui/material';
export const AboutusPart2 = () => {
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
        <Container fluid className="aboutuspart2-container">
            <Row className="aboutuspart2-row no-gutters"> {/* Ensure no gaps between columns */}
                {/* First Column - Left */}
                <Col xs={12} md={6} className="aboutuspart2-column" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="aboutuspart2-column-content">
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
                        <Button variant='contained' type="submit" style={{width:"40%",margin:"auto"}}>
                            Submit
                        </Button>
                      </div>
                    </form>

                </div>
                    </div>
                </Col>

                {/* Second Column - Right */}
                <Col xs={12} md={6} className="aboutuspart2-column" style={{ backgroundColor: '#e9ecef' }}>
                    <div className="aboutuspart2-column-content">
                        <h1 style={{ fontWeight: "60px", textAlign: "left", marginLeft: "10px" }}>Why Choose Us</h1>
                        <p style={{ fontSize: "18px", textAlign: "justify", marginLeft: "5px" }}>
                            At SHIVYA FORGE, we prioritize ultimate customer satisfaction through quality products and timely delivery. Our commitment to integrity fosters fair relationships with customers and suppliers alike. We value our employees, promoting a rewarding work environment that drives exceptional results. Partner with us for excellence in manufacturing and service!
                        </p>
                        <h2 style={{ marginLeft: "10px", textAlign: "left" }}>Our Valued Customers</h2>
                        <div className="flag-container">
                            {/* Flag Images */}
                            <img src={usa} alt="USA Flag" className="aboutuspart2-flag" />
                            <img src={canada} alt="Canada Flag" className="aboutuspart2-flag" />
                            <img src={europe} alt="Europe Flag" className="aboutuspart2-flag" />
                            <img src={mexico} alt="Mexico Flag" className="aboutuspart2-flag" />
                            <img src={singapure} alt="Singapore Flag" className="aboutuspart2-flag" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
