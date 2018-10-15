import React, { Component } from 'react';
import Header from './headerComponent/Header'
import Card from './Card';
import { cards } from '../data/fixtures';
import { Link } from 'react-router-dom';

export class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <h2 className='sub-header'>All available cards:</h2>
                <div className='card-board'>
                    {cards.map(card => {  
                        return (card.selected = false,
                            <Card key={card.id} card={card} />
                        )
                    })}
                </div>
                <div className='button'>
                    <Link to='/userform' >
                        <button className='button-box'>Check my eligibility</button>
                    </Link>
                </div>
                
            </div>
        );
    }
}

export default App;
