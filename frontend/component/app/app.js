const React = require('react');

const App = React.createClass({
	render(){
		return(
			<div id='main'>
				{this.props.children}
			</div>
		)
	}
})

export default App;
