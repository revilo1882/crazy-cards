import React, { Component } from 'react';
import Card from './Card';
import { cards } from '../data/fixtures';

export class App extends Component {
    render() {
        return (
            <div>
                <h1>Crazy Cards</h1>
                {cards.map(card => {
                    return <Card key={card.id} card={card} />
                })}
            </div>
        );
    }
}

export default App;
