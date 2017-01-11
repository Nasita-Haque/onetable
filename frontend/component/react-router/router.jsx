import React from 'react';
import {App, store, Home, OpenTableContainer, SignupContainer, confirmationContainer, fetchOpentable} from '../index';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


const Routes = (props) => (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component={Home} />
			<Route path='/signup' component={SignupContainer} />
			<Route path='/opentable' component={OpenTableContainer}/>
			<Route path='/confirmation/:opentable' component={confirmationContainer} onEnter={store.dispatch(fetchOpentable)}/>
		</Route>
	</Router>
);

export default Routes;
