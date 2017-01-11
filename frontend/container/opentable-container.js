import {connect} from "react-redux";
import Opentable from "../component/opentable.js"


const openTableContainer = (state, ownprops) => {
	return{
	reservation: state.openTableReducer,
	goto: ownprops.router.push
	}
}

export default connect(openTableContainer)(Opentable);

