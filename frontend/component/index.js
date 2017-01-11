//COMPONENTS
import App from './app/app.js';
import Home from './home/home';
import Signup from './signup.js';
import Login from './login.js';


//STORE
import store from '../store/store.js';

//ROUTES
import Routes from './react-router/router.jsx';

//ACTIONS
import fetchOpentable from '../action/confirmation-action.js';

//CONTAINERS
import SignupContainer from "../container/signup-container.js"
import OpenTableContainer from "../container/opentable-container.js"
import confirmationContainer from "../container/confirmation-container.js"
import restaurantContainer from "../container/restaurants-container"
import LoginContainer from "../container/login-container"

//EXPORT
//Import by writing out filepath './components'
//It will automatically redirect to index.js
export {App, Home, Routes, store, Signup, SignupContainer, OpenTableContainer, confirmationContainer, restaurantContainer, fetchOpentable, Login, LoginContainer };
