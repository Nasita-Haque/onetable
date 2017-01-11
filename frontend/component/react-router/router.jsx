import React from 'react';
import {App, OpenTableContainer, SignupContainer, Home, confirmationContainer} from '../index';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


const Routes = (props) => (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component={Home} />
			<Route path='/signup' component={SignupContainer} />
			<Route path='/opentable' component={OpenTableContainer}/>
			<Route path='/confirmation/:reservation' component={confirmationContainer}/>
		</Route>
	</Router>
);

export default Routes;
