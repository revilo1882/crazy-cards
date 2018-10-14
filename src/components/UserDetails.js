import React, { Component } from 'react';

export class UserDetails extends Component {
    render() {
        const user = this.props.user
        return (
            <div className='user'>
                <h2 className='user__details user__details--capital'>{user.title} {user.firstName} {user.lastName}</h2>
                <h3 className='user__details'>Date of birth: {user.day}/{user.month}/{user.year}</h3>
                <h3 className='user__details'>Employment status: {user.employmentStatus}</h3>
                <h3 className='user__details'>Annual income: £{user.annualIncome}</h3>
                <h3 className='user__details'>Address: <span className='user__details--capital'>{user.houseNumber} {user.postcode}</span></h3>
            </div>
        );
    }
}

export default UserDetails;
