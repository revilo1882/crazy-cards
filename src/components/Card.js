import React, { Component } from 'react';

export class Card extends Component {
    render() {
        const card = this.props.card;
        return (
            <div>
                <h2>{card.name}</h2>
                <h4>{card.apr}%</h4>
                <h4>{card.balanceTransferOfferDuration} months</h4>
                <h4>{card.purchaseOfferDuration} months</h4>
                <h4>£{card.creditAvailable}</h4>
            </div>
        );
    }
}

export default Card;
