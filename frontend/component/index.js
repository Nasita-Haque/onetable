//COMPONENTS
import App from './app/app.js';
import User from './user.jsx';

//REDUX
import Store from '../store/store.js'

//ROUTES
import Routes from './react-router/router.jsx';

//CONTAINERS
import OpenTableContainer from "../container/opentable-container.js"

//EXPORT 
//Import by writing out filepath './components'
//It will automatically redirect to index.js
export {App, User, Routes, Store, OpenTableContainer};