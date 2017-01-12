import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Signup from "../component/signup.js"
import userAction from '../action/signup-action'


const SignupContainer = state => {
	return {}
}
const mapDispatchToProps= (dispatch)=>{
	console.log(userAction.createUser) 
	console.log(dispatch)
	return{signup: bindActionCreators(userAction.createUser, dispatch)}
}
export default connect(SignupContainer, mapDispatchToProps)(Signup);



