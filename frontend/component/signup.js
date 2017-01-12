import React from 'react'
import {createUser} from '../action/signup-action.js'
import store from '../store/store.js'

const Signup = React.createClass({
	getInitialState(){
		return {
			firstname: 'a',
			lastname: 'br',
			email: 'a@a.com',
			password: '1234',

		}
	},
	handleSubmit(e){
		e.preventDefault()
		console.log(this.state)
		this.props.signup(this.state)
	},
	handleChange(key, e){
		console.log(key)
		this.setState({[key]: e.target.value})
	},
	render(){
		const {firstname, lastname, email, password} = this.state
		console.log(this.props.signup)
		return(
			<div>
				<form onSubmit={this.handleSubmit} >
					First name:
					<input type='text' value={firstname}  onChange={this.handleChange.bind(this,"firstname")}/>
					<br />
					Last name:
					<input type='text' value={lastname} onChange={this.handleChange.bind(this,"lastname")}/>
					<br />
					Email:
					<input type='email' value={email} onChange={this.handleChange.bind(this,"email")} />
					<br />
					Password:
					<input type='Password' value={password} onChange={this.handleChange.bind(this, "password")} />
					<br /> 
					<input type='submit' value='Signup!'/>
				</form>
			</div>
		)
	}
})


export default Signup