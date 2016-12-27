import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from '../app/App.jsx';
import Home from '../home/Home.jsx';
import Login from '../login/Login.jsx';

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={Home} />
      <Route path='/login' component={Login} />
    </Route>
  </Router>
);

export default Routes;
