import React from 'react';
import {App, OpenTableContainer} from '../index';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


const Routes = (props) => (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route path='/opentable' component={OpenTableContainer}/>
		</Route>
	</Router>
);

export default Routes;