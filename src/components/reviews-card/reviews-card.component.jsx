import React from 'react';
import './reviews-card.style.css';
import { Card } from 'react-bootstrap'
// import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit'

const ReviewsCard = (reviews) => {
    return(
        <div className="rev">
            <img src={reviews.img}></img>
            <h1>{reviews.name}</h1>
            <span>{reviews.country}</span>
            <p>{reviews.description}</p>
            <img className="countryimg" src="https://www.varian.com/themes/custom/varian/webpack/components/language-selector/images/flags/united-states-of-america.png"/>
        </div>
        
    )
}

export default ReviewsCard;