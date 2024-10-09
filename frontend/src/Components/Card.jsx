import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Card.css';
function CardComponent(props) {
    const { title, photo } = props;
    
    return (
        <Card className="mb-3" style={{ width: '100%', maxWidth: '300px' ,border:"none"}}> {/* Set maxWidth for responsiveness */}
            <Card.Img 
                variant="top" 
                src={photo} 
                alt="images" 
                style={{ objectFit: 'cover', height: '150px' ,borderTopLeftRadius:"50px",borderBottomRightRadius:"50px",border:"4px solid orange"}} 
            />
            <Card.Body>
                <Card.Title style={{ textAlign:"left",fontSize:"20px",fontWeight:"600",color:"orange"}}>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;
