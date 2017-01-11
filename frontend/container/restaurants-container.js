import Home from '../component/home/home.js';
import fetchRestaurants from '../action/restaurants-actions';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => (
    {restaurants: state.restaurantReducer}
)

const matchDispatchToProps = (dispatch) => (
  bindActionCreators({fetchRestaurants: fetchRestaurants}, dispatch)
)

export default connect(mapStateToProps, matchDispatchToProps)(Home);
