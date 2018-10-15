# Crazy Cards Application

## Introduction

An interactive ront end application which allow customers to enter their details and review credit cards that are applicable to their credit status.

## Requireents

The application should return the list of cards available based upon a user's input. The user should be allowed to select one or more of the returned cards and see the details for the cards selected.  When multiple cards are selected, the total amount of credit available to the user on those cards should be displayed.

## Available Cards

The Student Life credit card is only available to customers with an employment status of Student.
The anywhere card is available to anyone anywhere.
The Liquid card is a card available to customers who have an income of more than £16000.

## Installation

Clone the repository then in the command line run:

```bash
$ cd crazy-cards
$ npm install
$ npm start
```

To run the test and check the coverage run the below commands:

```bash
$ npm test
$ npm test -- --coverage
```
The app is also deployed on Heroku [here](https://dashboard.heroku.com/apps/salty-wildwood-11557).

## Approach

- My first course of action was to decide on the project's tech stack, I chose [React](https://reactjs.org/) for the frontend library and [Sass](https://sass-lang.com/) to compile the style sheets as I have been learning about both of these recently.

- I drew up my anticipated design and decided through user stores that I would produce a 3 page webapp which meant that I could have a go at using [react-router-dom](https://www.npmjs.com/package/react-router-dom) which I haven't had much experience with.

- I decided I wanted to build the app using a TDD approach using [Jest](https://jestjs.io/en/) and [Enzyme](https://github.com/airbnb/enzyme) for my tests.  

- I built most of the functionality first as I anticipated building the userform and displaying the clickable results would take the most time.

- The app is built into the following sections:
    - The Header has a clickable link to the start of the app.  
    - The App is is the hompage which renders each instance of the card component and has a button link to the user form.
    - The Card displays the props of the selected card.
    - The UserForm has a form which updates the state on input and has a button the links to to the reults if certain criterea are met.
    - The Results renders the user details, each instance of the card component which match the requirements and the total credit which is updated when a card is clicked upen.
    - The UserDetails displays the props of the user inputted.

## Further Work
- I am happy with my tests and my test coverage overall however I had trouble testing the userform submit functionality.  After updating all the input forms I had the below test:

```javascript
it('changes the is validated in state', () => {
    userform.find('form').simulate('submit', { preventDefault() {} } );
    expect(userform.state().isValidated).toBe(false);
});
```
However all the states were undefined in the handleSubmit function and I didn't manage to mock the checkForm function.

- Given more time I would have liked to have the userform display a specified error message depending on which input wasn't fullfilled correctly due to the preventdefault taking the error messages away.