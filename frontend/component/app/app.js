const React = require('react');
import {Header, Footer} from '../index'

const App = React.createClass({
	render(){
		const {user} = this.props
		return(
			<div id='main'>
				<Header user={user}/>
				{this.props.children}
				<Footer />
			</div>
		)
	}
})

export default App;
