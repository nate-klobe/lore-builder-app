import React, { Component } from 'react';

class CreateWorld extends Component {
    constructor(props) {
        super(props);

        this.onChangeWorldName = this.onChangeWorldName.bind(this);
        this.onChangeSnippet = this.onChangeSnippet.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            world_name: '',
            creator: '',
            snippet: '',
            description: '',
        }
    }

    componentDidMount() {
        //get username
        this.setState({
            creator: '6350b3c3a3e1fd75bc11e868'
        });
    }

    onChangeWorldName(e) {
        this.setState({
            world_name: e.target.value
        });
    }

    onChangeSnippet(e) {
        this.setState({
            snippet: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const world = {
            world_name: this.state.world_name,
            creator: this.state.creator,
            snippet: this.state.snippet,
            description: this.state.description,
        }

        console.log(world);

        window.location = '/worlds';
    }

    render() {
        return (
            <div>
                <h3>Create New World</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>World Name:</label>
                        <input 
                            type="text"
                            className='form-control'
                            value={this.state.world_name}
                            onChange={this.onChangeWorldName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Snippet:</label>
                        <input 
                            type="text"
                            className='form-control'
                            value={this.state.snippet}
                            onChange={this.onChangeSnippet}
                            />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input 
                            type="text"
                            className='form-control'
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                    </div>

                    <div className='form-group'>
                        <input type="submit" value="Create World" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateWorld;