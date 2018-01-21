import App from './App.jsx';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default (
	<Router history={browserHistory} >
		<Route path='/' component={App} >
		</Route>
	</Router>
)