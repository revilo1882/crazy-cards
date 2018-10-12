import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

const props = {
    card: {
        name: 'Test Card',
        apr: 20.5,
        balanceTransferOfferDuration: 3,
        purchaseOfferDuration: 6,
        creditAvailable: 2000
    }
};

describe('Card', () => {
    const card = shallow(<Card {...props} />);

    it('renders the card name', () => {
        expect(card.find('h2').text()).toEqual(props.card.name);
    });

    it('renders the card Apr', () => {
        expect(card.find('h4').at(0).text()).toEqual(`${props.card.apr}%`);
    });

    it('renders the card Balance Transfer Offer Duration', () => {
        expect(card.find('h4').at(1).text()).toEqual(`${props.card.balanceTransferOfferDuration} months`);
    });

    it('renders the card Purchase Offer Duration', () => {
        expect(card.find('h4').at(2).text()).toEqual(`${props.card.purchaseOfferDuration} months`);
    });

    it('renders the card Credit Available', () => {
        expect(card.find('h4').at(3).text()).toEqual(`£${props.card.creditAvailable}`);
    });
});

