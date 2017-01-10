import React from 'react';
import {App, Header, OpenTableContainer} from '../index';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


const Routes = (props) => (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component={Header} />
			<Route path='/opentable' component={OpenTableContainer}/>
		</Route>
	</Router>
);

export default Routes;
