import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../src/routes';
import history from '../src/history';

const store = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

render(
	<Provider store={store} >
		<BrowserRouter history={history} >
			<Routes />
		</BrowserRouter>
	</Provider>,document.getElementById('app')
)