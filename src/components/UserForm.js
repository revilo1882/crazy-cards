import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class UserForm extends Component {
    render() {
        return (
            <div>
                <Link to='/'><h4>Home</h4></Link>
                <h2>Enter your details</h2>
            </div>
        );
    }
}

export default UserForm;