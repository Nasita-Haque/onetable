import {connect} from "react-redux";
import signup from "../component/signup.js"

const SignupContainer = state => {
	const {name, last, email, psw} = state

	return {name, last, email, psw}
}

export default connect(SignupContainer)(signup);



