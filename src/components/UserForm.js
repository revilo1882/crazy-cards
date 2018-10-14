import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

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
            employmentStatus: 'fullTime',
            annualIncome: '',
            houseNumber: '',
            postcode: '',
            isValidated: false
        };
    }

    handleClick(event) {
        event.preventDefault()
        if (this.checkForm(this.state)) {
        this.setState({ isValidated: true })
        }
    }

    handleChange(event) {
        const { target: { name, value } } = event
        if (isNaN(value)) {
            this.setState({
                [name]: value
            })
        } else {
            this.setState({
                [name]: parseInt(value)
            })
        }
    }


    checkForm(state) {
        const { firstName, lastName, day, month, year, annualIncome, houseNumber, postcode } = state
        
        return (firstName.length > 0 &&
        lastName.length > 0 &&
        day > 0 &&
        day < 32 &&
        month > 0 &&
        month < 13 &&
        year > 1917 &&
        year < 2000 &&
        annualIncome > 0 &&
        annualIncome< 9999999999 &&
        houseNumber.length > 0 &&
        postcode.length > 5 )
     }

    render() {
        if (this.state.isValidated) {
            return <Redirect to={{ pathname: '/results',  user: this.state  }} />
        }
        return (
            <div>
                <Link to='/'><h4>Home</h4></Link>
                <h2>Enter your details</h2>
                <form onClick={event => (this.handleClick(event))}>
                    <div>
                        <label><div>Title:</div>
                            <div>
                                <select 
                                    name='title' 
                                    value={this.state.title} 
                                    onChange={event => this.handleChange(event)}
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
                                onChange={event => this.handleChange(event)}
                            />
                            <input 
                                type='text' 
                                name='lastName' 
                                placeholder='Last Name' 
                                value={this.state.lastName}
                                onChange={event => this.handleChange(event)}
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
                                onChange={event => this.handleChange(event)}
                            />
                            <input 
                                type='number' 
                                name='month' 
                                min='1' 
                                placeholder='MM' 
                                value={this.state.month}
                                onChange={event => this.handleChange(event)}
                            />
                            <input 
                                type='number' 
                                name='year' 
                                min='1918' 
                                placeholder='YYYY' 
                                value={this.state.year}
                                onChange={event => this.handleChange(event)}
                            />
                        </label>
                    </div>
                    <div>
                        <label><div>What is your employment status?</div>
                            <select 
                                name='employmentStatus' 
                                value={this.state.employmentStatus} 
                                onChange={event => this.handleChange(event)}
                            >
                                <option value="fullTime">Full time</option>
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
                                onChange={event => this.handleChange(event)}
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
                                onChange={event => this.handleChange(event)}
                            />
                            <input 
                                type='text' 
                                name='postcode' 
                                placeholder='Postcode' 
                                value={this.state.postcode}
                                onChange={event => this.handleChange(event)}
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