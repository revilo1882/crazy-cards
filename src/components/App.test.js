import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { cards } from '../data/fixtures';

describe('App', () => {
    const app = shallow(<App />);

    it('renders the heading', () => {
        expect(app.find('h2').text()).toEqual('All available cards:')
    });

    it('renders a link to create new stacks', () => {
        expect(app.find('Link button').text()).toEqual('Check my eligibility')
    });

    it('sets selected to false', () => {
        expect(cards[0].selected).toBe(false);
    })
});
