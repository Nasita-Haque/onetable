import React from 'react';
import {App, OpenTableContainer, confirmationContainer} from '../index';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


const Routes = (props) => (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route path='/opentable' component={OpenTableContainer}/>
			<Route path='/confirmation/:reservation' component={confirmationContainer}/>
		</Route>
	</Router>
);

export default Routes;

