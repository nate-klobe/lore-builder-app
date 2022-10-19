import React, { Component } from 'react';
import { Link } from "react-router-dom";
import WorldCard from './world-card.component';



function NewWorldButton() {
    return(
        <Link to = '/worlds/create'>
            <button>New World</button>
        </Link>
    );
}

class Worlds extends Component {
    render() {
        return (
            <div>
                <WorldCard/>
                <br/>
                <NewWorldButton/>
                
            </div>
        );
    }
}

export default Worlds;