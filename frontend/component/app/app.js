const React = require('react');
import {Header} from '../index'

const App = React.createClass({
	render(){
		return(
			<div id='main'>
				<Header />
				{this.props.children}
			</div>
		)
	}
})

export default App;
