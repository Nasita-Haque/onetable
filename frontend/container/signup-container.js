import {connect} from "react-redux";
import signup from "../component/signup.js"

const SignupContainer = state => {
	const {name, last} = state

	return {name, last}
}

export default connect(SignupContainer)(signup);



