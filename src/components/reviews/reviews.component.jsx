import React from 'react';
import ReviewsCard from '../reviews-card/reviews-card.component';
import REVIEW_DATA from'./reviews.data';
import  './reviews.style.css';

class Reviews extends React.Component{
    constructor(props){
        super(props);

    this.state = {
        reviewCollections: REVIEW_DATA
    }
    console.log(REVIEW_DATA);
    }
    render(){
        const {reviewCollections} = this.state // collect reviews data from reviewCollections
        return(            
            <div className="review">
                <div className="text">
                <h1>Reviews</h1>
                <p className="arrows">1/10  &larr;  &rarr;</p>
                </div>
                
                <div className="reviews">
                    {
                        // Reviews Card goes here
                        reviewCollections.map(ReviewsCard)
                    }
                </div>
            </div>
        )
    }
}

export default Reviews; 