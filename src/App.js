import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Login from './components/Login';
import Logout from './components/Logout';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/admin" component={Admin} />
				<Route path="/logout" component={Logout} />
			</Switch>
		);
	}
}

export default App;
