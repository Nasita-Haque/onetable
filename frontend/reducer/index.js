import {combineReducers} from 'redux';
import confirmationReducer from './confirmation-reducer';
import openTableReducer from './opentable-reducer';
import restaurantReducer from './restaurant-reducer';
import signUpReducer from './signup-reducer';

const allReducers = combineReducers({
  confirmationReducer,
  openTableReducer,
  restaurantReducer,
  signUpReducer
})

export default allReducers;
