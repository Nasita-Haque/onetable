//COMPONENTS
import App from './app/app.js';
import Home from './home/home.js';
import Signup from './signup.js';

//STORE
import Store from '../store/store.js'

//ACTIONS
import fetchOpentable from '../actions/confirmation-action.js';

//CONTAINERS
import SignupContainer from "../container/signup-container.js"
import OpenTableContainer from "../container/opentable-container.js"
import confirmationContainer from "../container/confirmation-container.js"

//ROUTES
import Routes from './react-router/router.jsx';

//EXPORT
//Import by writing out filepath './components'
//It will automatically redirect to index.js
export {App, Home, Routes, Store, Signup, SignupContainer, OpenTableContainer, confirmationContainer, fetchOpentable};

