import React, { Component } from 'react';

export class UserDetails extends Component {
    render() {
        const user = this.props.user
        return (
            <div>
                <h3>{user.title} {user.firstName} {user.lastName}</h3>
                <h3>Date of birth: {user.day}/{user.month}/{user.year}</h3>
                <h3>Employment status: {user.employmentStatus}</h3>
                <h3>Annual income: {user.annualIncome}</h3>
                <h3>Address: {user.houseNumber} {user.postcode}</h3>
            </div>
        );
    }
}

export default UserDetails;
