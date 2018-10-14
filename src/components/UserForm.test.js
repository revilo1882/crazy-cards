import React from 'react';
import { shallow } from 'enzyme';
import { UserForm } from './UserForm';
import { users } from '../data/users';


describe('App', () => {
    const userform = shallow(<UserForm />);
    
    describe('initial state', () => {
        it('renders the title', () => {
            expect(userform.find('h2').text()).toEqual('Enter your details');
        });

        it('renders a link to the homepage', () => {
            expect(userform.find('Link h4').text()).toEqual('Home')
        });

        it('sets the intial state', () => {
            expect(userform.state().isValidated).toBe(false);
        })
    });

    describe('changes the state', () => {
        it('changes the title in state', () => {
            userform.find('select').at(0).simulate('change', { target: { name: 'title', value: users[1].title } });
            expect(userform.state().title).toEqual(users[1].title);
        });

        it('changes the first name in state', () => {
            userform.find('input').at(0).simulate('change', { target: { name: 'firstName', value: users[0].firstName } });
            expect(userform.state().firstName).toEqual(users[0].firstName);
        });

        it('changes the second name in state', () => {
            userform.find('input').at(1).simulate('change', { target: { name: 'lastName', value: users[0].lastName } });
            expect(userform.state().lastName).toEqual(users[0].lastName);
        });

        it('changes the day in state', () => {
            userform.find('input').at(2).simulate('change', { target: { name: 'day', value: users[0].day } });
            expect(userform.state().day).toEqual(users[0].day);
        });

        it('changes the month in state', () => {
            userform.find('input').at(3).simulate('change', { target: { name: 'month', value: users[0].month } });
            expect(userform.state().month).toEqual(users[0].month);
        });

        it('changes the year in state', () => {
            userform.find('input').at(4).simulate('change', { target: { name: 'year', value: users[0].year } });
            expect(userform.state().year).toEqual(users[0].year);
        });

        it('changes the employment status in state', () => {
            userform.find('select').at(1).simulate('change', { target: { name: 'employmentStatus', value: users[1].employmentStatus } });
            expect(userform.state().employmentStatus).toEqual(users[1].employmentStatus);
        });

        it('changes the annual income in state', () => {
            userform.find('input').at(5).simulate('change', { target: { name: 'annualIncome', value: users[0].annualIncome } });
            expect(userform.state().annualIncome).toEqual(users[0].annualIncome);
        });

        it('changes the house number in state', () => {
            userform.find('input').at(6).simulate('change', { target: { name: 'houseNumber', value: users[0].houseNumber } });
            expect(userform.state().houseNumber).toEqual(users[0].houseNumber);
        });

        it('changes the postcode in state', () => {
            userform.find('input').at(7).simulate('change', { target: { name: 'postcode', value: users[0].postcode } });
            expect(userform.state().postcode).toEqual(users[0].postcode);
        });

        // it('changes the is validated in state', () => {
        //     userform.find('form').simulate('submit', { preventDefault() {} } );
        //     expect(userform.state().isValidated).toBe(false);
        // });
    });
});