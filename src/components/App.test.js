import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders the heading', () => {
        expect(app.find('h2').text()).toEqual('All available cards:')
    })

    it('renders a link to create new stacks', () => {
        expect(app.find('Link button').text()).toEqual('Check my eligibility')
    })
});
