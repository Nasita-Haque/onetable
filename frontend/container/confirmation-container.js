import {connect} from "react-redux";
import Confirmation from "../component/confirmation/confirmation.jsx";


const confirmationContainer = store => (
	{date: store.date}
)

//Connecting store(state) to our component.
export default connect(confirmationContainer)(Confirmation);