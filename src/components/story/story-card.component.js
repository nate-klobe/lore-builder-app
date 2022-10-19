import React, { Component } from 'react';
import { Link } from "react-router-dom";


function ViewStoryButton() {
    return(
        <Link to = '/story'>
            <button>View</button>
        </Link>
    );
}

function UpdateStoryButton() {
    return(
        <Link to = '/story'>
            <button>Edit</button>
        </Link>
    );
}

function DeleteStoryButton() {
    return(
        <Link to = '/story'>
            <button>Delete</button>
        </Link>
    );
}

class StoryCard extends Component {
    render() {
        return (
            <div
                style={
                    {
                        border: '2px solid black',
                        height: '30%',
                        width: '30%'
                    }
                }>
                <h2>Story Title</h2>
                <p>This is a Story</p>
                <ViewStoryButton/>
                <UpdateStoryButton/>
                <DeleteStoryButton/>
            </div>
        );
    }
}

export default StoryCard;