import {combineReducers} from 'redux';
import confirmationReducer from './confirmation-reducer';
import openTableReducer from './opentable-reducer';
import restaurantReducer from './restaurant-reducer';
import signUpReducer from './signup-reducer';
import logInReducer from './login-reducer';

const allReducers = combineReducers({
  confirmationReducer: confirmationReducer,
  openTableReducer: openTableReducer,
  restaurantReducer: restaurantReducer,
  signUpReducer: signUpReducer,
  logInReducer: logInReducer
})

export default allReducers;
