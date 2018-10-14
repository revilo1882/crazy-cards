import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/" ><h4>Crazy Cards</h4></Link>
            </header>
        );
    }
}

export default Header;
