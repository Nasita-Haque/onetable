import React from 'react';
<<<<<<< HEAD
import {App, OpenTableContainer, SignupContainer, Home, confirmationContainer, restaurantContainer} from '../index';
=======
import {App, store, Home, OpenTableContainer, SignupContainer, confirmationContainer, fetchOpentable} from '../index';
>>>>>>> adb664ce10ceafe4e3d39d804da5bd21cb9492a3
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
