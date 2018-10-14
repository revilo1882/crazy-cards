import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('App', () => {
    const header = shallow(<Header />);

    it('renders a link home page', () => {
        expect(header.find('Link h4').text()).toEqual('Crazy Cards')
    });
});