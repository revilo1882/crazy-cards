import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Results extends Component {
    render() {
        return (
            <div>
                <Link to='/'><h4>Home</h4></Link>
                <h2>Results</h2>
                
            </div>
        );
    }
}

export default Results;
