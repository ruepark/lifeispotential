import App from './App.jsx';
import About from './Pages/About.jsx';
import Add from './Pages/Add.jsx';
import Feed from './Pages/Feed.jsx';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default (
	<Router history={browserHistory} >
		<Route path='/' component={App} >
			<IndexRoute component={Feed} />
			<Route path ="about"
				component={About} />
			<Route path ="add"
				component={Add} />
		</Route>
	</Router>
)