import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Login from "../component/login.js"
import userAction from '../action/login-action.js'


const LoginContainer = state => {
	return {}
}

const mapDispatchToProps= (dispatch)=>{
	return{login: bindActionCreators(userAction.getUser, dispatch)}
}

export default connect(LoginContainer,mapDispatchToProps)(Login);



