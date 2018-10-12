import React, { Component } from 'react';
import Card from './Card';
import { cards } from '../data/fixtures';
import { Link } from 'react-router-dom';

export class App extends Component {
    render() {
        return (
            <div>
                <h1>Crazy Cards</h1>
                {cards.map(card => {
                    return <Card key={card.id} card={card} />
                })}
                <Link to='/userform'><button>Check my eligibility</button></Link>
            </div>
        );
    }
}

export default App;
