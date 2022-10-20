import React, { Component } from 'react';

class CreateStory extends Component {
    constructor(props) {
        super(props);

        this.onChangeStoryName = this.onChangeStoryName.bind(this);
        this.onChangeCreator = this.onChangeCreator.bind(this);
        this.onChangeWorldId = this.onChangeWorldId.bind(this);
        this.onChangeSnippet = this.onChangeSnippet.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            story_name: '',
            creator: '',
            world_id: '',
            snippet: '',
            description: '',
        }
    }

    componentDidMount() {
        //get username
        this.setState({
            creator: '6350b3c3a3e1fd75bc11e868',
            world_id: '6350b437a3e1fd75bc11e86e'
        });
    }

    onChangeStoryName(e) {
        this.setState({
            story_name: e.target.value
        });
    }

    onChangeCreator(e) {
        this.setState({
            creator: e.target.value
        });
    }

    onChangeWorldId(e) {
        this.setState({
            world_id: e.target.value
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

        const story = {
            story_name: this.state.story_name,
            creator: this.state.creator,
            world_id: this.state.world_id,
            snippet: this.state.snippet,
            description: this.state.description,
        }

        console.log(story);

        window.location = '/stories';
    }



    render() {
        return (
            <div>
                <h3>Create New World</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Story Name:</label>
                        <input 
                            type="text"
                            className='form-control'
                            value={this.state.story_name}
                            onChange={this.onChangeStoryName}
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
                        <input type="submit" value="Create Story" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateStory;