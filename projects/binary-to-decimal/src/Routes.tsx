import React from 'react';
import Home from './pages/home';
import NotFound from './pages/not-found';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
	)
}

export default Routes;
