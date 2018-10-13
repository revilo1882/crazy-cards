import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'mr',
            firstName: '',
            lastName: '',
            day: '',
            month: '',
            year: '',
            employmentStatus: 'Full time',
            annualIncome: '',
            houseNumber: '',
            postcode: '',
            isValidated: false
        };
    }

    handleSubmit(event) {
        if (this.state.isValidated) {
            console.log('Annual income: ' + this.state.annualIncome);
        }
        else {
            console.log('error')
        }
        event.preventDefault();
    }

    checkForm(state) {
        const { firstName, lastName, day, month, year, annualIncome, houseNumber, postcode } = state
        state.isValidated = 
        firstName.length > 0 &&
        lastName.length > 0 &&
        day > 0 &&
        day < 32 &&
        month > 0 &&
        month < 13 &&
        year > 1918 &&
        year < 2000 &&
        annualIncome > 0 &&
        annualIncome< 9999999999 &&
        houseNumber.length > 0 &&
        postcode.length > 5
     }


    render() {
        this.checkForm(this.state)
        return (
            <div>
                <Link to='/'><h4>Home</h4></Link>
                <h2>Enter your details</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label><div>Title:</div>
                            <div>
                                <select 
                                    name='title' 
                                    value={this.state.title} 
                                    onChange={event => this.setState({ title: event.target.value})}
                                >
                                    <option value="mr">Mr</option>
                                    <option value="mrs">Mrs</option>
                                    <option value="miss">Miss</option>
                                    <option value="ms">Ms</option>
                                    <option value="dr">Dr</option>
                                </select>                            
                            </div>                 
                        </label>
                    </div>
                    <div>
                        <label><div>Name:</div>
                            <input 
                                type='text' 
                                name='firstName' 
                                placeholder='First Name' 
                                value={this.state.firstName}
                                onChange={event => this.setState({ firstName: event.target.value})}
                            />
                            <input 
                                type='text' 
                                name='lastName' 
                                placeholder='Last Name' 
                                value={this.state.lastName}
                                onChange={event => this.setState({ lastName: event.target.value})}
                            />
                        </label>
                    </div>   
                    <div>
                        <label>Date of birth (DD/MM/YYYY)
                            <input 
                                type='number' 
                                name='day' 
                                min='1' 
                                max='31' 
                                placeholder='DD' 
                                value={this.state.day}
                                onChange={event => this.setState({ day: event.target.value})} 
                            />
                            <input 
                                type='number' 
                                name='month' 
                                min='1' 
                                placeholder='MM' 
                                value={this.state.month}
                                onChange={event => this.setState({ month: event.target.value})}
                            />
                            <input 
                                type='number' 
                                name='year' 
                                min='1918' 
                                placeholder='YYYY' 
                                value={this.state.year}
                                onChange={event => this.setState({ year: event.target.value})} 
                            />
                        </label>
                    </div>
                    <div>
                        <label><div>What is your employment status?</div>
                            <select 
                                name='employmentStatus' 
                                value={this.state.employmentStatus} 
                                onChange={event => this.setState({ employmentStatus: event.target.value })} 
                            >
                                <option defaultValue value="fullTime">Full time</option>
                                <option value="partTime">Part time</option>
                                <option value="student">Student</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label><div>Annual income</div>
                            <input 
                                type='number' 
                                name='annualIncome' 
                                maxLength='10'
                                placeholder='£' value={this.state.annualIncome}
                                onChange={event => this.setState({ annualIncome: event.target.value})} 
                            />
                        </label>
                    </div>
                    <div>
                        <label><div>Address</div>
                            <input 
                                type='text' 
                                name='houseNumber' 
                                placeholder='House number' 
                                value={this.state.houseNumber}
                                onChange={event => this.setState({ houseNumber: event.target.value})}
                            />
                            <input 
                                type='text' 
                                name='postcode' 
                                placeholder='Postcode' 
                                value={this.state.postcode}
                                onChange={event => this.setState({ postcode: event.target.value })}
                            />
                        </label>
                    </div>
                    <div>
                        <input type='submit' value='submit' />
                    </div>
                </form>
            </div>
        );
    }
}

export default UserForm;