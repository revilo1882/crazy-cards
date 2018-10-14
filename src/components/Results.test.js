import React from 'react';
import { shallow } from 'enzyme';
import { Results } from './Results';

describe('App', () => {
    const results = shallow(<Results />);

    describe('initial state', () => {
        it('renders the title', () => {
            expect(results.find('h2').text()).toEqual('Results');
        });

        it('renders a link to the homepage', () => {
            expect(results.find('Link h4').text()).toEqual('Home')
        });
    });
});