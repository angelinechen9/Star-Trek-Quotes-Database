import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './index.css';
import Index from './components/Index';
import New from './components/New';
import Show from './components/Show';
import Edit from './components/Edit';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Switch>
      <Route exact path = "/" component = {Index} />
      <Route exact path = "/quotes" component = {Index} />
      <Route exact path = "/quotes/new" component = {New} />
      <Route exact path = "/quotes/:id" component = {Show} />
      <Route exact path = "/quotes/:id/edit" component = {Edit} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
