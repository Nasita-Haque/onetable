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
		this.props.signup(this.state)
		this.props.router.push('/')
	},
	handleChange(key, e){
		this.setState({[key]: e.target.value})
	},
	render(){
		const {firstname, lastname, email, password} = this.state
		return(
			<div>
				



<div className='container container1'>	
			    <div className="row">
					<div className="col-md-4 col-md-offset-4">
			    		<div className="panel panel-default">
						  	<div className="panel-heading">
						    	<h3 className="panel-title">Register!</h3>
						 	</div>
						  	<div className="panel-body">
								<form className="form-control maindiv1" onSubmit={this.handleSubmit} >
									<div className="form-group">
									First name:
									<input className="form-control" type='text' value={firstname}  onChange={this.handleChange.bind(this,"firstname")}/>
									</div><br />
										<div className="form-group">
									Last name:
									<input className="form-control" type='text' value={lastname} onChange={this.handleChange.bind(this,"lastname")}/>
									</div><br />
										<div className="form-group">
									Email:
									<input className="form-control" type='email' value={email} onChange={this.handleChange.bind(this,"email")} />
									</div><br />
										<div className="form-group">
									Password:
									<input className="form-control" type='Password' value={password} onChange={this.handleChange.bind(this, "password")} />
									</div><br /> 
									<input className="btn btn-lg  btn-block button1" type='submit' value='Signup!'/>
								</form>
						    </div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
})


export default Signup





	// <a href="" className="btn btn-lg btn-primary btn-block">Register</a>