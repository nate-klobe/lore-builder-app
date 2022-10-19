import React, { Component } from 'react';

class CreateStory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            story_name: '',
            snippet: '',
            description: '',
        }
    }
    render() {
        return (
            <div>
                <p>You are on the Create Story component</p>
            </div>
        );
    }
}

export default CreateStory;