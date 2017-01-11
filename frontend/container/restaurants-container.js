import {Home} from '../component/home/home'
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    restaurants: state.restaurantReducer
  }
}

export default connect(mapStateToProps)(Home);
