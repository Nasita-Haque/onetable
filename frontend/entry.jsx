import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Routes} from './component';
import {Store} from './component';


ReactDOM.render(
	<Provider store={Store}>
		<Routes />
	</Provider>,
	document.getElementById('root')
);
