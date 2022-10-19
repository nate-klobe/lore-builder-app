import React, { Component } from 'react';
import { Link } from "react-router-dom";
import StoryCard from './story-card.component';



function NewStoryButton() {
    return(
        <Link to = '/stories/create'>
            <button>New Story</button>
        </Link>
    );
}

class Stories extends Component {
    render() {
        return (
            <div>
                <StoryCard/>
                <br/>
                <NewStoryButton/>
                
            </div>
        );
    }
}

export default Stories;