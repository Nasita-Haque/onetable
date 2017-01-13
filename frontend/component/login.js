import React from 'react'
import {addSession} from '../action/login-action.js'
import store from '../store/store.js'

	const Login = React.createClass({
	getInitialState(){
		return {email: "ambar@ambar.com", password:"123" }
	},
	handleSubmit(e){
		e.preventDefault()
		this.props.login(this.state)
		this.props.router.push('/')
	},
	handleChange(key, e){
	this.setState({[key] : e.target.value})
	},
	render(){
		 const {email, password} = this.state;
		return(
			<div className='container'>	
			    <div className="row">
					<div className="col-md-4 col-md-offset-4">
			    		<div className="panel panel-default">
						  	<div className="panel-heading">
						    	<h3 className="panel-title">Please sign in</h3>
						 	</div>
						  	<div className="panel-body">
							<form className='form login form-control' onSubmit={this.handleSubmit} >
							 <fieldset>
							 	<div className="form-group">
								Email:
								<input className="form-control" type='email' value={email} onChange={this.handleChange.bind(this,"email")} />
								</div><br />
								<div className="form-group">
								Password:
								<input className="form-control"  type='Password' value={password} onChange={this.handleChange.bind(this, "password")} />
								</div><br />
								<input className="btn btn-lg btn-success btn-block" type='submit' value='Login'/>
							  </fieldset>
							</form>
						    </div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})


export default Login
