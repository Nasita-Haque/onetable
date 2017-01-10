import React from 'react';
import {App, OpenTableContainer, SignupContainer, Header} from '../index';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


const Routes = (props) => (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component={Header} />
			<Route path='/opentable' component={OpenTableContainer}/>
			<Route path='/signup' component={SignupContainer} />
		</Route>
	</Router>
);

export default Routes;
