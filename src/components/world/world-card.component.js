import React, { Component } from 'react';
import { Link } from "react-router-dom";


function ViewWorldButton() {
    return(
        <Link to = '/world'>
            <button>View</button>
        </Link>
    );
}

function UpdateWorldButton() {
    return(
        <Link to = '/world'>
            <button>Edit</button>
        </Link>
    );
}

function DeleteWorldButton() {
    return(
        <Link to = '/world'>
            <button>Delete</button>
        </Link>
    );
}

class WorldCard extends Component {
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
                <h2>World Title</h2>
                <p>This is a world</p>
                <ViewWorldButton/>
                <UpdateWorldButton/>
                <DeleteWorldButton/>
            </div>
        );
    }
}

export default WorldCard;