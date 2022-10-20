import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to='/' className='navbar-brand'>Lore Builder</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                            <Link to='/worlds' className='nav-link'>Worlds</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/stories' className='nav-link'>Stories</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/users/create' className='nav-link'>Register</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}

export default Navbar;