import {connect} from "react-redux";
import Opentable from "../component/opentable/opentable.js"


const openTableContainer = (state, ownprops) => {
	return{
	reservation: state.openTableReducer.reservation,
	goto: ownprops.router.push,
	restaurants: state.restaurantReducer,
	}
}

export default connect(openTableContainer)(Opentable);

