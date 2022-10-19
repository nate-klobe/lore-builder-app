import React, { Component } from 'react';

class CreateWorld extends Component {
    constructor(props) {
        super(props);

        this.state = {
            world_name: '',
            snippet: '',
            description: '',
        }
    }
    render() {
        return (
            <div>
                <p>You are on the Create World component</p>
            </div>
        );
    }
}

export default CreateWorld;