import Home from '../component/home/home.js';
import {fetchRestaurants} from '../action/restaurants-actions';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

const mapStateToProps = (state, ownprops) => (
    {restaurants: state.restaurantReducer,
      goto:ownprops.router.push
    }
)

const matchDispatchToProps = (dispatch) => ({
  action: bindActionCreators(fetchRestaurants, dispatch)
})

// console.log(fetchRestaurants)

export default connect(mapStateToProps, matchDispatchToProps)(Home);
