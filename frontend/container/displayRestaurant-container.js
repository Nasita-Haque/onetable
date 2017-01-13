import {connect} from "react-redux";
import DisplayRestaurant from "../component/opentable/displayRestaurant.js"


const displayRestaurantContainer = (state) => {
	return{
		displayState:state.displayReducer,
		openTableState:state.openTableReducer
	}
}

export default connect(displayRestaurantContainer)(DisplayRestaurant);
