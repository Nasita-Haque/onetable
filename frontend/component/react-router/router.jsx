import React from 'react';

import {
 App,
 store,
 Home,
 OpenTableContainer,
 SignupContainer,
 restaurantContainer,
 confirmationContainer,
 dispatchOpentableInfo,
 LoginContainer,
 displayRestaurantContainer,
 userAuth

} from '../index';

import {
	Router,
	Route,
	IndexRoute,
	browserHistory
} from 'react-router';

const enterApp = ()=>{
	store.dispatch(userAuth.userAuth());
}

const Routes = (props) => (
	<Router history={browserHistory}>
		<Route path='/' component={App} onEnter={enterApp}>
		<IndexRoute component={restaurantContainer} />
			<Route path='/signup' component={SignupContainer} />
			<Router path='login' component={LoginContainer} />
			<Route path='/opentable/:RestaurantId' component={OpenTableContainer}/>
			<Route path='/confirmation/:opentable' component={confirmationContainer} onEnter={dispatchOpentableInfo}/>
		</Route>
	</Router>
);

export default Routes;
