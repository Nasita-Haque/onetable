import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Login from "../component/login.js"
import userAction from '../action/login-action.js'
import {currentUser} from '../component'


const LoginContainer = state => {
	return {user: state.logInReducer}
}

const mapDispatchToProps= (dispatch)=>{
	return{
		login: bindActionCreators(userAction.getUser, dispatch),
		currentUser: bindActionCreators(currentUser, dispatch)
	}
}

export default connect(LoginContainer,mapDispatchToProps)(Login);
