import {Home} from '../component/index'
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    restaurants: state.restaurantReducer
  }
}

export default connect(mapStateToProps)(Home)
