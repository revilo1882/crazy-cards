import React from 'react';
import { shallow } from 'enzyme';
import { UserForm } from './UserForm';
import { user1, user2 } from '../data/users';


describe('App', () => {
    const userform = shallow(<UserForm />);
    
    describe('initial state', () => {
        it('renders the title', () => {
            expect(userform.find('h2').text()).toEqual('Enter your details');
        });

        it('sets the intial state', () => {
            expect(userform.state().isValidated).toBe(false);
        });
    });

    describe('changes the state', () => {
        it('changes the title in state', () => {
            userform.find('select').at(0).simulate('change', { target: { name: 'title', value: user2.title } });
            expect(userform.state().title).toEqual(user2.title);
        });

        it('changes the first name in state', () => {
            userform.find('input').at(0).simulate('change', { target: { name: 'firstName', value: user1.firstName } });
            expect(userform.state().firstName).toEqual(user1.firstName);
        });

        it('changes the second name in state', () => {
            userform.find('input').at(1).simulate('change', { target: { name: 'lastName', value: user1.lastName } });
            expect(userform.state().lastName).toEqual(user1.lastName);
        });

        it('changes the day in state', () => {
            userform.find('input').at(2).simulate('change', { target: { name: 'day', value: user1.day } });
            expect(userform.state().day).toEqual(user1.day);
        });

        it('changes the month in state', () => {
            userform.find('input').at(3).simulate('change', { target: { name: 'month', value: user1.month } });
            expect(userform.state().month).toEqual(user1.month);
        });

        it('changes the year in state', () => {
            userform.find('input').at(4).simulate('change', { target: { name: 'year', value: user1.year } });
            expect(userform.state().year).toEqual(user1.year);
        });

        it('changes the employment status in state', () => {
            userform.find('select').at(1).simulate('change', { target: { name: 'employmentStatus', value: user2.employmentStatus } });
            expect(userform.state().employmentStatus).toEqual(user2.employmentStatus);
        });

        it('changes the annual income in state', () => {
            userform.find('input').at(5).simulate('change', { target: { name: 'annualIncome', value: user1.annualIncome } });
            expect(userform.state().annualIncome).toEqual(user1.annualIncome);
        });

        it('changes the house number in state', () => {
            userform.find('input').at(6).simulate('change', { target: { name: 'houseNumber', value: user1.houseNumber } });
            expect(userform.state().houseNumber).toEqual(user1.houseNumber);
        });

        it('changes the postcode in state', () => {
            userform.find('input').at(7).simulate('change', { target: { name: 'postcode', value: user1.postcode } });
            expect(userform.state().postcode).toEqual(user1.postcode);
        });

        // it('changes the is validated in state', () => {
        //     userform.find('form').simulate('submit', { preventDefault() {} } );
        //     expect(userform.state().isValidated).toBe(false);
        // });
    });
});