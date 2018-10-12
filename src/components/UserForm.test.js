import React from 'react';
import { shallow } from 'enzyme';
import { UserForm } from './UserForm';

describe('App', () => {
    const userform = shallow(<UserForm />);

    it('renders the title', () => {
        expect(userform.find('h2').text()).toEqual('Enter your details');
    });

    it('renders a link to the homepage', () => {
        expect(userform.find('Link h4').text()).toEqual('Home')
    })
});