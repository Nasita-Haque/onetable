import {connect} from "react-redux";
import Opentable from "../component/opentable.js"


const openTableContainer = state => ({
	date:state.date
})

export default connect(openTableContainer)(Opentable);

