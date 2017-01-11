import React from 'react';
import {App, store, Home, OpenTableContainer, SignupContainer, restaurant container, confirmationContainer,dispatchOpentableInfo} from '../index';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


const Routes = (props) => (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component={restaurantContainer} />
			<Route path='/signup' component={SignupContainer} />
			<Route path='/opentable' component={OpenTableContainer}/>
			<Route path='/confirmation/:opentable' component={confirmationContainer} onEnter={dispatchOpentableInfo}/>
		</Route>
	</Router>
);

export default Routes;
