//COMPONENTS
import App from './app/app.js';
import Home from './home/home.js';
import Signup from './signup.js';

//STORE
import store from '../store/store.js'

//ACTIONS
import dispatchOpentableInfo from './react-router/route-dispatch.js';

//CONTAINERS
import SignupContainer from "../container/signup-container.js"
import OpenTableContainer from "../container/opentable-container.js"
import confirmationContainer from "../container/confirmation-container.js"

//ROUTES
import Routes from './react-router/router.jsx';

//EXPORT
//Import by writing out filepath './components'
//It will automatically redirect to index.js
export {App, Home, Routes, store, Signup, SignupContainer, OpenTableContainer, confirmationContainer, dispatchOpentableInfo};

