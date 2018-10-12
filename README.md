# Crazy Cards Application

You have been asked to develop a web application to allow customers to enter their details and review credit cards that are applicable to their credit status.

Different people have different credit statuses based on personal characteristics including their financial history, earnings, where they live, employment status and so on. The individuals credit status, or score, dictates which cards are available to a user.

This application will be a simplified version of this [real world scenario](https://www.totallymoney.com/credit-cards/).

## Description

The application should return the list of cards available based upon a user's input. For the purposes of this exercise the application should use the rules outlined at the end of this document to decide whether a particular card is available for the user in question.

The user should be allowed to select one or more of the returned cards and see the details for the cards selected.

When multiple cards are selected, the total amount of credit available to the user on those cards should be displayed.

## Good to see

Although not necessary for completion of the test, extra consideration will be given to candidates whose tests demonstrate any of the following:

- Testing
- Extensibility
- Responsive web design
- Hand-rolled server configuration
- Mock endpoints

## Available Cards

Student Life
- Apr: 18.9%
- Balance Transfer Offer Duration: 0 months
- Purchase Offer Duration: 6 Months
- Credit Available: £1200

The Student Life credit card is only available to customers with an employment status of Student.


Anywhere Card
- Apr: 33.9%
- Balance Transfer Offer Duration: 0 months
- Purchase Offer Duration: 0 Months
- Credit Available: £300

The anywhere card is available to anyone anywhere.


Liquid Car
- Apr: 33.9%
- Balance Transfer Offer Duration: 12 months
- Purchase Offer Duration: 6 Months
- Credit Available: £3000

The Liquid card is a card available to customers who have an income of more than £16000.

## Customers examples

Here is a list of users which can be used as test cases. If the application is successful it should return the cards indicated for each user.

Mr. Ollie Murphree
- 01/07/1970
- Full time
- Annual income: £34000
- House number: 700
- Postcode: BS14 9PR

Eligible for:
- Anywhere Card
- Liquid Card

Miss Elizabeth Edmundson
- 29/06/1984
- Student
- Annual income: £17000
- House number: 177
- Postcode: PH12 8UW

Eligible for:
- Anywhere Card
- Liquid Card
- Student Card


Mr. Trevor Rieck
- 07/09/1990
- Part time
- Annual income: £15000
- House number: 343
- Postcode: TS25 2NF

Eligible for:
- Anywhere Card