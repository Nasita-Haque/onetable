const React = require('react');
import {Header, Footer} from '../index'

const App = React.createClass({
	render(){
		return(
			<div id='main'>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
})

export default App;
