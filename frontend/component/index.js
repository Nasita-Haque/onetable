//COMPONENTS
import App from './app/app.js';
import Home from './home/home';
import Signup from './signup.js';

//STORE
import store from '../store/store.js'

<<<<<<< HEAD
//REDUX
import store from '../store/store.js'

//ROUTES
import Routes from './react-router/router.jsx';
=======
//ACTIONS
import fetchOpentable from '../action/confirmation-action.js';
>>>>>>> adb664ce10ceafe4e3d39d804da5bd21cb9492a3

//CONTAINERS
import SignupContainer from "../container/signup-container.js"
import OpenTableContainer from "../container/opentable-container.js"
import confirmationContainer from "../container/confirmation-container.js"
import restaurantContainer from "../container/restaurants-container"

//ROUTES
import Routes from './react-router/router.jsx';

//EXPORT
//Import by writing out filepath './components'
//It will automatically redirect to index.js
<<<<<<< HEAD
export {App, Home, Routes, store, Signup, SignupContainer, OpenTableContainer, confirmationContainer, restaurantContainer};
=======
export {App, Home, Routes, store, Signup, SignupContainer, OpenTableContainer, confirmationContainer, fetchOpentable};

>>>>>>> adb664ce10ceafe4e3d39d804da5bd21cb9492a3
