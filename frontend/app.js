const React = require('react');
import {Router, Route, IndexRoute, browserHistory} from "react-router"
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import OpenTableContainer from "./container/opentable-container.js"
import store from './store/store'


const App = React.createClass({
	render(){
		return(
			<div>
				{this.props.children}
			</div>
			)
	}
})

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<Route path='/opentable' component={OpenTableContainer}/>
			</Route>
		</Router>
	</Provider>, 
	document.getElementById('root')
	)

