import React, { Component } from 'react';

class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            first_name: '',
            last_name: '',
            email_address: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeEmailAddress(e) {
        this.setState({
            email_address: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email_address: this.state.email_address,
        }

        console.log(user);

        window.location = '/';
    }


    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input 
                            type="text"
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input 
                            type="text"
                            className='form-control'
                            value={this.state.first_name}
                            onChange={this.onChangeFirstName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input 
                            type="text"
                            className='form-control'
                            value={this.state.last_name}
                            onChange={this.onChangeLastName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Email Address:</label>
                        <input 
                            type="text"
                            className='form-control'
                            value={this.state.email_address}
                            onChange={this.onChangeEmailAddress}
                            />
                    </div>

                    <div className='form-group'>
                        <input type="submit" value="Register" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateUser;