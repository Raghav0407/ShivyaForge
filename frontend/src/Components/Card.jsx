import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Card.css';
function CardComponent(props) {
    const { title, photo } = props;
    
    return (
        <Card className="mb-4" style={{ width: '100%', maxWidth: '300px' }}> {/* Set maxWidth for responsiveness */}
            <Card.Img 
                variant="top" 
                src={photo} 
                alt="images" 
                style={{ objectFit: 'cover', height: '150px' }} 
            />
            <Card.Body>
                <Card.Title style={{ marginTop: '10px' , textAlign:"center" }}>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;
