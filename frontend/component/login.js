import React from 'react'
import {addSession} from '../action/login-action.js'
import store from '../store/store.js'

	const Login = React.createClass({
	
	// componentDidMount(){
	// 	const { dispatch, data } = this.props
 	//    	dispatch(/*ajax call from action*/(data))
	// },
	// componentWillReceiveProps(nextProps){
	// 	if (nextProps !== this.props.data) {
 //      		const { dispatch, data } = nextProps
 //     		dispatch(/*ajax call from action*/(data))
 //    	}
	// },
	getInitialState(){
		return{email: "",password:"" }
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
					<input type='text' value={email} onChange={this.handleChange.bind(this,"email")} />
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



