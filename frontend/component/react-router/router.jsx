import React from 'react';
import {App, OpenTableContainer, SignupContainer} from '../index';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


const Routes = (props) => (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route path='/opentable' component={OpenTableContainer}/>
			<Route path='/signup' component={SignupContainer} />
		</Route>
	</Router>
);

export default Routes;