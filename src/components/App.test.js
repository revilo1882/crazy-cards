import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders the title', () => {
        expect(app.find('h1').text()).toEqual('Crazy Cards');
    });

    it('renders a link to create new stacks', () => {
        expect(app.find('Link button').text()).toEqual('Check my eligibility')
    })
});
