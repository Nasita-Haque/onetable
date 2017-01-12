import React from 'react'
import {addSession} from '../action/login-action.js'
import store from '../store/store.js'

	const Login = React.createClass({
	getInitialState(){
		return {email: "", password:"" }
	},
	handleSubmit(e){
		e.preventDefault()
		this.props.login(this.state)

	},
	handleChange(key, e){
	this.setState({[key] : e.target.value})
	},
	render(){
		 const {email, password} = this.state;
		return(
			<div>
				<form onSubmit={this.handleSubmit} >
					Email:
					<input type='email' value={email} onChange={this.handleChange.bind(this,"email")} />
					<br />
					Password:
					<input type='Password' value={password} onChange={this.handleChange.bind(this, "password")} />
					<br /> 
					<input type='submit' value='Login'/>
				</form>
			</div>
		)
	}
})


export default Login



