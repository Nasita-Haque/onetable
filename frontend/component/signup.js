import React from 'react'

const Signup = React.createClass({
	render(){
		const {name, last} = this.props
		return(
			<div>
				<form>
					name:
					<input type='text' value={name} />
					Last name
					<input type='text' value={last}/>
					<input type='button' value='Signup'/>
				</form>
			</div>
		)
	}
})


export default Signup