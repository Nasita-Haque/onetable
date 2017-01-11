//COMPONENTS
import App from './app/app.js';
import Home from './home/home.js';
import Signup from './signup.js';


//REDUX
import Store from '../store/store.js'

//ROUTES
import Routes from './react-router/router.jsx';

//CONTAINERS
import SignupContainer from "../container/signup-container.js"
import OpenTableContainer from "../container/opentable-container.js"
import confirmationContainer from "../container/confirmation-container.js"

//EXPORT
//Import by writing out filepath './components'
//It will automatically redirect to index.js
export {App, Home, Routes, Store, Signup, SignupContainer, OpenTableContainer, confirmationContainer};
