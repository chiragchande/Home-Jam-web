import React from 'react';
import './circle.style.css';
import CIRCLE_DATA from './circle.data';
import Upcoming from '../upcoming/upcoming.component';
import Reviews from '../reviews/reviews.component';

class Circle extends React.Component{
    constructor(props){
        super(props);

    this.state = {
        collections: CIRCLE_DATA // get data from CRICLE_DATA
    }
    console.log(CIRCLE_DATA);
    }
    render() {
        const {collections} = this.state // Collect data from collections
        return(
            <>
            <div className="main">
                <div className="box">
                    {
                        // Circle loop goes here
                        collections.map(({id, ...otherCollectionProps}) => (
                            
                            <div className="circle">
                                <img className="icons" src={otherCollectionProps.icon}/>
                                <img className="star" src={otherCollectionProps.star}/>
                                <p>{otherCollectionProps.number}</p>
                                <p>{otherCollectionProps.title}</p>
                            </div>                        
                                                                                                              
                        ))
                    }
                </div>
                
            </div>
            <Upcoming></Upcoming>
            {/* <Reviews></Reviews> */}
            </>
        );
    }
}

export default Circle;