import React from 'react';
import { shallow } from 'enzyme';
import UserDetails from './UserDetails';
import { user1 } from '../data/users';

const props = user1;

describe('User Details', () => {
    const userdetails = shallow(<UserDetails {...props}/>);

    it('renders the name', () => {
        expect(userdetails.find('h3').at(0).text()).toEqual(`${user1.user.title} ${user1.user.firstName} ${user1.user.lastName}`)
    });

    it('renders the date of birth', () => {
        expect(userdetails.find('h3').at(1).text()).toEqual(`Date of birth: ${user1.user.day}/${user1.user.month}/${user1.user.year}`)
    });

    it('renders the employment status', () => {
        expect(userdetails.find('h3').at(2).text()).toEqual(`Employment status: ${user1.user.employmentStatus}`)
    });

    it('renders the annual income', () => {
        expect(userdetails.find('h3').at(3).text()).toEqual(`Annual income: ${user1.user.annualIncome}`)
    });

    it('renders the employment status', () => {
        expect(userdetails.find('h3').at(4).text()).toEqual(`Address: ${user1.user.houseNumber} ${user1.user.postcode}`)
    });
});
