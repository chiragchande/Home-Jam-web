import React from 'react';
import './upcoming-card.style.css';
import { Card } from 'react-bootstrap';
import Vector from '../../assets/ticket.png';



const UpcomingCard = (card) => {
    return(
        <div className="another">
            <Card style={{ width: '18rem', background: 'none', height: 400 }}>
                <Card.Img variant="top" src={card.img} />
                <Card.Body style={{background: '#111229'}}>
                <Card.Title style={{  background: '#E5C558', color: 'black',  maxWidth: 'max-content' }}>{card.type}</Card.Title>
                <Card.Text style={{ color: '#FFFFFF', fontFamily: 'Libre Baskerville', float: 'left', fontSize: 20 }}>
                    {card.name}
                </Card.Text>  
                <Card.Text style={{ marginTop: 45, fontSize: 20, position: 'absolute', fontFamily: 'Nunito', color: '#0259EB' }}>More Info</Card.Text>
                <p className="arrow"> &rarr;</p>
                <img className="tickit" src={Vector}/>
                </Card.Body>                
            </Card>
        </div>
       
    )
}

export default UpcomingCard;