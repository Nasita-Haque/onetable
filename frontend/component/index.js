//COMPONENTS
import App from './app/app.js';
import Home from './home/home';
import Header from './home/header';
import Footer from './home/footer';
import Signup from './signup.js';
import Login from './login.js';

//STORE
import store from '../store/store.js';

//ROUTES
import Routes from './react-router/router.jsx';

//ACTION
import dispatchOpentableInfo from './react-router/route-dispatch.js';
import userAuth from '../action/login-action';

//CONTAINERS
import SignupContainer from "../container/signup-container.js"
import OpenTableContainer from "../container/opentable-container.js"
import confirmationContainer from "../container/confirmation-container.js"
import restaurantContainer from "../container/restaurants-container"
import LoginContainer from "../container/login-container"
import appContainer from "../container/app-container"

//EXPORT
//Import by writing out filepath './components'
//It will automatically redirect to index.js
export {
 App,
 Footer,
 Header,
 Home,
 Routes,
 store,
 Signup,
 SignupContainer,
 OpenTableContainer,
 confirmationContainer,
 dispatchOpentableInfo,
 Login,
 restaurantContainer,
 LoginContainer,
 userAuth,
 appContainer
};
