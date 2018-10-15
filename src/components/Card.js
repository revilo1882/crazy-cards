import React, { Component } from 'react';

export class Card extends Component {
    render() {
        const card = this.props.card;
        return (
            <div className={card.selected ? 'card card-selected' : 'card'}>
                <h2 className='card__section card__section--name'>{card.name}</h2>
                <h3 className='card__section card__section--sub'>
                    {card.apr}% APR</h3>
                <h3 className='card__section card__section--sub'>
                    {card.balanceTransferOfferDuration} months 
                    <span className='card__section--extra'> balance transfer offer duration</span>
                </h3>
                <h3 className='card__section card__section--sub'>{
                    card.purchaseOfferDuration} months 
                    <span className='card__section--extra'> 0% purchase offer duration</span>
                </h3>
                <h3 className='card__section card__section--sub'>
                    £{card.creditAvailable} 
                    <span className='card__section--extra'> credit available</span>
                </h3>
            </div>
        );
    }
}

export default Card;
