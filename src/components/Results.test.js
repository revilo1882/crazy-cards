import React from 'react';
import { shallow } from 'enzyme';
import { Results } from './Results';
import { user1, user2, user3 } from '../data/users';

const props = { location: user1 };
const props2 = { location: user2 };
const props3 = { location: user3 };

describe('App', () => {
    const results = shallow(<Results {...props} />);
    const results2 = shallow(<Results {...props2} />);
    const results3 = shallow(<Results {...props3} />);

    describe('initial state', () => {
        it('renders the title', () => {
            expect(results.find('h2').text()).toEqual('Results');
        });

        it('sets the user state', () => {
            expect(results.state().user).toEqual(props.location.user);
        });

        it('sets the total credit state', () => {
            expect(results.find('.total-credit').text()).toEqual('Total credit: £0');
        });
    });

    describe('rendering the correct number of cards', () => {
        it('renders correct cards for user1', () => {
            expect(results.find('.valid').length).toEqual(2);
        });

        it('renders correct cards for user2', () => {
            expect(results2.find('.valid').length).toEqual(3);
        });

        it('renders correct cards for user3', () => {
            expect(results3.find('.valid').length).toEqual(1);
        });
    });

    describe('changing the state on clicking on the first card', () => {
        beforeEach(() => {
            results.find('.valid').at(0).simulate('click');
        });

        afterEach(() => {
            results.find('.valid').at(0).simulate('click');
        });

        it('adds when the first card is clicked', () => {  
            expect(results.state().totalCredit).toEqual(300);
        });

        it('renders the correct total', () => {
            expect(results.find('.total-credit').text()).toEqual('Total credit: £300');
        });

        describe('click on second card', () => {
            beforeEach(() => {
                results.find('.valid').at(1).simulate('click');
            });

            afterEach(() => {
                results.find('.valid').at(1).simulate('click');
            });

            it('adds when the second card is clicked', () => {
                expect(results.state().totalCredit).toEqual(3300);
            });

            it('renders the correct total', () => {
                expect(results.find('.total-credit').text()).toEqual('Total credit: £3300');
            });
        });

        describe('click on twice', () => {
            beforeEach(() => {
                results.find('.valid').at(0).simulate('click');
            });

            afterEach(() => {
                results.find('.valid').at(0).simulate('click');
            });

            it('deducts when it is clicked a second time', () => {
                expect(results.state().totalCredit).toEqual(0);
            });

            it('renders the correct total', () => {
                expect(results.find('.total-credit').text()).toEqual('Total credit: £0');
            });
        });
    });
});