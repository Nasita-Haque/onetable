import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Routes, store} from './component';
import './styling/App.css';

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('root')
);
