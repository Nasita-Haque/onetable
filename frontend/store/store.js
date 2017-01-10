import {createStore} from "redux"
import reducer from "../reducer/opentable-reducer.js"
import signup from "../reducer/signup-reducer.js"




const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__() );


export default store;