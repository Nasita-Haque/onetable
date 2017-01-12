import {connect} from "react-redux";
//this is how we connect component to container by importing it into the container. 
import Confirmation from "../component/confirmation/confirmation.jsx";

//mapStateToProps is just a word, that passes state and makes it available to our component. 
const mapStateToProps = (state) => (
	{openTableProps: state.confirmationReducer,
	loginProps: state.logInReducer}
	// {reducername: state.restaurantReducer}
	//can put another reducer in here, if you want component to have access to that part of the store. 
)

//Connecting store(state) to our component.
export default connect(mapStateToProps)(Confirmation);