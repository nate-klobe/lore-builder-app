import React, { Component } from 'react';

class CreateUser extends Component {
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
                <p>Create a new user</p>
            </div>
        );
    }
}

export default CreateUser;