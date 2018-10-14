import React, { Component } from 'react';
import Header from './headerComponent/Header'
import Card from './Card';
import { cards } from '../data/fixtures';

export class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.location.user,
            totalCredit: 0
        };
    }

    selectCard(available, selected) {
        if (selected === true) {
            this.setState({
                totalCredit: this.state.totalCredit + available
            })
        } else {
            this.setState({
                totalCredit: this.state.totalCredit - available
            })
        }
    }

    render() {
        const { user, totalCredit } = this.state
        return (
            <div>
                <Header />
                <h2>Results</h2>
                <div className='card-board'>
                    {cards.map(card => {
                        if (user.annualIncome > card.requirements.minimumAnnualIncome && 
                            card.requirements.validEmploymentStatus.includes(user.employmentStatus)) {
                            return ( 
                                <div 
                                    className='valid' 
                                    key={card.id} onClick={() => this.selectCard(card.creditAvailable, card.selected = !card.selected)}
                                >
                                    <Card card={card} />
                                </div>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
                <div className='total-credit'>Total credit: £{totalCredit}</div>
            </div>
        );
    }
}

export default Results;
