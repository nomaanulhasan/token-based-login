import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logout extends Component {
	constructor(props) {
		super(props)
		localStorage.removeItem("token");
	}

	render() {
		return (
			<div className="LogoutPage">
				<h1>You are being logged out!!!</h1>
				<Link to="/">Login Again</Link>
			</div>
		)
	}
}
