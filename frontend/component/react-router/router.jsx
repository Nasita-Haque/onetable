import React from 'react';
import {App, OpenTableContainer, store, SignupContainer, Home, confirmationContainer, restaurantContainer, fetchOpentable, LoginContainer, dispatchOpentableInfo} from '../index';



import {Router, Route, IndexRoute, browserHistory} from 'react-router';


const Routes = (props) => (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component={restaurantContainer} />
			<Route path='/signup' component={SignupContainer} />
			<Route path='/opentable' component={OpenTableContainer}/>
			{/* <Route path='/confirmation/:opentable' component={confirmationContainer} onEnter={store.dispatch(fetchOpentable)}/> */}
			<Router path='login' component={LoginContainer} />
			<Route path='/confirmation/:opentable' component={confirmationContainer} onEnter={dispatchOpentableInfo}/>
		</Route>
	</Router>
);

export default Routes;
