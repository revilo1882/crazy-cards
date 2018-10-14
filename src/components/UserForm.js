import React, { Component } from 'react';
import Header from './headerComponent/Header'
import { Redirect } from 'react-router-dom';

export class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Mr',
            firstName: '',
            lastName: '',
            day: '',
            month: '',
            year: '',
            employmentStatus: 'Full Time',
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
        this.setState({ [name]: value })
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
                <Header />
                <h2 className='sub-header'>Enter your details</h2>
                <form onClick={event => (this.handleClick(event))}>
                    <div>
                        <label><div className='category'>Title</div>
                            <div>
                                <select 
                                    className='input input__select'
                                    name='title' 
                                    value={this.state.title} 
                                    onChange={event => this.handleChange(event)}
                                >
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Ms">Ms</option>
                                    <option value="Dr">Dr</option>
                                </select>                            
                            </div>                 
                        </label>
                    </div>
                    <div>
                        <label><div className='category'>Name</div>
                            <input 
                                className='input input__text'
                                type='text' 
                                name='firstName' 
                                placeholder='First Name' 
                                value={this.state.firstName}
                                onChange={event => this.handleChange(event)}
                            />
                            <input 
                                className='input input__text'
                                type='text' 
                                name='lastName' 
                                placeholder='Last Name' 
                                value={this.state.lastName}
                                onChange={event => this.handleChange(event)}
                            />
                        </label>
                    </div>   
                    <div>
                        <label><div className='category'>Date of birth (DD/MM/YYYY)</div>
                            <input 
                                className='input input__date'
                                type='number' 
                                name='day' 
                                min='1' 
                                max='31' 
                                placeholder='DD' 
                                value={this.state.day}
                                onChange={event => this.handleChange(event)}
                            />
                            <input 
                                className='input input__date'
                                type='number' 
                                name='month' 
                                min='1' 
                                placeholder='MM' 
                                value={this.state.month}
                                onChange={event => this.handleChange(event)}
                            />
                            <input 
                                className='input input__date'
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
                        <label><div className='category'>What is your employment status?</div>
                            <select 
                                className='input input__select'
                                name='employmentStatus' 
                                value={this.state.employmentStatus} 
                                onChange={event => this.handleChange(event)}
                            >
                                <option value="Full Time">Full time</option>
                                <option value="Part Time">Part time</option>
                                <option value="Student">Student</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label><div className='category'>Annual income</div>
                            <input 
                                className='input input__text'
                                type='number' 
                                name='annualIncome' 
                                maxLength='10'
                                placeholder='£' value={this.state.annualIncome}
                                onChange={event => this.handleChange(event)}
                            />
                        </label>
                    </div>
                    <div>
                        <label><div className='category'>Address</div>
                            <input 
                                className='input input__text'
                                type='text' 
                                name='houseNumber' 
                                placeholder='House number' 
                                value={this.state.houseNumber}
                                onChange={event => this.handleChange(event)}
                            />
                            <input 
                                className='input input__text'
                                type='text' 
                                name='postcode' 
                                placeholder='Postcode' 
                                value={this.state.postcode}
                                onChange={event => this.handleChange(event)}
                            />
                        </label>
                    </div>
                    <div className='button'>
                        <input className='button-box' type='submit' value='submit' />
                    </div>
                </form>
            </div>
        );
    }
}

export default UserForm;