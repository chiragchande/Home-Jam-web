import React from 'react';
import UpcomingCard from '../upcoming-card/upcoming-card.component';
import './upcoming.style.css';
import CARD_DATA from './upcoming-card.data';

class Upcoming extends React.Component{
    // Constuctor 
    constructor(props){
        super(props);

    this.state = {
        cardCollections: CARD_DATA, // collect data from CARD_DATA
    }
    console.log(CARD_DATA);
    }
    render() {
        const {cardCollections} = this.state // state maintain
        return(
            <div className="containt">
                <div className="texts">
                <p>Upcoming Shows</p>
                <span>View All</span>
                </div>
                
                {/* Div of Card Loop goes here*/}
                <div className="cards">
                    {
                        // Upcoming Card Data goes here
                        cardCollections.map(UpcomingCard)
                    }
                </div>
                
            </div>
        )
    }
}

export default Upcoming; // export component function