import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App.js';
import UserForm from './components/UserForm.js';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/'component={App} />
            <Route exact path='/userform' component={UserForm} />
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));
