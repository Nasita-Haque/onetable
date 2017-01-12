import React from 'react'

const Signup = React.createClass({
	handleChange(e){
		// store.dispatch(addSession(e))
		// console.log(e.target.value)
		const {email, psw} = this.props

		console.log('email ', e.target.value)
		console.log(this.props)
	},
	render(){
		const {name, last, email, psw} = this.props
		return(
			<div>
				<form>
					Firstname:
					<input type='text' value={name}  onChange={this.handleChange}/>
					Last name:
					<input type='text' value={last}/>
					Email:
					<input type='email' value={email} />
					Password:
					<input type='text' value={psw} />
					<input type='button' value='Signup'/>
				</form>
			</div>
		)
	}
})


export default Signup