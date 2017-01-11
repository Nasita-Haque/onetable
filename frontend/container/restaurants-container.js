import Home from '../component/home/home.js';
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {restaurants: state.restaurantReducer}
)

export default connect(mapStateToProps)(Home);
